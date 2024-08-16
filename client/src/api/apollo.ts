import {
  ApolloClient,
  ApolloLink,
  FetchResult,
  gql,
  HttpLink,
  InMemoryCache,
  Observable,
} from "@apollo/client";
import { removeTypenameFromVariables } from "@apollo/client/link/remove-typename";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { StorageService } from "../store/StorageService";
// import { gql } from "./__generated__";

export const REFRESH = gql(`
  query Refresh {
    refresh {
      accessToken
    }
  }
`);

const removeTypenameLink = removeTypenameFromVariables();

const httpLink = new HttpLink({ uri: import.meta.env.VITE_API_URL });

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    "Apollo-Require-Preflight": true,
    authorization: StorageService.getBearerToken(),
  },
}));

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      switch (err.extensions?.code) {
        case "UNAUTHENTICATED": {
          const token = StorageService.getAccessToken();
          const isRefreshOperation = operation.operationName === "Refresh";

          if (!token || isRefreshOperation) {
            apolloClient.clearStore();

            StorageService.removeAccessToken();
            // window.location.href = "/login";
            return;
          }

          const observable = new Observable<FetchResult>((observer) => {
            (async () => {
              try {
                await refreshToken();

                forward(operation).subscribe(observer);
              } catch (err) {
                observer.error(err);
              }
            })();
          });

          return observable;
        }
        default:
          console.log(err);
          break;
      }
    }
  }
});

const apolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, removeTypenameLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

const refreshToken = async () => {
  const { data } = await apolloClient.query({
    query: REFRESH,
    fetchPolicy: "no-cache",
  });

  if (data?.refresh.accessToken) {
    StorageService.setAccessToken(data.refresh.accessToken);
  }
};

export default apolloClient;

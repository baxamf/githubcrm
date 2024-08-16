// import { GraphQLScalarType } from "graphql";

// function validate(uuid: unknown): string | never {
//     if (typeof uuid !== "string" || !regex.test(uuid)) {
//       throw new Error("invalid uuid");
//     }
//     return uuid;
//   }

//   export const CustomUuidScalar = new GraphQLScalarType({
//     name: 'UUID',
//     description: 'A simple UUID parser',
//     serialize: (value) => validate(value),
//     parseValue: (value) => validate(value),
//     parseLiteral: (ast) => validate(ast.value)
//   })

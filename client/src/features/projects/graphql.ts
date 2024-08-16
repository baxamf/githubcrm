import { gql } from "@apollo/client";

export const ADD_PROJECT = gql(`
    mutation AddProject($projectInput: ProjectInput!) {
        addProject(projectInput: $projectInput) {
            id
        }
    }    
`);

export const GET_ALL_PROJECTS = gql(`
    query GetAllUserProjects {
        getAllUserProjects {
            id
            owner
            name
            url
            stars
            forks
            issues
            createdAt
        }
    }    
`);

export const UPDATE_PROJECT = gql(`
    mutation UpdateProject($projectInput: ProjectInput!, $id: Int!) {
        updateProject(projectInput: $projectInput, id: $id) {
            id
        }
    }
`);

export const REMOVE_PROJECT = gql(`
    mutation RemoveProject($projectId: Int!) {
        removeProject(projectId: $projectId) {
            id
        }
    }    
`);

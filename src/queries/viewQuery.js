import { gql } from "@apollo/client";

export const GET_SLUG=gql`
    {
        posts{
            slug
        }
    }
`
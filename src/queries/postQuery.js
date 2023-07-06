import { gql } from "@apollo/client";

export const GET_POSTS=gql`
query GetPosts($first: Int,$after: String) {
    postsConnection(first: $first, after:$after){
        edges {
            node {
                id
                title
                datePublished
                slug
                content{
                    html
                }
                author{
                    name,
                    avatar{
                        url
                    }
                }
                coverPhoto{
                    url
                }
            }
            cursor
        }
    } 
}`
import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                    node {
                        slug
                        title
                        description
                        content {
                            raw
                            html
                        }
                        createdAt
                        seo
                    }
                }
            }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges
}

export const getPostDetails = async ( slug ) => {
    const query = gql`
        query GetPostDetails($slug : String!) {
            post(where: {slug: $slug}) {
                slug
                title
                description
                content {
                    raw
                    html
                }
                createdAt
                seo
            }
        }
    `

    const result = await request(graphqlAPI, query, { slug });

    return result.post;

}
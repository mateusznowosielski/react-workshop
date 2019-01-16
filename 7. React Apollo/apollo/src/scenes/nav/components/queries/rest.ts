import gql from 'graphql-tag';

export const SEARCH_PCP = gql`
    query searchPCP($key: String, $limit: Int) {
        searchPCP(key: $key, limit: $limit)
        @rest(type: "SearchPCP", path: "/search?pcp=true&key=:key&limit=:limit") {
            __typename
            data
            meta
        }
    }
`;
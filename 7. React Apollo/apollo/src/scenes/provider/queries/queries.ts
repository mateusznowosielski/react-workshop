import gql from 'graphql-tag';

export const GET_PERSON_PROVIDER = gql`
    query GetPersonProvider($id: ID!) {
        personProvider(id: $id) {
            jobtitle
            personId
            npi
            person {
                firstname
                middlename
                lastname
                lastMeetingDate
                dbId
                specialties(last: 1) {
                    edges {
                        node {
                            specialty {
                                name
                            }
                        }
                    }
                }
                contact {
                    edges {
                        node {
                            contact
                            type
                            category
                        }
                    }
                }
            }
        }
    }
`;
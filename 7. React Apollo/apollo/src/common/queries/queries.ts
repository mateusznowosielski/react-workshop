import gql from 'graphql-tag';

export const GET_PERSON = gql`
  query GetPerson($id: ID!) {
    person(id: $id) {
          id
          dbId
          firstname
          middlename
          lastname
          type
          lastMeetingDate
    }
  }
`;
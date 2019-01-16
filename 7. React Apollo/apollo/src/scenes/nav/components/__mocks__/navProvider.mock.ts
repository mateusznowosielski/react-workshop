import { GET_PERSON } from 'common/queries/queries';
import { QueryMock } from 'common/types/mock';

export const MOCK_SUCCESS: Array<QueryMock> = [
  {
    request: {
      query: GET_PERSON,
      variables: { id: '1000' },
    },
    result: {
      data: {
        person: {
          __typename: 'Person',
          id: 'UGVyc29uOjEwMDA=',
          dbId: '1000',
          firstname: 'Admin',
          lastname: 'User',
          type: '4',
        },
      },
    },
  }
];

export const MOCK_NO_DATA: Array<QueryMock> = [
  {
    request: {
      query: GET_PERSON,
      variables: { id: '1' },
    },
    result: {
      data: undefined
    },
  }
];

export const MOCK_EMPTY: Array<QueryMock> = [
  {
    request: {
      query: GET_PERSON,
      variables: { id: '1' },
    },
    result: {
      data: {
        person: null
      },
    },
  }
];

export const MOCK_ERROR: Array<QueryMock> = [
  {
    request: {
      query: GET_PERSON,
      variables: { id: '1' },
    },
    result: {
      errors: [
        {
          message: "This is a custom error for testing purpose",
          locations: [
            {
              line: 1,
              column: 1
            }
          ]
        }
      ]
    }
  }
];



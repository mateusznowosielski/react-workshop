import { QueryMock } from 'common/types/mock';
import { SEARCH_PCP } from '../queries/rest';

export const MOCK_SUCCESS: Array<QueryMock> = [
  {
    request: {
      query: SEARCH_PCP,
      variables: {
        key: 'Admin',
        limit: 1,
      },
    },
    result: {
      data: {
        searchPCP: {
          __typename: "SearchPCP",
          data: [
            {
              id: "1000",
              firstname: "Admin",
              middlename: "",
              lastname: "User",
              contact: null,
              photo_url: null,
              gender: "M",
              is_user: 1,
              dob: "04/01/1972",
              email: "ops@symphonyrm.com",
            },
          ],
          meta: {},
        },
      },
    },
  },
];

export const MOCK_ERROR: Array<QueryMock> = [
  {
    request: {
      query: SEARCH_PCP,
      variables: {
        key: 'None',
        limit: 1,
      },
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
    },
  },
];

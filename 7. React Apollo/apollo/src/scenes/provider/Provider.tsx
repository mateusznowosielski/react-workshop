import * as React from 'react';
import { QueryHookResult, useQuery } from '@dc0de/react-apollo-hooks';
import { GET_PERSON_PROVIDER } from "./queries/queries";
import { GetPersonProvider, GetPersonProvider_personProvider_person as Person, GetPersonProviderVariables } from '__generated__/types';
import useRouterHook from 'use-react-router';

const Provider: React.FunctionComponent<any> = ()  => {

  const { match }: any = useRouterHook();

  const { data, error, loading }: QueryHookResult<GetPersonProvider, GetPersonProviderVariables> = useQuery(GET_PERSON_PROVIDER, {
    suspend: false,
    variables: { id: match.params.id },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !data || !data.personProvider || !data.personProvider.person) {
    return (null);
  }

  const { firstname, middlename, lastname }: Person = data.personProvider.person;

  return (
    <div>
        <h1>Provider</h1>
        <p>{firstname} {middlename} {lastname}</p>
    </div>
  )
};

export default Provider;
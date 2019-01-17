import * as React from 'react';
import { useState } from 'react';
import {Button, Input} from 'antd';
import {QueryHookResult, useQuery} from "@dc0de/react-apollo-hooks";
import {SEARCH_PCP} from "scenes/nav/components/queries/rest";
import useRouterHook from 'use-react-router';

const NavSearch: React.FunctionComponent<any> = ()  => {

    const { history }: any = useRouterHook();
    const [ value, setValue ] = useState('');

    const {data, error, loading}: QueryHookResult<any, any> = useQuery(SEARCH_PCP, {
        suspend: false,
        skip: !value,
        variables: {
            key: value,
            limit: 1,
        }
    });

    const provider: any = data && data.searchPCP && data.searchPCP.data ? data.searchPCP.data[0] : null;

    return (
        <div>
            <Input
              placeholder="Navigate to..."
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
            />
            {
                loading && <p>Loading...</p>
            }
            {
                error && <p>{error.message}</p>
            }
            {
                provider && <Button onClick={() => { history.push(`/provider/${provider.id}`) }}>Go</Button>
            }
        </div>
    );
};

export default NavSearch;
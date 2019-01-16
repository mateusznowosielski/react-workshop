import * as React from 'react';
// import { useApolloClient } from 'react-apollo-hooks';
// import { DELETE_BROADCAST } from '../admin/broadcast/queries/queries';

const Dashboard: React.FunctionComponent<any> = () => {
  //
  // const client = useApolloClient();
  //
  // console.log('yay');
  //
  // let message: string = '';
  //
  // // @ts-ignore
  // client.mutate({
  //   mutation: DELETE_BROADCAST,
  //   variables: {
  //     id: 21
  //   },
  // }).then((data: any) => {
  //   console.log('mutate', data);
  //   if (data.error) {
  //     message = 'Error';
  //   }
  // });

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
};

export default Dashboard;
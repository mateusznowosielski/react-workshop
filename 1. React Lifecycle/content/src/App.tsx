import * as React from 'react';
import ClassComponent from "components/ClassComponent";
import FunctionalComponent from "components/FunctionalComponent";

import 'App.less';

const App: React.FunctionComponent<any> = () => {
  return (
      <>
          <ClassComponent data={{ info: 'We\'ll display some data.' }} />
          <hr />
          <FunctionalComponent message={{ data: 'We\'ll display different details.' }} />
      </>
  );
};

export default App;

import * as React from 'react';
import FunctionalComponent from "components/FunctionalComponent";
import CounterUpdater from "components/CounterUpdater";

import 'App.less';


const App: React.FunctionComponent<any> = () => {
    return (
        <>
            <CounterUpdater render={(clickCounter: any, counterHandler: any) => (
                <FunctionalComponent
                    message={{ data: 'We\'ll display different details.' }}
                    clickCounter={clickCounter}
                    counterHandler={counterHandler}
                />
            )} />
        </>
    );
};

export default App;

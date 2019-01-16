import * as React from 'react';
import Reader from "components/Reader";
import Trigger from "components/Trigger";

export const ClickCountContext = React.createContext({
    clickCounter: 0,
    handleClick: () => {},
});

class ProviderComponent extends React.Component<any, any> {

    handleClick = () => {
        this.setState((state: any) => ({
            clickCounter: state.clickCounter + 1,
        }));
    };

    state = {
        clickCounter: 0,
        handleClick: this.handleClick,
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <ClickCountContext.Provider value={this.state}>
                <Trigger />
                {
                    [...(Array(15) as any).keys()].map((item: number) => (
                        <div key={item}>
                            <p>{item}</p>
                            <hr />
                        </div>
                    ))
                }
                <Reader />
            </ClickCountContext.Provider>
        );
    }
};

export default ProviderComponent;

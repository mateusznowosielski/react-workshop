import * as React from 'react';

class CounterUpdater extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = { clickCounter: 0 };
        console.log('CounterUpdater constructor', props, this.state);
    }

    counterHandler = () => {
        console.log('CounterUpdater counterHandler');
        this.setState({
            clickCounter: this.state.clickCounter + 1,
        })
    };

    render() {
        console.log('CounterUpdater render');
        // @ts-ignore
        return this.props.render(this.state.clickCounter, this.counterHandler)
    }
};

export default CounterUpdater;

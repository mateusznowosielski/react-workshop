import * as React from 'react';

class ClassComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = { clickCounter: 0 };
        this.handleClick = this.handleClick.bind(this);
        console.log('ClassComponent constructor', props, this.state);
    }

    static getDerivedStateFromProps(props: any, state: any) {
        console.log('ClassComponent getDerivedStateFromProps', props, state);
        return null;
    }

    componentDidMount() {
        console.log('ClassComponent componentDidMount');
    }

    // @ts-ignore
    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log('ClassComponent shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
        console.log('ClassComponent getSnapshotBeforeUpdate', prevProps, prevState);
        return null;
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        console.log('ClassComponent componentDidUpdate', prevProps, prevState, snapshot);
    }

    handleClick(event: any) {
        console.log('ClassComponent handleClick', event);
        this.setState(({clickCounter}: any) => {
            return {
                clickCounter: clickCounter + 1,
            }
        }, () => {
            console.log('ClassComponent handleClick callback');
        });
    };

    render() {
        console.log('ClassComponent render');
        return (
            <>
                <h1>Class Component</h1>
                <h2>Message: {this.props.data.info}</h2>
                <h3>Click count: {this.state.clickCounter}</h3>
                <button onClick={this.handleClick}>Click me to update state!</button>
            </>
        );
    }
};

export default ClassComponent;

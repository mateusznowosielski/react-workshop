import * as React from 'react';

export const withValidation = (WrappedComponent: any) => {

    return class extends React.Component<any & any> {
        state = {
            value: '',
            validationMessage: '',
        };

        constructor(props: any) {
            super(props);
        }

        handleChange = ({target: {value}}: any) => {
            this.setState({
                value,
                validationMessage: value.length > 5 ? 'Too long' : '',
            });
        };

        render() {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return <WrappedComponent
                {...this.props}
                handleChange={this.handleChange}
                value={this.state.value}
                validationMessage={this.state.validationMessage}
            />;
        }
    };
};
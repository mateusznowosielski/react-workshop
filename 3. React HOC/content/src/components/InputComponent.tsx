import * as React from 'react';
import { withValidation } from 'components/Validator';

const InputComponent: React.FunctionComponent<any> = (props: any) => (
    <>
        <label>
            {props.label}:
            <input type="text" value={props.value} onChange={props.handleChange} />
            <span>{props.validationMessage}</span>
        </label>
    </>
);

export default withValidation(InputComponent);

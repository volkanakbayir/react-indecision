import React from 'react'; 

export const Option = (props) => {
    return (
        <li>
            <label>{props.text}</label>
            <button type="button" onClick=
            {
                () => {
                    props.handleRemoveOption(props.text);
                }    
            }>Remove</button>
        </li>
    );
}

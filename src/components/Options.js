import React from 'react';
import { Option } from './Option'

export const Options = (props) => {
    return (
        <div>
            <div>
                <button onClick={props.removeAllHandler}>Remove All</button>
            </div>
            <ul>
                {
                    props.items.map((item) => {
                        return <Option handleRemoveOption={props.handleRemoveOption} key={item} text={item} />
                    })
                }
            </ul>
        </div>
    );
}
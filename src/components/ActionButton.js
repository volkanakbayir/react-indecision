import React from 'react'; 

export const ActionButton = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePickRandom}>What should i do?</button>
        </div>
    );
}

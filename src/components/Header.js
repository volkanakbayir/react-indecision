import React from 'react'; 



export const Header = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            {props.subtitle && <h3>{props.subtitle}</h3>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision!',
    subtitle: 'Computer Is Life!'
}

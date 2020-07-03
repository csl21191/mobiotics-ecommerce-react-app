import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, handleClick}) => {
    return(
        <button type="button" className="custom-button" onClick={handleClick}>
            {children.toUpperCase()}
        </button>
    );
}

export default CustomButton;
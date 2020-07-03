import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children}) => {
    return(
        <button className="custom-button">
            {children.toUpperCase()}
        </button>
    );
}

export default CustomButton;
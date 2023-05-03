import React from 'react';

const FullName = () => {
    const firstName = 'Oussama';
    const lastName = 'Sghairi';
    // name styling
    const headingStyle = {
        color: 'white',
        fontSize: '2rem'
    };
    return (
        <h1 style={headingStyle}>
            {
            `${firstName} ${lastName}`
        }</h1>
    );
};

export default FullName;
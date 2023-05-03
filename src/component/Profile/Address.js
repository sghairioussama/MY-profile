import React from 'react';
import './AdressStyle.css';

function Address() {
    const street = '';
    const city = 'cite du lycee ';
    const state = 'siliana';
    const zipCode = '6100';
    
    return (
        <div className='Adrss'>
            <p>{street}</p>
            <p>{`${city}, ${state} ${zipCode}`}</p>
        </div>
    );
}

export default Address;
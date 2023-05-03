import React from 'react';
import './App.css';
import Address from './component/Profile/Address';
import FullName from './component/Profile/FullName';
import ProfilePhoto from './component/Profile/ProfilePhoto';

function App() {
    return (
        <div className="App">
            <ProfilePhoto/>  
            <FullName/>
            <Address/>
        </div>
    );
}

export default App;
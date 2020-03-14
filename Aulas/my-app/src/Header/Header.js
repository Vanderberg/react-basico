import React from 'react';
import './Header.css';


const Header = (props) => (
    <header className="App-header">
       <div>{props.children}</div>
    </header>
);

export default Header;
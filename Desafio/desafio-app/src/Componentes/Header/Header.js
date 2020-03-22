import React from 'react';
import './Header.css';


const Header = (props) => (
    <header className="App-header">
       {props.children}
    </header>
);

export default Header;
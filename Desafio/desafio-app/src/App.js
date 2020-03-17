import React from 'react';
import './App.css';
import Logo from './Logo/Logo';
import Text from './Text/Text';
import Links from './Link/Link';
import Header from './Header/Header'


function App() {
  return (
    <div className="App">
      <Header>          
          <Logo repeat={6}/>
          <Text/>
          <Links/>  
      </Header>  
    </div>
  );
}

export default App;

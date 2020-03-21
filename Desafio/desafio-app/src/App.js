import React, {useState} from 'react';
import './App.css';
import Logo from './Logo/Logo';
import Buttons from './Logo/Buttons';
import Text from './Text/Text';
import Links from './Link/Link';
import Header from './Header/Header'


function App() {
  const [repeat, setRepeat] = useState(1);
  return (
    <div className="App">
      <Header>          
          <Logo repeat={repeat}/>
          <Buttons repeat={repeat} setRepeat={setRepeat}/>
          <Text/>
          <Links/>  
      </Header>  
    </div>
  );
}

export default App;

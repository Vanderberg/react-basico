import React, {useState} from 'react';
import './App.css';
import Logo from './Componentes/Logo/Logo';
import Buttons from './Componentes/Buttons/Buttons';
import Text from './Componentes/Text/Text';
import Links from './Componentes/Link/Link';
import Header from './Componentes/Header/Header'


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

import React, {useEffect} from 'react';
import { Toast, ToastProvider, useToast } from '@bayon/commons';
import logo from './logo.svg';
import './logo.css';

const Logo = ({repeat}) => { 

    

    useEffect(()=>{
        console.log('Logo repeat update changed - value: ' + repeat);
    },[repeat])
    
    let elements =[];
    for (let index = 0; index < repeat; index++) {
        elements.push(<img key={index} src={logo} className="App-logo" alt="logo" />)        
    }

    return(
       <> 
        <div className="App-logo-container">
            {elements}
        </div>

        <Toast
            open={repeat === 6}
            type="info"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            message="O valor máximo permitido é 6!"
        />

        </>
    ) 
       
}; 
export default Logo;




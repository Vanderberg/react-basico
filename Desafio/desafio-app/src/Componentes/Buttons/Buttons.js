import React, {useState} from 'react';
import { Button } from '@bayon/commons';
import { Typography } from '@bayon/commons';

//Style
import './Buttons.css';

const Buttons = ({repeat, setRepeat}) => { 
    const [countAdd, setcountAdd] = useState(0);
    const [countRem, setcountRem] = useState(0);

    const handleClickPlus = () =>{
        setRepeat((repeat) => repeat + 1);
        setcountAdd((count) => count + 1)
    }
    
    const handleClickMinus = () =>{
        setRepeat((repeat) => repeat - 1);
        setcountRem((count) => count + 1)
    }

    return(
    <>
        <div className="App-logo-buttons">
            <Button ria-label="Button" size="medium" variant="primary" disabled={repeat === 6} onClick={handleClickPlus}>Logo + ({countAdd})</Button>
           <Button ria-label="Button" size="medium" variant="default" disabled={repeat === 1} onClick={handleClickMinus}>Logo - ({countRem})</Button>             
        </div>
        <div>
        <Typography
            lineHeight={2}
            size={16}
        >
            <b>Logo +</b> button was clicked {countAdd} times
        </Typography>
        <Typography
            lineHeight={2}
            size={16}
        >
            <b>Logo -</b> button was clicked {countRem} times
        </Typography>
        </div>
    </>    
    )    
}; 
export default Buttons;
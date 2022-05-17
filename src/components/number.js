import * as React from 'react';
import {Box, TextField, Typography, Button, Modal} from '@mui/material';
import { HexColorPicker } from "react-colorful";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import IconButton from '@mui/material/IconButton';

function Number() {
  
    let numbers = []
    function init(){
        for (let i = 0; i < 10; i++){
            numbers.push({locked: false, value: "0"})
        }
        return numbers
    }
    
    function randomize() {
        for (let i = 0; i < 10; i++){
            if(!numbers[i]["locked"]){
                let rand = Math.floor(Math.random() * 10)
                numbers[i]["value"] = rand.toString()
            }
        }
    }

    const [phoneNumber, setPhoneNumber] = React.useState(init());
    console.log(phoneNumber)


    return (
        <div className="App" style={{display: 'flex',  justifyContent:'center'}}>

        </div>
        
    );
}

export default Number;

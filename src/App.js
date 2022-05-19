import * as React from 'react';
import {Box, TextField, Typography, Button, Modal, Grid, Switch, Paper, ToggleButton, CircularProgress, Snackbar, Alert} from '@mui/material';

import { HexColorPicker } from "react-colorful";

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import CasinoIcon from '@mui/icons-material/Casino';
import CheckIcon from '@mui/icons-material/Check';
import SendIcon from '@mui/icons-material/Send';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SmartToyIcon from '@mui/icons-material/SmartToy'
import FaceIcon from '@mui/icons-material/Face';

import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';

function App() {

  const ids = ['fname', 'lname', 'email', 'address', 'consideration']
  
  const [pickerColor, setColor] = React.useState("#ffffff")
  const [dob, setDob] = React.useState("00/00/00")
  const [dobText, setDobText] = React.useState("")
  const [phoneText, setPhoneText] = React.useState("")
  const [openPicker, setOpenPicker] = React.useState(false)
  const [openNumber, setOpenNumber] = React.useState(false)
  const [robotCheck, setRobotCheck] = React.useState(false);
  const [loadRobot, setLoadRobot] = React.useState(false)
  const [showTuringFail, setTuringFail] = React.useState(false)
  const [missingNotification, setMissingNotification] = React.useState(false)
  const [successScreen, setSuccessScreen] = React.useState(false)
  const [firstTime, setFirstTime] = React.useState(true)

  function init(){
    let numbers = []
    for (let i = 0; i < 10; i++){
        numbers.push({locked: false, value: "0"})
    }
    return numbers
  }
  const [phoneNumber, setPhoneNumber] = React.useState(init());

  function randomize() {
    let tempNum = JSON.parse(JSON.stringify(phoneNumber));
      for (let i = 0; i < 10; i++){
          if(!tempNum[i]["locked"]){
              let rand = Math.floor(Math.random() * 10)
              tempNum[i]["value"] = rand.toString()
          }
      }
      setPhoneNumber(tempNum)
  }

  function counterMeasure() {
    let rand = Math.floor(Math.random() * (ids.length))
    document.getElementById(ids[rand]).value = ""
  }

  function submitCheck(){
    for (let i = 0; i < ids.length; i++) {
      if (document.getElementById(ids[i]).value == "") {
        handleOpenError()
        return
      }
    }
    handleOpenSuccess()
  }
  
  function turingTest(){
    console.log(firstTime)
    let probabilitySuccess = .33
    let rand = Math.random()
    if((rand > probabilitySuccess) || firstTime){
      setFirstTime(false)
      counterMeasure()
      handleOpenTuring()
      return false
    }
    return true
  }

  function loadingRobotCheck() {
    setLoadRobot(true)
    setRobotCheck(false)
    setTimeout(function(){
      setLoadRobot(false)
      if(!turingTest()){
        setRobotCheck(false)
      }
      else{
        setRobotCheck(true)
      }
    },1500)
  }

  const modal_rgb_style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const phone_style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 670,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const success_screen = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    bgcolor: '#3e3f40',
    boxShadow: 24,
    p: 4,
  }

  const handleOpen = () => setOpenPicker(true)
  const handleClose = () => setOpenPicker(false)

  const handleOpenNum = () => setOpenNumber(true)
  const handleCloseNum = () => setOpenNumber(false)

  const handleOpenTuring = () => setTuringFail(true)
  const handleCloseTuring = () => setTuringFail(false)

  const handleOpenError = () => setMissingNotification(true)
  const handleCloseError = () => setMissingNotification(false)
  const handleOpenSuccess = () => setSuccessScreen(true)

  return (
    <div className="App" style={{display: 'flex',  justifyContent:'center', background:'#3e3f40'}}>
    <div>
      <Typography variant="h4" component="h4" style={{display: 'flex',  justifyContent:'center', color:'#ffffff'}}>
        Resume Submission Form
      </Typography>
        <Box
          component="form"
          justify="center"
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            p: 2,
            width: "500px", margin: "5px",
          }}>
    
          <Typography variant="button" display="block" gutterBottom> <u>Name</u> </Typography>
          <TextField id="fname" label="First Name" variant="outlined" margin="normal" required/> 
          <TextField id="lname" label="Last Name" variant="outlined"  margin="normal" required sx={{ml: 5}}/>
          

          <Typography variant="button" display="block"> <u>Date of Birth</u> </Typography>
 
          <div>
            <TextField id="dob"  variant="filled" margin="normal" label="Date of Birth" value={dobText} required InputProps={{readOnly: true}}
            sx={{width: 450}}
            />
            <IconButton sx={{mt:3}} onClick={handleOpen} >
            <EditTwoToneIcon/>  
            </IconButton> 
          </div>

          <Typography variant="button" display="block" gutterBottom> <u>Email</u> </Typography>
          <TextField id="email" label="Email" variant="outlined" margin="normal" required fullWidth/> 

          <Typography variant="button" display="block" gutterBottom> <u>Phone Number</u> </Typography>
          <TextField id="phonenumber" label="Phone Number" variant="filled" margin="normal" value={phoneText} required InputProps={{readOnly: true}} 
          sx={{width: 450}}
          /> 
          <IconButton sx={{mt:3}} onClick={handleOpenNum} >
          <EditTwoToneIcon/>  
          </IconButton> 

          <Typography variant="button" display="block" gutterBottom> <u>Address</u> </Typography>
          <TextField id="address" label="Address" variant="outlined" margin="normal" required fullWidth/>

          <Typography variant="button" display="block" gutterBottom> <u>Why should we consider you for this position?</u> </Typography>
          <TextField id="consideration"  variant="outlined" margin="normal" required fullWidth multiline/>
          <br/> <br/>
          <div  style={{display: 'flex',  justifyContent:'left'}} > 
 
          <ToggleButton
            value="check"
            selected={robotCheck}
            onChange={() => {
              loadingRobotCheck()
            }}>
            {!robotCheck && <SmartToyIcon fontSize="small" color="action" />}  
            {robotCheck && <FaceIcon fontSize="small" color="primary" />}
          </ToggleButton>
          &ensp;
          <Typography sx={{mt:1}} variant="overline" display="block" gutterBottom> I am not not not not not a robot </Typography>
          &ensp;
          {loadRobot && <CircularProgress/>}
          {robotCheck && <CheckIcon  fontSize="large" color="success"/>}
          </div>

          <br/><br/>
          <Button disabled={!robotCheck} onClick={submitCheck} variant="contained" startIcon={<SendIcon />}>Submit</Button>
      </Box>

      
    </div>

    <Modal open={openPicker} onClose={handleClose}>
      <Box sx={modal_rgb_style}>
        <HexColorPicker style={{height: '400px', width: '400px'}} color={pickerColor}  onChange={(c) => {
          setColor(c) 
          let date = c.substring(1)
          let dob = date.slice(0,2) + "/" + date.slice(2,4) + "/" + date.slice(4,6)
          setDob(dob)
          }} />
        <Typography style={{display: 'flex',  justifyContent:'center'}} variant="overline" display="block" gutterBottom> 
          Date of Birth (MM/DD/YY)
        </Typography>
        <Typography style={{display: 'flex',  justifyContent:'center'}} variant="overline" display="block" gutterBottom> 
          <b>{dob}</b>
        </Typography>
        <div style={{display: 'flex',  justifyContent:'center'}}>
        <Button variant="contained" 
          onClick={() => {
            handleClose()
            setDobText(dob)
          }}
        >OK</Button>
        </div>
      </Box>
    </Modal>

    <Modal open={openNumber} onClose={handleCloseNum}>
      <Box sx={phone_style}>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={0.5}>
          {phoneNumber.map((value) => (
              <Paper
                sx={{
                  height: 70,
                  width: 50,
                  padding: 0.5,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <Typography style={{display: 'flex',  justifyContent:'center'}} variant="h6" display="block" gutterBottom> 
                  <b>{value["value"]}</b>
                </Typography>

                <Switch defaultChecked={value["locked"]} onClick={() => {
                  value["locked"] = !value["locked"]
                }}/>
              </Paper>
           
          ))}
            <IconButton onClick={() => {
              randomize()
              }}>
              <CasinoIcon fontSize="large" color="primary"/>  
            </IconButton> 
            <IconButton onClick={() => {
              handleCloseNum()
              let num = "";
              for (let n of phoneNumber){
                num=num+n["value"]
              }
              let formattedNum = "(" + num.slice(0,3) + ") " + num.slice(3,6) + "-" + num.slice(6,10)
              setPhoneText(formattedNum)
              }}>
              <CheckIcon fontSize="large" color="success"/>
            </IconButton>
        </Grid>
      </Grid>
      </Grid>
      </Box>
    </Modal>

    <Modal open={showTuringFail} onClose={handleCloseTuring}>
    <Box sx={phone_style} >
      <Typography variant="h6" component="h4" style={{display: 'flex',  justifyContent:'center'}}>
         <WarningAmberIcon sx={{ color: red[500] }} /> &ensp;  Our Turing test has determined that you are likely a robot. &ensp; <WarningAmberIcon sx={{ color: red[500] }} />
      </Typography>
      <Typography variant="p" component="h4" style={{display: 'flex',  justifyContent:'center'}}>
         We have erased one of your fields as a counter measure, please re-enter it and try again!
      </Typography>
      </Box>
    </Modal >

    <Modal open={successScreen}>
    <Box sx={success_screen}>
      <Typography variant="h3" component="h4" style={{display: 'flex',  justifyContent:'center', color: "#FFFFFF"}} >
         Thank you for your personal information!
      </Typography>
      <Typography variant="h5" component="h4" style={{display: 'flex',  justifyContent:'center', color: "#FFFFFF"}}>
      We will get back to you if we feel like it
      </Typography>
      </Box>
    </Modal >

    <Snackbar open={missingNotification} autoHideDuration={6000} onClose={handleCloseError} >
      <Alert severity="error" onClose={handleCloseError} >You're missing something </Alert>
    </Snackbar>
    </div>
    
  );
}

export default App;

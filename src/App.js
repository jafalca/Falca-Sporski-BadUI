import * as React from 'react';
import {Box, TextField, Typography, Button, Modal, Grid, Switch, Paper} from '@mui/material';
import { styled } from '@mui/material/styles';
import { HexColorPicker } from "react-colorful";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import RefreshIcon from '@mui/icons-material/Refresh';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import Number from "./components/number"

function App() {
  const [value, setValue] = React.useState(null);
  const [pickerColor, setColor] = React.useState("#ffffff")
  const [dob, setDob] = React.useState("00/00/00")
  const [dobText, setDobText] = React.useState("")
  const [openPicker, setOpenPicker] = React.useState(false)
  const [openNumber, setOpenNumber] = React.useState(false)

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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
    width: 650,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const handleOpen = () => setOpenPicker(true)
  const handleClose = () => setOpenPicker(false)

  const handleOpenNum = () => setOpenNumber(true)
  const handleCloseNum = () => setOpenNumber(false)

  let check = true

  let ids = ['fname', 'lname','dob', 'email', 'phonenumber', 'address']

  function finishForm() {
    check = true

    for (let i = 0; i < ids.length; i++) {
      if (document.getElementById(ids[i]).value == "") {
        check = false
      }
    }
    if (!!!!!!!!!!!check){
      alert("You forgot something.....");
      return
    }
    let rand = Math.floor(Math.random() * (ids.length + 1))
    if (rand == ids.length) {
      alert("Thank you for applying, you'll hear from us soon.... maybe....");
      window.location.reload(false);
      return
    } else {
      document.getElementById(ids[rand]).value = ""
      alert("Whoops we erased something on you, promise it won't happen again!");
    }
  }

  return (
    <div className="App" style={{display: 'flex',  justifyContent:'center'}}>
    <form>
      <Typography variant="h4" component="h4" style={{display: 'flex',  justifyContent:'center'}}>
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
          
          <br/> <br/>

          <Typography variant="button" display="block"> <u>Date of Birth</u> </Typography>
          <br/>
          <div>
            <TextField id="dob"  variant="filled" margin="normal" value={dobText} required InputProps={{readOnly: true}}
            sx={{width: 450}}
            />
            <IconButton sx={{mt:3}} onClick={handleOpen} >
            <EditTwoToneIcon/>  
            </IconButton> 
          </div>
          <br/> <br/>

          <Typography variant="button" display="block" gutterBottom> <u>Email</u> </Typography>
          <TextField id="email" label="Email" variant="outlined" margin="normal" required fullWidth/> 

          <Typography variant="button" display="block" gutterBottom> <u>Phone Number</u> </Typography>
          <TextField id="phonenumber" label="Phone Number" variant="filled" margin="normal" type="number" required InputProps={{readOnly: true}} 
          sx={{width: 450}}
          /> 
          <IconButton sx={{mt:3}} onClick={handleOpenNum} >
          <EditTwoToneIcon/>  
          </IconButton> 

          <Typography variant="button" display="block" gutterBottom> <u>Address</u> </Typography>
          <TextField id="address" label="Address" variant="outlined" margin="normal" required fullWidth/> 
          <Button onClick={finishForm} variant="contained">Submit</Button>
          
      </Box>

      
    </form>

    <Modal open={openPicker} onClose={handleClose}>
      <Box sx={modal_rgb_style}>
        <HexColorPicker style={{height: '400px', width: '400px'}} color={pickerColor}  onChange={(c) => {
          setColor(c) 
          let date = c.substring(1)
          let dob = date.slice(0,2) + "/" + date.slice(2,4) + "/" + date.slice(4,6)
          setDob(dob)
          }} />
        <Typography style={{display: 'flex',  justifyContent:'center'}} variant="overline" display="block" gutterBottom> 
          Date of Birth 
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
          {[0,1,2,3,4,5,6,7,8,9].map((value) => (
            <Grid key={value} item>
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
                  <b>0</b>
                </Typography>
                <Switch/>
              </Paper>
            </Grid>
          ))}
            <IconButton >
              <RefreshIcon fontSize="large" color="primary"/>  
            </IconButton> 
            <IconButton onClick={handleCloseNum}>
              <CheckIcon fontSize="large" color="success"/>
            </IconButton>
        </Grid>
      </Grid>
      </Grid>
      </Box>
    </Modal>

    <Number/>
    </div>
    
  );
}

export default App;

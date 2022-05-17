import * as React from 'react';
import {Box, TextField, Typography, Button, Modal} from '@mui/material';
import { HexColorPicker } from "react-colorful";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import IconButton from '@mui/material/IconButton';

function App() {
  const [value, setValue] = React.useState(null);
  const [pickerColor, setColor] = React.useState("#ffffff")
  const [dob, setDob] = React.useState("00/00/00")
  const [dobText, setDobText] = React.useState("")
  const [openPicker, setOpenPicker] = React.useState(false)

  const modal_style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleOpen = () => setOpenPicker(true)
  const handleClose = () => setOpenPicker(false)

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
            borderRadius: 2,
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
          <TextField id="phonenumber" label="Phone Number" variant="outlined" margin="normal" type="number" required fullWidth/> 

          <Typography variant="button" display="block" gutterBottom> <u>Address</u> </Typography>
          <TextField id="address" label="Address" variant="outlined" margin="normal" required fullWidth/> 
          <Button type="submit" variant="contained">Submit</Button>
          
      </Box>

      
    </form>

    <Modal open={openPicker} onClose={handleClose}>
      <Box sx={modal_style}>
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
    </div>
    
  );
}

export default App;

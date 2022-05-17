import * as React from 'react';
import {Box, TextField, Typography, Divider} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { Calendar } from 'mui-date-picker';
// import './App.css';

function App() {
  const [value, setValue] = React.useState(null);
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
            width: "500px", margin: "5px"
          }}>
    
          <Typography variant="button" display="block" gutterBottom> <u>Name</u> </Typography>
          <TextField id="fname" label="First Name" variant="outlined" margin="normal" required/> 
          <TextField id="lname" label="Last Name" variant="outlined"  margin="normal" required sx={{ml: 5}}/>
          
          <br/> <br/>

          <Typography variant="button" display="block"> <u>Date of Birth</u> </Typography>
          <br/>
          <LocalizationProvider dateAdapter={AdapterDateFns}> 
            <DatePicker
              label="Date of Birth"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <br/> <br/>

          <Typography variant="button" display="block" gutterBottom> <u>Email</u> </Typography>
          <TextField id="email" label="Email" variant="outlined" margin="normal" required fullWidth/> 

          <Typography variant="button" display="block" gutterBottom> <u>Phone Number</u> </Typography>
          <TextField id="phonenumber" label="Phone Number" variant="outlined" margin="normal" required fullWidth/> 

          <Typography variant="button" display="block" gutterBottom> <u>Address</u> </Typography>
          <TextField id="address" label="Address" variant="outlined" margin="normal" required fullWidth/> 
        
      </Box>
    </form>


    </div>
  );
}

export default App;

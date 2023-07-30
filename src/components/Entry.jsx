import * as React from 'react'
import { Box, Container } from "@mui/material"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem"
import { Payment } from "@mui/icons-material"

const EntryForms = ()=>{

     const [value, setValue] = React.useState('');
     const handleChange = (event) => {
       setValue(event.target.value);
     };

return(
 
<Container sx={{alignContent:"center"}}>

<Box>
     <div style={{backgroundColor:"goldenrod",alignItems:"center", paddingLeft:"40%",
     height:"8vh",fontWeight:"bolder",paddingTop:"0.93rem"}}>Enter Properties Details for UPDN</div>
</Box>


{/* First Grid */}
<Grid>

<Box paddingTop="2rem" display="flex" columnGap="1rem" paddingBottom="0.99rem" flexDirection="initial">
     <Box>
      <Typography variant="subtitle1">Class</Typography>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Payment}
          sx={{ width: 250 , backgroundColor:"gray"}}
          onChange={handleChange}
        >
          <MenuItem value={10}>First Class</MenuItem>
          <MenuItem value={20}>Second Class</MenuItem>
          <MenuItem value={30}>Third Class</MenuItem>
        </Select>
     </Box>

     <Box>
      <Typography variant="subtitle1">Category</Typography>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Payment}
          sx={{ width: 250 , backgroundColor:"gray"}}
          onChange={handleChange}
        >
          <MenuItem value={10}>Resendential1</MenuItem>
          <MenuItem value={20}>Resendential2</MenuItem>
          <MenuItem value={30}>Resendential3</MenuItem>
        </Select>
     </Box>


     <Box>
      <Typography variant="subtitle1">Category</Typography>
     <input type="number" style={{height:"7vh", backgroundColor:"gray"}} />
     </Box>


     <Box>
      <Typography variant="subtitle1">Physical Address</Typography>
      <TextField name="Physical Address" sx={{backgroundColor:"gray"}} />
     </Box>
     </Box>
    

    </Grid> 
    
<Typography>Property Information </Typography>
<Divider sx={{color:"rebeccapurple"}}/>

{/* Second Grid */}

<Grid>

<Box paddingTop="2rem" display="flex" columnGap="1rem" paddingBottom="0.99rem" flexDirection="initial">
     <Box>
      <Typography variant="subtitle1">Unique Parcel Number</Typography>
      <input type="number" style={{height:"7vh", backgroundColor:"gray"}} />
     </Box>

     <Box>
      <Typography variant="subtitle1">Street Name</Typography>
      <TextField name="Physical Address" sx={{backgroundColor:"gray"}} />
     </Box>


     <Box>
      <Typography variant="subtitle1">Category</Typography>
     <input type="number" style={{height:"7vh", backgroundColor:"gray"}} />
     </Box>


     <Box>
      <Typography variant="subtitle1">Property Number</Typography>
      <TextField name="Physical Address" sx={{backgroundColor:"gray"}} />
     </Box>


     <Box>
      <Typography variant="subtitle1">Year of Construction</Typography>
      <TextField name="Year_of_COnstruction" sx={{backgroundColor:"gray"}} />
     </Box>

     </Box>
     <Divider sx={{color:"rebeccapurple"}}/>


</Grid> 


     <h5>Evaluation</h5>
     <Divider/>

     <Grid>
     <Box paddingTop="2rem" display="flex" columnGap="1rem" paddingBottom="0.99rem" flexDirection="initial">
     <Box>
      <Typography variant="subtitle1">Current Value</Typography>
      <input type="number" style={{height:"7vh", backgroundColor:"gray"}} />
     </Box>

     <Box>
      <Typography variant="subtitle1">Current Impost</Typography>
      <input type="number" style={{height:"7vh", backgroundColor:"gray"}} />
     </Box>


     <Box>
      <Typography variant="subtitle1">Payment Amount Due</Typography>
     <input type="Payment " style={{height:"7vh", backgroundColor:"gray"}} />
     </Box>


     <Box>
      <Typography variant="subtitle1">Arrears</Typography>
      <TextField name="Arrears" sx={{backgroundColor:"gray"}} />
     </Box>


     <Box>
      <Typography variant="subtitle1">Revenue Collected</Typography>
      <TextField name="Revenue Collected" sx={{backgroundColor:"gray"}} />
     </Box>

     </Box>
     <Divider sx={{color:"rebeccapurple"}}/>
    
     <Divider/>

</Grid> 



<Grid>
<Box paddingTop="2rem" display="flex" columnGap="1rem" paddingBottom="0.99rem">

<Box>
      <Typography >Comments </Typography>
           <input style={{width:"500px", height:"40vh", backgroundColor:"GrayText"}} type="text"  name="Comments" />
</Box>


      <label>Is Excluded from rating /</label>
      <input type="checkbox" style={{height:"7vh", backgroundColor:"gray",fontWeight:"bold"}} />
    
</Box>

</Grid>


</Container>

     
)
}

export default EntryForms
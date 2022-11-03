import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios"
import { 
  TextField,
  Typography,
  Grid,
  Card,
  Box,
  Button
} from '@material-ui/core';



export default function AddFreelancer(props) {
  const navigate = useNavigate();
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [address,setAddress]=useState("");
  const [city,setCity]=useState("");
  const [state,setState]=useState("");
  const [zip,setZip]=useState("");
  const [country,setCountry]=useState("");
  const [email,setEmail]=useState("");
  const [price,setPrice]=useState("");
  const [position,setPosition]=useState("");
  const [website,setWebsite]=useState("");
  const [photo,setPhoto]=useState("");
  const [skill,setSkill]=useState("");
  const [bio,setBio]=useState("");

  let handleSubmit = async()=>{
    try {
        let response = await axios.post('https://61c8fe11adee460017260eb5.mockapi.io/freelancer',{
            name,
           phone,
            address,
           city,
            state,
            zip,
           country,
            email,
            price,
             position,
             website,
            photo,
            skill,
            bio,
        })
        console.log(response)
        if(response.status===201)
            navigate('/dashboard')
        else
            alert("Internal server error!")
        
    } catch (error) {
        console.log(error)
    }
}
return(


    <React.Fragment>
      <Box>
      <Card>
      <Typography variant="h6" style={{
        fontSize: "2rem",
        textAlign:"center",
        marginBottom: "10px"
    }}>
        Add Freelancer Details
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            onChange={(e)=>setName(e.target.value)}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            variant="outlined"
            fullWidth
            onChange={(e)=>setPhone(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
        <TextField
            id="address1"
            name="address1"
            label="Address"
            variant="outlined"
            fullWidth
            onChange={(e)=>setAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="city"
            name="city"
            label="City"
            variant="outlined"
            fullWidth
            onChange={(e)=>setCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            variant="outlined"
            fullWidth
            onChange={(e)=>setState(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            variant="outlined"
            fullWidth
            onChange={(e)=>setZip(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            variant="outlined"
            fullWidth
            onChange={(e)=>setCountry(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="phonenumber"
            name="phonenumber"
            label="Phone Number"
            variant="outlined"
            fullWidth
            onChange={(e)=>setPhone(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="email"
            name="email"
            label="E-mail"
            variant="outlined"
            fullWidth
            onChange={(e)=>setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="price"
            name="price"
            label="Price"
            variant="outlined"
            fullWidth
            onChange={(e)=>setPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="position"
            name="position"
            label="Position "
            variant="outlined"
            fullWidth
            onChange={(e)=>setPosition(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="website"
            name="website"
            label="Website"
            variant="outlined"
            fullWidth
            onChange={(e)=>setWebsite(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="photoURl"
            name="photoURl"
            label="PhotoURl"
            variant="outlined"
            fullWidth
            onChange={(e)=>setPhoto(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="skill"
            name="skill"
            label="Skill"
            variant="outlined"
            fullWidth
            value={skill}
            onChange={(e)=>setSkill(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="bio"
            name="bio"
            label="Bio"
            variant="outlined"
            fullWidth
            onChange={(e)=>setBio(e.target.value)}
            />       
             </Grid>
      </Grid>

      </Card>
      </Box>
      <Button style={{
        left: '35%', 
        color: "#fff",
        backgroundColor: "#002984",
        padding: "1rem 6rem",
        marginTop: "2rem ",
        fontSize: "18px",
        
    }} variant="contained"onClick={handleSubmit}>Submit</Button>

    </React.Fragment>

  );
}

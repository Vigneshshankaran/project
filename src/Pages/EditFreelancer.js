import React from 'react'
import {TextField,Grid, Card,Typography} from '@material-ui/core';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from "axios"
import { useParams, useNavigate} from 'react-router-dom';
import {  useState, useEffect } from 'react';




export default function EditFreelancer(props) {
    let params = useParams();

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
  const url = "https://61c8fe11adee460017260eb5.mockapi.io/freelancer/"
   //Using axios
   let getData = async()=>{
    try {
     let response = await axios.get(url+params.id)
     setName(response.data.name);
     setPhone(response.data.phone);
     setAddress(response.data.address);
     setCity(response.data.city)
     setCity(response.data.zip)
     setCountry(response.data.country)
     setEmail(response.data.email)
     setPrice(response.data.price)
     setPosition(response.data.position)
     setPhoto(response.data.website)
     setWebsite(response.data.photo)
     setSkill(response.data.skill)
     setBio(response.data.bio)



    } catch (error) {
        console.log(error)
    }
 }

 useEffect(()=>{
  getData();

},[])

 let handleSubmit = async()=>{
    try {
     let response = await axios.put(url+params.id,{
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
     });
     if(response.status===200)
     {
         navigate("/dashboard")
     }
    } catch (error) {
        console.log(error)
    }
 }
 

 
  return (
    <React.Fragment>
    <Box>
    <Card>
    <Typography variant="h6" style={{
      fontSize: "2rem",
      textAlign:"center",
      marginBottom: "10px"
  }}>
      Update Freelancer Details
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
          value={name}
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
          value={phone}
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
          value={address}
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
          value={city}
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
          value={state}
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
          value={zip}
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
          value={country}
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
          value={phone}
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
          value={email}
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
          value={price}
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
          value={position}
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
          value={website}
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
          value={photo}
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
          value={bio}
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
      
  }} variant="contained"onClick={handleSubmit}>Update</Button>

  </React.Fragment>

);
}
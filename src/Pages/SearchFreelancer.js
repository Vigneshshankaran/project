import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Typography,Grid} from '@mui/material/';
import axios from "axios";
  import { useEffect, useState } from 'react';
  import { Link } from "react-router-dom";


 

export default function SearchFreelancer() {

  const [product, setProduct] = useState([])


  useEffect(()=>{
    getProductData();
  
  },[])
  

const getProductData = async () => {
   try{
const data = await axios.get(
            "https://61c8fe11adee460017260eb5.mockapi.io/freelancer/"
       );
       console.log(data.data);
               setProduct(data.data)
   }catch(err){
       console.log(err)
   }
};

let handleDelete = async(i)=>{
  try{
      let response = await axios.delete(`https://61c8fe11adee460017260eb5.mockapi.io/freelancer/${i}`)
      if(response.status===200)
      getProductData()
  }
  catch(error)
  {
      console.log(error)
  }
}

  return (


    <>
{
      product
            .map((item) => {
              return (

                
   <Grid container justifyContent="center" spacing={10}>
                    <Grid item xs={8}>

    <Card>
    <CardMedia
   
      component="img"
      height="140"
      src={item.photo}
      alt={item.name}
    />

      <CardContent>

        <Typography gutterBottom variant="h3"   >
          {item.name}
      </Typography>
      <Typography gutterBottom variant="h6"   >
      {item.price}
      </Typography>
      <Typography variant="p" >
      {item.position}
        </Typography>
        <Typography  variant="p">
      {item.country}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant='danger' onClick={()=>handleDelete(item.id)}>Delete</Button>
            <Link to = {`/EditFreelancer/${item.id}`}>
                          <Button variant='primary'>Edit</Button>
                          </Link>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    
        )}
        )
    }
    </>
   
  );
}

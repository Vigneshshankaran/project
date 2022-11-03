
  import axios from "axios"
 import { useEffect, useState } from 'react';


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter,
    Button,
    
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950,
        maxHeight:'500px'
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
  }));


function Dashboard() {
  const [product, setProduct] = useState([])
  
  useEffect(()=>{
    getProductData();
  
  },[])
  

const getProductData = async () => {
   try{
const data = await axios.get(
            "https://61c8fe11adee460017260eb5.mockapi.io/freelancer"
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
      
      if(response.status===201)
      getProductData()
      alert("successfully deleted");
  }
  catch(error)
  {
    alert("hello");
      
  }
}


  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table  className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>User Info</TableCell>
            <TableCell className={classes.tableHeaderCell}>Job Info</TableCell>
            <TableCell className={classes.tableHeaderCell}>Price</TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            {
      product
            .map((item) => {
    return ( 
      <TableRow key={item.id}>
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar alt={item.name} src='.' className={classes.avatar}/>
                      </Grid>
                      <Grid item lg={10}>
                          <Typography className={classes.name}>{item.name}</Typography>
                          <Typography color="textSecondary" variant="body2">{item.email}</Typography>
                          <Typography color="textSecondary" variant="body2">{item.phone}</Typography>
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{item.jobTitle}</Typography>
                  <Typography color="textSecondary" variant="body2">{item.phone}</Typography>
                </TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
              <Link to = {`/EditFreelancer/${item.id}`}>
                          <Button variant='primary'>Edit</Button>
                          </Link>
                        <Button variant='danger' onClick={()=>handleDelete(item.id)}>Delete</Button>
            {/* <Link to={`/EditFreelancer/${item.id}`}><Button variant="contained">View</Button> </Link> */}
            </TableCell>
            </TableRow>
                    )}
                    )
                }
      </TableBody>
        <TableFooter>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={100}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
    </TableContainer>
      
  );
}

export default Dashboard;
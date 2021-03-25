import React from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root:{
    width:"77vw",
    height:"380px",
    backgroundColor:"white",
    backgroundImage:`url(https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2021/02/14092249/Grocery.png)`,
    backgroundSize:"cover",
    backgroundPositionX:"center",
    backgroundPositionY:"center",
    backgroundRepeat:"no-repeat",
  }
}))
function Products() {
  const classes=useStyles()
  return (
    <div>
      <Grid container className={classes.root}>

      </Grid>
    </div>
  )
}

export default Products

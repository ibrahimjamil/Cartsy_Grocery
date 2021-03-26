import React from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

let logo= "https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg"

const useStyles = makeStyles((theme) => ({
  rootest:{
    cursor:"pointer",
    transition: ".25s ease-in-out",
    "&:hover":{
      transform: "translateY(-7px)"
    }
  },
  root:{
    display: 'flex',
    flexDirection:"column",
    backgroundColor:"white"
  },
  root1:{
    display: 'flex',
    flexDirection:"column",
    padding:"20px",
  },
  btnroot:{
    display: 'flex',
    flexDirection:"row",
  },
  btn1:{
    fontSize:"13px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"12px",
    backgroundColor:"#E6E6E67A",
    flex:"0.8",
    cursor:"pointer",
    transition:"backgroundColor 2s",
    borderRadius:"10px",
    transition: ".25s ease-in-out",
    "&:hover":{
      color:"white",
      backgroundColor:"black",
    }
  },
  btn2:{
    fontSize:"16px",
    flex:"0.2",
    cursor:"pointer",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"12px",
    backgroundColor:"#E6E6E5",
    borderRadius:"10px",
    transition: ".25s ease-in-out",
    "&:hover":{
      color:"white",
      backgroundColor:"#000000c4"
    }
  }
}))
function Products() {
  const classes=useStyles()
  return (
    <div className={classes.rootest}>
      <Grid container className={classes.root}>
        <Grid item>
          <img src={logo} style={{width:"100%",height:"50%",transform: "scale(0.9)"}}/>
        </Grid>
        <Grid item conatiner className={classes.root1} >
          <Grid item>
            <p style={{fontSize:"16px",marginBottom:"5px"}}>$3.45</p>
          </Grid>
          <Grid item>
            <p style={{fontSize:"16px",color:"grey",marginBottom:"25px"}}>soft and smooth</p>
          </Grid>
          <div className={classes.btnroot} >
            <div className={classes.btn1}>add </div>
            <div className={classes.btn2}>+</div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Products

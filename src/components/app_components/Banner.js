import React from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root:{
    width:"77vw",
    height:"388px",
    backgroundColor:"whitesmoke",
    marginLeft:"23vw",
  },
  rootmobile:{
    width:"100vw",
    height:"388px",
    backgroundColor:"whitesmoke",
  },
  root_web:{
    width:"77vw",
    height:"380px",
    backgroundColor:"white",
    backgroundImage:`url(https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2021/02/14092249/Grocery.png)`,
    backgroundSize: "100% 100%",
    backgroundPositionX:"center",
    backgroundPositionY:"center",
    backgroundRepeat:"no-repeat",
    marginTop:"15px",
    borderRadius:"6px",
    transform: "scale(0.9)",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  root_mobile:{
    width:"100vw",
    height:"380px",
    backgroundColor:"white",
    backgroundImage:`url(https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2021/02/14092249/Grocery.png)`,
    backgroundSize:"100% 100%",
    backgroundPositionX:"center",
    backgroundPositionY:"center",
    backgroundRepeat:"no-repeat",
    borderRadius:"6px",
    marginTop:"15px",
    transform: "scale(0.9)",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  input_style:{
    borderWidth:"2px",
    width:"80%",
    height:"50px",
    borderRadius:"6px",
    padding:"7px",
    fontSize:"18px",
  }
}))
function Banner() {
  const classes=useStyles()
  return (
      <div>
        <Hidden smDown>
          <div className={classes.root}>
            <Grid  container className={classes.root_web}>
              <h2 style={{fontSize:"36px",marginBottom:"15px"}}>Products Delivered in 90 Minutes</h2>
              <p style={{fontSize:"16px",color:"SASASA",marginTop:"0px"}}>Get your products delivered at your doorsteps all day everyday</p>
              <input className={classes.input_style}  placeholder="E,g Meat,Yogurt,Eggs etc"></input>
            </Grid>
          </div>
        </Hidden>
        <Hidden mdUp>
            <div className={classes.rootmobile}>
              <Grid  container className={classes.root_mobile}>
                <h2 style={{marginBottom:"15px"}}>Products Delivered in 90 Minutes</h2>
                <p style={{color:"SASASA",marginTop:"0px",maxWidth:"70%"}}>Get your products delivered at your doorsteps all day everyday</p>
                <input className={classes.input_style} placeholder="E,g Meat,Yogurt,Eggs etc"></input>
              </Grid>
            </div>
        </Hidden>
        
    </div>
    )
}

export default Banner

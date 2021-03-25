import React from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root_web:{
    width:"77vw",
    height:"380px",
    backgroundColor:"white",
    backgroundImage:`url(https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2021/02/14092249/Grocery.png)`,
    backgroundSize:"cover",
    backgroundPositionX:"center",
    backgroundPositionY:"center",
    backgroundRepeat:"no-repeat",
    borderRadius:"6px",
    marginTop:"100px",
    marginLeft:"23vw",
  },
  root_mobile:{
    width:"100vw",
    height:"380px",
    backgroundColor:"white",
    backgroundImage:`url(https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2021/02/14092249/Grocery.png)`,
    backgroundSize:"cover",
    backgroundPositionX:"center",
    backgroundPositionY:"center",
    backgroundRepeat:"no-repeat",
    borderRadius:"6px",
    marginTop:"100px",
  }
}))
function Banner() {
  const classes=useStyles()
  return (
      <div>
        <Hidden smDown>
            <Grid  container className={classes.root_web}>
            </Grid>
        </Hidden>
        <Hidden mdUp>
            <Grid  container className={classes.root_mobile}>
            </Grid>
        </Hidden>
        <Hidden smDown>
        <Grid  container className={classes.root_web}>
        </Grid>
        </Hidden>
        <Hidden mdUp>
            <Grid  container className={classes.root_mobile}>
            </Grid>
        </Hidden>
    </div>
    )
}

export default Banner

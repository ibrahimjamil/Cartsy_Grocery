import React from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden} from '@material-ui/core';


const useStyle=makeStyles((theme)=>({
    root:{
        padding:"15px 60px",
        display: "flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    info:{
        [theme.breakpoints.down('xs')]:{
            display:"flex",
            flexDirection:"row",
            justifyContent:"center"
        }
    },
    social:{
        [theme.breakpoints.down('xs')]:{
            display:"flex",
            flexDirection:"row",
            justifyContent:"center"
        }
    }
}))
function Footer() {
    const classes=useStyle()

    return (
        <div>
            <Grid container className={classes.root} direction="row">
                <Grid item xs={12} sm={6} className={classes.info} >
                    <p>Hello world </p>
                </Grid>
                <Grid item  xs={12}  sm={6} className={classes.social} container alignItems="center" direction="row-reverse">
                    <Grid  item >
                        <a style={{paddingLeft:"20px"}}>twitter</a>
                        <a style={{paddingLeft:"20px"}}>facebook</a>
                        <a style={{paddingLeft:"20px"}}>instagram</a>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer

import React from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden} from '@material-ui/core';
import Products from './Products';

const useStyles = makeStyles((theme) => ({

    rootweb:{
        marginLeft:"23vw",   
        width:"76vw",
        backgroundColor:"whitesmoke"
    },
    rootMobile:{
        width:"100vw",
        backgroundColor:"whitesmoke"
    }
}))
function Productpage() {
    const classes=useStyles()
    return (
        <div>
            <Hidden smDown>
                <div className={classes.rootweb}>
                    <Grid container justify="space-around" spacing={2}>
                        {[1,2,3,4,5,6,7,8].map((item)=>(
                            <Grid item  sm={3} lg={3} container justify="center">
                                <Products/>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Hidden>
            <Hidden mdUp>
                <div className={classes.rootMobile}>
                    <Grid container justify="space-between" spacing={2}>
                        {[1,2,3].map(()=>(
                            <Grid item xs={6} container justify="center">
                                   <Products/>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Hidden>
        </div>
    )
}

export default Productpage

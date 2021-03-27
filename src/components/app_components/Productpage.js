import React, { useEffect } from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden} from '@material-ui/core';
import Products from './Products';
import {useSelector,useDispatch} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';


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
    const state = useSelector(state => state)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch({type:"getData"})
    },[])
    return (
        <div>
            <Hidden smDown>
                <div className={classes.rootweb}>
                    <Grid container justify="space-around" spacing={2}>
                        {state.map((object)=>(
                                <Grid item  sm={3} lg={3} container justify="center">
                                    <Products img={object.img} price={object.price} desc={object.description}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </Hidden>
            <Hidden mdUp>
                <div className={classes.rootMobile}>
                    <Grid container justify="space-between" spacing={2}>
                        {state.map((object)=>(
                            <Grid item xs={6} container justify="center">
                                <Products img={object.img} price={object.price} desc={object.description}/>
                            </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </Hidden>
        </div>
    )
}

export default Productpage

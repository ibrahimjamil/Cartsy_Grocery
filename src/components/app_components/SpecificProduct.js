import React, { useState,useEffect } from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import { Grid,GridItem, Hidden} from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux';

let image="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09085231/Soft-Bread6.jpg"

const useStyle=makeStyles((theme)=>({
    root:{
        width:"100vw",
        marginTop:"1.7vh",
        paddingBottom:"80px",
    },
    image:{
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        width:"50vw",
        maxHeight:"100%",
        [theme.breakpoints.down('sm')]: {
            width:"100vw"
          },
    },
    btn:{
        padding:"10px",
        backgroundColor:"black",
        color:"white",
        width:"20%",
        cursor:"pointer"
    },
    info:{
        marginTop:"84px",
        maxWidth:"50%",
        [theme.breakpoints.down('sm')]: {
            marginTop:"0px",
            marginLeft:"10px",
            maxWidth:"100%",
        },
    }
}))


function SpecificProduct() {
    const [desc,setDesc]=useState(true)
    const [review,setReview]=useState(false)
    const classes=useStyle()

    const showDescription=()=>{
        setDesc(true)
        setReview(false)
    }
    const showReview=()=>{
        setDesc(false)
        setReview(true)        
    }
    return (
        <div>
            <Grid container direction="column">
                <Grid container className={classes.root} direction="row">
                    <Grid item sm={12} md={6}>
                            <img src={image} className={classes.image}/>
                    </Grid>
                    <Grid item className={classes.info} container  sm={12} md={6}  direction="column">
                        <Grid item style={{maxWidth:"70%"}}>
                            <h1>Oroweat Organic  Wheat Bread 27 oz</h1>
                        </Grid>
                        <Grid item style={{maxWidth:"70%"}}>
                            <p>$2.70</p>
                        </Grid>
                        <Grid item style={{maxWidth:"70%"}}>
                            <p>Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history it has been a prominent food in large parts of the world</p>
                        </Grid>
                        <Grid item style={{maxWidth:"70%"}}>
                            <button style={{marginTop:"20px",marginBottom:"40px"}}className={classes.btn}>ADD</button>
                        </Grid>
                        <Grid item container direction="column">
                            <Grid item>
                                <p><span style={{color:"grey"}}>Category:</span> Breakfast</p>
                            </Grid>
                            <Grid item>
                                <p><span style={{color:"grey"}}>Tags:</span> Bakery Breakfast</p>
                            </Grid>
                        </Grid>                      
                    </Grid>
                </Grid>
                <Grid container  direction="column">
                    <Grid item sm={12} container direction="row">
                        <button onClick={()=>showDescription()}>description</button>
                        <button onClick={()=>showReview()}>Reviews</button>
                    </Grid>
                    <Grid item sm={12}>
                        {review && <h1>its good</h1>}
                        {desc && <h1>its description</h1>}
                    </Grid>
                </Grid>
            </Grid>   
        </div>
    )
}

export default SpecificProduct

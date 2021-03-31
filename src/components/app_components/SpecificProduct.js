import React, { useState,useEffect } from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import { Grid,GridItem, Hidden} from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux';
import RelatedProduct from './RelatedProduct.js'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

let image="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09085231/Soft-Bread6.jpg"

const useStyle=makeStyles((theme)=>({
    root:{
        width:"100vw",
        marginTop:"1.7vh",
        paddingBottom:"40px",
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
        backgroundColor:"#212121",
        borderColor:"#212121",
        color:"white",
        paddingLeft:"28px",
        paddingRight:"28px",
        cursor:"pointer",
        display:"flex",
        borderRadius:"6px",
        fontSize:"16px"
    },
    btn2:{
        marginRight:"10px",
        paddingRight:"20px",
        paddingTop:"10px",
        paddingBottom:"10px",
        backgroundColor:"white",
        color:"black",
        cursor:"pointer",
        fontSize:"18px",
        marginBottom:"20px",
        transition: ".25s ease-in-out",
        fontSize:"20px"
    },
    btn3:{
        marginRight:"10px",
        paddingRight:"20px",
        paddingTop:"10px",
        paddingBottom:"10px",
        backgroundColor:"white",
        color:"black",
        cursor:"pointer",
        fontSize:"18px",
        marginBottom:"20px",
        fontSize:"20px",
        transition: ".25s ease-in-out",
    },
    info:{
        marginTop:"84px",
        paddingLeft:"80px",
        paddingRight:"80px",
    },
    infoinner1:{
        maxWidth:"70%",
        fontSize:"24px",
        color:"black",
        lineHeight:"1.5",
        fontWeight:"500"
    },
    infoinner2:{
        maxWidth:"70%",
        fontSize:"20px"
    },
    infoinner3:{
        maxWidth:"70%",
        fontSize:"16px",
        color:"SASASA"
    },
    userinfo:{
        paddingLeft:"80px",
        paddingRight:"80px",
       
    },
    relatedItems:{
        marginTop:"30px",
        paddingLeft:"80px",
        paddingRight:"80px",
        marginBottom:"50px",
        fontSize:"24px",
        color:"#212121",
        marginBottom:"24px"
    },
    ui:{
        display:"flex",
        justifyContent:"flex-start",
        fontSize:"20px"
    },
    custom: {
        color: 'black',
        borderBottom:"2px solid black",
        fontSize:"20px"
    },
    custom2:{
        color:"#212121",
        borderBottom:"0px",
        
    }
}))


function SpecificProduct() {
    const [desc,setDesc]=useState(true)
    const [review,setReview]=useState(false)
    const classes = useStyle();
    const [value, setValue] =useState(0);
    const state = useSelector(state => state.dataReducer)

    const showDescription=()=>{
        document.getElementsByClassName('btn2',()=>{
            console.log("hello")
        })
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
                        <Grid item className={classes.infoinner1}>
                            <p>Oroweat Organic  Wheat Bread 27 oz</p>
                        </Grid>
                        <Grid item className={classes.infoinner2}>
                            <p style={{fontSize:"20px",fontWeight:"500"}}>$2.70</p>
                        </Grid>
                        <Grid item className={classes.infoinner3}>
                            <p>Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history it has been a prominent food in large parts of the world</p>
                        </Grid>
                        <Grid item className={classes.infoinner}>
                            <button style={{marginTop:"20px",marginBottom:"40px"}} className={classes.btn}>Add To Cart</button>
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
                <Grid container className={classes.userinfo} direction="column">
                    <Grid item sm={12} container direction="row">
                        <BottomNavigation className={classes.ui} value={value}
                                onChange={(event, newValue) => {
                                setValue(newValue);
                                }}
                                
                                showLabels
                        >
                            <BottomNavigationAction  classes={{selected: classes.custom,label:classes.custom2}} onClick={()=>showDescription()} label="Description"  />
                            <BottomNavigationAction  classes={{selected: classes.custom,label:classes.custom2}} onClick={()=>showReview()} label="Reviews"  />
                        </BottomNavigation>
                    </Grid>
                    <Grid item sm={12}>
                        {review && <p style={{fontSize:"16px",color:"grey"}}>its good</p>}
                        {desc && <p style={{fontSize:"16px",color:"grey"}}>its descriptionits descriptionits descriptionits descriptionits descriptionits descriptionits descriptionits descriptionits descriptionits descriptionits descriptionits description</p>}
                    </Grid>
                </Grid>
                <Grid container className={classes.relatedItems} direction="column">
                    <Grid item>
                        <h2 style={{fontSize:"24px",fontWeight:"500"}}>You may also like...</h2>
                    </Grid>
                    <Grid item container justify="space-around" spacing={2}>
                       {state.slice(0,4).map((object,index)=>(
                           <Grid item sm={6} md={4} lg={3} container justify="center">
                               <RelatedProduct  ind={index} img={object.img} price={object.price} desc={object.description}/>
                           </Grid>
                       ))}
                    </Grid>
                </Grid>
            </Grid>   
        </div>
    )
}

export default SpecificProduct

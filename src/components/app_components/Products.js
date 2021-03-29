import React from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Navbar from './Navbar';
import {useSelector,useDispatch} from 'react-redux'

let logo= "https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg"

const useStyles = makeStyles((theme) => ({
  rootest:{
    cursor:"pointer",
    transition: ".25s ease-in-out",
    border: "1px solid #f3f3f3",
    "&:hover":{
      transform: "translateY(-7px)",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
function Products(props) {
  const classes=useStyles()
  const cartdata=useSelector(state => state.cartReducer)
  const dispatch=useDispatch()


  const cartReducer=()=>{
    let toShow=true
    cartdata.map((object)=>{
      if (object.img===props.img){  
        toShow=false
      }
    })
    if (toShow){
      dispatch(
        {
          type:"cartAdd",
          data:{
            img:props.img,
            price:props.price,
            description:props.desc,
            quantity:1
          }
        }
      )
    }
  }
  return (
    <div className={classes.rootest}>
      <Grid container className={classes.root}>
        <Grid item>
          <img src={props.img} style={{width:"100%",height:"50%",transform: "scale(0.9)"}}/>
        </Grid>
        <Grid item conatiner className={classes.root1}>
          <Grid item>
            <p style={{fontSize:"16px",marginBottom:"5px"}}>${props.price}</p>
          </Grid>
          <Grid item>
            <p style={{fontSize:"16px",color:"grey",marginBottom:"25px",overflow:"hidden"}}>{props.desc}</p>
          </Grid>
          <div className={classes.btnroot} onClick={()=>cartReducer()}>
            <div className={classes.btn1}>add </div>
            <div className={classes.btn2}>+</div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Products

import React from 'react'
import {  makeStyles } from '@material-ui/core/styles';

let logo = "https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/16065923/Grocery.svg"

const useStyles = makeStyles((theme) => ({
    //custom scroll bar 
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  },
  item:{
    height:"130px",
    padding:"30px",
    display:"flex",
    flexDirection:"row",
  },
  IDD:{
      display:"flex",
      flexDirection:"row",
      flex:"1",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"black",
      color:"white",
      cursor:"pointer",
      borderRadius:"6px",
      margin:"5px",
      marginBottom:"15px"
  },
  IDDINNER:{
    flex:0.333,
    display:"flex",
    justifyContent:"center"
    }
}))

function CartBar() {
    const classes = useStyles();

    return (
    <div>
        <div className={classes.item}>
          <div style={{flex:"0.2"}}>
              <img src={logo} style={{width:"105px",height:"130px"}}/>
          </div>
          <div style={{flex:"0.8",paddingRight:"16px",paddingLeft:"16px",display:"flex",flexDirection:"column"}}>
              <div>
                  <p>Organic white mashroom</p>
              </div>
              <div>
                  <p>Unit Price $20 </p>
              </div>
              <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                  <div className={classes.IDD}>
                      <div className={classes.IDDINNER} style={{cursor:"pointer"}}>-</div>
                      <div className={classes.IDDINNER}>0</div>
                      <div className={classes.IDDINNER} style={{cursor:"pointer"}}>+</div>
                  </div>
                  <div>
                      <p>$15.36</p>
                  </div>
              </div>
          </div>
        </div>
    </div>
    )
}

export default CartBar

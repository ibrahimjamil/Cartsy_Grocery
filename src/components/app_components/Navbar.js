import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import {  makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from '@material-ui/core/Divider';
import ListItemText from "@material-ui/core/ListItemText";
import CartBar from './CartBar';
import {useSelector,useDispatch} from 'react-redux'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Grid, Hidden} from '@material-ui/core';

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

  grow: {
    flexGrow: 1,
  },
  root:{
      background:"white",
      paddingRight:"47px",
      paddingLeft:"30px",
      height:"100px",
      boxShadow: "0px 1px 1px 1px rgb(0 0 0 / 2%), 0px 2px 2px 0px rgb(0 0 0 / 5%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
      position:"fixed"
    },
  rootest:{
    height:"14.2vh"
  },
  root_inner:{
    marginBlock: "auto",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    width:"99px",
    height:"30px",
    color:"white",
  },
  lastdiv:{
      display:"flex",
      flexDirection:"row",
      color:"black",
  },
  type:{
      alignSelf:"center",
      fontSize:"16px",
      paddingRight:"20px",
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  leftDrawer:{
    width:"23vw"
  },
  rightDrawer:{
    width:"30vw"
  },
  cart:{
    height:"90vh",
    width:"100%",
  },
  cart_upper:{
    height:"80vh",
    width:"100%",
    overflow:"scroll",
    overflowX:"hidden",
  },
  item:{
    height:"130px",
    padding:"30px",
    display:"flex",
    flexDirection:"row"
  },
  checkO:{
    height:"5vh",
    width:"91%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingTop:"15px",
    paddingBottom: "20px",
    paddingLeft:"15px",
    paddingRight: "20px",
    backgroundColor:"black",
    color:"white",
    borderRadius:"20px",
    cursor:"pointer"
  }
}));

export default function Navbar() {
  let totalAmount=0
  const classes = useStyles();
  const cartdata=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()

  
  cartdata.map((object)=>{
    if (object.img&&object.price&&object.description&&object.quantity){
        totalAmount=totalAmount + (object.price*object.quantity)
    }
  })
  const [state, setState] = useState({
    lbutton:false,
    rbutton:false
  });
  
  // for toggle or true false of state
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  //all list categories menu_sidebar
  const list = () => (
    <div className={classes.leftDrawer}>
        <List >
            <ListItem >
              <ListItemText primary={<img src={logo} className={classes.logo}/>}/>
              <ListItemText
                style={{cursor:"pointer",display:"flex",justifyContent:"flex-end"}}
                primary={<b>X</b>}
                onClick={toggleDrawer("lbutton", false)}
                onKeyDown={toggleDrawer("lbutton", false)}
                button
              />
              </ListItem>
        </List>
        <Divider/>
        <List>
          {["Shop", "Blogs", "FAQs", "Drafts","Terms and Conditions","Contacts"].map((text, index) => (
            <ListItem>
              <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List>
    </div>
  );

  //cart menu side bar 
  const cart = () => (
    <div className={classes.rightDrawer}>
        <List >
          <ListItem>
            <ListItemText primary={<b>Shopping Cart</b>}/>
            <ListItemText
              style={{cursor:"pointer",display:"flex",justifyContent:"flex-end"}}
              primary={<b>X</b>}
              onClick={toggleDrawer("rbutton", false)}
              onKeyDown={toggleDrawer("rbutton", false)}
              button
            />
            </ListItem>
        </List>
        <Divider/>
        <div className={classes.cart}>
          <div className={classes.cart_upper}>
            {cartdata.map((object,index)=>(
              <div>
                {object.img && object.price && object.description && object.quantity>=1?
                  <div>
                    <CartBar index={index} quan={object.quantity} img={object.img} price={object.price} description={object.description}/>
                    <Divider/>
                  </div>:
                  ''
                }
              </div>
            ))}
          </div>
          <div  className={classes.checkO}>
            <div style={{display:"flex",flex:"0.7",justifyContent:"center",alignItems:"center"}}>
              <a>Proceed to checkout</a>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <p>${totalAmount.toFixed(1)}</p>
            </div>
          </div>
        </div>
    </div>
  );
  
  return (
    <div className={classes.grow}>
      <Grid container className={classes.rootest}>
        <AppBar  position="static" className={classes.root}>
          <Toolbar className={classes.root_inner}>
              <IconButton className={classes.menuButton} onClick={toggleDrawer("lbutton",true)}>
                  <MenuIcon/>
              </IconButton>
              <SwipeableDrawer anchor={"left"} open={state.lbutton}>
                {list()}
              </SwipeableDrawer> 
              <Link to="/">
                <img src={logo} className={classes.logo}/>
              </Link>
              <div className={classes.grow}/>
              <div className={classes.lastdiv}>
                  <Typography className={classes.type} >My Account</Typography>
                  <IconButton onClick={toggleDrawer("rbutton",true)}>
                      <Badge badgeContent={cartdata.length-1} color="secondary" bg="black">
                          <ShoppingCartIcon/>
                      </Badge>
                  </IconButton>
                  <SwipeableDrawer anchor={"right"} open={state.rbutton}>
                    {cart()}
                  </SwipeableDrawer> 
              </div>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  )
}

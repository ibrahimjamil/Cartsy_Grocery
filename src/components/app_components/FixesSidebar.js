import React, { useState } from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { Hidden } from '@material-ui/core';
import {useSelector} from 'react-redux';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
const useStyles = makeStyles((theme) => ({
    //custom scroll bar 
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.1em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  },
    sidebar_container:{ 
        height:"100vh",
        width:"23vw",
        overflowY:"scroll",
        position:'fixed',
        marginTop:"3px",
    },
    nested: {
        paddingLeft: theme.spacing(4),
      },
    root:{
      marginTop:"5px"
    }
}))

function FixesSidebar() {
    const [selectedIndex,setSelectedIndex]=useState("")
    const classes = useStyles();
    const categories=useSelector(state=>state.CategoryReducer)
    const handleClick = (index,catId)=> {
        if (selectedIndex === index) {
          setSelectedIndex("")
        } else {
          setSelectedIndex(index)
        }
    }
    return (
      <Hidden smDown implementation="css">
          <div  className={classes.sidebar_container}>
              {
                categories.map((category, index) =>{
                  return (
                    <div>
                      {
                        <div className={classes.root}>
                            <ListItem>
                              <ListItemText  onClick={()=>handleClick(index,category.catId)} primary={category.name} style={{cursor:"pointer",display:"flex",justifyContent:"flex-start"}}/>
                              {index===selectedIndex ? <ExpandMore /> : <NavigateNextIcon/>}
                            </ListItem>
                            <Collapse in={index===selectedIndex}>
                              <List >
                                  {
                                    category.subCategories.map((subcategoryItem,index)=>{
                                      return (
                                        <>
                                          <ListItem button className={classes.nested}>
                                            <ListItemText>   
                                                  <p style={{marginTop:"0px",marginBottom:"0px"}} >{subcategoryItem.name}</p>
                                            </ListItemText>
                                          </ListItem>
                                        </>
                                      )
                                    })
                                  }
                              </List>
                            </Collapse>
                        </div>
                      }
                    </div>
                  ) 
                })
              }  
          </div>
      </Hidden>
    )
}

export default FixesSidebar
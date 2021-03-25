import React, { useState } from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import Collapse from '@material-ui/core/Collapse';
import { Hidden } from '@material-ui/core';

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
        overflow:"scroll",
    },
    sideBar:{
        marginTop:"100px"
    },
    nested: {
        paddingLeft: theme.spacing(4),
      },
}))

function FixesSidebar() {
    const [selectedIndex,setSelectedIndex]=useState("")
    const classes = useStyles();
    const handleClick = index => {
        if (selectedIndex === index) {
          setSelectedIndex("")
        } else {
          setSelectedIndex(index)
        }
    }
    return (
        <Hidden smDown implementation="css">
            <div className={classes.sidebar_container}>
                <List className={classes.sideBar}>
                    {["Shop", "Blogs", "FAQs", "Drafts","Terms and Conditions","Contacts", "Blogs", "FAQs", "Drafts","Terms and Conditions","Contacts", "Blogs", "FAQs", "Drafts","Terms and Conditions","Contacts"].map((text, index) => (
                        <div>
                            <ListItem >
                                    <ListItemText  onClick={()=>handleClick(index)} primary={text} style={{cursor:"pointer",display:"flex",justifyContent:"flex-start"}}/>
                                    {index===selectedIndex ? <ExpandMore /> : <ExpandLess />}
                            </ListItem>
                            <Collapse in={index===selectedIndex}>
                                <List>
                                    <ListItem button className={classes.nested}>
                                        <ListItemText>
                                        {text==="Shop" && ["Packaging"].map((item)=>(
                                            <p>{item}</p>
                                        ))}
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Collapse>
                        <div/>
                    ))}
                </List>        
            </div>
        </Hidden>
    )
}

export default FixesSidebar

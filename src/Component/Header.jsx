import React from 'react'
import {AppBar,Toolbar,Typography} from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles(()=>({
  TypographyStyles:{
    flex:1,
   
  }
}))

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="Static">
      <Toolbar>
        <Typography className={classes.TypographyStyles}>Appiness Interactive
        
        </Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  )
}

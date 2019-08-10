import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const logout = (e) => {
      localStorage.removeItem("sportsapp-token")
  }

  return(
   <div>
    <AppBar position="static">
      <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">Home</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/dashboard">Dashboard</Link>
          </Typography>
          <Button color="inherit"><Link className={classes.link} to="/signin">Signin</Link></Button>
          <Button color="inherit"><Link className={classes.link} to="/signup">Signup</Link></Button>
          <Button color="inherit" onClick={logout}>Logout</Button>
        }
      </Toolbar>
    </AppBar>
   </div>
  )
}

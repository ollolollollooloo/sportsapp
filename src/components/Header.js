import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

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

export default function Header(props) {
  const classes = useStyles();
  const logout = (e) => {
      localStorage.removeItem("sportsapp-token")
  }
console.log(props)
  return(
   <div>
    <AppBar position="static">
      <Toolbar>
        {
          props.isloggedin ?
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">Home</Link>
          </Typography>
          :
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/dashboard">Dashboard</Link>
          </Typography>
        }
        {
          props.isloggedin ?
            <><Button color="inherit"><Link className={classes.link} to="/signin">Signin</Link></Button>
            <Button color="inherit"><Link className={classes.link} to="/signup">Signup</Link></Button></>
          :
            <Button color="inherit" onClick={logout}>Logout</Button>
        }
      </Toolbar>
    </AppBar>
   </div>
  )
}

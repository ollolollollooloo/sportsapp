import React , { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

// eslint-disable-next-line
import { makeStyles } from '@material-ui/core/styles'
// eslint-disable-next-line
import {
// eslint-disable-next-line
    AppBar,
// eslint-disable-next-line
    Toolbar,
// eslint-disable-next-line
    IconButton,
// eslint-disable-next-line
    Typography,
// eslint-disable-next-line
    Button
} from '@material-ui/core'
// eslint-disable-next-line
import MenuIcon from '@material-ui/icons/Menu'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// eslint-disable-next-line
import axios from 'axios'
// eslint-disable-next-line
import jwtDecode from 'jwt-decode'

// User
import Header from './Header' 
import Home from './Home' 
import Dashboard from './Dashboard' 
import Room from './Room' 

// Auth routes
import SignIn from './Auth/SignIn' 
import SignUp from './Auth/SignUp' 

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      process: false
    }

    this.checkAuthorization = this.checkAuthorization.bind(this)
  }

  UNSAFE_componentWillMount(){
  	this.checkAuthorization()
   
  }

  componentDidMount(){
  }

  checkAuthorization(){
	let url = window.location.pathname.split('/')[1].split('-').join('_')

    if(localStorage.getItem("sportsapp-token")){
      let token = localStorage.getItem("sportsapp-token")
      let decoded = jwtDecode(token)
      if (Date.now() >= decoded.exp * 1000) {
        console.log('Token expired')
        // request token create
        // localStorage.removeItem("sportsapp-token")
        // window.location.replace("/signin")
      }else{
        console.log('Token still active')
		if(url === 'signin' || url === 'signup' ){
			console.log('go to dashboard')
			window.location.replace("/dashboard")
		}
      }
    }else{
		if(url !== 'signin' && url !== 'signup' ){
			console.log('go to signin')
			window.location.replace("/signin")
		}
    }
  }

  render() {
      return(
      <div>
      	<CssBaseline />
  		<Container fixed>
          <Router>
            <Header />
            <main>
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/dashboard" exact={true} component={Dashboard} />
                <Route path="/room/:id" exact={true} component={Room} />
                <Route path="/signin" exact={true} component={SignIn} />
                <Route path="/signup" exact={true} component={SignUp} />
              </Switch>
            </main>
          </Router>
  		</Container>
      </div>
      )
  }
}

export default Main

// <Route path="/forgot-password" component={ForgotPassword} />
// <Route path="/reset-password" component={ResetPassword} />
import React , { Component } from 'react'

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
import Footer from './Footer' 
import Home from './Home' 
import Dashboard from './Dashboard' 

// Auth routes
import SignIn from './Auth/SignIn' 
import SignUp from './Auth/SignUp' 
// import ForgotPassword from './Auth/ForgotPassword'
// import ResetPassword from './Auth/ResetPassword'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      process: false
    }

    this.checkAuthorization = this.checkAuthorization.bind(this)
  }

  componentWillMount(){
  	this.checkAuthorization()
   
  }

  componentDidMount(){
  }

  checkAuthorization(){
    if(localStorage.getItem("sportsapp-token")){
      let token = localStorage.getItem("sportsapp-token")
      let decoded = jwtDecode(token)
      if (Date.now() >= decoded.exp * 1000) {
        // console.log('Token expired')
        // request token create
        localStorage.removeItem("sportsapp-token")
        window.location.replace("/login")
      }else{
        console.log('Token still active')
      }
    }
  }

  render() {
      return(
      <div>
          <Router>
            <Header />
            <main>
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/dashboard" exact={true} component={Dashboard} />
                <Route path="/signin" exact={true} component={SignIn} />
                <Route path="/signup" exact={true} component={SignUp} />
              </Switch>
            </main>
            <Footer />
          </Router>
      </div>
      )
  }
}

export default Main

// <Route path="/forgot-password" component={ForgotPassword} />
// <Route path="/reset-password" component={ResetPassword} />
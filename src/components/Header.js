import React , { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {  
  constructor(props) {
    super(props)

    this.state = {
      process: false
    }
  }

  componentDidMount(){
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
      return(
       <div>
        Header
        <Link to="/">Home</Link> | 
        <Link to="/dashboard">dashboard</Link> | 
        <Link to="/signin">Signin</Link> | 
        <Link to="/signup">Signup</Link> | 
       </div>
      )
  }
}

export default Header
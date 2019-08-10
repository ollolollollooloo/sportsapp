import React , { Component } from 'react'

class SignUp extends Component {  
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
       Signup
       </div>
      )
  }
}

export default SignUp
import React , { Component } from 'react'

class SignIn extends Component {  
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
       Singin
       </div>
      )
  }
}

export default SignIn
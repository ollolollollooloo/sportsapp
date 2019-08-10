import React , { Component } from 'react'

class Footer extends Component {  
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
       Footer
       </div>
      )
  }
}

export default Footer
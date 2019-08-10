import React , { Component } from 'react'

class Dashboard extends Component {  
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
       Dashboard
       </div>
      )
  }
}

export default Dashboard
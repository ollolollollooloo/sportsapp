import React , { Component } from 'react'

class Home extends Component {  
  constructor(props) {
    super(props)

    this.state = {
      process: false
    }
  }

  UNSAFE_componentWillMount(){
  }

  render() {
      return(
       <div>
        Home
       </div>
      )
  }
}

export default Home
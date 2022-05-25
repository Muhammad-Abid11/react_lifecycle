import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      count: 0,
    }
    console.log(" life cycle ")
    console.log(" 1.constructor, count=>", this.state.count)
  }

  static getDerivedStateFromProps() {
    console.log(" 2.getDrivedStateFromProps")
    // return null // return mendatory because it is static ,here 'this' is undefined
    // console.log("Count==> ", this.state.count) //not work due to this
    return {  //curly bracket
      count: 5,
    }
  }

  // shouldComponentUpdate() {

  // }

  componentDidMount() { //downside render its not work
    console.log(" 4.component ")
  }

  render() {
    console.log(" 3.render...")
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

// getSnapshotBeforeUpdate(){

// }

// componentDidUpdate(){

// }



export default App;

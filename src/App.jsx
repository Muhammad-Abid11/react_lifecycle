import './App.css';
import React from 'react';
import Child from './components/Child'
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      count: 0,
      data: [],
    }
    console.log(" life cycle ")
    console.log(" 1.constructor, count=>", this.state.count)
  }

  static getDerivedStateFromProps(props, state) {
    //it work when  initial state and updated states also on 
    //1. state update
    //2.props receive or send 
    console.log(" 2.getDrivedStateFromProps", state)
    return null // return mendatory because it is static ,here 'this' is undefined
    // console.log("Count==> ", this.state.count) //not work due to this
    // return {  //return is a object curly bracket
    //   count: 5,
    // }
  }

  shouldComponentUpdate() {
    // it stop render when return false
    if (this.state.count < 5) {
      return true
    } else {
      alert("Now Render not work but console works")
      return false
    }
  }

  componentDidMount() { //downside render its not work
    console.log(" 4.componentDidMount ")
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      // .then(data => console.log("data=>>", data)) //data check
      .then(data => {
        this.setState({
          data: data
        })
      }
      )
      .catch(error => console.log(error))

    console.log("Now 2 components again run due to me array and count update")
  }

  getSnapshotBeforeUpdate(preProps, preState) { //little use
    console.log("getSnapshotBeforeUpdate==> previous state", preState)
    return 10
  }
  componentDidUpdate(preProps, preState, snapshotReturn) { //little use
    console.log("value from getsnap return recieve here ", snapshotReturn)
  }



  render() {

    console.log(" 3.render...")
    // console.log(" data==>",  this.state.data) // FOR DATA RECEIVE CHECK
    return (
      <div>
        <h1>Hello World</h1>
        {
          // JUST FOR componentDidMount DATA RECEIVE SHOW HERE

          /* {this.state.data.map((v, i) => {
                      return <h4>{v.title}</h4>
                    })} */
        }

        {/* <h1>{this.state.count}</h1> */}

        {this.state.count < 5 && <Child count={this.state.count} />}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>count up</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>count down</button>
      </div>
    )
  }
}




export default App;

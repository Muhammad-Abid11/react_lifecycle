import React from "react";

export default class Child extends React.Component {

    constructor() { // here initial state define just because console recommandation
        super()
        this.state = {
            count: 0,
            data: [],
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDrivedStateFromProps in child", props)
        return null // return mendatory because it is static ,here 'this' is undefined
    }

    render() {
        return (
            <div>
                <h1>child</h1>
                <h1>{this.props.count}</h1>
            </div>
        )
    }
}
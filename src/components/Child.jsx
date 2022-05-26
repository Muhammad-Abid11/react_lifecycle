import React from "react";

export default class Child extends React.Component {

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
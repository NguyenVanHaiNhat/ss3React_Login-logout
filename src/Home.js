import {Component} from "react";

export default class Home extends Component{
    render() {
        return (
            <>
                <div style={{textAlign : 'center'}}></div>
                <div>
                    <h1>Welcome</h1>
                    <button onClick={this.props.onlogOut}>Log out</button>
                </div>
            </>
        )
    }
}
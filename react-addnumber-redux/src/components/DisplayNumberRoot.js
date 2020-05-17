import React, {Component} from "react";
import DisplayNumber from "./DisplayNumber";

export default class DisplayNumberRoot extends Component{
    render(){
        return (
            <div>
                <h1>Display Number Root</h1>
                <DisplayNumber number={this.props.number}/>
            </div>
        )
    }
}
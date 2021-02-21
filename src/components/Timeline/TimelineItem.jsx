import React, { Component } from "react";

class TimelineItem extends Component {
    render () {
        let { title, description } = this.props;

        return (
            <div>
                <h2>{ title }</h2>
                <p>{ description }</p>
            </div>
        );
    }
}
 
export default TimelineItem;
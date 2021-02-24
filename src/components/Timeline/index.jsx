import React, { Component } from "react";
import TimelineItem from "./TimelineItem";
import TimelineData from "../../data/timeline.json";
import "./timeline.scss";

class Timeline extends Component {
    render () {
        return (
            <div className="timeline">
                { TimelineData.map((data) => {
                    return <TimelineItem
                        title={ data.title }
                        description={ data.description }
                        date={ data.date }
                    ></TimelineItem>
                }) }
            </div>
        );
    }
}

export {
    Timeline,
    TimelineItem,
};
import React, { Component } from "react";
import Card from "../Card";

const MONTHS = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
];

class TimelineItem extends Component {
    render () {
        let { title, description } = this.props;
        let year, month, day;

        if (typeof this.props.date != "undefined") {
            [ year, month, day ] = this.props.date.split("-");
            month = MONTHS[parseInt(month) - 1];
        }

        return (
            <div class="timeline-item">
                <span 
                    className="timeline-item__circle"
                    data-sal="zoom-in"
                    data-sal-delay="200"
                    data-sal-duration="600"
                >
                    <div className="day">{ day }</div>
                    <div className="month">{ month }</div>
                    <div className="year">{ year }</div>
                </span>
                <div 
                    class="timeline-item__content" 
                    data-sal="fade-in"
                    data-sal-delay="600"
                    data-sal-duration="600"
                >
                    <Card
                        title={ title }
                        content={ description }
                    />
                </div>
            </div>
        );
    }
}
 
export default TimelineItem;
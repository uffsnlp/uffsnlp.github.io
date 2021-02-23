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
    render() {
        let { title, description } = this.props;
        let year, month, day;

        if (typeof this.props.date != "undefined") {
            [year, month, day] = this.props.date.split("-");
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
                    <div className="day">{day}</div>
                    <div className="month">{month}</div>
                    <div className="year">{year}</div>
                </span>
                <div
                    class="timeline-item__content"
                    data-sal="fade-in"
                    data-sal-delay="600"
                    data-sal-duration="600"
                >
                    <Card
                        title={title}
                        content={description}
                    />
                </div>

                <svg
                    width="348"
                    height="148"
                    viewBox="0 0 348 148"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    // data-sal="fade-in"
                >
                    <defs>
                        <linearGradient id="fill-left-to-right">
                            <stop offset="1" stop-color="#f23827">
                                <animate
                                    dur="1s"
                                    attributeName="offset"
                                    fill="freeze"
                                    from="0"
                                    to="1"
                                />
                            </stop>

                            <stop offset="0" stop-color="#e9c5c5">
                                <animate
                                    dur="1s"
                                    attributeName="offset"
                                    fill="freeze"
                                    from="0"
                                    to="1"
                                />
                            </stop>
                        </linearGradient>

                        <linearGradient id="fill-static">
                            <stop offset="0" stop-color="#e9c5c5">
                                <animate
                                    dur="1s"
                                    attributeName="offset"
                                    fill="freeze"
                                    from="0"
                                    to="1"
                                />
                            </stop>
                            <stop offset="0" stop-color="#f23827">
                                <animate
                                    dur="1s"
                                    attributeName="offset"
                                    fill="freeze"
                                    from="0"
                                    to="1"
                                />
                            </stop>
                        </linearGradient>
                    </defs>

                    <g id="circuit1">
                        <path
                            id="wire"
                            d="M2 0.5V52C2 57.5228 6.47715 62 12 62H78M78 62V20C78 14.4772 82.4772 10 88 10H204.5M78 62H129.5M329 62H129.5M129.5 62V107.5M129.5 107.5V128.5C129.5 134.023 133.977 138.5 139.5 138.5H204.5M129.5 107.5H101.5C95.9772 107.5 91.5 103.023 91.5 97.5V88.5M239 138.5H204.5M204.5 138.5V114C204.5 108.477 208.977 104 214.5 104H301"
                            stroke="url(#fill-left-to-right)"
                            stroke-width="4"
                        />
                        <circle
                            id="ellipse1"
                            cx="91.5"
                            cy="79.5"
                            r="7.5"
                            fill="#f23827"
                            stroke="#f23827"
                            stroke-width="4"
                        >
                            <animate
                                dur="1s"
                                attributeName="fill"
                                values="#e9c5c5"
                                from="0"
                                to="1"
                            />

                            <animate
                                dur="1s"
                                attributeName="stroke"
                                values="#e9c5c5"
                                from="0"
                                to="1"
                            />
                        </circle>
                        <circle
                            id="ellipse2"
                            cx="213.5"
                            cy="10"
                            r="7.5"
                            stroke="#e9c5c5"
                            stroke-width="4"
                        />
                        <circle
                            id="ellipse3"
                            cx="338"
                            cy="62"
                            r="7.5"
                            fill="#e9c5c5"
                            stroke="#e9c5c5"
                            stroke-width="4"
                        />
                        <circle
                            id="ellipse4"
                            cx="310"
                            cy="104"
                            r="7.5"
                            stroke="#e9c5c5"
                            stroke-width="4"
                        />
                        <circle
                            id="ellipse5"
                            cx="248"
                            cy="138.5"
                            r="7.5"
                            stroke="#e9c5c5"
                            stroke-width="4"
                        />
                    </g>
                </svg>
            </div>
        );
    }
}

export default TimelineItem;
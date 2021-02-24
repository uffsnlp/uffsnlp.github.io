import React, { Component } from "react";
import Card from "../Card";
import Observer from '@researchgate/react-intersection-observer';
import uniqueId from "../../utils/unique-id";

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
    constructor (props) {
        super(props);

        this.id = uniqueId();
    }

    state = {
        visible: false,
    };

    /**
     * Handles the befaviour of an element when it appears in viewport.
     * Particularlly applied to the svg figure.
     * 
     * @param {boolean} isIntersecting 
     * @param {number} intersectionRatio 
     */
    handleChange = ({ isIntersecting, intersectionRatio }) => {
        if (isIntersecting) {
            document.querySelectorAll(`#${this.id} .circuit1 *`)
                .forEach(element => {
                element.style.animationPlayState = "running";
            });

            if (! this.state.visible) {
                document.querySelector(`#${this.id} #wire`)
                    .style.stroke=`url(#fill-${this.id})`;
                
                document.getElementById(`fill-${this.id}`)
                    .querySelectorAll("animate")
                    .forEach(element => {
                        element.beginElementAt(0);
                });
            }
         
            this.setState({
                visible: true
            });
        }
    };

    render () {
        let { title, description } = this.props;
        let year, month, day;
        let circleContent = "";
        let circleClass = "timeline-item__circle";

        if (typeof this.props.date != "undefined") {
            [year, month, day] = this.props.date.split("-");
            month = MONTHS[parseInt(month) - 1];
    
            circleContent = 
            (<>
                <div className="day">{day}</div>
                <div className="month">{month}</div>
                <div className="year">{year}</div>
            </>);
        
        } else {
            circleClass += "--small";
        }

        return (
            <div class="timeline-item" id={ this.id }>
                <span
                    className={circleClass}
                    data-sal="zoom-in"
                    data-sal-delay="200"
                    data-sal-duration="600"
                >
                    {circleContent}   
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

                <Observer
                    onChange={ this.handleChange }
                    threshold={ 1 }
                >
                    <svg
                        width="348"
                        height="148"
                        viewBox="0 0 348 148"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        // className="svg-animation--paused"
                        // data-sal="fade-in"
                    >
                        <defs>
                            <linearGradient id={ `fill-${this.id}` }>
                                <stop offset="0" stop-color="#f23827">
                                    <animate
                                        dur="1s"
                                        attributeName="offset"
                                        fill="freeze"
                                        from="0"
                                        to="1"
                                        restart="always"
                                    />
                                </stop>

                                <stop offset="0" stop-color="#e9c5c5">
                                    <animate
                                        dur="1s"
                                        attributeName="offset"
                                        fill="freeze"
                                        from="0"
                                        to="1"
                                        restart="always"
                                    />
                                </stop>
                            </linearGradient>
                        </defs>

                        <g className="circuit1">
                            <path
                                id="wire"
                                d="M2
                                    0.5V52C2
                                    57.5228
                                    6.47715
                                    62
                                    12
                                    62H78M78
                                    62V20C78
                                    14.4772
                                    82.4772
                                    10
                                    88
                                    10H204.5M78
                                    62H129.5M329
                                    62H129.5M129.5
                                    62V107.5M129.5
                                    107.5V128.5C129.5
                                    134.023
                                    133.977
                                    138.5
                                    139.5
                                    138.5H204.5M129.5
                                    107.5H101.5C95.9772
                                    107.5
                                    91.5
                                    103.023
                                    91.5
                                    97.5V88.5M239
                                    138.5H204.5M204.5
                                    138.5V114C204.5
                                    108.477
                                    208.977
                                    104
                                    214.5
                                    104H301"
                                stroke="#e9c5c5"
                                stroke-width="4"
                            />
                            <circle
                                id="ellipse1"
                                cx="91.5"
                                cy="79.5"
                                r="7.5"
                                fill="#fff"
                                stroke="#fff"
                                stroke-width="4"
                            />
                            <circle
                                id="ellipse2"
                                cx="213.5"
                                cy="10"
                                r="7.5"
                                stroke="#fff"
                                stroke-width="4"
                            />
                            <circle
                                id="ellipse3"
                                cx="338"
                                cy="62"
                                r="7.5"
                                fill="#fff"
                                stroke="#fff"
                                stroke-width="4"
                            />
                            <circle
                                id="ellipse4"
                                cx="310"
                                cy="104"
                                r="7.5"
                                stroke="#fff"
                                stroke-width="4"
                            />
                            <circle
                                id="ellipse5"
                                cx="248"
                                cy="138.5"
                                r="7.5"
                                stroke="#fff"
                                stroke-width="4"
                            />
                        </g>
                    </svg>
                </Observer>
            </div>
        );
    }
}

export default TimelineItem;
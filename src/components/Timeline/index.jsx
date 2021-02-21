import React, { Component } from "react";
import TimelineItem from "./TimelineItem";

import "./timeline.scss";

class Timeline extends Component {
    render () {
        let { children } = this.props;

        return (
            <div class="timeline">
                <div class="timeline-item">
                    <span className="timeline-item__circle--small">
                        {/* <div className="day">20</div>
                        <div className="month">FEV</div>
                        <div className="year">2021</div> */}
                        {/* <div>1</div> */}
                    </span>
                    <div class="timeline-item__content">

                        <h2>ASDASD</h2>
                        <p>kjqwnf qif nqwdnqwnfqkfnqwfkqwjf nqkwfjnqwkfnqkw</p>
                    </div>
                </div>


                <div class="timeline-item">
                    <span className="timeline-item__circle">
                        <div className="day">27</div>
                        <div className="month">FEV</div>
                        <div className="year">2021</div>
                    </span>
                    <div class="timeline-item__content">

                        <h2>ASDASD</h2>
                        <p>kjqwnf qif nqwdnqwnfqkfnqwfkqwjf nqkwfjnqwkfnqkw</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <span className="timeline-item__circle">
                        <div className="day">3</div>
                        <div className="month">ABR</div>
                        <div className="year">2021</div>
                    </span>
                    <div class="timeline-item__content">

                        <h2>ASDASD</h2>
                        <p>kjqwnf qif nqwdnqwnfqkfnqwfkqwjf nqkwfjnqwkfnqkw</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export {
    Timeline,
    TimelineItem,
};
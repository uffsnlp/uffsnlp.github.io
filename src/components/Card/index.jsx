import React, { Component } from "react";
import "./card.scss";

class Card extends Component {
    render () {
        let { title, content, styling } = this.props;
        let cardClass = "card";

        if (!content) {
            cardClass += " card--no-content";
        }

        return (
            <div className={`${cardClass} ${styling || ""}`}>
                <div className="card__title">
                    {title}
                </div>

                <div className="card__body">
                    {content}
                </div>
            </div>
        );
    }
}
 
export default Card;
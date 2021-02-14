import React, { Component } from 'react';
import "./header.scss"

class Header extends Component {
    render() { 
        return (
            <header className="header">
                <div className="container bg-red-500">
                    { this.props.children }
                </div>
            </header>
        );
    }
}
 
export default Header;
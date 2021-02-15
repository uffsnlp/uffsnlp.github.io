import React, {Component} from "react";
import "./navbar.scsss";

class Navbar extends Component {
    render(){
        let home="/", blog="/", bibliography = "/";
        let contact="/", join="/";

        return (
            <nav className="navbar navbar-fixed">
                <a href={home} className="nav-item">
                    Início
                </a>
                <a href={blog} className="nav-item">
                    Blog
                </a>
                <a href="#" className="nav-item dropdown">
                    O grupo
                    <div className="dropdown-content">
                        <a href={bibliography} className="dropdown-item"> 
                            Bibliografia
                        </a>
                        <a href={contact} className="dropdown-item">
                            Contato
                        </a>
                    </div>
                </a>
                <a href={join} className="nav-item">
                    Participar
                </a>
            </nav>
        );
    }
}

export default Navbar;
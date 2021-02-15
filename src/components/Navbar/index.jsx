import React, {Component} from "react";
import "./navbar.scss";
import { Link } from "gatsby";

class Navbar extends Component {
    render(){
        let home="/", blog="/", bibliography = "/";
        let contact="/", join="/";

        return (
            <nav className="navbar navbar-fixed">
                <Link to={home} className="nav-item">
                    Início
                </Link>
                <Link to={blog} className="nav-item">
                    Blog
                </Link>
                <div to="#" className="nav-item dropdown">
                    O grupo
                    <div className="dropdown-content">
                        <Link to={bibliography} className="dropdown-item"> 
                            Bibliografia
                        </Link>
                        <Link to={contact} className="dropdown-item">
                            Contato
                        </Link>
                    </div>
                </div>
                <Link to={join} className="nav-item">
                    Participar
                </Link>
            </nav>
        );
    }
}

export default Navbar;
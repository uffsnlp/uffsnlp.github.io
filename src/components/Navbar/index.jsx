import React, {Component} from "react";
import "./navbar.scss";
import { Link } from "gatsby";

class Navbar extends Component {
    render () {
        let home = "/", blog = "/blog", study = "/study";
        let join = "/join", timeline = "/timeline";

        return (
            <nav className="navbar navbar-fixed">
                <Link to={ home } className="nav-item">
                    Início
                </Link>
                <Link to={ blog } className="nav-item">
                    Blog
                </Link>
                <div to="#" className="nav-item dropdown">
                    O grupo
                    <div className="dropdown-content">
                        <Link to={ study } className="dropdown-item"> 
                            Material de Estudo
                        </Link>

                        <Link to={ timeline } className="dropdown-item"> 
                            Cronograma
                        </Link>
                    </div>
                </div>
                <Link to={ join } className="nav-item">
                    Participar
                </Link>
            </nav>
        );
    }
}

export default Navbar;
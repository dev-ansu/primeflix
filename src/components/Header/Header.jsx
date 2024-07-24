import "./style.css";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ()=>{
    return(
        <header>
            <div id="header">
                <Link className="logo" to="/">PrimeFlix</Link>
                <Link className="favoritos" to="/favoritos"><i className="bi bi-heart"></i> Meus filmes</Link>
            </div>
        </header>
    )
}

export default Header;
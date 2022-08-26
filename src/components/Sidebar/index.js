import "./index.scss";
import { Link, NavLink } from 'react-router-dom';
import Aditya from "../../assets/images/Aditya-sub.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'


const sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to='/'>
                <img src="https://media2.giphy.com/media/l0Ex9w7OHj6M3ieK4/giphy.gif?cid=ecf05e47mmebreeww4683hvpfoke2c4tx09ldgrd5pmiuka0&rid=giphy.gif&ct=g" alt="logo"></img>
                <img src={Aditya} className="sub-logo" alt="Aditya"></img>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to='/about'>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="linkedin.com/in/aditya-sonakiya-4433b8184" >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Adityasonakiya" >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>

            </ul>
        </div>
    )
};

export default sidebar;


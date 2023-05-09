import { Link } from "react-router-dom";

export const NavbarItem = ({name, url}) => {
    return (
        <li className="nav-item nav__enlace">
<Link className="nav-link" to={url}>{name}</Link>

        </li>
    );
};

import logo from "../../assets/timbertop.png"
import * as styles from './header.css'
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";



const Header = () => {
    return (
        <Navbar className={styles.navbar}>
                <Navbar.Brand>
                    <img className={styles.logo} src={logo} alt="timbertop united logo" />
                </Navbar.Brand>
                <Nav className={styles.nav}>
                    <Nav.Link className={styles.navLink} as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link className={styles.navLink} as={Link} to='/products'>Products</Nav.Link>
                    <Nav.Link className={styles.navLink} as={Link} to='/login'>Login</Nav.Link>
                </Nav>
        </Navbar>
    )
}

export default Header;
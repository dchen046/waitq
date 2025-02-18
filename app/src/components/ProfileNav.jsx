import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoutBtn from './LogoutBtn';
import { useLocation } from 'react-router-dom';

const ProfileNav = () => {
    const location = useLocation();
    const url = location.pathname;
    console.log(url);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Waitq</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="/home/waitlist">Home</Nav.Link>
                        <Nav.Link href="/home/layout">layout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <LogoutBtn />
            </Container>
        </Navbar>
    );
}

export default ProfileNav;
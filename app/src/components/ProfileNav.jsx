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
        <Navbar 
            expand="lg" 
            className="bg-body-tertiary" 
            bg="dark" 
            data-bs-theme="dark"
        >
            <Container>
                <Navbar.Brand>Waitq</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav 
                        className="flex-grow-1 justify-content-evenly"
                        activeKey={location.pathname}
                    >
                        <Nav.Link eventKey="/home/waitlist" href="/home/waitlist">Waitlist</Nav.Link>
                        <Nav.Link eventKey="/home/layout" href="/home/layout">Layout</Nav.Link>
                        <LogoutBtn />
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
}

export default ProfileNav;
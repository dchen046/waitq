import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoutBtn from './LogoutBtn';

const ProfileNav = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Waitq</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#waitlist">Waitlist</Nav.Link>
                        <Nav.Link href="#layout">Layout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <LogoutBtn />
            </Container>
        </Navbar>
    );
}

export default ProfileNav;
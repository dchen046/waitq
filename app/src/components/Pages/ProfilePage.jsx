import { Container } from "react-bootstrap";
import ProfileForm from "../ProfileForm";

const ProfilePage = () => {
    return (
        <Container className="d-flex flex-column justify-content-center w-50">
            <h1>Profile</h1>
            <ProfileForm />
        </Container>
    )
}

export default ProfilePage;
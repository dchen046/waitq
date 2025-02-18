import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const BadPath = () => {
    const navigate = useNavigate();

    const handleLoginDirect = () => {
        navigate('/');
    }
    
    return (
        <div className="center-content">
            <h1>Session expired!</h1>
            <h2>
                Please Log In To Gain Access!
            </h2>

            <Button
                variant="primary"
                onClick={handleLoginDirect}
                >
                Log in
            </Button>
        </div>

    )
}

export default BadPath;
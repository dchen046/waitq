import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useTokenUpdateContext } from '../context/TokenContext';

const LogoutBtn = () => {
    const navigate = useNavigate();
    const updateTokenStatus = useTokenUpdateContext();
    const handleLogout = () => {
        localStorage.removeItem('jwt');
        updateTokenStatus();
        navigate('/');
    }

    return(
        <Button variant='danger' onClick={handleLogout}>Logout</Button>
    )
}

export default LogoutBtn;
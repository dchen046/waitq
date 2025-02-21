import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useTokenUpdateContext } from '../context/TokenContext';
import { MdLogout } from "react-icons/md";


const LogoutBtn = () => {
    const navigate = useNavigate();
    const updateTokenStatus = useTokenUpdateContext();
    const handleLogout = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('profile');
        updateTokenStatus();
        navigate('/');
    }

    return(
        <Button variant='danger' onClick={handleLogout}>
            <MdLogout />
        </Button>
    )
}

export default LogoutBtn;
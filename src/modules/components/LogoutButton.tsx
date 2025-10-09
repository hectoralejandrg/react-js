import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../slice/authSlice';
import { RootState } from '../../store/store';

const LogoutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <Button 
            color="inherit" 
            onClick={handleLogout}
            sx={{ ml: 2 }}
        >
            Logout
        </Button>
    );
};

export default LogoutButton;
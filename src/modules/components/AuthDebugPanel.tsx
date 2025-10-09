import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Box, Typography, Paper, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../slice/authSlice';

const AuthDebugPanel = () => {
    const authState = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    return (
        <Paper sx={{ p: 2, m: 2, bgcolor: '#f5f5f5' }}>
            <Typography variant="h6" gutterBottom>
                🔍 Auth Debug Panel
            </Typography>
            <Box sx={{ mb: 1 }}>
                <Typography variant="body2">
                    <strong>Is Authenticated:</strong> {authState.isAuthenticated ? '✅ Yes' : '❌ No'}
                </Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
                <Typography variant="body2">
                    <strong>Token:</strong> {authState.token ? `${authState.token.substring(0, 20)}...` : '❌ No token'}
                </Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
                <Typography variant="body2">
                    <strong>User:</strong> {authState.user ? JSON.stringify(authState.user) : '❌ No user'}
                </Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
                <Typography variant="body2">
                    <strong>LocalStorage Token:</strong> {localStorage.getItem('token') ? '✅ Present' : '❌ Missing'}
                </Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
                <Typography variant="body2">
                    <strong>LocalStorage User:</strong> {localStorage.getItem('user') ? '✅ Present' : '❌ Missing'}
                </Typography>
            </Box>
            <Button 
                onClick={() => dispatch(logout())} 
                variant="outlined" 
                size="small" 
                color="secondary"
                sx={{ mt: 1 }}
            >
                Clear Auth State
            </Button>
        </Paper>
    );
};

export default AuthDebugPanel;
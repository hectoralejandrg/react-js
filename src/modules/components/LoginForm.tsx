import { useState } from 'react';
import {
    Container,
    Paper,
    TextField,
    Button,
    Typography,
    Box,
    Alert,
    CircularProgress
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../slice/authSlice';
import { useNavigate } from 'react-router-dom';
import { LoginRequest } from '../types/types';
import { useSmartLogin } from '../../hooks/useSmartLogin';

const validationSchema = Yup.object({
    username: Yup.string()
        .required('Username is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

const LoginForm = () => {
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const { smartLogin } = useSmartLogin();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik<LoginRequest>({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                setError('');
                setIsLoading(true);
                
                const result = await smartLogin(values);
                
                if (result && result.token && result.user) {
                    dispatch(loginSuccess({
                        token: result.token,
                        user: result.user
                    }));
                    
                    navigate('/dashboard');
                } else {
                    setError('Invalid response from server. Please try again.');
                }
            } catch (err: any) {
                const errorMessage = err?.data?.message || err?.message || 'Login failed. Please try again.';
                setError(errorMessage);
            } finally {
                setIsLoading(false);
            }
        },
    });

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
                    <Typography component="h1" variant="h4" align="center" gutterBottom>
                        Login
                    </Typography>
                    
                    <Alert severity="info" sx={{ mb: 2 }}>
                        <strong>Demo Mode:</strong> Use any username/password to test (e.g., "admin" / "123456")
                    </Alert>
                    
                    {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error}
                        </Alert>
                    )}

                    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={isLoading}
                            startIcon={isLoading ? <CircularProgress size={20} /> : null}
                        >
                            {isLoading ? 'Logging in...' : 'Login'}
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default LoginForm;
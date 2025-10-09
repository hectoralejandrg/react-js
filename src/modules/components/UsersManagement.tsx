import { useState } from 'react';
import {
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Box,
    Alert,
    CircularProgress,
    Chip,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CreateUserRequest } from '../types/types';
import { useSmartUsers } from '../../hooks/useSmartUsers';
import AppLayout from './AppLayout';
import EmptyState from './EmptyState';

const validationSchema = Yup.object({
    username: Yup.string()
        .min(3, 'Username must be at least 3 characters')
        .required('Username is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    role: Yup.string()
        .required('Role is required'),
});

const UsersManagement = () => {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [isCreating, setIsCreating] = useState(false);

    const { getUsersData, smartCreateUser } = useSmartUsers();
    const usersQuery = getUsersData();
    const { data: users, error: usersError, isLoading } = usersQuery;

    const formik = useFormik<CreateUserRequest>({
        initialValues: {
            username: '',
            password: '',
            role: '',
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                setError('');
                setSuccess('');
                setIsCreating(true);

                await smartCreateUser(values);
                setSuccess('User created successfully!');
                resetForm();
                setOpen(false);

                
                setTimeout(() => setSuccess(''), 3000);
            } catch (err: any) {
                setError(err?.data?.message || 'Failed to create user. Please try again.');
            } finally {
                setIsCreating(false);
            }
        },
    });

    const handleClose = () => {
        setOpen(false);
        formik.resetForm();
        setError('');
    };

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <AppLayout title="Users Management">
            {success && (
                <Alert severity="success" sx={{ mb: 2 }}>
                    {success}
                </Alert>
            )}

            {usersError && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    Failed to load users. Please try again.
                </Alert>
            )}

            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4" component="h1">
                    Users
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => setOpen(true)}
                >
                    Add User
                </Button>
            </Box>

            {users && users.length > 0 ? (
                <TableContainer component={Paper} elevation={2}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Username</TableCell>
                                <TableCell>Role</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow
                                    key={user.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {user.id}
                                    </TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={user.role}
                                            color={user.role === 'Admin' ? 'primary' : 'default'}
                                            size="small"
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <EmptyState
                    title="No users found"
                    description="No users have been created yet. Click 'Add User' to create your first user."
                />
            )}

            
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>Add New User</DialogTitle>
                <form onSubmit={formik.handleSubmit}>
                    <DialogContent>
                        {error && (
                            <Alert severity="error" sx={{ mb: 2 }}>
                                {error}
                            </Alert>
                        )}

                        <TextField
                            autoFocus
                            margin="dense"
                            id="username"
                            name="username"
                            label="Username"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            margin="dense"
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            fullWidth
                            variant="outlined"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            margin="dense"
                            id="role"
                            name="role"
                            label="Role"
                            type="text"
                            fullWidth
                            variant="outlined"
                            placeholder="e.g., Admin, User"
                            value={formik.values.role}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.role && Boolean(formik.errors.role)}
                            helperText={formik.touched.role && formik.errors.role}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={isCreating}
                            startIcon={isCreating ? <CircularProgress size={20} /> : null}
                        >
                            {isCreating ? 'Creating...' : 'Create User'}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </AppLayout>
    );
};

export default UsersManagement;
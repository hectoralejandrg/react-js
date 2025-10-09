import { ReactNode } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Container,
    Box,
    Menu,
    MenuItem,
    Avatar,
    Divider,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import {
    Logout as LogoutIcon,
    Person as PersonIcon,
    Settings as SettingsIcon,
    Dashboard as DashboardIcon,
    People as PeopleIcon,
    Menu as MenuIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../slice/authSlice';
import { RootState } from '../../store/store';

interface AppLayoutProps {
    children: ReactNode;
    title?: string;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const AppLayout = ({ children, title = 'Dashboard', maxWidth = 'lg' }: AppLayoutProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.auth.user);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
        handleMenuClose();
    };

    const handleProfile = () => {
        handleMenuClose();
    };

    const handleSettings = () => {
        handleMenuClose();
    };

    return (
        <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: '#f5f5f5' }}>
            <AppBar position="static" elevation={1}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ mr: 3 }}>
                        {title}
                    </Typography>

                    {/* Navigation Buttons */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, flexGrow: 1 }}>
                        <Button 
                            color="inherit" 
                            startIcon={<DashboardIcon />}
                            onClick={() => navigate('/dashboard')}
                        >
                            Dashboard
                        </Button>
                        <Button 
                            color="inherit" 
                            startIcon={<PeopleIcon />}
                            onClick={() => navigate('/users')}
                        >
                            Users
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: { xs: 1, md: 0 } }} />

                    {/* User Info and Menu */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
                            Bienvenido, {user?.username || 'User'}
                        </Typography>
                        
                        <IconButton
                            onClick={handleMenuOpen}
                            size="small"
                            sx={{ ml: 1 }}
                            aria-controls={Boolean(anchorEl) ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main' }}>
                                <PersonIcon fontSize="small" />
                            </Avatar>
                        </IconButton>
                    </Box>

                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        onClick={handleMenuClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={handleProfile}>
                            <Avatar>
                                <PersonIcon />
                            </Avatar>
                            Profile
                        </MenuItem>
                        
                        <MenuItem onClick={handleSettings}>
                            <SettingsIcon sx={{ mr: 2 }} />
                            Settings
                        </MenuItem>
                        
                        <Divider />
                        
                        <MenuItem onClick={handleLogout}>
                            <LogoutIcon sx={{ mr: 2 }} />
                            Logout
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Container maxWidth={maxWidth} sx={{ py: 4 }}>
                {children}
            </Container>
        </Box>
    );
};

export default AppLayout;
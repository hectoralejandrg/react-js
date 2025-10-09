import { Typography, Paper, Box, Card, CardContent } from '@mui/material';
import { 
    People as PeopleIcon,
    Security as SecurityIcon,
    Dashboard as DashboardIcon,
    Settings as SettingsIcon
} from '@mui/icons-material';
import AppLayout from '../components/AppLayout';

const DashboardPage = () => {
    const stats = [
        {
            title: 'Total Users',
            value: '24',
            icon: <PeopleIcon sx={{ fontSize: 40 }} />,
            color: 'primary.main'
        },
        {
            title: 'Active Sessions',
            value: '12',
            icon: <SecurityIcon sx={{ fontSize: 40 }} />,
            color: 'success.main'
        },
        {
            title: 'System Status',
            value: 'Online',
            icon: <DashboardIcon sx={{ fontSize: 40 }} />,
            color: 'info.main'
        },
        {
            title: 'Last Update',
            value: '2m ago',
            icon: <SettingsIcon sx={{ fontSize: 40 }} />,
            color: 'warning.main'
        }
    ];

    return (
        <AppLayout title="Dashboard" maxWidth="xl">
            <Typography variant="h4" component="h1" gutterBottom>
                Bienvenido al Panel de Control
            </Typography>
            
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Aquí tienes un resumen del estado de tu sistema y estadísticas.
            </Typography>

            <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: 3, 
                mb: 4 
            }}>
                {/* {stats.map((stat, index) => (
                    <Card elevation={2} key={index}>
                        <CardContent>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Box>
                                    <Typography variant="h4" component="h2" fontWeight="bold">
                                        {stat.value}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {stat.title}
                                    </Typography>
                                </Box>
                                <Box sx={{ color: stat.color }}>
                                    {stat.icon}
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                ))} */}
            </Box>

            <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Actividad Reciente
                </Typography>
                <Typography variant="body2" color="text.secondary">
                </Typography>
            </Paper>
        </AppLayout>
    );
};

export default DashboardPage;
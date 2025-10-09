import { Box, Typography, Paper } from '@mui/material';
import { PersonAdd as PersonAddIcon } from '@mui/icons-material';

interface EmptyStateProps {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
}

const EmptyState = ({ 
    title = "No data available", 
    description = "There are no items to display at the moment.",
    icon = <PersonAddIcon sx={{ fontSize: 64, color: 'text.secondary' }} />
}: EmptyStateProps) => {
    return (
        <Paper 
            elevation={0} 
            sx={{ 
                p: 4, 
                textAlign: 'center',
                bgcolor: 'grey.50',
                border: '1px dashed',
                borderColor: 'grey.300'
            }}
        >
            <Box sx={{ mb: 2 }}>
                {icon}
            </Box>
            <Typography variant="h6" color="text.secondary" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </Paper>
    );
};

export default EmptyState;
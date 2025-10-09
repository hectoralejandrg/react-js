import { useState } from 'react';
import { Button, Paper, Typography, Box, Alert } from '@mui/material';
import { useSmartLogin } from '../../hooks/useSmartLogin';
import { useSmartUsers } from '../../hooks/useSmartUsers';

const ApiTester = () => {
    const [testResults, setTestResults] = useState<string[]>([]);
    const { smartLogin } = useSmartLogin();
    const { smartCreateUser } = useSmartUsers();

    const addResult = (message: string) => {
        setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
    };

    const testLogin = async () => {
        try {
            addResult('🔄 Testing login...');
            const result = await smartLogin({ username: 'test', password: 'test123' });
            addResult(`✅ Login successful! Token: ${result.token.substring(0, 20)}...`);
        } catch (error: any) {
            addResult(`❌ Login failed: ${error?.data?.message || error.message}`);
        }
    };

    const testCreateUser = async () => {
        try {
            addResult('🔄 Testing user creation...');
            const result = await smartCreateUser({ 
                username: `testuser_${Date.now()}`, 
                password: 'password123',
                role: 'User'
            });
            addResult(`✅ User creation successful! User: ${result.username}`);
        } catch (error: any) {
            addResult(`❌ User creation failed: ${error?.data?.message || error.message}`);
        }
    };

    const clearResults = () => {
        setTestResults([]);
    };

    return (
        <Paper sx={{ p: 3, m: 2, bgcolor: '#f8f9fa' }}>
            <Typography variant="h6" gutterBottom>
                🧪 API Integration Tester
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
                Esta herramienta prueba que las APIs estén usando correctamente el globalApi con la URL base: https://localhost:7290
            </Typography>
            
            <Box sx={{ mb: 2 }}>
                <Button 
                    variant="contained" 
                    onClick={testLogin}
                    sx={{ mr: 1, mb: 1 }}
                >
                    Test Login API
                </Button>
                <Button 
                    variant="contained" 
                    onClick={testCreateUser}
                    sx={{ mr: 1, mb: 1 }}
                >
                    Test Create User API
                </Button>
                <Button 
                    variant="outlined" 
                    onClick={clearResults}
                    sx={{ mb: 1 }}
                >
                    Clear Results
                </Button>
            </Box>

            <Alert severity="info" sx={{ mb: 2 }}>
                <strong>Nota:</strong> Si tu API de .NET Core está corriendo en https://localhost:7290, 
                deberías ver intentos de conexión real. Si no, verás fallback a datos mock.
            </Alert>

            <Box sx={{ maxHeight: 300, overflow: 'auto', bgcolor: '#fff', p: 2, border: '1px solid #ddd' }}>
                {testResults.length === 0 ? (
                    <Typography variant="body2" color="textSecondary">
                        No hay resultados de prueba aún. Haz clic en los botones de arriba para probar.
                    </Typography>
                ) : (
                    testResults.map((result, index) => (
                        <Typography 
                            key={index} 
                            variant="body2" 
                            sx={{ 
                                fontFamily: 'monospace', 
                                fontSize: '0.8rem',
                                mb: 0.5,
                                color: result.includes('❌') ? 'error.main' : 
                                       result.includes('✅') ? 'success.main' : 'text.primary'
                            }}
                        >
                            {result}
                        </Typography>
                    ))
                )}
            </Box>
        </Paper>
    );
};

export default ApiTester;
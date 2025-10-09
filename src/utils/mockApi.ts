// Mock API data and handlers for development
export const mockUsers = [
  { id: 1, username: 'admin', role: 'Admin' },
  { id: 2, username: 'user1', role: 'User' },
  { id: 3, username: 'moderator', role: 'Moderator' }
];

export const mockLoginResponse = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  user: { id: 1, username: 'admin', role: 'Admin' }
};

// Mock API delay to simulate network
export const mockDelay = (ms: number = 800) => 
  new Promise(resolve => setTimeout(resolve, ms));

// Mock login validation
export const validateMockLogin = (username: string, password: string) => {
  // Accept any username/password for testing
  if (username && password) {
    return {
      success: true,
      data: mockLoginResponse
    };
  }
  return {
    success: false,
    error: 'Invalid credentials'
  };
};
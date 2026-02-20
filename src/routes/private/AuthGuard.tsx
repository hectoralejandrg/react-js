import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface AuthGuardProps {
  children: ReactElement;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const isAuthenticated = false; // Tu lógica de autenticación
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

export default AuthGuard;
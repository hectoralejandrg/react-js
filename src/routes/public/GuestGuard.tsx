import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface GuestGuardProps {
  children: ReactElement;
}

const GuestGuard = ({ children }: GuestGuardProps) => {
  const isAuthenticated = false; // Tu lógica de autenticación
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return children;
};

export default GuestGuard;
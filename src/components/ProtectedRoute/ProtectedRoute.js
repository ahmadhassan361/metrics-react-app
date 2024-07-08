import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../services/AuthService';
import ProtectedLayout from '../Layout/ProtectedLayout';

const ProtectedRoute = ({ component: Component }) => {
  return isAuthenticated() ? (
    <ProtectedLayout>
      <Component />
    </ProtectedLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
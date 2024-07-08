import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Dashboard/Home';
import { Login } from './components/Auth/Login';
import { Logout } from './components/Auth/Logout';
import { Reports } from './components/Dashboard/Reports';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { Settings } from './components/Dashboard/Settings';

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedRoute component={Home} />} />
      <Route path="/reports" element={<ProtectedRoute component={Reports} />} />
      <Route path="/settings" element={<ProtectedRoute component={Settings} />} />
      <Route path="/logout" element={<ProtectedRoute component={Logout} />} />
      <Route path="/" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component }) => {
    const accessToken = localStorage.getItem('user');
    return accessToken ? Component : <Navigate to="/login" />;
};

export default ProtectedRoute;
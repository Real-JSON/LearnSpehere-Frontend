import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';
import SignIn from './routes/SignIn.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './routes/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Dash from './components/DashboardComponent/dash.jsx';
import Subject from './components/SubjectComponent/Subject.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/signin',
        element: <SignIn />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/dashboard',
        element: (
            <Dashboard>
                <Dash />
            </Dashboard>
        ),
    },
    {
        path: '/subjects',
        element: (
            <Dashboard>
                <Subject />
            </Dashboard>
        ),
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

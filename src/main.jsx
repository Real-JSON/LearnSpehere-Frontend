import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';
import SignIn from './routes/SignIn.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './routes/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import DashboardMain from './components/DashboardComponent/DashboardMain.jsx';
import Subject from './components/SubjectComponent/Subject.jsx';
import StickyHeadTable from './components/PaymentTable/StickyHeadTable.jsx';
import SubjectCard from './components/SubjectCard/SubjecCard.jsx';

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
                <DashboardMain />
            </Dashboard>
        ),
    },
    {
        path: '/subjects',
        element: (
            <Dashboard>
                <SubjectCard />
            </Dashboard>
        ),
    },
    {
        path: '/payments',
        element: (
            <Dashboard>
                <Subject />
            </Dashboard>
        ),
    },
    {
        path: '/payment-history',
        element: (
            <Dashboard>
                <StickyHeadTable />
            </Dashboard>
        ),
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

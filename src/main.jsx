import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import "./index.css";

import App from './App.jsx';
import SignIn from './routes/SignIn.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './routes/Register.jsx';
// import Dashboard from './pages/Dashboard.jsx';
import Course from './pages/Course.jsx';

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
        path: '/courses',
        element: <Course />,
    },
    // {
    //     path: '/dashboard',
    //     element: (
    //         <Dashboard>
    //             <DashboardMain />
    //         </Dashboard>
    //     ),
    // },
    // {
    //     path: '/subjects',
    //     element: (
    //         <Dashboard>
    //             <SubjectCard />
    //         </Dashboard>
    //     ),
    // },
    // {
    //     path: '/payments',
    //     element: (
    //         <Dashboard>
    //             <PaymentCard />
    //         </Dashboard>
    //     ),
    // },
    // {
    //     path: '/payment-history',
    //     element: (
    //         <Dashboard>
    //             <StickyHeadTable />
    //         </Dashboard>
    //     ),
    // },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

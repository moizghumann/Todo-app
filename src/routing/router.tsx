import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import Layout from "./Layout";
import UserPageList from "./UserPageList";
import UserDetail from "./UserDetail";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            // remember, the path of children should be in accordance with their parent's path
            { path: '', element: <HomePage /> },
            { path: '/login', element: <LoginPage /> },
            { path: 'contact', element: <ContactPage /> }
        ]
    },
    // layout group route for protected routes
    {
        element: <PrivateRoutes />,
        children: [
            {
                path: 'users',
                element: (
                    <>
                        <Layout />
                        <UserPageList />
                    </>
                ),
                children: [
                    // we dont need 'users/:id here since its parent path is users
                    { path: ':id', element: <UserDetail /> },
                ]
            },
        ]
    }
])

export default router
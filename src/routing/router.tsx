import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import Layout from "./Layout";
import UserPageList from "./UserPageList";
import UserDetail from "./UserDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <HomePage /> },
            {
                path: 'users',
                element: <UserPageList />,
                children: [
                    { path: ':id', element: <UserDetail /> }
                ]
            },

            { path: 'contact', element: <ContactPage /> }
        ]
    }
])

export default router
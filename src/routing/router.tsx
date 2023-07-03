import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import UserDetailPage from "./UserDetailPage";
import ContactPage from "./ContactPage";

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/users', element: <UserListPage /> },
    { path: '/userdetail', element: <UserDetailPage /> },
    { path: '/contact', element: <ContactPage /> }
])

export default router
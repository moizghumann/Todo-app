import useLogStore from './useLogStore'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {

    const { username, password } = useLogStore(s => ({
        username: s.username,
        password: s.password
    }));

    if (username != 'moizghuman' && password != 'bigbang123')
        return (
            <Navigate to={'/login'} />
        )

    return <Outlet />
}

export default PrivateRoutes
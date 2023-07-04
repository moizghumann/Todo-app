import { Navigate, Outlet } from 'react-router-dom'
import UserList from './UserList'
import useAuth from './hooks/useAuth'

const UserPageList = () => {

    const { user } = useAuth();
    // if user doesnt exist
    if (!user)
        return <Navigate to={'/login'} />

    return (
        <div>
            <div className="row">
                <div className="col">
                    <UserList />
                </div>
                <div className="col">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default UserPageList
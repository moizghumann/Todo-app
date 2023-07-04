import { Link, Navigate, Outlet } from 'react-router-dom'
import UserList from './UserList'
import useLogStore from './useLogStore'

const UserPageList = () => {

    const { username, password } = useLogStore((state) => ({
        username: state.username,
        password: state.password,
    }));


    const { logout } = useLogStore();
    console.log(username, password);
    // if user doesnt exist
    if (username != 'moizghuman' || password != 'bigbang123')
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

            <div className="row">
                <div className="col">
                    <Link to={'/'}>
                        <button onClick={() => logout()} className="btn btn-primary mt-3">Log Out</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserPageList
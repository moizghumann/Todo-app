import { Outlet } from 'react-router-dom'
import UserList from './UserList'

const UserPageList = () => {
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
import { ReactNode, useContext, useReducer } from 'react'
import { AuthContext } from './context/authContext'
import loginStatusReducer from './reducers/loginStatusReducer';

interface Prop {
    children: ReactNode;
}

const AuthProvider = ({ children }: Prop) => {
    const [user, dispatch] = useReducer(loginStatusReducer, '');

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
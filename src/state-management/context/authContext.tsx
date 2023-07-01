import { createContext } from "react";
import { AuthAction } from "../reducers/loginStatusReducer";

interface AuthContextType {
    user: string;
    dispatch: React.Dispatch<AuthAction>
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)
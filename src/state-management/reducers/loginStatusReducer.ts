interface LoginAction {
    type: 'LOGIN';
    username: string;
}

interface LogoutAction {
    type: 'LOGOUT';
}

// action type which actually updates the state
export type AuthAction = LoginAction | LogoutAction

// The purpose of the action argument is to provide a way to communicate what change you want to make to the state.
const loginStatusReducer = (state: string, action: AuthAction): string => {
    // Based on the action type, we can modify the state accordingly and return a new state that reflects the desired changes.
    switch (action.type) {
        case 'LOGIN':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            return state
    }
}

export default loginStatusReducer
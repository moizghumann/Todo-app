import useAuth from "./useAuth";

const LoginStatus = () => {
  const context = useAuth();

  return (
    <div>
      {(context.user) ?
        <div>
          <span className="mx-2">{context.user}</span>
          <a onClick={() => context.dispatch({ type: 'LOGOUT' })} href="#">
            Logout
          </a>
        </div> :
        <a onClick={() => context.dispatch({ type: 'LOGIN', username: 'moiz ghuman' })} href="#">
          Login
        </a>
      }

    </div>
  );
};

export default LoginStatus;

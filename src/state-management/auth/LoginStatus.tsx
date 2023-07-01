import useAuthStore from "./authStore";
import useAuth from "./useAuth";

const LoginStatus = () => {
  // const context = useAuth();
  const { user, login, logout } = useAuthStore()

  return (
    <div>
      {(user) ?
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div> :
        <a onClick={() => login('moiz ghuman')} href="#">
          Login
        </a>
      }

    </div>
  );
};

export default LoginStatus;

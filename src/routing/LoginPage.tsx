import { SubmitHandler, useForm } from "react-hook-form";
import useLogStore from "./useLogStore";
import { Link, useNavigate } from "react-router-dom";

interface InputData {
  username: string;
  password: string;
}

const LoginPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<InputData>();
  const { login } = useLogStore()
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<InputData> = (data) => {
    login(data.username, data.password);
    navigate('/users')
    //console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text"
          className="form-control"
          id="username"
          placeholder="john doe"
          {...register('username')}
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password"
          className="form-control"
          id="password"
          placeholder="john doe"
          {...register('password')}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit" className="btn btn-primary">Log in</button>

    </form>
  );
};

export default LoginPage;

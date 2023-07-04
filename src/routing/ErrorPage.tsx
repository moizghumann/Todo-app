import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  // react router hook to catch errors
  const error = useRouteError()
  console.log(error)
  return (
    <>
      <h1>Oops...</h1>
      <p>
        {isRouteErrorResponse(error)
          ? 'invalid page' : 'unexpected error motherfucker'}
      </p>
    </>
  );
};

export default ErrorPage;

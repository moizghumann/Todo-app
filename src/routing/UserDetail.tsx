import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  // extract parameter values from the URL
  const params = useParams();
  console.log(params);

  // setSearchParams should only be called in event handlers and effects since it has a side effect and makes the component impure if used otherwise
  // Get and update search parameters in the URL
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('age'));

  // Get the current location object
  const location = useLocation();
  console.log(location);  // Prints the current location object representing the URL

  return <p>{`User: ${params.id}`}</p>;
};

export default UserDetail;

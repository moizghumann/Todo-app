import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // Redirect the user to the home page
        // navigate makes the component impure, thus should only be used inside effects and event handlers
        navigate('/')
      }}
    >
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ContactPage;

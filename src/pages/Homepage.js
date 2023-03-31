import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/products');
  }

  return (
    <>
      <h1>My Homepage</h1>
      <p>Go to <Link to="/products">the list of products</Link>.</p>
      <p><button onClick={navigateHandler}>Navigate</button></p>
    </>
  );
}

export default Homepage;

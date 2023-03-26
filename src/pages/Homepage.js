import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <h1>My Homepage</h1>
      <p>Go to <Link to="/products">the list of products</Link>.</p>
    </>
  );
}

export default Homepage;

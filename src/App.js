import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  { path: '/', element: <p><Homepage/></p> },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;

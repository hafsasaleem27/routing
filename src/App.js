import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";

const router = createBrowserRouter([
  { path: '/', element: <p><Homepage/></p> },
  { path: '/products', element: <ProductsPage/> },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;

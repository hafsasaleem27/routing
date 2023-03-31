import {
  createBrowserRouter,
  RouterProvider,
  // Route
} from "react-router-dom";
import RootLayout from "./pages/Root";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";
import ErrorPage from "./pages/Error";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Homepage/>} />
//     <Route path="/products" element={<ProductsPage/>} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <Homepage/> },
      { path: "/products", element: <ProductsPage /> }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

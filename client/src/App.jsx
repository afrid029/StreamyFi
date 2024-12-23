import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, HomePage } from "./Pages";
import { loader as DashboardLoader } from "./Pages/Dashboard";
import Login from "./Modals/Login";
import Error from "./Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: DashboardLoader,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: DashboardLoader,
      },
    ],
    
  },
  {},
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

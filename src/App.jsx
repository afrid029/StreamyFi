import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Dashboard } from "./Pages"
import { loader as DashboardLoader } from "./Pages/Dashboard"
import Login from "./Modals/Login"



const router = createBrowserRouter ([
  {
    path: "/",
    element: <Dashboard/>,
    loader: DashboardLoader,
  }
])
const App = () => {

  return(
    <RouterProvider router={router} />
  )
  
}

export default App
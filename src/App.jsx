import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Dashboard } from "./Pages"

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Dashboard/>,
    index: true,
  }
])
const App = () => {

  return(
    <RouterProvider router={router} />
  )
  
}

export default App
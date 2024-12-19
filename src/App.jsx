import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Dashboard, Videos, LiveVideos } from "./Pages"

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Dashboard/>,
    children: [
      {
        index: true,
        element: <Videos/>
      },
      {
        path: "/liveStream",
        element: <LiveVideos/>
      }
    ]
  }
])
const App = () => {

  return(
    <RouterProvider router={router} />
  )
  
}

export default App
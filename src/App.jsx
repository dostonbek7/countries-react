import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from './pages/Home'
import SingleState from "./pages/SingleState";

function App() {
  const roots = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children:[
        {
          index: true,
          element: <Home/>
        },
        {
          path: `singleState/:country`,
          element: <SingleState/>
        }
      ]
    },
  ]);

  return <RouterProvider router={roots} />
}

export default App;

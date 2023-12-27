import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

//pages
import ViewInvoise from "./pages/ViewInvoise";
import Home from "./pages/Home";

function App() {
  const roots = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "viewInvoise/:id",
          element: <ViewInvoise />,
        },
      ],
    },
  ]);

  return <RouterProvider router={roots} />;
}

export default App;

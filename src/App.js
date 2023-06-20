import * as React from "react";

import Main from "./pages/home/";
import Chat from "./pages/chat/";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
  ]);
  return <RouterProvider router={router} />;
}

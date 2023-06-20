import * as React from "react";

import Main from "./pages/home/";
import Chat from "./pages/chat/";
import Login from "./pages/login/";

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
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import SejourDetails from "./pages/SejourDetails";
import AllDestination from "./pages/AllDestinations/AllDestination";
import { HackathonProvider } from "./context/HackathonContext";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Destinations",
    element: <AllDestination />,
  },
  {
    path: "/destinations/:id",
    element: <SejourDetails />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HackathonProvider>
      <RouterProvider router={router} />
    </HackathonProvider>
  </React.StrictMode>
);

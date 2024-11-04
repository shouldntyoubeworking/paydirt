import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import './index.css';
import Home from './pages';
import AllTeams from './pages/allteams';
import Rankings from './pages/rankings';
import Methodology from './pages/methodology';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/allteams",
    element: <AllTeams />,
  },
  {
    path: "/rankings",
    element: <Rankings />,
  },
  {
    path: "/methodology",
    element: <Methodology />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Trains from './pages/Trains';
import Train from './pages/Train';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Trains />,
  },
  {
    path: "/:id",
    element: <Train />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router} />);


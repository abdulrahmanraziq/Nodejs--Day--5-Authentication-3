import React from 'react'
import AppRoutes from "./utils/AppRoutes"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
function App() {
  let router = createBrowserRouter(AppRoutes);
  return <RouterProvider router={router}/>
}

export default App

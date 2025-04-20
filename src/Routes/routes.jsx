import React from "react";

import {
    createBrowserRouter,
  } from "react-router";
import Roots from "../pages/Root/Roots";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";

 export const router = createBrowserRouter([
  {
    path: "/",
Component: Roots,
errorElement: <ErrorPage></ErrorPage>,
children :[
    {
        index:true,
        loader:()=>fetch("../booksData.json"),
        path:"/",
        Component: Home
    
    },
    {
      path:"/bookDetails/:id",
      loader:()=>fetch("../booksData.json"),
      Component:BookDetails
    },
    {
      path:"/readList",
      loader:()=>fetch("../booksData.json"),
      element:<ReadList></ReadList>

    }
]

  },
]);
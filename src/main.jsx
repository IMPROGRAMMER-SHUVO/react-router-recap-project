import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Main from './component/Layout/Main';
import Order from './component/Order/Order';
import About from './component/About/About';
import Chackout from './component/Chackout/Chackout';
import Gandpa from './component/Grendpa/Gandpa';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('t-shirts.json')
      },
      {
        path:'order',
        element:<Order></Order>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'chackout',
        element:<Chackout></Chackout>
      },
      {
        path: 'grandpa',
        element:<Gandpa></Gandpa>
      }
    ]
  },
  {
    
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)

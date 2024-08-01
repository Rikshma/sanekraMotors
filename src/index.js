import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import OurProducts from './BrandPage/Brands';
import WholeSale from './WholeSale/WholeSale';
import AboutUs from './AboutUsPage/AboutUs';
import ContactUs from './ContactUsPage/ContactUs';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Product",
    element: <OurProducts />,
  },
  // {
  //   path: "BrakeSystem",
  //   element: <BrakeSystem />,
  // },
  {
    path: "WholeSale",
    element: <WholeSale />,
  },
  {
    path: "AboutUs",
    element: <AboutUs />,
  },
  {
    path: "ContactUs",
    element: <ContactUs />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

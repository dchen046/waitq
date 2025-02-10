import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'
import App from './App.jsx'
import LoginPage from './components/LoginPage.jsx';
import SignupPage from './components/SignupPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: 'signup',
    element: <SignupPage />
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

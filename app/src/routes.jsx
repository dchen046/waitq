
import App from './App.jsx'
import LoginPage from './components/LoginPage.jsx';
import SignupPage from './components/SignupPage.jsx';


const routes = [
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: 'signup',
    element: <SignupPage />
  },
  {
    path: 'home',
    element: <App />
  }
]

export default routes;
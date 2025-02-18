
import App from './App.jsx'
import LoginPage from './components/LoginPage.jsx';
import SignupPage from './components/SignupPage.jsx';
import Waitlist from './components/Waitlist.jsx';


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
    element: <App />,
    children: [
      {path: 'waitlist', element: <Waitlist />},
      {path: 'layout', element: <p>hi</p>},
    ]
  }
]

export default routes;

import App from './App.jsx'
import LoginPage from './components/LoginPage.jsx';
import SignupPage from './components/SignupPage.jsx';
import WaitlistPage from './components/WaitlistPage.jsx';


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
      {path: 'waitlist', element: <WaitlistPage />},
      {path: 'layout', element: <p>hi</p>},
    ]
  }
]

export default routes;
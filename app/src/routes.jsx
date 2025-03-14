import App from './App.jsx'
import LoginPage from './components/Pages/LoginPage.jsx';
import SignupPage from './components/Pages/SignupPage.jsx';
import ProfilePage from './components/Pages/ProfilePage.jsx';
import Waitlist from './components/Waitlist.jsx';
import CustomLayout from './components/Layout/CustomLayout.jsx';

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
      {path: 'layout', element: <CustomLayout />},
      {path: 'profile', element: <ProfilePage />}
    ]
  },
]

export default routes;
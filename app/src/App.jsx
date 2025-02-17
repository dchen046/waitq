import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage';
import { UserProvider } from './context/TokenProvider';

const App = () => {
  return (
    <UserProvider>
      <HomePage />
    </UserProvider>
  )
}

export default App

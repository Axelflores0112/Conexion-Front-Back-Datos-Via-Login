import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login'
import Register from './components/register'
import MainPage from './components/mainPage';
import UserPage from './components/userPage';
import { UserProvider } from './contexts/UserContext';
function App() {
  return (

    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userPage" element={<UserPage />} />
        </Routes>
      </Router>
   </UserProvider>

  )
}
export default App

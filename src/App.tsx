import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/login'
import Register from './components/register'
import MainPage from './components/mainPage';
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<MainPage />}/>
        <Route path="/login" element = {<Login />}/>
        <Route path="/register" element = {<Register />}/>
      </Routes>
    </Router>
  )
}
export default App

import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';


function App() {
  return (
    <div className="App">
     
     <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;

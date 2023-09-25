import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/login';
import Register from './pages/Register';
import Header from './component/Header';
function App() {
  return (
    <>
      <Router>
        <div className="Container">
          <Header/>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

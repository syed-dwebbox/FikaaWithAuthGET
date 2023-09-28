import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModalComponent from './components/ModalComponent';
import Dashboard from './components/Dashboard';
import TotalDownloads from './components/TotalDownloads';
import Login from './components/Login';

function App() {
  
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/totaldownloads' element={<TotalDownloads/>} ></Route>
    <Route path='/' element={<Login/>}/>
    <Route path='/Modal' element={<ModalComponent/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;

import './App.css';
import Login from './Components/Login/login.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/navbar';
import Dashboard from './Pages/Dashboard';
import AddFreelancer from './Pages/AddFreelancer';
import EditFreelancer from './Pages/EditFreelancer';
import SearchFreelancer from './Pages/SearchFreelancer';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar>

        <Routes>        
        {/* <Route path="/" exact component={<Login />} /> */}
        <Route path="/login" exact component={<Login />} />

           <Route path="/" element={<Dashboard />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path ='/EditFreelancer/:id' element={<EditFreelancer/>}/>
          <Route path="/AddFreelancer" element={<AddFreelancer/>} />
          <Route path="/SearchFreelancer" element={<SearchFreelancer/>} />
        </Routes>
        </NavBar>

    </BrowserRouter>
    </div>
  );
}

export default App;

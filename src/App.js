
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import AddEditUser from './Pages/AddEditUser'
import Home from './Pages/Home'
import Navbar from './Components/Navbar';
function App() {
  return (
   <BrowserRouter>
   <div>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddEditUser/>}/>
        <Route path='/update/:id' element={<AddEditUser/>}/>
      </Routes>
   </div>
   </BrowserRouter>
  );
}

export default App;

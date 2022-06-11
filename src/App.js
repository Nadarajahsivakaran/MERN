import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import AdminDashboard from './Components/AdminDashboard';
import Header from './Components/Header';
import EditUser from './Components/EditUser';
import UserDsahBoard from './Components/UserDashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Edit from './Components/Edit';
import Private from './Components/Private';




function App() {


  return (
    <div className='App'>
  
      <BrowserRouter>
        <Routes>
          <Route element={<Private/>}>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/admin' element={<AdminDashboard/>}></Route>
            <Route path='/header' element={<Header/>}></Route>
            <Route path='/:id' element={<EditUser/>}></Route>
            <Route path='/user/:id' element={<UserDsahBoard/>}></Route>
            <Route path='user/:id/edit/:id' element={<Edit/>}></Route>
          </Route>
          <Route path='/' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

import './App.css';
import UserList from './features/users/UserList';
import {Routes, Route } from 'react-router-dom';
import AddUser from './features/users/AddUser';
import EditUser from './features/users/EditUser';

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1>CRUD with Redux Toolkit</h1>
      <Routes>
        <Route path='/' element={ <UserList />}></Route>
        <Route path='/add-user' element={<AddUser />}></Route>
        <Route path='/edit-user/:id' element={<EditUser />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;

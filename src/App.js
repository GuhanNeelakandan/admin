import './App.css';
import Sidebar from './SideBar.js';
import Topbar from './Topbar.js';
import Dashboard from './Dashboard';
import Users from './Users';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateUser from './CreateUser';
import UserView from './UserView';
import UserEdit from './UserEdit';
import { UserProvider } from './UserContext';
import { useState } from 'react';

function App() {
  const [users,setUsers]=useState([]);
  return (
    <BrowserRouter>
      <div id="wrapper">
        <UserProvider value={{users,setUsers}}>
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/user-create" element={<CreateUser/>}/>
                <Route path="/user-view/:id" element={<UserView/>}/>
                <Route path="/user-edit/:id" element={<UserEdit/>}/>
              </Routes>
            </div>
          </div>
        </div>
        </UserProvider>
      </div>
    </BrowserRouter>

  );
}

export default App;

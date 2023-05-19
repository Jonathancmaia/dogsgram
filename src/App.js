import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';
import { User } from './Components/User/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path='dogsgram/' element={<Home />} />
              <Route path='dogsgram/login/*' element={<Login />} />
              <Route path='dogsgram/conta/*' element={<ProtectedRoute> <User /> </ProtectedRoute>} />
              <Route path='dogsgram/foto/:id' element={<Photo />} />
              <Route path='dogsgram/perfil/:user' element={<UserProfile />} />
              <Route path='dogsgram/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;

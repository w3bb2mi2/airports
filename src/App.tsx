import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './component/Navigation';
import { AirportDetailPage } from './pages/AirportDetailPage/AirportDetailPage';
import { AuthPage } from './pages/AuthPage';
import { MainPage } from './pages/MainPage';
import 'antd/dist/antd.css'

function App() {
  return (
    <div>
      <Navigation />
      
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/airport/:id' element={<AirportDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;

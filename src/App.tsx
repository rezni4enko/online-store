import React from 'react';
import { Route, Routes } from 'react-router-dom';

import "./App.scss"
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<Header />} />
        <Route path='/login' element={<Header />} />
        <Route path='/statistics' element={<Header />} />
        <Route path='/transaction/:id' element={<Header />} />
      </Routes>
    </div>
  )
}

export default App;

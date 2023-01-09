import React from 'react';
import './App.css';
import Header from './pages/Header';
import MainPage from './pages/MainPage';
import { ModeProvider } from './context/ModeContext';

export default function App() {
  return (
    <div className='text'>
      <ModeProvider>
        <Header />
        <MainPage />
      </ModeProvider>
    </div>
  );
}

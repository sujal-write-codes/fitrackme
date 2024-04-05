import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Landing from './pages/Landing';
import { useAuthContext } from './hooks/useAuthContext';
import CalorieCalculator from './pages/caloriecalculator'
import CalorieTracker from './pages/calorietracker'

export default function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/signin'
          element={!user ? <Signin /> : <Navigate to='/home' />}
        />
        <Route
          path='/signup'
          element={!user ? <Signup /> : <Navigate to='/home' />}
        />
        <Route
          path='/home'
          element={user ? <Home /> : <Navigate to='/' />}
        />
        <Route 
        path='/' 
        element={<Landing />} />
        <Route 
        path='/caloriecalculator' 
        element={<CalorieCalculator />} />
        <Route 
        path='/calorietracker' 
        element={<CalorieTracker />} />
      </Routes>
    </BrowserRouter>
  );
}

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import NGOList from './components/NGOList';
import MemberList from './components/MemberList';
import NGORegistrationForm from './components/NGORegistrationForm';
import MemberRegistrationForm from './components/MemberRegistrationForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ngos" element={<NGOList />} />
            <Route path="/members" element={<MemberList />} />
            <Route path="/register-ngo" element={<NGORegistrationForm />} />
            <Route path="/register-member" element={<MemberRegistrationForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 
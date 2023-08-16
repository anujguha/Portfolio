import React from 'react';
import {Routes , Route } from 'react-router-dom';
import Profile  from './Profile';
import Projects  from './Portfolio-container/Projects';
import Courses from './Portfolio-container/CertificateProgress';
import About from './Portfolio-container/About';
import Timeline from './Portfolio-container/Timeline';
import { ContactUs } from './Portfolio-container/contact';
import Skill from './Portfolio-container/skill';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<ContactUs/>}/>
      </Routes>
      <Profile/>
      <Timeline/>
      <Projects/>
      <Skill/>
      <Courses/>
      <About/>
      <ContactUs/>
    </div>
  );
}

export default App;

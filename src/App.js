import React from 'react';
import {Routes , Route } from 'react-router-dom';
import Profile  from './Portfolio-container/Profile';
import Projects  from './Portfolio-container/Projects';
import Courses from './Portfolio-container/courses';
import About from './Portfolio-container/About';
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
      <Projects/>
      <Skill/>
      <Courses/>
      <About/>
      <ContactUs/>
    </div>
  );
}

export default App;

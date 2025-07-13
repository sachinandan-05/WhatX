// src/App.jsx
import React from 'react';
import {Hero} from './components/Hero';
import {Header} from './components/Header';
import { Vision } from './components/Vision';
import {Footer} from './components/Footer'
import {ToolGrid } from './components/ToolGrid';



const App = () => {
  return (
    <div className="font-sans text-black bg-white">
     
      <Header/>
      <Hero />
      <Vision />
      <ToolGrid/>
      <Footer />
    </div>
  );
};

export default App;

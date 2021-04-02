import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App; //함수에서 return과 같은 역할

import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
      <h1>App</h1>
      <Link to='/gif/overwatch'>Gifs de overwatch</Link>
      <Link to='/gif/rick'>Gifs de rick</Link>
      <Link to='/gif/boxer'>Gifs de boxer</Link>
      <Route 
        component={ListOfGifs}
        path="/gif/:keyword" />
      </section>
    </div>
  );
}
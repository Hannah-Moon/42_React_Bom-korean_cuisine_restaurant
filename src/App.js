import React from 'react';
import './App.css';
import TopNav from './components/TopNav';
import MenuTab from './components/MenuTab;
import MenuBoard from './components/MenuBoard';


function App() {
  return (
    <div className="App">
      <TopNav />
      <MenuTab/>
      <MenuBoard/>
    </div>
  );
}

export default App;

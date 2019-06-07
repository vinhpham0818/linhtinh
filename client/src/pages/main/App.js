import React from 'react';
import logo from '../../asstes/images/logo.svg';
import './App.css';
import HeaderComp from '../../components/header-component/header-component';
import MainRouter from '../../router';

function App() {
  return (
    <div >
      
        <div>
          <HeaderComp></HeaderComp>
        </div>
      
      <div>
        <MainRouter></MainRouter>
      </div>
    </div>
  );
}

export default App;

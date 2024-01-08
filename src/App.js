import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Main} from './Main'
import {Profile} from './Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Main}></Route>
        <Route path='/profile' Component={Profile}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

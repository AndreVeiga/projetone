import { Route, Routes, Link } from 'react-router-dom';
import './App.css';

import { Home } from './Pages/Home'
import { Private } from './Pages/Private'
import { Menu } from './Components/Menu';

function App() {
  return (
    <div className="App">
      <header>
        Header do Site
      </header>
      <hr/>
      <Menu />

      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/private" element={ <Private />}/>
      </Routes>
    </div>
  );
}

export default App;

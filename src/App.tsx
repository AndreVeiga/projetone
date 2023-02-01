import { Route, Routes, Link } from 'react-router-dom';
import './App.css';

import { Home } from './Pages/Home'
import { Private } from './Pages/Private'
import { Menu } from './Components/Menu';
import { RequireAuth } from './Contexts/Auth/RequireAuth';

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
        <Route path="/private" element={ <RequireAuth><Private /></RequireAuth> }/>
      </Routes>
    </div>
  );
}

export default App;

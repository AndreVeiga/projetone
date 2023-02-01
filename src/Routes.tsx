import { Route, Routes } from 'react-router-dom';

import { Menu } from "./Components/Menu"
import { Home } from './Pages/Home'
import { Private } from './Pages/Private'
import { RequireAuth } from './Contexts/Auth/RequireAuth';
import { Login } from './Pages/Login';

export const RoutesApp = () => {
    return (
        <RequireAuth>
            <div>
                <header>Header do Site</header>
                <hr/>
                <Menu />
                <Routes>
                    <Route path="/" element={ <Home />}/>
                    <Route path="/private" element={ <Private /> }/>
                </Routes>
                </div>
        </RequireAuth>
    )
}
import { Route, Routes } from 'react-router-dom';

import { RequireAuth } from './Contexts/Auth/RequireAuth';

import { Home } from './Pages/Home'
import { Times } from './Pages/Times';
import { Jogadores } from './Pages/Jogadores';

export const RoutesApp = () => {
    return (
        <RequireAuth>
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/times" element={ <Times /> }/>
                <Route path="/jogadores" element={ <Jogadores /> }/>
            </Routes>
        </RequireAuth>
    )
}
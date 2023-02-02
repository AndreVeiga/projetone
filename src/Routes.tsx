import { Route, Routes } from 'react-router-dom';

import { Home } from './Pages/Home'
import { Private } from './Pages/Private'
import { RequireAuth } from './Contexts/Auth/RequireAuth';

export const RoutesApp = () => {
    return (
        <RequireAuth>
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/private" element={ <Private /> }/>
            </Routes>
        </RequireAuth>
    )
}
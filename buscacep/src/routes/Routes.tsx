import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//PAGES
import Home from '../pages/home/Home';
import Contacts from '../pages/contacts/Contacts';
import MainLayout from '../layout/MainLayout';

function routes() {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default routes;
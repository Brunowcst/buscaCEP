import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//PAGES
import Home from '../pages/home/Home';
import Contacts from '../pages/contacts/Contacts';
import About from '../pages/about/About';
import MainLayout from '../layout/MainLayout/MainLayout';

function routes() {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path='/buscaCEP' element={<Home/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                    <Route path='/about' element={<About/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default routes;
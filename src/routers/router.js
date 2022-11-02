import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Meme from '../pages/Meme';

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />                
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/meme" element={<Meme />} />
            </Routes>
        </BrowserRouter>        
    )
}
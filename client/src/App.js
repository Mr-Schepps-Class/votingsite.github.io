import React from 'react';
import FileUpload from './FileUpload';
import { Routes, Route } from "react-router-dom"
import Home from './Home';
import NotFound from './NotFound';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path="/upload" element={ <FileUpload/> } />
                <Route exact component={NotFound} />
            </Routes>
        </div>
    );
}

export default App;

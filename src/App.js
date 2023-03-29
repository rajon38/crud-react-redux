import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReadPage from "./Pages/ReadPage";
import CreatePage from "./Pages/CreatePage";
import FullScreenLoader from "./Component/FullScreen-Loader";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ReadPage/>}/>
                    <Route path="/create" element={<CreatePage/>}/>
                </Routes>
            </BrowserRouter>
            <FullScreenLoader/>
        </div>
    );
};

export default App;
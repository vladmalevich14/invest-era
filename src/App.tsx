import React from 'react';
import './App.css';
import {Main} from "components/main/main";
import {Header} from "components/header/header";
import {Footer} from "components/footer/footer";
import {Route, Routes} from "react-router-dom";
import {TablePage} from "components/tablePage/tablePage";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/usa" element={<TablePage country={'USA'}/>}/>
                <Route path="/china" element={<TablePage country={'China'}/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;

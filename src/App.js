import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./components/Login";
import Home from "./components/Home";
import Notes from "./components/Notes";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/notes" element={<Notes/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

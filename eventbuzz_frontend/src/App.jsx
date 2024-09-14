import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './pages/Navbar.jsx';
import Home from './pages/Home.jsx';
import Footer from './pages/Footer.jsx'
import MovieInfo from './pages/MovieInfo.jsx';


// Use to hide and show the apps in which navbar and footer is shown and not shown
// Location only works in Routes element

function Appwrapper() {       
    const location = useLocation();

    const hideNavAndFooterRoutes = ['/login', '/register'];

    return (
        <div>
            {/* Conditionally render Navbar and Footer based on current route */}
            {!hideNavAndFooterRoutes.includes(location.pathname) && <Navbar />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie" element={<MovieInfo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>

            {!hideNavAndFooterRoutes.includes(location.pathname) && <Footer />}
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Appwrapper />
        </BrowserRouter>
    );
}

export default App

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Map from 'components/page/Map/Map';
import Login from './components/page/Login/Login';
import CouponDetail from './components/page/Coupon/Coupon';
import Search from './components/page/Search/Search';
import StorageBox from './components/page/StorageBox/StorageBox';
import "./styles/global.scss"

function App() {
    return (
        <div id="app">
            <Routes>
                <Route path="/" element={<Map/>}/>
                <Route path='/login' element={<Login />} />
                <Route path='/detail' element={<CouponDetail />} />
                <Route path='/search' element={<Search />} />
                <Route path='/storage' element={<StorageBox />} />
            </Routes>
        </div>
    );
}

export default App;

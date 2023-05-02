import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from './Store/Store';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './pages/Home';
import Cart from './Component/Cart';
import Wishlistshow from './Component/Wishlistshow';
// import Paginationex from './Component/Paginationex';
import HeadPhonepage from './Component/HeadPhonepage';
import SmartWatchpage from './Component/SmartWatchpage';


export default function App() {
  return (
    <div>


      {/* <Paginationex/> */}

      <Provider store={Store}>

        <Router>
          <Header></Header>

          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>

          <Routes>
            <Route path="/SmartWatchpage" element={<SmartWatchpage />}/>
          </Routes>

          <Routes>
            <Route path="/HeadPhonepage" element={<HeadPhonepage />}/>
          </Routes>





          <Footer />
          <Cart />
          <Wishlistshow />

        </Router>
      </Provider>

    </div>
  )
}

import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom" 
import Storeapi from './Storeapi';
import Userapi from './Userapi';
import Weatherapi from './Weatherapi'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="logo.jpg" width="60px" height="60px" style={{borderRadius:"50%",boxShadow:"5px 5px 5px rgba(0,0,0,0.4)", marginLeft:"40px", marginRight:"260px"}}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{marginLeft:"50px"}}>About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{marginLeft:"50px"}}>FAQ</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{marginLeft:"50px"}}>
                  API's
                </a>
                <ul className="dropdown-menu">
                  <li><Link className='dropdown-item' to="/weatherapi">Weather API</Link></li>
                  <li><Link className='dropdown-item' to="/storeapi">Store API</Link></li>
                  <li><Link className='dropdown-item' to="/userapi">User API</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <Routes>
        <Route path="/weatherapi" element={<Weatherapi/>}></Route>
        <Route path="/storeapi" element={<Storeapi/>}></Route>
        <Route path="/userapi" element={<Userapi/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

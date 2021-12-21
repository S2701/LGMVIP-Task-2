import React, { useState, useEffect } from "react";
import './App.css';
import './style.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import logo from './images/GOSOLO.png'
import 'bootstrap/dist/css/bootstrap.css';
import Service from './service';

function App() {

  const [user, setuser] = useState("");
  const [spinnerLoading, setSpinnerLoading] = useState(false);

  const getusers = () => {
    Service.getusers().then(
      (res) => {
        setSpinnerLoading(true);
      
        setTimeout(() => {
          setuser(res.data);
          setSpinnerLoading(false)
        }, 3000);

      },
      (error) => {
        console.log(error)
      }
    );
  }

  
  useEffect(() => { console.log(user) }, [user])


  return (
    <>
      <nav className="navbar fixed-top">
        <div className="logo"><img src={logo} alt="LOGO"></img></div>
        <div className="push-left">
          <button id="menu-toggler" data-className="menu-active" className="hamburger">
            <span className="hamburger-line hamburger-line-top"></span>
            <span className="hamburger-line hamburger-line-middle"></span>
            <span className="hamburger-line hamburger-line-bottom"></span>
          </button>

          <ul id="primary-menu" className="menu nav-menu">
            <li className="menu-item current-menu-item"><a className="nav__link" onClick={getusers}
              href="/#">Get Users</a></li>
          </ul>
        </div>
      </nav>
      
      <div className="center" >
        <Loader 
          type="Plane"
          color="#00BFFF"
          height={200}
          width={200}
          timeout={3000} //3 secs
          visible={spinnerLoading}
        />
      </div>

      {user && (
        <section>
          <div className="d-flex-row p-2 justify-center">
            {user.map( (data) => (
              <div className="card d-inline-flex wrap justify-content-center m-3">
                <div className="text">
                  <img src={data.avatar} alt="img"></img>
                  <h3>{data.first_name + " " + data.last_name}</h3>
                  <p>{data.email}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}


    </>
  );
}

export default App;

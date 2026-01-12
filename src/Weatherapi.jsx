import React from 'react'
import { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./style.css"

export default function App() {

  const api = {
    key: "5d6d3de3f3bb214274a4a6993188463a",
    base: "https://api.openweathermap.org/data/2.5/"
  }



  const [search, setSearch] = useState("")

  const [weather, setWeather] = useState({})

  function searchPressed() {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
      })

  }

  return (

    <>
      <div className='box mt-4 mb-4' style={{margin:"auto"}}>
        <div className='row '>

          <h1 style={{ textAlign: "center", fontSize:"50px" }}>Weather API</h1>

          <div className='col-12  d-flex justify-content-center align-items-center'>
            <div className='search mt-3 d-flex mb-3'>
              <input type="text" style={{ borderRadius: "8px", border: "1px solid black", }} placeholder='Enter place/city...' value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <button className='btn' onClick={searchPressed}><img src="search.png" style={{ width: "30px", height: "30px", background: "whitesmoke", borderRadius: "50%", padding: "10px" }} /></button>
          </div>

          <div className='row'>
            <div className='col-12 d-flex justify-content-center align-items-center'>
              {typeof weather.main !== "undefined" ? (
                <div>

                  <div className='row mt-3'>
                    <div className='col-md-6 '>
                      <h4 style={{ textAlign: "center" }}>City/Town</h4>
                      <div className='d-flex justify-content-center'>
                        <img src="city.png" alt="city" style={{ width: "30px", height: "40px" }} />
                        <p style={{ textAlign: "center", marginLeft: "10px" }}>{weather.name}</p>
                      </div>
                    </div>

                    <div className='col-md-6'>
                      <h4 style={{ textAlign: "center" }}>Temperature</h4>
                      <div className='d-flex  justify-content-center'>
                        <img src="temperature.png" alt="city" style={{ width: "35px", height: "40px" }} />
                        <p style={{ textAlign: "center", marginLeft: "10px" }}>{weather.main.temp}</p>
                      </div>
                    </div>

                  </div>

                  <div className='row mt-4'>
                    <div className='col-md-6'>
                      <h4 style={{ textAlign: "center" }}>Condition</h4>
                      <div className='d-flex  justify-content-center'>
                        <img src="conditions.png" alt="city" style={{ width: "37px", height: "40px" }} />
                        <p style={{ textAlign: "center", marginLeft: "10px" }}>{weather.weather[0].main}</p>
                      </div>
                    </div>

                    <div className='col-md-6'>
                      <h4 style={{ textAlign: "center" }}>Description</h4>
                      <div className='d-flex justify-content-center'>
                        <img src="description.png" alt="city" style={{ width: "40px", height: "40px" }} />
                        <p style={{ textAlign: "center", marginLeft: "10px" }}>{weather.weather[0].description}</p>
                      </div>
                    </div>
                  </div>

                </div>
              ) : (
                " "
              )}

            </div>
          </div>




        </div>
      </div>
    </>
  )
}


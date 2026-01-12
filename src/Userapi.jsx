import React, { useEffect, useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
export default function Userapi() {

    const [state, setState] = useState([])

    const [search,setSearch]=useState('')

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50')
            .then(response => response.json())
            .then(json => setState(json.results))
    })

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center mt-3 mb-3'>User API</h1>
                    <input type="text" placeholder='Search user...' value={search} onChange={(e)=>setSearch(e.target.value)}  style={{marginTop:"20px",marginBottom:"10px",borderRadius:"8px"}}/>
                    {state.filter(x=>x.name.first.toLowerCase().includes(search.toLowerCase())).map((item)=>
                    <div className='col-md-3 mt-3'>
                        <div className="card" >
                            <img src={item.picture.medium} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name.title} {item.name.first} {item.name.last}</h5>
                                    <p className="card-text"><span style={{fontWeight:"bold"}}>Gender: </span>{item.gender}</p>
                                    <p className="card-text"><span style={{fontWeight:"bold"}}>Age: </span>{item.dob.age}</p>
                                    <p className="card-text"><span style={{fontWeight:"bold"}}>Email: </span>{item.email}</p>
                                    <p className="card-text"><span style={{fontWeight:"bold"}}>Phone: </span>{item.phone}</p>
                                    <p className="card-text"><span style={{fontWeight:"bold"}}>Address: </span>{item.location.city}, {item.location.state}, {item.location.country}</p>
                                    
                                </div>
                        </div>

                    </div>
                    )}

                </div>

            </div>

        </>
    )
}

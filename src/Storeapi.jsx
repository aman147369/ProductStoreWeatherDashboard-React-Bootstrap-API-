import React, { useEffect, useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useSearchParams } from 'react-router-dom';
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function Storeapi() {

    const [state,setState]=useState([])
    const [search,setSearch]=useState('')

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(json => setState(json))
    })
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center mb-3 mt-3'>Store API</h1>
                    <input type="text" placeholder='Search product...'  value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    {state.filter(x=>x.title.toLowerCase().includes(search.toLowerCase())).map((item)=>
                    <div className='col-md-3 mt-3'>
                        <div className="card">
                            <img src={item.image} className="card-img-top" alt="..." style={{height:"300px"}}/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <h5 className="card-text text-info">{item.category}</h5>
                                    <ReactReadMoreReadLess
                                        charLimit={100}
                                        readMoreText={"Read more"}
                                        readLessText={"Read less"}
                                        readMoreStyle={{ color: 'blue', cursor: 'pointer' }}
                                        readLessStyle={{ color: 'red', cursor: 'pointer' }}
                                    >
                                        {item.description}
                                    </ReactReadMoreReadLess>
                                    
                                    <p className="card-text"><span style={{fontWeight:"bold"}}>Price- </span>{item.price}</p>
                                </div>
                        </div>

                    </div>
                    )}

                </div>

            </div>


        </>
    )
}

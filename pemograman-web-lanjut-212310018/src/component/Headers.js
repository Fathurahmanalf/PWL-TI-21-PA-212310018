import React from 'react'
import { Link } from 'react-router-dom'
import "../Assets/Msg.css"; 

export default function Headers() {
    return (
        <div className="">
            <h1 className="mx-3">IBI Kesatuan</h1>
            <ul className="horizontal-list mx-3">
            <li><Link to="/home" className="link">Home</Link></li>  
            <li><span></span></li>
            <li><Link to="/PWL" className="link">PWL</Link></li>
            </ul>
        </div>
    )
}

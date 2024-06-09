import React from 'react'
import { Link } from 'react-router-dom'
import "../Assets/Msg.css"; 

export default function Headers() {
    return (
        <div className="">
            <h1 className="mx-3">IBI Kesatuan</h1>
            <ul className="horizontal-list mx-3">
            <li><Link to="/home" className="link">Home</Link></li>  
            <li><Link to="/chaptersatu" className="link mx-3">ChapterOne</Link></li>
            <li><Link to="/chapterdua" className="link">ChapterTwo</Link></li>
            </ul>
        </div>
    )
}

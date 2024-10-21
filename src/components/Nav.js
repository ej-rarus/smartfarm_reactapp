import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../App.css';



function Nav({ menuVisible, setMenuVisible }){
    const navigate = useNavigate();

    
    const toggleMenu = () => {
        setMenuVisible(!menuVisible); // 상태를 토글
    };

    return(
        <div className="nav">
            <div className="main-logo-container">
                <div className="main-logo" onClick={()=>navigate('/')}>SF-Mark1</div>
            </div>
            <div className="nav-btn-container">
                <div className="nav-btn" onClick={()=>navigate('/about')}>About</div>
                <div className="nav-btn" onClick={()=>navigate('/dashboard')}>Dashboard</div>
                <div className="nav-btn" onClick={()=>navigate('/controlpanel')}>Control</div>
                <div className="nav-btn" onClick={()=>navigate('/diary')}>Diary</div>
                <div className="nav-btn" onClick={()=>navigate('/contact')}>Contact</div>

                <div id="burger-menu-btn" 
                     onClick={toggleMenu}>
                    버거
                </div>
            </div>
        </div>
    );
}


export default Nav;
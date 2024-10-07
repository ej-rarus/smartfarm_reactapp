import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';


function Nav(){
    const navigate = useNavigate();

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
            </div>
        </div>

    );
}


export default Nav;
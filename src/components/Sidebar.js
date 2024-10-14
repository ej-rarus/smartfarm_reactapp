import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

function Sidebar(){
    const navigate = useNavigate();

    return(
        <div className="sidebar-container">
            <div className="sidebar-btn" onClick={()=>navigate('/about')}>About</div>
            <div className="sidebar-btn" onClick={()=>navigate('/dashboard')}>Dashboard</div>
            <div className="sidebar-btn" onClick={()=>navigate('/controlpanel')}>Control</div>
            <div className="sidebar-btn" onClick={()=>navigate('/diary')}>Diary</div>
            <div className="sidebar-btn" onClick={()=>navigate('/contact')}>Contact</div>

        </div>
    );
}

export default Sidebar;
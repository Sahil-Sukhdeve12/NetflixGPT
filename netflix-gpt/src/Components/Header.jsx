import React from "react";
import Netflix_Logo_PMS from "../images/Netflix_Logo_PMS.png";
// import '../styles.css';

const Header=()=>{
    return(
        <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}>
            <img src={Netflix_Logo_PMS} 
            alt="logo_img" style={{maxWidth: '100%', height: 'auto', width:'150px',
            padding:'4px 8px 4px 8px',}}/>
        </div>
    )
}

export default Header;
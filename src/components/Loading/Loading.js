import React, { useEffect, useState } from "react";
import pre from '../../Assets/pre.svg'
import logo from '../../Assets/logo.png'


// function Loading(){
//     useEffect(()=>{
//         const navbar = document.getElementById('navbar')
//         // navbar.style.display = 'fixed'
//         // navbar.style.zIndex = '99999999'
//     },[])
//     return(
//         <div style={{zIndex:'99999999999999999999999999999999', display:'flex', flexDirection:'column', position:'fixed', top:'0px', left:'0px', width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.7)', justifyContent:'center', alignItems:'center', gap:'50px'  }}>
//             <img src={pre} width='200px'  />
//             <img src={logo} width='150px'   />
//         </div>
//     )
// } 
export function  loading(){
    const loadelement = document.getElementById('loadelement')
    loadelement.style.display = 'flex'
    const timer = setTimeout(() => {
        loadelement.style.display = 'none'
    }, 1000);

} 
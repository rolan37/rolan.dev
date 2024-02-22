import React from 'react';
import ReactDOM from 'react-dom';
import github from './images/github.png';
import facebook from './images/facebook.png';
import linkedin from './images/linkedin.png';
import whatsapp from './images/whatsapp.png';
import instagram from './images/instagram.png';
import youtube from './images/youtube.png';



export default function SocialMedia(){
    return(
        <div className="social-container">
            <a href="https://github.com/rolan37"><img src={github} alt="" /></a>
            <a href="https://www.facebook.com/rolangp7/"><img src={facebook} alt="" /></a> 
            <a href="https://www.linkedin.com/in/rolangaspar0712/"><img src={linkedin} alt="" /></a> 
            <a href="https://wa.me/919637418192"><img src={whatsapp} alt="" /></a> 
            <a href="https://www.instagram.com/rolan.pereira7/"><img src={instagram} alt="" /></a>  
            <a href="https://www.youtube.com/channel/UCalPOgYWT_MUKnQ8zT72_IA"><img src={youtube} alt="" /></a> 
           
        </div>
    )
}
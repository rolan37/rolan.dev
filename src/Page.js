import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './routes/Navbar';
import Name from './routes/Name';
import Profile from './routes/Profile';
import Skills from './routes/Skills';
import SocialMedia from './routes/SocialMedia';
import Footer from './routes/Footer';


export default function Page(){
    return(
        <div>
            
            <Navbar/> 
            <Name/>
            <Profile/>
            <Skills/>
            <SocialMedia/>
            <Footer/>

        </div>
        
    )
}
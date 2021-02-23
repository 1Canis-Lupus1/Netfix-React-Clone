import React,{useEffect,useState} from 'react'
import "../Navbar.css"

function Navbar() {
    const [show,handleShow]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }
            else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[])

    return (

        <div className={`nav ${show && "nav-black"}`}>
            <img className="nav-logo" src="https://www.nyoooz.com/uploads/hindi/nyoooz-images/netflix_logo.png" alt="Netflix Logo" />
            {/* <div className="nav-items">
            <a className="nav-item" href="#trending">Trending</a>
            <a className="nav-item" href="#popular">Popular</a>
            <a className="nav-item" href="#upcoming">Up-Coming</a>
            <a className="nav-item" href="#top">Top Rated</a>
            <a className="nav-item" href="#now">Now Playing</a>
            </div> */}
            <img className="nav-avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png" alt="Logo" />
        </div>
    )
}

export default Navbar

import React from 'react'
import "../App.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export default function LandingPage() {

    const router = useNavigate();
    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Pratyaksh</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/aldm23")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")
                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")
                    }}role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1 style={{color: "azure"}}><span style={{color: "#FF9839"}}>Connect</span> with your loved Ones</h1>

                    <p className='para'>Cover a distance by Pratyaksh</p>
                    <div role='button'>
                        <Link to="/auth">Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt="" width="450x" height="400"/>
                </div>
                <div></div>
            </div>
        </div>
    )
}
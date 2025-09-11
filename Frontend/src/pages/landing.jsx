import React, { useState } from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const router = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Vibe-Connect Video Call</h2>
                </div>

                {/* Desktop nav (your original logic) */}
                <div className='navlist'>
                    <p onClick={() => router("/aljk23")}>Join as Guest</p>
                    <p onClick={() => router("/auth")}>Register</p>
                    <div onClick={() => router("/auth")} role='button'>
                        <p>Login</p>
                    </div>
                </div>

                {/* Hamburger icon for mobile */}
                <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>
            </nav>

            {/* Mobile menu (uses same logic as above) */}
            {menuOpen && (
                <div className="mobileMenu">
                    <p onClick={() => { router("/aljk23"); setMenuOpen(false); }}>Join as Guest</p>
                    <p onClick={() => { router("/auth"); setMenuOpen(false); }}>Register</p>
                    <div onClick={() => { router("/auth"); setMenuOpen(false); }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            )}

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>
                    <p>Cover a distance by Apna Video Call</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt="" />
                </div>
            </div>
        </div>
    )
}

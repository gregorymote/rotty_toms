import React from 'react';
export default function Navbar(){
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    Rotty Toms                
                </div>
            </nav>
            <style jsx>{`
                .navbar{
                    width:100%;
                    display: flex;
                    padding: 10px;
                    justify-content: space-between;
                    width: 500px;
                    margin:0px auto;
                }
                .navbar-brand{
                    font-weight: bold;
                    padding-left: 20px;
                    margin-top: 14px;
                }
            `}</style>
        </div>
    );
}
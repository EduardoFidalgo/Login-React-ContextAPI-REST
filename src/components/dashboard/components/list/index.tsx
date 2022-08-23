import React, { useEffect } from "react";
import userRandom from '../../../../img/userRandom.jpg';

export const List = () => {
    return (
        <div className="list">
            <h1>User's</h1>
            <div className="wrapper">
                <div className="scroll-icon">
                    <div className="mouse-icon">
                        <div className="mouse-icon_wheel"></div>
                    </div>
                </div>
            </div>
            <div className="box--search">
                <input type="text" name="" className="search" placeholder="Search Guest" />
            </div>
            <div className="card">
                <div className="photo">
                    <img src={userRandom} width="70" />
                    <h3>Guests</h3>
                </div>
            </div>
            <div className="card">
                <div className="photo">
                    <img src={userRandom} width="70" />
                    <h3>Guests</h3>
                </div>
            </div>
            <div className="card">
                <div className="photo">
                    <img src={userRandom} width="70" />
                    <h3>Guests</h3>
                </div>
            </div>
            <div className="card">
                <div className="photo">
                    <img src={userRandom} width="70" />
                    <h3>Guests</h3>
                </div>
            </div>
            <div className="card">
                <div className="photo">
                    <img src={userRandom} width="70" />
                    <h3>Guests</h3>
                </div>
            </div>
            <div className="card">
                <div className="photo">
                    <img src={userRandom} width="70" />
                    <h3>Guests</h3>
                </div>
            </div>
            <div className="card">
                <div className="photo">
                    <img src={userRandom} width="70" />
                    <h3>Guests</h3>
                </div>
            </div>
            <div className="card">
                <div className="photo">
                    <img src={userRandom} width="70" />
                    <h3>Guests</h3>
                </div>
            </div>
        </div>
    )
}
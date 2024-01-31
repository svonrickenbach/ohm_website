import React from 'react';
import party from '../images/party.jpg'
import "../styles/main-page.css" 

const MainPage = () => {

    return (
        <div>
            <div className="header">

            </div>
            <div className="first-block">

            </div>
            <div className="second-block">
                <h2>2024 Lineup Coming Soon...</h2>
            </div>
            <div className="third-block">
                <div className="card-and-pic">
                    <div className="first-card">
                        <h3>Ohm on the Range is back for a third year!</h3>
                    </div>
                    <div className="pic-1">
                        <img src={party} alt="The crowd at mainstage" className='pic1'/>
                    </div>
                </div>
                <div className="card-and-pic">
                    <div className="first-card">
                        <h3>Ohm on the Range is back for a third year!</h3>
                    </div>
                    <div className="pic-1">
                        <img src={party} alt="The crowd at mainstage" className='pic1'/>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default MainPage;
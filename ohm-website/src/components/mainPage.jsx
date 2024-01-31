import React from 'react';
import backgroundImage from '../images/ohm-background-picture-1.png'

const MainPage = () => {


    return (
        <div>
            <div
                className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-center"
                style={{
                backgroundImage: `url(${backgroundImage})`,
                }}
            >
            </div>
            <div>
                <h1>New Div</h1>
            </div>
        </div>
    );

}

export default MainPage;
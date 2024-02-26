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
                <div className="text-and-pic">
                    <div className='text'>
                        <h3 className="header-text">OHM ON THE RANGE</h3>
                        <h3 className="sub-header">IS BACK FOR A THIRD YEAR!</h3>
                        <p>Our new location in Glenwood, WA is less than 2
                            hours from Portland, OR. Join us on July 4-7th for
                            live music, art and yoga workshops, synchronicities
                            and more at the base of Mt. Adams. Bringing
                            increased capacity, more affordable tickets, and a
                            diverse community-curated lineup.
                            OHM ON THE RANGE is inspired by the artists and
                            the creative community. We provide an atmosphere
                            to showcase your craft and be a part of the
                            experience. Our team is committed to providing a
                            safe, uplifting and supportive environment for all
                            who attend. Collectively, we will make a positive
                            impact and respect the land on which we gather.
                            Early Bird tickets are on sale now! Applications will
                            be live soon. Stay tuned for the First Wave Lineup!
                            - THE OHM TEAM</p>
                    </div>
                    <img src={party} alt="The crowd at mainstage" className='pic1' />
                </div>
                <div className="text-and-pic">
                    <h3 className="text">Ohm on the Range is back for a third year!</h3>
                    <img src={party} alt="The crowd at mainstage" className='pic1' />
                </div>
                <div className="text-and-pic">
                    <h3 className="text">Ohm on the Range is back for a third year!</h3>
                    <img src={party} alt="The crowd at mainstage" className='pic1' />
                </div>
            </div>
        </div>
    );

}

export default MainPage;
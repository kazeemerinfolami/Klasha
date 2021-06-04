import React from 'react'
import ProfilePic from "../assets/Images/image 1.png"

function TopNav({ pageName }) {
    return (
        <div className="flex-center-just-spaceBtw">
            <div>
                <div className="page-name">{pageName}</div>
                <div className="page-Time">Today, 19th October 2020</div>
            </div>
            <div className="flex-align-center">
                <div className="alert-dot-wrapper">
                    <span className="iconify profile-icon" data-icon="ic:round-circle-notifications" data-inline="false"></span>
                    <span className="iconify alert-dot" data-icon="carbon:dot-mark" data-inline="false"></span>
                </div>
                <div><img className="top-nav-pic-container profilePic" src={ProfilePic} alt="ProfilePic" /></div>
                <div><span className="iconify hamburger" data-icon="ei:navicon" data-inline="false"></span></div>
            </div>
        </div>
    )
}

export default TopNav

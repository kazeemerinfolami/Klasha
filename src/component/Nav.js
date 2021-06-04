import React from 'react'
import CompanyLogo from "../assets/Images/logo.png"

function Nav() {
    return (
        <div className="Container-Nav-Wrapper">
            <div className="company-logo-wrapper"><img src={CompanyLogo} alt="logo" /></div>
            <div className="nav-title">Main Page</div>
            <a href="home.com">
                <div className="flex-align-center nav-card dashboard-bacground">
                    <div><span className="iconify nav-icon" data-icon="radix-icons:dashboard" data-inline="false"></span></div>
                    <div className="nav-name">Dashboard</div>
                </div>
            </a>
            <a href="home.com">
                <div className="flex-align-center nav-card active-bacground">
                    <div><span className="iconify nav-icon green-icon" data-icon="mdi-light:wallet" data-inline="false"></span></div>
                    <div className="nav-name">Balances</div>
                </div>
            </a>
            <a href="home.com">
                <div className="flex-align-center nav-card">
                    <div><span className="iconify nav-icon" data-icon="mdi:account-group-outline" data-inline="false"></span></div>
                    <div className="nav-name">Customers</div>
                </div>
            </a>
            <a href="home.com">
                <div className="flex-align-center nav-card">
                    <div><span className="iconify nav-icon" data-icon="clarity:analytics-outline-badged" data-inline="false"></span></div>
                    <div className="nav-name">Analytics</div>
                </div>
            </a>
            <div className="nav-title">General</div>
            <a href="home.com">
                <div className="flex-align-center nav-card">
                    <div><span className="iconify nav-icon" data-icon="carbon:settings-adjust" data-inline="false"></span></div>
                    <div className="nav-name">Settings</div>
                </div>
            </a>
            <a href="home.com">
                <div className="flex-align-center nav-card">
                    <div><span className="iconify nav-icon" data-icon="akar-icons:star" data-inline="false"></span></div>
                    <div className="nav-name">Team</div>
                </div>
            </a>
            <a href="home.com">
                <div className="flex-align-center nav-card">
                    <div><span className="iconify nav-icon" data-icon="carbon:phone" data-inline="false"></span></div>
                    <div className="nav-name">Contact</div>
                </div>
            </a>
            <a href="home.com">
                <div className="flex-align-center nav-card">
                    <div><span className="iconify nav-icon" data-icon="mdi-light:logout" data-inline="false"></span></div>
                    <div className="nav-name">Logout</div>
                </div>
            </a>
        </div>
    )
}

export default Nav

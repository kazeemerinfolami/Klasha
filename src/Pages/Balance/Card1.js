import React from 'react'

function Card1() {
    return (
        <div className="Dashboard-box1">
            <div className="flex-center-just-spaceBtw border-box1">
                <div className="box-title">Total account balance</div>
                <select id="cars" className="box-currency">
                    <option value="volvo">USD</option>
                    <option value="saab">KES</option>
                    <option value="opel">NGN</option>
                    <option value="audi">GHC</option>
                </select>
            </div>
            <div className="">
                <div>
                    <div className="box-amount">$2562829</div>
                    <div className="box-rate">1 USD = 381.97 NGN</div>
                </div>
            </div>
        </div>
    )
}

export default Card1

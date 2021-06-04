import React from 'react'

function InputSection() {
    return (
        <div className="flex-center-just-spaceBtw flex-align-center margin-top">
            <div className="page-name">Payout table</div>
            <div className="flex-align-center">
                <div className="input-card flex-align-center">
                    <input className="search-wrapper input-box" placeholder="Search something..." type="search" />
                    <span className="iconify" data-icon="bx:bx-search" data-inline="false"></span>
                </div>
                <div className="input-card" ><input className="date-wrapper input-box" type="date" /></div>
                <button className="green-button">Payout</button>
            </div>
        </div>
    )
}

export default InputSection

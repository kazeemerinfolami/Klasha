import React from 'react'
import BodyFrame from '../../component/BodyFrame'
import Card1 from './Card1'
import Card2 from './Card2'
import BalanceTable from './BalanceTable'
import InputSection from './InputSection'

function Dashboard() {
    return (
        <BodyFrame pageName="Balance">
            <div className="flex-align-center">
                <Card1 />
                <Card2 />
            </div>
            <InputSection />
            <BalanceTable />
            <button className="see-more-button">See more</button>
        </BodyFrame>
    )
}

export default Dashboard

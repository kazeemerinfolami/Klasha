import React from 'react'
import Nav from './Nav'
import TopNav from './TopNav'

function BodyFrame({ children, pageName }) {
    return (
        <div className="Container-body">
            <Nav />
            <div className="Container-Body-Content-wrapper">
                <TopNav pageName={pageName} />
                <div className="children-wrapper">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BodyFrame

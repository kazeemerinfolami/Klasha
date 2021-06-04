import React, { useState } from 'react'
import Nav from './Nav'
import TopNav from './TopNav'

function BodyFrame({ children, pageName }) {
    const [open, setOpen] = useState(false)

    const openMenu = () => {
        setOpen(true)
    }
    const CloseMenu = () => {
        setOpen(!true)
    }
    return (
        <div className="Container-body">
            <Nav open={open} CloseMenu={CloseMenu} />
            <div className="Container-Body-Content-wrapper">
                <TopNav pageName={pageName} openMenu={openMenu} open={open} />
                <div className="children-wrapper">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BodyFrame

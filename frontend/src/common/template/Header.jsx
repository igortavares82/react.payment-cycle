import React from 'react'
import Navbar from './Navbar'

export default props => {
    return (
        <header className='main-header'>
            <a href="/#/" className='logo'>
                <span className="logo-mini"><b>P</b>C</span>
                <span className="logo-lg">
                    <i className="fa fa-money"></i>
                    <b>Payment</b> Cycle
                </span>
            </a>
            <nav className="navbar navbar-static-top">
                <a href="" className="sidebar-toggle" data-toggle="offcanvas"></a>
                <Navbar />
            </nav>
        </header>
    )
}

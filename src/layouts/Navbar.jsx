import React from 'react'
import navLogo from '../assets/nav-logo.png'
import "../styles/Navbar.css"
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import menuFont from '../assets/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
const Navbar = () => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <nav className='container py-2 d-flex justify-content-between'>
        <div className='d-flex align-items-center gap-2'>
            <img src={navLogo} alt="" className='img-fluid'/>
            <h2>Innoson Group</h2>
        </div>
        <ul className='d-none list-unstyled d-lg-flex align-items-center gap-5'>
            <li>Home</li>
            <li>Companies</li>
            <li>Products</li>
            <li>About</li>
            <li className='btn'>Contact</li>
        </ul>
        {/* offcanvas */}
        <div className='d-md-block d-lg-none mt-2'>

      <div className='d-lg-none' onClick={handleShow}>
        <img className='menu-img' src={menuFont} alt="menu-font" />
      </div>

      <Alert variant="info" className="d-none d-lg-block ">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert>

      <Offcanvas show={show} onHide={handleClose} responsive="lg w-75">
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className='my-4 list-unstyled menu-list'>
            <li>Home</li>
            <li>Companies</li>
            <li>Products</li>
            <li>About</li>
            <li className='btn'>Contact</li>
        </ul>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    </nav>
    </>
  )
}

export default Navbar
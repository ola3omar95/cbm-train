import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './fit-logo.png';
import Button from './Button';
import Icon from '@material-ui/core/Icon';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import InfoIcon from '@material-ui/icons/Info';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 1024) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={ closeMobileMenu }>
                        <img src={ logo } className="cbm-logo" alt="logo" />
                    </Link>
                    <div className="menu-icon" onClick={ handleClick }>
                        <i className={ click ? 'fas fa-times' : 'fas fa-bars' } />
                    </div>
                    <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={ closeMobileMenu }>
                                <Icon style={ { fontSize: 30 } }>home</Icon>  Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/career' className='nav-links' onClick={ closeMobileMenu }>
                                <AssignmentIndIcon style={ { fontSize: 30 } }></AssignmentIndIcon>  Career
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/traning' className='nav-links' onClick={ closeMobileMenu }>
                                <CastForEducationIcon style={ { fontSize: 30 } }></CastForEducationIcon>  Traning
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-us' className='nav-links' onClick={ closeMobileMenu }>
                                <InfoIcon style={ { fontSize: 30 } }></InfoIcon>  About Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-in' className='nav-links-mobile' onClick={ closeMobileMenu }>
                                <PersonOutlineIcon style={ { fontSize: 30 } } > </PersonOutlineIcon>Sign in &nbsp;
                                <Link to='/sign-up' className='nav-links-mobile' onClick={ closeMobileMenu }>
                                    / Sign Up
                            </Link>
                            </Link>
                        </li>
                    </ul>
                    {/*{ button && <Button buttonStyle='btn--outline'>SIGN UP</Button> }*/ }
                </div>
            </nav>


            <nav className="navbar-mobile">
                <div className="navbar-container-mob">
                    <ul className='nav-menu-mob' >
                        <li className='nav-item-mob'>
                            <Link to='/' className='nav-links-mob' >
                                <Icon style={ { fontSize: 30 } }>home</Icon>  <br />Home
                            </Link>
                        </li>
                        <li className='nav-item-mob'>
                            <Link to='/career' className='nav-links-mob' onClick={ closeMobileMenu }>
                                <AssignmentIndIcon style={ { fontSize: 30 } }></AssignmentIndIcon> <br /> Career
                            </Link>
                        </li>
                        <li className='nav-item-mob'>
                            <Link to='/traning' className='nav-links-mob' onClick={ closeMobileMenu }>
                                <CastForEducationIcon style={ { fontSize: 30 } }></CastForEducationIcon> <br /> Traning
                            </Link>
                        </li>
                        <li className='nav-item-mob'>
                            <Link to='/about-us' className='nav-links-mob' onClick={ closeMobileMenu }>
                                <InfoIcon style={ { fontSize: 30 } }></InfoIcon> <br /> About Us
                            </Link>
                        </li>
                        <li className='nav-item-mob'>
                            <Link to='/sign-up' className='nav-links-mobile-mob' >
                                <PersonOutlineIcon style={ { fontSize: 30 } } > </PersonOutlineIcon> <br />Sign Up
                            </Link>
                        </li>
                    </ul>
                    { button && <Button buttonStyle='btn--outline'> <br />SIGN UP</Button> }
                </div>

            </nav>
        </>
    )
};

export default Navbar;
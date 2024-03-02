import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import "../../../assets/css/NavBar.css"; // Adjust the path to your CSS file
import IconButton from '@mui/material/IconButton'; // Import only what's needed

function AdminNavbar() {
    const [click, setClick] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setOpenDrawer(open);
    };

    const handleClick = () => setClick(!click);

 

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        AdminPanel
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact to="/admin/addplant"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                ADDPLANT
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact to="/admin/contactlist"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                CONTACTLIST
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact to="/admin/faqadd"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                FAQADD
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact to="/admin/faqlist"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                FAQLIST
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact to="/admin/plantlist"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                PLANT
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} />
                    </div>

                </div>
            </nav>
        </>
    );
}

export default AdminNavbar;

import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Added faUserCircle
import "../../assets/css/NavBar.css";
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../Redux/Userslice';
import Sidebar from '../SideBar/Sidebar';

function NavBar() {
    const [click, setClick] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const navigate = useNavigate();
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const user = useSelector(selectUser);
    const loggedIn = user.loggedIn;
    const dispatch = useDispatch();

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

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
        console.log("isloggedin",loggedIn);
    };

     const [isActive, setIsActive] = useState(false);

  const menuToggle = () => {
    setIsActive(!isActive);
  };

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">

                    <div
                        className={`menu-toggle ${showSidebar ? "open" : ""}`}
                        onClick={toggleSidebar} id="sidebar-nav"
                    >
                        <FontAwesomeIcon icon={showSidebar ? faTimes : faBars} />
                    </div>
                    <Sidebar isOpen={showSidebar} onClose={toggleSidebar} />
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                    </IconButton>
                    <NavLink exact to="/" className="nav-logo">
                        LittleGarden
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}>
                                HOME
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}>
                                ABOUT
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}>
                                CONTACT
                            </NavLink>
                        </li>
                        {loggedIn ? (
                            <>
                                <li className="nav-item">
                                    <NavLink
                                        exact to="/login"
                                        activeClassName="active"
                                        className="nav-links"
                                        onClick={() => dispatch(logout())}
                                    >
                                        LOGOUT
                                    </NavLink>
                                </li>
                                <li>
                                   <div className="profile-icon">
                                   <FontAwesomeIcon icon={faUserCircle} />
                                   </div>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <NavLink
                                        exact to="/login"
                                        activeClassName="active"
                                        className="nav-links"
                                        onClick={handleClick}
                                    >
                                        LOGIN
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        exact to="/register"
                                        activeClassName="active"
                                        className="nav-links"
                                        onClick={handleClick}
                                    >
                                        SIGNUP
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} />
                    </div>

                </div>
            </nav>
        </>
    )
}

export default NavBar;

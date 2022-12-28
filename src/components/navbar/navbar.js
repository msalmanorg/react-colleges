import "./navbar.css";
import { RiHome3Line, RiSearch2Line, RiNewspaperLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { TbBuildingBank } from "react-icons/tb";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";
export function Navbar() {
    return (
        <>
            <header className="navbar-header">
                <div className="container">
                    <navbar className="navbar">
                        <div className="logo">
                            <img src="https://raw.githubusercontent.com/msalmanorg/react-colleges/master/public/assets/images/logo.png" />
                        </div>
                        <nav className="nav">
                            <ul>
                                <li>
                                    <NavLink
                                        to="/home"
                                        activeClassName="active"
                                    >
                                        <RiHome3Line />
                                        <p>Home</p>
                                        <span></span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/colleges"
                                        activeClassName="active"
                                    >
                                        <TbBuildingBank />
                                        <p>Colleges</p>
                                        <span></span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/courses"
                                        activeClassName="active"
                                    >
                                        <RiNewspaperLine />
                                        <p>Courses</p>
                                        <span></span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/exams"
                                        activeClassName="active"
                                    >
                                        <HiOutlineNewspaper />
                                        <p>Exam</p>
                                        <span></span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/corporate"
                                        activeClassName="active"
                                    >
                                        <MdOutlineSupervisedUserCircle />
                                        <p>Corporate</p>
                                        <span></span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>

                        <Outlet />
                        <div className="header-info-btns">
                            <div className="header-info">
                                <a>
                                    <RiSearch2Line />
                                </a>
                                <a className="has-notification">
                                    <BsBell />
                                </a>
                            </div>
                            <div className="header-btns">
                                <a>Get App </a>
                                <a>Log In</a>
                            </div>
                        </div>
                    </navbar>
                </div>
            </header>
        </>
    );
}

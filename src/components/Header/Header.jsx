import "./header.scss";
import { BiSearch } from 'react-icons/bi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [searchOption, setSearchOption] = useState('All');
    const [searchOptionMenu, setSearchOptionMenu] = useState(false);
    const [serviceMenu, setServiceMenu] = useState(false);
    const [userMenu, setUserMenu] = useState(false);

    const setMenuOptionItem = (e) => {
        setSearchOption(e);
        setSearchOptionMenu(false);
    }

    return (
        <div className="header">
            <div className="wrapper">
                <div className="logo">
                    <Link to="/">
                        <h1>Logo</h1>
                    </Link>
                </div>
                <div className="content">
                    <div className="search_rapper">
                        <div className="search_bar">
                            <input type="text" placeholder="Search thousands of websites and business" />
                            <div className="search_option">
                                <div className="one_option">
                                    <p>{searchOption}</p>
                                    <RiArrowDownSLine onClick={() => setSearchOptionMenu(!searchOptionMenu)} />
                                </div>

                                <div className={`other_option ${searchOptionMenu ? `active` : ``}`}>
                                    <ul onClick={(e) => setMenuOptionItem("All")} >All</ul>
                                    <ul onClick={(e) => setMenuOptionItem("Website")}>Website</ul>
                                    <ul onClick={(e) => setMenuOptionItem("Apps")}>Apps</ul>
                                    <ul onClick={(e) => setMenuOptionItem("Amazon")}>Amazon</ul>
                                </div>
                            </div>
                        </div>
                        <div className="search_icon" >
                            <Link to='/search'>
                                <BiSearch style={{ fontSize: '20px' }} />
                            </Link>
                        </div>
                    </div>
                    <div className="menu_wrapper">
                        <ul>
                            <li>Valuation Tool</li>
                            <li onClick={() => setServiceMenu(!serviceMenu)}> Services <RiArrowDownSLine />
                                <div className={serviceMenu ? `active` : ``}>
                                    <a href="#!" onClick={() => setServiceMenu(false)} >Due-Diligence</a>
                                    <a href="#!" onClick={() => setServiceMenu(false)}>Find a broker</a>
                                </div>
                            </li>
                            <li>Pricing Page</li>
                            <li>Blog Page</li>
                            <li>
                                <Link to="/login">Sign In</Link>
                            </li>
                            <li className="btn_sell">
                                <Link to="/sell">Sell Now</Link>
                            </li>
                            <div className="person_list">
                                <div className="user_Person" onClick={() => setUserMenu(!userMenu)}>
                                    <BsFillPersonFill />
                                    {/* <RiArrowDownSLine /> */}
                                </div>
                                <div className={`user_person_menu ${userMenu ? "active" : ""}`}>
                                    <ul onClick={() => setUserMenu(false)}>
                                        <Link to="/user/dashboard">Dashboard</Link>
                                    </ul>
                                    <ul onClick={() => setUserMenu(false)}>
                                        <Link to="/user/profile">My Account</Link>
                                    </ul>
                                    <ul onClick={() => setUserMenu(false)}>
                                        <Link to="/user/dashboard?myStr=Messages">Messages</Link>
                                    </ul>
                                    <ul onClick={() => setUserMenu(false)}>
                                        <Link to="/user/dashboard?myStr=Watching">Watched Listing</Link>
                                    </ul>
                                    <ul onClick={() => setUserMenu(false)}>
                                        <Link to="!#">Sign Out</Link>
                                    </ul>
                                </div>
                            </div>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
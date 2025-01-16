import React , { useState , useEffect } from 'react';

import { Link , NavLink } from 'react-router-dom';
import menus from '../../pages/menu';
import DarkMode from './DarkMode';
import Button from '../button/button-st1';
import './styles.scss';
import logo from '../../assets/images/logo/logo_dark.png'


const Header = () => {

    const [scroll, setScroll] = useState(false);
        useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
        return () => {
            setScroll({});
        }
    }, []);

    const [menuActive, setMenuActive] = useState(null);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
      };

    
    const [activeIndex, setActiveIndex] = useState(null);
    const handleDropdown = index => {
        setActiveIndex(index); 
    };

    return (
        <header id="header_main" className={`header_1 js-header ${scroll ? 'is-fixed' : ''}`}>
        <div className="themes-container">
            <div className="row">
                <div className="col-md-12">                              
                    <div id="site-header-inner"> 
                        <div className="wrap-box flex">
                            <div id="site-logo" className="clearfix">
                                <div id="site-logo-inner">
                                    <NavLink to="/" className="main-logo"><img src={logo} alt="Icoland" /></NavLink>
                                </div>
                            </div>
                            <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                            <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`} >
                            <ul id="menu-primary-menu" className="menu">
                                {
                                    menus.map((data,idx) => (
                                        <li key={idx} onClick={()=> handleDropdown(idx)} className={`menu-item ${data.namesub ? 'menu-item-has-children' : ''} ${activeIndex === idx ? 'active' : ''}`} 
                                        
                                        >
                                            <Link to={data.links}>{data.name}</Link>
                                            {
                                                data.namesub &&
                                                <ul className="sub-menu">
                                                    {
                                                        data.namesub.map((submenu) => (
                                                            <li key={submenu.id} className="menu-item"><NavLink to={submenu.links} onClick={handleDropdown}>{submenu.sub}</NavLink></li>
                                                        ))
                                                    }
                                                </ul>
                                            }
                                            
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                            <div className="flat-search-btn flex">
                                <div className="header-search flat-show-search" >                                   
                                    <div className="top-search">
                                        <form action="#" method="get" role="search" className="search-form">
                                            <input type="search" id="s" className="search-field style" placeholder="Search Here..." name="s" title="Search for" required="" />
                                            <button className="search search-submit" type="submit" title="Search">
                                                <i className="far fa-search"></i>
                                            </button>
                                        </form>                                           
                                    </div>
                                </div>
                                <div className="sc-btn-top" id="site-header">
                                    <Button title='Wallet Connect' addclass='header-slider style wallet fl-button pri-1' path='/connectwallet' />
                                </div>                                     
                            </div>                            
                        </div> 
                    </div>
                </div>
            </div>
        </div>
       <DarkMode />
    </header>
    );
}

export default Header;
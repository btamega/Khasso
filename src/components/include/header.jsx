import React from 'react'
import {NavLink} from 'react-router-dom'
const closeNav= () =>{
    document.getElementById("category").style.visibility="hidden";
};
const openNav= () =>{
document.getElementById("category").style.visibility="visible";
};

const header = () => {
  return (
    <div>
        <header className="header shop">       
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-6">
                            <div className="top-left">
                                <ul className="list-main">
                                    <li><a href="tel:+33 (605) 703-920"><i className="ti-headphone-alt"></i> +33 (605) 703-920</a></li>
                                    <li><a href="mailto:karecherif2000@gmail.com"><i className="ti-email"></i> karecherif2000@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6">
                            <div className="right-content">
                                <ul className="list-main">
                                    <li><a target={'_blank'} href="https://web.facebook.com/Khassodesign-112125716933890"><i className="ti-facebook"></i> KhassoDesign</a></li>
                                    <li><i className="ti-user"></i> <a href="#">My account</a></li>
                                    <li><i className="ti-power-off"></i><a href="#">Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
            <div className="middle-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-12">
                            <div className="logo">
                                <a href="/"><img style={{marginTop:"-22px"}} src="assets\images\WhatsApp Image 2021-11-15 at 19.45.55.jpeg" alt="" /></a>
                            </div>
                            <div className="search-top">
                                <div className="top-search"><a href="#0"><i className="ti-search"></i></a></div>
                                <div className="search-top">
                                    <form className="search-form">
                                        <input type="text" placeholder="Search here..." name="search" />
                                        <button value="search" type="button"><i className="ti-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="mobile-nav"></div>
                        </div>
                        <div className="col-lg-8 col-md-7 col-12">
                            <div className="search-bar-top">
                                <div className="search-bar">
                                    <select>
                                        <option value="selected">All Category</option>
                                        <option>watch</option>
                                        <option>mobile</option>
                                        <option>kid’s item</option>
                                    </select>
                                    <form>
                                        <input name="search" placeholder="Search Products Here....." type="search" />
                                        <button className="btnn"><i className="ti-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-12">
                            <div className="right-bar">
                                
                                <div className="sinlge-bar">
                                    <a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                </div>
                                <div className="sinlge-bar">
                                    <a href="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></a>
                                </div>
                                <div className="sinlge-bar shopping">
                                    <a href="#" className="single-icon"><i className="ti-bag"></i> <span className="total-count">2</span></a>
                                    
                                    <div className="shopping-item">
                                        <div className="dropdown-cart-header">
                                            <span>2 Items</span>
                                            <a href="#">View Cart</a>
                                        </div>
                                        <ul className="shopping-list">
                                            <li>
                                                <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                                                <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                                                <h4><a href="#">Woman Ring</a></h4>
                                                <p className="quantity">1x - <span className="amount">$99.00</span></p>
                                            </li>
                                            <li>
                                                <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                                                <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                                                <h4><a href="#">Woman Necklace</a></h4>
                                                <p className="quantity">1x - <span className="amount">$35.00</span></p>
                                            </li>
                                        </ul>
                                        <div className="bottom">
                                            <div className="total">
                                                <span>Total</span>
                                                <span className="total-amount">$134.00</span>
                                            </div>
                                            <a href="#" className="btn animate">Checkout</a>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>             
            <div className="header-inner">
                <div className="container">
                    <div className="cat-nav-head">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <div className="menu-area">
                                    <nav className="navbar navbar-expand-lg">
                                        <div className="navbar-collapse">	
                                            <div className="nav-inner">	
                                                <ul className="nav main-menu menu navbar-nav">
                                                        <li className="active"><a href="/">Home</a></li>
                                                        <li><a href="/produits">Product</a></li>												
                                                        <li><a href="#">Service</a></li>
                                                        <li><a href="/shops">Shop<i className="ti-angle-down"></i><span className="new">New</span></a>
                                                            <ul className="dropdown">
                                                                <li><a href="#">Shop Grid</a></li>
                                                                <li><a href="#">Cart</a></li>
                                                                <li><a href="#">Checkout</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Pages</a></li>									
                                                        <li><a href="#">Blog<i className="ti-angle-down"></i></a>
                                                            <ul className="dropdown">
                                                                <li><a href="#">Blog Single Sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="/contact">Contact Us</a></li>
                                                        <li><a href="/contact">About</a></li>

                                                    </ul>
                                            </div>
                                        </div>
                                    </nav>
                                        
                                </div>
                            </div>
                            <div className="col-2"></div>
                        </div>
                    </div>
                </div>
            </div>
                
        </header>
        
    </div>
    
  )
}

export default header
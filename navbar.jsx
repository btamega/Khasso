import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
        <div className="preloader">
              <div className="preloader-inner">
                  <div className="preloader-icon">
                      <span></span>
                      <span></span>
                  </div>
              </div>
     </div>
        
          <header className="header shop">
         
              <div className="topbar">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-4 col-md-12 col-12">
                      
                              <div className="top-left">
                                  <ul className="list-main">
                                      <li><i className="ti-headphone-alt"></i> +000 (000) 000-000</li>
                                      <li><i className="ti-email"></i> therichpost.com</li>
                                  </ul>
                              </div>
                           
                          </div>
                          <div className="col-lg-8 col-md-12 col-12">
                             
                              <div className="right-content">
                                  <ul className="list-main">
                                      <li><i className="ti-location-pin"></i> Store location</li>
                                      <li><i className="ti-alarm-clock"></i> <NavLink to="#">Daily deal</NavLink></li>
                                      <li><i className="ti-user"></i> <NavLink to="#">My account</NavLink></li>
                                      <li><i className="ti-power-off"></i><NavLink to="#">Login</NavLink></li>
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
                                  <NavLink to="#">Jassa</NavLink>
                              </div>
                            
                              <div className="search-top">
                                  <div className="top-search"><NavLink to="#0"><i className="ti-search"></i></NavLink></div>
                                
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
                                          <option selected="selected">All Category</option>
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
                                      <NavLink to="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></NavLink>
                                  </div>
                                  <div className="sinlge-bar">
                                      <NavLink to="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></NavLink>
                                  </div>
                                  <div className="sinlge-bar shopping">
                                      <NavLink to="#" className="single-icon"><i className="ti-bag"></i> <span className="total-count">2</span></NavLink>
                                    
                                      <div className="shopping-item">
                                          <div className="dropdown-cart-header">
                                              <span>2 Items</span>
                                              <NavLink to="#">View Cart</NavLink>
                                          </div>
                                          <ul className="shopping-list">
                                              <li>
                                                  <NavLink to="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></NavLink>
                                                  <NavLink className="cart-img" to="#"><img src="https://via.placeholder.com/70x70" alt="#" /></NavLink>
                                                  <h4><NavLink to="#">Woman Ring</NavLink></h4>
                                                  <p className="quantity">1x - <span className="amount">$99.00</span></p>
                                              </li>
                                              <li>
                                                  <NavLink to="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></NavLink>
                                                  <NavLink className="cart-img" to="#"><img src="https://via.placeholder.com/70x70" alt="#" /></NavLink>
                                                  <h4><NavLink to="#">Woman Necklace</NavLink></h4>
                                                  <p className="quantity">1x - <span className="amount">$35.00</span></p>
                                              </li>
                                          </ul>
                                          <div className="bottom">
                                              <div className="total">
                                                  <span>Total</span>
                                                  <span className="total-amount">$134.00</span>
                                              </div>
                                              <NavLink to="#" className="btn animate">Checkout</NavLink>
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
                              <div className="col-lg-3">
                                  <div className="all-category">
                                      <h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="true"></i>CATEGORIES</h3>
                                      <ul className="main-category">
                                          <li><NavLink to="#">New Arrivals <i className="fa fa-angle-right" aria-hidden="true"></i></NavLink>
                                              <ul className="sub-category">
                                                  <li><NavLink to="#">accessories</NavLink></li>
                                                  <li><NavLink to="#">best selling</NavLink></li>
                                                  <li><NavLink to="#">top 100 offer</NavLink></li>
                                                  <li><NavLink to="#">sunglass</NavLink></li>
                                                  <li><NavLink to="#">watch</NavLink></li>
                                                  <li><NavLink to="#">man’s product</NavLink></li>
                                                  <li><NavLink to="#">ladies</NavLink></li>
                                                  <li><NavLink to="#">westrn dress</NavLink></li>
                                                  <li><NavLink to="#">denim </NavLink></li>
                                              </ul>
                                          </li>
                                          <li className="main-mega"><NavLink to="#">best selling <i className="fa fa-angle-right" aria-hidden="true"></i></NavLink>
                                              <ul className="mega-menu">
                                                  <li className="single-menu">
                                                      <NavLink to="#" className="title-link">Shop Kid's</NavLink>
                                                      <div className="image">
                                                          <img src="https://via.placeholder.com/225x155" alt="#" />
                                                      </div>
                                                      <div className="inner-link">
                                                          <NavLink to="#">Kids Toys</NavLink>
                                                          <NavLink to="#">Kids Travel Car</NavLink>
                                                          <NavLink to="#">Kids Color Shape</NavLink>
                                                          <NavLink to="#">Kids Tent</NavLink>
                                                      </div>
                                                  </li>
                                                  <li className="single-menu">
                                                      <NavLink to="#" className="title-link">Shop Men's</NavLink>
                                                      <div className="image">
                                                          <img src="https://via.placeholder.com/225x155" alt="#" />
                                                      </div>
                                                      <div className="inner-link">
                                                          <NavLink to="#">Watch</NavLink>
                                                          <NavLink to="#">T-shirt</NavLink>
                                                          <NavLink to="#">Hoodies</NavLink>
                                                          <NavLink to="#">Formal Pant</NavLink>
                                                      </div>
                                                  </li>
                                                  <li className="single-menu">
                                                      <NavLink to="#" className="title-link">Shop Women's</NavLink>
                                                      <div className="image">
                                                          <img src="https://via.placeholder.com/225x155" alt="#" />
                                                      </div>
                                                      <div className="inner-link">
                                                          <NavLink to="#">Ladies Shirt</NavLink>
                                                          <NavLink to="#">Ladies Frog</NavLink>
                                                          <NavLink to="#">Ladies Sun Glass</NavLink>
                                                          <NavLink to="#">Ladies Watch</NavLink>
                                                      </div>
                                                  </li>
                                              </ul>
                                          </li>
                                          <li><NavLink to="#">accessories</NavLink></li>
                                          <li><NavLink to="#">top 100 offer</NavLink></li>
                                          <li><NavLink to="#">sunglass</NavLink></li>
                                          <li><NavLink to="#">watch</NavLink></li>
                                          <li><NavLink to="#">man’s product</NavLink></li>
                                          <li><NavLink to="#">ladies</NavLink></li>
                                          <li><NavLink to="#">westrn dress</NavLink></li>
                                          <li><NavLink to="#">denim </NavLink></li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="col-lg-9 col-12">
                                  <div className="menu-area">
                                     
                                      <nav className="navbar navbar-expand-lg">
                                          <div className="navbar-collapse">  
                                              <div className="nav-inner">  
                                                  <ul className="nav main-menu menu navbar-nav">
                                                          <li className="active"><NavLink to="#">Home</NavLink></li>
                                                          <li><NavLink to="#">Product</NavLink></li>                        
                                                          <li><NavLink to="#">Service</NavLink></li>
                                                          <li><NavLink to="#">Shop<i className="ti-angle-down"></i><span className="new">New</span></NavLink>
                                                              <ul className="dropdown">
                                                                  <li><NavLink to="#">Shop Grid</NavLink></li>
                                                                  <li><NavLink to="#">Cart</NavLink></li>
                                                                  <li><NavLink to="#">Checkout</NavLink></li>
                                                              </ul>
                                                          </li>
                                                          <li><NavLink to="#">Pages</NavLink></li>                  
                                                          <li><NavLink to="#">Blog<i className="ti-angle-down"></i></NavLink>
                                                              <ul className="dropdown">
                                                                  <li><NavLink to="#">Blog Single Sidebar</NavLink></li>
                                                              </ul>
                                                          </li>
                                                          <li><NavLink to="#">Contact Us</NavLink></li>
                                                      </ul>
                                              </div>
                                          </div>
                                      </nav>
                                      
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            
          </header>
    </div>
  )
}

export default navbar;
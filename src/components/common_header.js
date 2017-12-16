import React, {Component} from 'react';
import '../style.css';

import logo from '../images/logo.png';
import per from '../images/per.jpg';
import { Link } from 'react-router-dom'

class CommonHeader extends Component{

    render(){
        return(
          <div>
              <div className="head_bar">
                  <div className="containe">
                      <div className="logo">
                          <a href="#"><h2><img src={logo}/></h2></a>
                      </div>
                      <div className="menu">
                          <div className="maindiv">
                              <div className="hamburger">

                              </div>
                          </div>
                          <ul>
                              <li><Link to={'/home'}>Trade</Link></li>
                              <li className="dropdown"><Link to={'/funds'} className="dropbtn">Funds</Link>
                                  <div className="dropdown-content">
                                      <Link to={'/funds'}>funds</Link>
                                      <Link to={'/withdraw'}>Withdraw history</Link>
                                  </div>
                              </li>
                              <li className="dropdown"><Link to={'/orders'} className="dropbtn">Orders</Link>
                                  <div className="dropdown-content">
                                      <Link to={'/orders'}>Open Orders</Link>
                                      <Link to={'/tradehistory'}>Trade history</Link>
                                  </div>
                              </li>
                              <li className="dropdown"><Link to={'/account'} className="dropbtn">Account</Link>
                              <div className="dropdown-content">
                                  <Link to={'/editprofile'}>Edit profile</Link>
                                  <Link to={'/docs'}>Verify account</Link>
                                  <Link to={'/changepassword'}>Change password</Link>
                                  <Link to={'/apikeys'}>Api keys</Link>
                              </div>
                          </li>
                              <li><Link id="searchbychar" to={'#'}>User</Link></li>
                              <li><Link id="logout" to={'#'}>Logout</Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}
export default CommonHeader;
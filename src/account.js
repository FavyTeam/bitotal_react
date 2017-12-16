import React from 'react';
import './style.css';
import './style1.css';
import logo from './images/logo.png';
import per from './images/per.jpg';
import { Link } from 'react-router-dom'

class Account extends React.Component {
    render(){
        return (
            <div>
                <div className="head_bar">
                    <div className="container">
                        <div className="logo">
                            <a href="#"><h2><img src={logo}/></h2></a>
                        </div>
                        <div className="menu">
                            <div className="maindiv">
                                <div className="hamburger">

                                </div>
                            </div>
                            <ul>
                                <li>
                                <Link to={'/withdraw'} className="menu-item">
                                    Trade
                                </Link></li>
                                <li><a href="funds.html">Funds</a></li>
                                <li><a href="orders.html">Orders</a></li>
                                <li><a href="account.html">Account</a></li>
                                <li><a id="searchbychar" href="#">User</a></li>
                                <li><a id="log-out" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="standard">
                        <div className="standard_text1">
                            <div className="acc-extra"></div>
                            <div className="acc">
                                <h2>Account Information</h2>
                            </div>
                            <div className="acc1">
                                <div className="acc1-sub1">
                                    <img src={per}/>
                                </div>
                                <div className="acc1-sub2">
                                    <p>
                                        <label>User:</label>
                                        <i>Jack</i>
                                    </p>
                                    <p>
                                        <label>Group:</label>
                                        <i>User</i>
                                    </p>
                                    <p>
                                        <label>E-mail:</label>
                                        <i>admin@abc.com</i>
                                    </p>
                                    <p>
                                        <label>Country:</label>
                                        <i><sky>-</sky></i>
                                    </p>
                                    <p>
                                        <label>Last action:</label>
                                        <i>2017-12-08 19:13:30</i>
                                    </p>
                                </div>
                            </div>
                            <div className="acc-extra"></div>
                        </div>
                        <div className="standard_image2">
                            <div className="account-right">
                                <div className="stand-order">
                                    <a href="funds.html">Funds</a>
                                </div>
                                <div className="stand-order">
                                    <a href="#">Edits</a>
                                </div>
                                <div className="stand-order">
                                    <a href="tradehistory.html">Trade History</a>
                                </div>
                                <div className="stand-order">
                                    <a href="orders.html">Orders History</a>
                                </div>
                                <div className="stand-order">
                                    <a href="withdraw.html">Withdraw History</a>
                                </div>
                                <div className="stand-order">
                                    <a href="#">API Keys</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Account;
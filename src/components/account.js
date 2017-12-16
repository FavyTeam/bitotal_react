import React from 'react';
import '../style.css';
import logo from '../images/logo.png';
import per from '../images/per.jpg';
import { Link } from 'react-router-dom'
import CommonHeader from './common_header';
import Commonmenu from "./commonmenu";

class Account extends React.Component {
    render(){
        return (
            <div>
                <CommonHeader/>
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
                        <Commonmenu/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Account;
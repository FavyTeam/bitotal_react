import React from 'react';
import '../style.css';
import logo from '../images/logo.png';
import per from '../images/per.jpg';
import { Link } from 'react-router-dom'
import CommonHeader from './common_header';
import Commonmenu from "./commonmenu";

class Avatar extends React.Component {

    render(){
        return(
            <div>
                <CommonHeader/>
                <section>
                    <div className="standard">
                        <div className="standard_text1">
                            <div className="edit-pro">
                                <ul>
                                    <li><Link to={'/editprofile'}>Main</Link></li>
                                    <li><Link to={'/changepassword'}>Change password</Link></li>
                                    <li><Link className="edit-active" to={'/avatar'}>Change avatar</Link></li>
                                    <li><Link to={'/docs'}>Verification Docs</Link></li>
                                </ul>
                            </div>
                            <div className="acc-extra"></div>
                            <div className="acc1">
                                <div className="acc1-sub1edit">
                                    <img src={per}/>
                                </div>
                                <div className="change-2">
                                    <input type="file" name="chooseFile" id="chooseFile"/>
                                        <br/><br/>
                                            <Link to={"#"}>Save</Link>
                                            <br/>
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

export default Avatar;
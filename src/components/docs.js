import React from 'react';
import '../style.css';
import logo from '../images/logo.png';
import per from '../images/per.jpg';
import { Link } from 'react-router-dom'
import CommonHeader from './common_header';
import Commonmenu from './commonmenu';

class Docs extends React.Component{

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
                                <div class="docs-2">
                                    <h1>TO VERIFY YOUR IDENTITY YOU NEED TO SUBMIT AN HIGH<br/> QUALITY IMAGE OF THE FOLLOWING DOCUMENTS:</h1>
                                    <br/>
                                        <p>1. A valid government issued ID:</p>
                                        <br/>
                                            <ul>
                                                <li>International passport (double page)</li>
                                                <li>National ID card (both sides)</li>
                                                <li>Driver license (both sides)</li>
                                            </ul><br/>
                                            <span>Front side: </span><input type="file" name="chooseFile" id="chooseFile"/><br/>
                                            <span>Back side: </span><input type="file" name="chooseFile" id="chooseFile"/>
                                            <br/>
                                            <br/>
                                            <p>2. A proof of residency:</p>
                                            <br/>
                                            <ul>
                                                <li>Bank statement</li>
                                                <li>Utility bills</li>
                                                <li>Tax return</li>
                                                <li>Certificate of residency issued by a government or a local authority.</li>
                                            </ul>
                                            <br/>
                                            <input type="file" name="chooseFile" id="chooseFile"/><br/><br/>
                                                <Link to={"#"}>Save</Link>
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
export default Docs;
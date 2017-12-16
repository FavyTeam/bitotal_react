import React from 'react';
import '../style.css';
import logo from '../images/logo.png';
import per from '../images/per.jpg';
import { Link } from 'react-router-dom'
import CommonHeader from './common_header';
import Commonmenu from "./commonmenu";

class Apikeys extends React.Component{

    render(){
        return(
            <div>
                <CommonHeader/>
                <section>
                    <div className="standard">
                        <div className="standard_text1">
                            <div className="acc-extra"></div>
                            <div className="api-main">
                                <div>
                                    <div width="100%">
                                        <h2>You do not have API keys</h2>
                                        <br/>
                                    </div>
                                    <div className="div_style_12">
                                        <div className="api-left">
                                            <p>Name</p><p>Keys</p><p>Perms</p><p>Action</p>
                                        </div>
                                        <div className='div_style_10'>
                                            <h3 className="font_style_1">Create new keys</h3>
                                            <input type="text" name="key" placeholder="Enter new key"/>
                                            <br/><Link to={'/#'}>Create</Link>
                                        </div>
                                    </div>
                                    <div className="acc-extra"></div>
                                </div>
                            </div>
                        </div>
                        <Commonmenu/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Apikeys;
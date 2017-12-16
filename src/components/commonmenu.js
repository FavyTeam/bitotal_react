import React, {Component} from 'react';
import '../style.css';
import logo from '../images/logo.png';
import per from '../images/per.jpg';
import { Link } from 'react-router-dom'

class Commonmenu extends Component{

    render(){
        return(
            <div>
                <div className="standard_image2">
                    <div className="account-right">
                        <div className="stand-order">
                            <Link to={'/funds'} >Funds</Link>
                        </div>
                        <div className="stand-order">
                            <Link to={'/editprofile'} >Edits</Link>
                        </div>
                        <div className="stand-order">
                            <Link to={'/tradehistory'} >Trade History</Link>
                        </div>
                        <div className="stand-order">
                            <Link to={'/orders'} >Orders History</Link>
                        </div>
                        <div className="stand-order">
                            <Link to={'/withdraw'} >Withdraw History</Link>
                        </div>
                        <div className="stand-order">
                            <Link to={'/apikeys'} >API Keys</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Commonmenu;
import React, {Component} from 'react';
import '../style.css';
import logo from '../images/logo.png';
import per from '../images/per.jpg';
import { Link } from 'react-router-dom'
import CommonHeader from './common_header';
import Commonmenu from "./commonmenu";

class Tradehistory extends Component{

    render(){

        return(
            <div>
                <CommonHeader/>
                <section>
                    <div className="standard">
                        <div className="standard_text1">
                            <div className="center-seven">
                                <div className="six-h1">
                                    <h1>Your trade history</h1>
                                </div>
                                <div id="Tokyo" className="w3-container city" >
                                    <table className="table-center">
                                        <tr>
                                            <th>Pair</th>
                                            <th>Type</th>
                                            <th>Price</th>
                                            <th>Amount</th>
                                            <th>Total</th>
                                            <th>Date</th>
                                        </tr>
                                        <tbody>
                                        <tr className="tr_style_trade">
                                            <td colspan="6">There are no orders!</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="center-extra"></div>
                        </div>
                        <Commonmenu/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Tradehistory;
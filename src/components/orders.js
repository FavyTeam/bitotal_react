import React from 'react';
import '../style.css';
import logo from '../images/logo.png';
import per from '../images/per.jpg';
import { Link } from 'react-router-dom'
import Commonmenu from "./commonmenu";
import CommonHeader from "./common_header";

class Orders extends React.Component{
    render(){
        return(
            <div>
                <CommonHeader/>
                <section>
                    <div className="standard">
                        <div className="standard_text1">
                            <div className="center-seven">
                                <div id="Tokyo" className="w3-container city" >
                                    <table className="table-center">
                                        <tbody>
                                            <tr>
                                                <td colSpan="2">
                                                    Pair: <select className="seven-select">
                                                    <option>All</option>
                                                    <option>TEME/BTC</option>
                                                    <option>TTT/BTC</option>
                                                    <option>TTT/USD</option>
                                                    <option>TSOFT/BTC</option>
                                                    <option>TENTE/BTC</option>
                                                    <option>TEME/BTC</option>
                                                    <option>BTC/USD</option>
                                                    <option>ETH/BTC</option>
                                                    <option>BCC/BTC</option>
                                                    <option>XRP/BTC</option>
                                                    <option>DASH/BTC</option>
                                                    <option>NEO/BTC</option>
                                                    <option>XMR/BTC</option>
                                                    <option>XEM/BTC</option>
                                                    <option>ETC/BTC</option>
                                                    <option>LTC/BTC</option>
                                                    <option>LSK/BTC</option>
                                                    <option>DEVS/BTC</option>
                                                    <option>DEVS/USD</option>
                                                </select>
                                                </td>
                                                <td colSpan="3">
                                                    Type: <select className="seven-select">
                                                    <option>All</option>
                                                    <option>Sell</option>
                                                    <option>Buy</option>
                                                </select>
                                                </td>
                                                <td colSpan="2">
                                                    Show: <select className="seven-select">
                                                    <option>All</option>
                                                    <option>Active</option>
                                                    <option>Filld</option>
                                                    <option>Partly filled</option>
                                                    <option>canceled</option>
                                                </select>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                    <table className="table-center">
                                        <tbody>
                                        <tr>
                                            <th>Pair</th>
                                            <th>Type</th>
                                            <th>Original Price</th>
                                            <th>Average Price</th>
                                            <th>Amount</th>
                                            <th>Complete%</th>
                                            <th>Total</th>
                                            <th>Date</th>
                                        </tr>
                                        <tr text-align="center">
                                            <td colSpan="8">There are no orders</td>
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
export default Orders;
import React from 'react';
import '../style.css';
import logo from '../images/logo.png';
import per from '../images/per.jpg';
import { Link } from 'react-router-dom'
import CommonHeader from './common_header';
import Commonmenu from "./commonmenu";

class Withdraw extends React.Component {
    render(){
        return  (
            <div>
                <CommonHeader/>
                <section>
                    <div class="standard">
                        <div class="standard_text1">
                            <div class="center-seven">
                                <div id="Tokyo" class="w3-container city" >
                                    <table class="table-center">
                                        <tr>
                                            <th>Currency</th>
                                            <th>Amount</th>
                                            <th>Address</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                        </tr>
                                        <tbody>
                                        <tr className="td_style">
                                            <td colspan="5">There are no orders!</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="center-extra"></div>
                        </div>
                        <Commonmenu/>
                    </div>
                </section>
            </div>
        );
    }
}
export default Withdraw;


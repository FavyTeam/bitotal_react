import React from 'react';
import '../style.css';
import ReactDOM from 'react-dom';
import logo from '../images/logo.png';
import per from '../images/per.jpg';
import { Link } from 'react-router-dom'
import CommonHeader from './common_header';
import $ from 'jquery';
import Mychart from'./chart';

class Home extends React.Component{

    constructor(props){
        super(props);
        this.openCity = this.openCity.bind(this);
        this.hide_tab = this.hide_tab.bind(this);
        this.tabl_show = this.tabl_show.bind(this);
        this.tab2_show = this.tab2_show.bind(this);
        this.tab3_show = this.tab3_show.bind(this);
        this.tab4_show = this.tab4_show.bind(this);
        this.tab5_show = this.tab5_show.bind(this);
        this.tab6_show = this.tab6_show.bind(this);
        this.tab7_show = this.tab7_show.bind(this);
        this.tab8_show = this.tab8_show.bind(this);
        this.tab9_show = this.tab9_show.bind(this);
        this.tabl0_show = this.tabl0_show.bind(this);
        this.tabl1_show = this.tabl1_show.bind(this);
        this.tabl2_show = this.tabl2_show.bind(this);
    }
    componentDidMount(){
        console.log("componentWillMount");
        $("#main-tab5").hide();
        $("#main-tab4").hide();
        $("#main-tab2").hide();
        $("#main-tab1").hide();
        $("#main-tab3").hide();
        $("#main-tab6").hide();
        $("#main-tab7").hide();
        $("#main-tab8").hide();
        $("#main-tab9").hide();
        $("#main-tab10").hide();
        $("#main-tab11").hide();
        $("#main-tab12").hide();
    }
    openCity(cityName){

        console.log(cityName);
        var i;
        var x = document.getElementsByClassName("city");
        console.log("city length : ", x.length);
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(cityName).style.display = "block";
    }
    hide_tab()
    {
        $("#main-tab5").hide();
        $("#main-tab4").hide();
        $("#main-tab2").hide();
        $("#main-tab1").hide();
        $("#main-tab3").hide();
        $("#main-tab6").hide();
        $("#main-tab7").hide();
        $("#main-tab8").hide();
        $("#main-tab9").hide();
        $("#main-tab10").hide();
        $("#main-tab11").hide();
        $("#main-tab12").hide();

    }
    tabl_show(){
        console.log("tab1 clicked.")
        this.hide_tab();
        $("#main-tab1").show();
    }
    tab2_show(){
        this.hide_tab();
        $("#main-tab2").show();
    }
    tab3_show(){
        this.hide_tab();
        $("#main-tab3").show();
    }
    tab4_show(){
        this.hide_tab();
        $("#main-tab4").show();
    }
    tab5_show(){
        this.hide_tab();
        $("#main-tab5").show();
    }
    tab6_show(){
        this.hide_tab();
        $("#main-tab6").show();
    }
    tab7_show(){
        this.hide_tab();
        $("#main-tab7").show();
    }
    tab8_show(){
        this.hide_tab();
        $("#main-tab8").show();
    }
    tab9_show(){
        this.hide_tab();
        $("#main-tab9").show();
    }
    tabl0_show(){
        this.hide_tab();
        $("#main-tab10").show();
    }
    tabl1_show(){
        this.hide_tab();
        $("#main-tab11").show();
    }
    tabl2_show(){
        this.hide_tab();
        $("#main-tab12").show();
    }

    buy_tab(){
        console.log("buy");
        $("#aaa").css("background-color","#ccc");
        $("#bbb").css("background-color","grey");

    }
    sell_tab(){
        console.log("sell");

        $("#aaa").css("background-color","grey");
        $("#bbb").css("background-color","#ccc");
    }

    render()
    {
        return(
            <div>
                <CommonHeader/>
                <section>
                    <div className="standard">
                        <div className="standard_left">
                            <div className="btcmarket">
                                <div className="coinprice">
                                    <div className="left-bit">
                                        <div className="left-bit-sub1"><p>Coin</p></div>
                                        <div className="left-bit-sub2"><p>Price</p></div>
                                        <div className="left-bit-sub3"><p>Change</p></div>
                                    </div>
                                    <div className="left_stand">
                                        <div className="left-bit1 table1" onClick={this.tabl_show}>
                                            <div className="left-bit-sub1"><p>TTT/ BTC</p></div>
                                            <div className="left-bit-sub2"><p>0.00003500</p></div>
                                            <div className="left-bit-sub3"><p>-6.46%</p></div>
                                        </div>
                                        <div id="main-tab1">
                                            <div className="left-bar-sub">
                                                <div id="left-bar-sub" className="bbar-left">
                                                    <h1 className="buy">BUY&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-left-scroll">
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="left-bar-sub1" className="bbar-right">
                                                    <h1 className="buy">SELL&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-right-scroll">
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="left-bit1 table2" onClick={this.tab2_show}>
                                            <div className="left-bit-sub1"><p>TTT/ BTC</p></div>
                                            <div className="left-bit-sub2"><p>0.00003500</p></div>
                                            <div className="left-bit-sub3"><p>-6.46%</p></div>
                                        </div>
                                        <div id="main-tab2">
                                            <div className="left-bar-sub">
                                                <div id="left-bar-sub" className="bbar-left">
                                                    <h1 className="buy">BUY&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-left-scroll">
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="left-bar-sub1" className="bbar-right">
                                                    <h1 className="buy">SELL&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-right-scroll">
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="left-bit1 table3" onClick={this.tab3_show}>
                                            <div className="left-bit-sub1"><p>TTT/ BTC</p></div>
                                            <div className="left-bit-sub2"><p>0.00003500</p></div>
                                            <div className="left-bit-sub3"><p className="red">-6.46%</p></div>
                                        </div>
                                        <div id="main-tab3">
                                            <div className="left-bar-sub">
                                                <div id="left-bar-sub" className="bbar-left">
                                                    <h1 className="buy">BUY&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-left-scroll">
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="left-bar-sub1" className="bbar-right">
                                                    <h1 className="buy">SELL&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-right-scroll">
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="left-bit1 table4" onClick={this.tab4_show}>
                                            <div className="left-bit-sub1"><p>TTT/ BTC</p></div>
                                            <div className="left-bit-sub2"><p>0.00003500</p></div>
                                            <div className="left-bit-sub3"><p>-6.46%</p></div>
                                        </div>
                                        <div id="main-tab4">
                                            <div className="left-bar-sub">
                                                <div id="left-bar-sub" className="bbar-left">
                                                    <h1 className="buy">BUY&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-left-scroll">
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="left-bar-sub1" className="bbar-right">
                                                    <h1 className="buy">SELL&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-right-scroll">
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="left-bit1 table5" onClick={this.tab5_show}>
                                            <div className="left-bit-sub1"><p>TTT/ BTC</p></div>
                                            <div className="left-bit-sub2"><p>0.00003500</p></div>
                                            <div className="left-bit-sub3"><p className="red">-6.46%</p></div>
                                        </div>
                                        <div id="main-tab5">
                                            <div className="left-bar-sub">
                                                <div id="left-bar-sub" className="bbar-left">
                                                    <h1 className="buy">BUY&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-left-scroll">
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="left-bar-sub1" className="bbar-right">
                                                    <h1 className="buy">SELL&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-right-scroll">
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="left-bit1 table6" onClick={this.tab6_show}>
                                            <div className="left-bit-sub1"><p>TTT/ BTC</p></div>
                                            <div className="left-bit-sub2"><p>0.00003500</p></div>
                                            <div className="left-bit-sub3"><p>-6.46%</p></div>
                                        </div>
                                        <div id="main-tab6">
                                            <div className="left-bar-sub">
                                                <div id="left-bar-sub" className="bbar-left">
                                                    <h1 className="buy">BUY&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-left-scroll">
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="left-bar-sub1" className="bbar-right">
                                                    <h1 className="buy">SELL&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-right-scroll">
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="left-bit1 table7" onClick={this.tab7_show}>
                                            <div className="left-bit-sub1"><p>TTT/ BTC</p></div>
                                            <div className="left-bit-sub2"><p>0.00003500</p></div>
                                            <div className="left-bit-sub3"><p>-6.46%</p></div>
                                        </div>
                                        <div id="main-tab7">
                                            <div className="left-bar-sub">
                                                <div id="left-bar-sub" className="bbar-left">
                                                    <h1 className="buy">BUY&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-left-scroll">
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="left-bar-sub1" className="bbar-right">
                                                    <h1 className="buy">SELL&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-right-scroll">
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="left-bit1 table8" onClick={this.tab8_show}>
                                            <div className="left-bit-sub1"><p>TTT/ BTC</p></div>
                                            <div className="left-bit-sub2"><p>0.00003500</p></div>
                                            <div className="left-bit-sub3"><p className="red">-6.46%</p></div>
                                        </div>
                                        <div id="main-tab8">
                                            <div className="left-bar-sub">
                                                <div id="left-bar-sub" className="bbar-left">
                                                    <h1 className="buy">BUY&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-left-scroll">
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="left-bar-sub1" className="bbar-right">
                                                    <h1 className="buy">SELL&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-right-scroll">
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="left-bit1 table9" onClick={this.tab9_show}>
                                            <div className="left-bit-sub1"><p>TTT/ BTC</p></div>
                                            <div className="left-bit-sub2"><p>0.00003500</p></div>
                                            <div className="left-bit-sub3"><p>-6.46%</p></div>
                                        </div>
                                        <div id="main-tab9">
                                            <div className="left-bar-sub">
                                                <div id="left-bar-sub" className="bbar-left">
                                                    <h1 className="buy">BUY&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-left-scroll">
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="left-bar-sub1" className="bbar-right">
                                                    <h1 className="buy">SELL&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-right-scroll">
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="left-bit1 table10" onClick={this.tabl0_show}>
                                            <div className="left-bit-sub1"><p>TTT/ BTC</p></div>
                                            <div className="left-bit-sub2"><p>0.00003500</p></div>
                                            <div className="left-bit-sub3"><p>-6.46%</p></div>
                                        </div>
                                        <div id="main-tab10">
                                            <div className="left-bar-sub">
                                                <div id="left-bar-sub" className="bbar-left">
                                                    <h1 className="buy">BUY&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-left-scroll">
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="left-bar-sub1" className="bbar-right">
                                                    <h1 className="buy">SELL&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-right-scroll">
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="left-bit1 table11" onClick={this.tabl1_show}>
                                            <div className="left-bit-sub1"><p>TTT/ BTC</p></div>
                                            <div className="left-bit-sub2"><p>0.00003500</p></div>
                                            <div className="left-bit-sub3"><p className="red">-6.46%</p></div>
                                        </div>
                                        <div id="main-tab11">
                                            <div className="left-bar-sub">
                                                <div id="left-bar-sub" className="bbar-left">
                                                    <h1 className="buy">BUY&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-left-scroll">
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                        <div className="left-data">
                                                            <div className="left-data1"><p>0.05</p></div>
                                                            <div className="left-data2"><p>14957.58320000</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="left-bar-sub1" className="bbar-right">
                                                    <h1 className="buy">SELL&nbsp;ORDERS</h1>
                                                    <div className="bbar-left-sub">
                                                        <div width="100%"><p>Size</p></div>
                                                        <div width="100%"><p>Price</p></div>
                                                    </div>
                                                    <div className="bbar-right-scroll">
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                        <div className="right-data">
                                                            <div className="right-data1"><p>15585.60000000</p></div>
                                                            <div className="right-data2"><p>1.16</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="standard_text">
                            <div className="center-first">
                                <select>
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
                            </div>
                            <div className="center-sec">
                                <ul className="sec">
                                    <li><i className="green">0.00003500 BTC(7.50%)</i></li>
                                    <li><span>High </span> <i>0.00036500 BTC</i></li>
                                    <li><span>Low </span> <i>0.00002000 BTC</i></li>
                                </ul>
                            </div>
                            <div className="center-third">
                                <div className="third-sub1">
                                    <img src="https://bitotal.com/webtrader/public/upload/logo/201711181304561360.png"/>
                                </div>
                                <div className="third-sub2">
                                    <p className="green">Name</p> Total Trading Technology<br/>
                                    <p className="green">Status</p> Active<br/>
                                    <p className="green">Release Date</p> 17 Nov 2010
                                </div>
                                <div className="third-sub3">
                                    <p className="green">Website</p> <a href="http://Bitotal.com" className="p_style">Bitotal.com</a>
                                    <p className="green">Announcement</p> <a href="http://https://bitcointalk.org/index.php?topic=1971261.0" className="p_style">https://bitcointalk.org/index.php?topic=1971261.0</a><br/>
                                    <p className="green">Twitter</p> <a href="http://twitter.com/tttcoin" className="p_style">twitter.com/tttcoin</a>
                                </div>
                                <div className="third-sub4">
                                    <p className="green">Total coins</p> 5.000.000<br/>
                                    <p className="green">Description</p> TTT is the cryptocurrencies Index that represent the price movements of Bitcoin and the 20 largest altcoins. The coin is conceived with the intention to create an indication of the whole cryptocurrencies market.<br/>
                                </div>
                            </div>
                            <div className="center-fourth">
                                 <div id="hour-container" ></div>
                            </div>
                            <div className="center-five">
                                {/*<table>*/}
                                    {/*<tbody>*/}
                                    {/*<tr data-coinpair="btc_usd">*/}
                                        {/*<td>*/}
                                            <div className="trdealsb trdealsbnew">
                                                <h1 className="buy">Buy&nbsp;Orders</h1>
                                                <div className="sellandbmain">
                                                    <div>
                                                        <table border="0" bgcolor="" width="100%" cellSpacing="0" cellPadding="0" id="trade_history_page" className="table_two" data-item-original-width="637">
                                                            <thead>
                                                            <tr className="tr_style_2">
                                                                <td width="50%" className= "td_style_5">Size</td>
                                                                <td width="50%" className="td_style_6">Price</td>
                                                            </tr>
                                                            </thead>
                                                        </table>
                                                    </div>
                                                    <div className="div_style_home_2">
                                                        <table border="0" bgcolor="" width="100%" cellSpacing="0" cellPadding="10" id="trade_history_page" className="table_oon">
                                                            <tbody>
                                                            <tr>
                                                                <td>0.05</td>
                                                                <td>14957.58320000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.04</td>
                                                                <td>14954.80000000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.27</td>
                                                                <td>14898.35200004</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1.59</td>
                                                                <td>14898.35200003</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.57</td>
                                                                <td>14898.35200002</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.05</td>
                                                                <td>14898.35200000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.04</td>
                                                                <td>14896.00000000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.01</td><td>14893.49120000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.01</td>
                                                                <td>14888.63040000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.01</td>
                                                                <td>14883.76960000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.02</td>
                                                                <td>14881.96416670</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.01</td>
                                                                <td>14881.30000000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.01</td>
                                                                <td>14878.90880000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.01</td>
                                                                <td>14874.04800000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.01</td>
                                                                <td>14869.18720000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.01</td>
                                                                <td>14864.32640000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.01</td>
                                                                <td>14864.04220000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.01</td>
                                                                <td>14859.46560000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.01</td>
                                                                <td>14857.78000001</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.02</td>
                                                                <td>14851.90000000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.01</td>
                                                                <td>14849.74400000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.16</td>
                                                                <td>14847.98000008</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.00</td>
                                                                <td>14847.98000002</td>
                                                            </tr>
                                                            <tr>
                                                                <td>5.75</td>
                                                                <td>14847.98000000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.01</td>
                                                                <td>14847.00000000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.01</td>
                                                                <td>14844.88320000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.01</td>
                                                                <td>14840.02240000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.01</td>
                                                                <td>14835.16160000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.01</td>
                                                                <td>14830.30080000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1.50</td>
                                                                <td>14825.44000001</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0.00</td>
                                                                <td>5000.00000000</td>
                                                            </tr>
                                                            </tbody>

                                                        </table>
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="trdealsb trdealsbnew">
                                                <h1 className="sell">Sell&nbsp;Orders</h1>
                                                <div className="sellandbmain">
                                                    <div>
                                                        <table border="0" bgcolor="" width="100%" cellSpacing="0" cellPadding="0" id="trade_history_page" className="table_two trdtab" data-item-original-width="637">
                                                            <thead>
                                                            <tr className="tr_style_2">
                                                                <td width="50%" className="td_style_5">Price</td>
                                                                <td width="50%" className="td_style_6">Size</td>
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                        <div className='div_style_3'>
                                                                <table border="0" bgcolor="" width="100%" cellSpacing="0" cellPadding="10" id="trade_history_page" className="table_oon">
                                                                    <thead>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>15585.60000000</td>
                                                                        <td>1.16</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15606.00000000</td>
                                                                        <td>0.24</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15606.85680000</td>
                                                                        <td>0.02</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15606.88740000</td>
                                                                        <td>0.02</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15621.30000000</td>
                                                                        <td>0.00</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15636.60000000</td>
                                                                        <td>0.17</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15646.80000000</td>
                                                                        <td>0.26</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15656.08200001</td>
                                                                        <td>0.01</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15662.10000000</td>
                                                                        <td>0.01</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15667.20000000</td>
                                                                        <td>0.01</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15669.15840001</td>
                                                                        <td>0.00</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15671.23104000</td>
                                                                        <td>0.00</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15672.29999998</td>
                                                                        <td>0.19</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15672.30000000</td>
                                                                        <td>0.01</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15672.49762501</td>
                                                                        <td>0.01</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15676.38000000</td>
                                                                        <td>0.00</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15677.31375606</td>
                                                                        <td>0.00</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15677.39999993</td>
                                                                        <td>0.01</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15677.40000000</td>
                                                                        <td>0.01</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15682.50000000</td>
                                                                        <td>0.01</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15687.60000000</td>
                                                                        <td>0.02</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15691.75140000</td>
                                                                        <td>0.00</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15692.70000000</td>
                                                                        <td>0.01</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15694.28100000</td>
                                                                        <td>0.00</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15695.86710000</td>
                                                                        <td>0.01</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15697.64302187</td>
                                                                        <td>0.01</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15697.80000000</td>
                                                                        <td>0.01</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15698.38645920</td>
                                                                        <td>0.00</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15701.00790000</td>
                                                                        <td>0.01</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                    </div>
                                                </div>
                                            </div>
                                        {/*</td>*/}
                                    {/*</tr>*/}
                                    {/*</tbody>*/}
                                {/*</table>*/}
                            </div>
                            <div className="center-six">
                                <div className="six-h1">
                                    <h1>TRADE HISTORY</h1>
                                </div>
                                <div className="six-hh">
                                    <table className="table-center">
                                        <tbody>
                                        <tr>
                                            <th>Pair</th>
                                            <th>Type</th>
                                            <th>Price</th>
                                            <th>Amount</th>
                                            <th>Total</th>
                                            <th>Date</th>
                                        </tr>

                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="div_style_7"></div>
                            <div className="center-seven">
                                <div className="seven-tab">
                                    <button onClick={this.openCity.bind(this, 'London')}>ACTIVE ORDERS</button>
                                    <button onClick={this.openCity.bind(this, 'Paris')}>TRADE HISTORY</button>
                                    <button onClick={this.openCity.bind(this, 'Tokyo')}>ORDER HISTORY</button>
                                </div>
                                <div id="London" className="city">
                                    <table className="table-seven">
                                        <tbody>
                                        <tr>
                                            <th>Pair</th>
                                            <th>Amount(XRP)</th>
                                            <th>Price</th>
                                            <th>Total(BTC)</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div id="Paris" className="city">
                                    <table className="table-center">
                                        <tbody>
                                        <tr>
                                            <th>Pair</th>
                                            <th>Type</th>
                                            <th>Price</th>
                                            <th>Amount</th>
                                            <th>Total</th>
                                            <th>Date</th>
                                        </tr>
                                        <tr text-align="center">
                                            <td colSpan={6}>There are no orders</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div id="Tokyo" className="city">
                                    <table className="table-center">
                                        <tbody>
                                        <tr>
                                            <td colSpan={2}>
                                                Pair: <select className="seven-select">
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
                                            <td colSpan={3}>
                                                Type: <select className="seven-select">
                                                <option>All</option>
                                                <option>Sell</option>
                                                <option>Buy</option>
                                            </select>
                                            </td>
                                            <td colSpan={2}>
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
                                            <th>Amount</th>
                                            <th>Complete%</th>
                                            <th>Total</th>
                                            <th>Date</th>
                                        </tr>

                                        <tr text-align="center">
                                            <td colSpan={7}>There are no orders</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="center-extra"></div>
                        </div>
                        <div className="standard_image">
                            <div className="stand-right">
                                <div className="r1">
                                    <p>0.00000000 BTC</p>
                                </div>
                                <div className="r2">
                                    <p>0.00000000 BTC</p>
                                </div>
                            </div>
                            <div className="stand-right1">
                                <h1>0.00001601 BTC</h1>
                            </div>
                            <div className="stand-right1">
                                <h2>Bid :0.00001605 BTC</h2>
                                <h2>Ask :0.00001673 BTC</h2>
                            </div>
                            <div className="stand-right2">
                                <div>
                                    <div className="s-button">
                                        <button ref='buy' id={'aaa'} className="active" onClick={this.buy_tab.bind(this)}>BUY</button>
                                        <button ref='sell' id={'bbb'} onClick={this.sell_tab}>SELL</button>
                                    </div>
                                    <div id="Left" className="rightside s-r">
                                        <h2>Amount</h2>
                                        <input type="text" name="name" placeholder="0.00000000"/>
                                        <h2>Price</h2>
                                        <input type="text" name="name1" placeholder="0.00000000"/>
                                        <p>0.00000000 BTC</p>
                                        <input className="set clb4btn" id="do_buy" type="button" value="Buy&nbsp;TTT"/>
                                    </div>
                                    {/*<div id="Right" className="rightside s-r" >*/}
                                        {/*<h2>Amount</h2>*/}
                                        {/*<input type="text" name="name" placeholder="0.00000000"/>*/}
                                        {/*<h2>Price</h2>*/}
                                        {/*<input type="text" name="name1" placeholder="0.00000000"/>*/}
                                        {/*<p>0.00000000 BTC</p>*/}
                                        {/*<a href="#">Buy XRP</a>*/}
                                        {/*<br/>*/}
                                        {/*<h4></h4>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Home;
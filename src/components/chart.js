import React, { Component } from 'react';
import Highstock from 'react-highstock';
import axios from 'react-axios';

class Mychart extends Component {

    constructor(props) {

        super(props);
        this.state = {
            stockdata: []
        }

        //var stockdata = [];
        axios.get('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-ohlcv.json&callback=?').
            then(result=>{

                console.log(result);

                var unitStockData = [];
                for (var i = 0; i < result["Data"].length; i++) {

                    var unitData = result["Data"][i];
                    unitStockData.push(unitData["time"]);//.toString().concat("000"));
                    unitStockData.push(unitData["open"]);
                    unitStockData.push(unitData["high"]);
                    unitStockData.push(unitData["low"]);
                    unitStockData.push(unitData["close"]);
                    console.log("unitStockData: ", this.unitStockData);
                }
                this.setState({stockdata:unitStockData});
                //stockdata.push(this.unitStockData);
            }
        );
    }

    render() {

        var groupingUnits = [[
            'week',                         // unit name
            [1]                             // allowed multiples
        ], [
            'month',
            [1, 2, 3, 4, 6]
        ]];
        const config = {
            rangeSelector: {
                selected: 1,
                inputEnabled: false,
                buttonTheme: {
                    visibility: 'visibile'
                },
                labelStyle: {
                    visibility: 'visibile'
                }
            },
            title: {
                text: ''
            },
            yAxis: [{
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'OHLC'
                },
                height: '60%',
                lineWidth: 2,
                resize: {
                    enabled: true
                }
            }, {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'Volume'
                },
                top: '65%',
                height: '35%',
                offset: 0,
                lineWidth: 2
            }],

                tooltip: {
                    split: true
                },
            series: [{
                type: 'candlestick',
                name: 'AAPL',
                data: this.stockdata,
                dataGrouping: {
                    units: groupingUnits
                }
            }]
        }

        return (
                <Highstock config={config} ref="Mychart"></Highstock>
        );
    }
}
export default Mychart;

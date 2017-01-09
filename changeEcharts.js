//现状用地规模
function currentLandUse(year) {
    var d_dataSize = Enumerable.From(DistrictCurrentLandUseSize).Where("x=>x.year==" + year).ToArray()[0];
    var d_seriesData = [{ value: d_dataSize.city, name: "城镇建设用地" }, { value: d_dataSize.village, name: "村庄建设用地" }, { value: d_dataSize.other, name: "其他建设用地" }];
    var myChart1 = echarts.init(document.getElementById('echart1'));
    var option1 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        color: echartColor,
        title: {
            text: '',
            subtext: '',
            x: 'center'
        },
        grid: {
            left: "5px"
        },
        tooltip: {
            trigger: 'item',
            formatter: "{c} 公顷"
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            top: 'middle',
            data: ['城镇建设用地', '村庄建设用地', '其他建设用地'],
            formatter: function (name) {
                var oa = option1.series[0].data;
                for (var i = 0; i < oa.length; i++) {
                    if (name == oa[i].name) {
                        return oa[i].value + "    " + name;
                    }
                }
            }
        },

        series: [
            {
                name: '公顷',
                type: 'pie',
                center: ['30%', '50%'],
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: "{d}%"
                    }
                },
                data: d_seriesData
            }
        ]
    };
    myChart1.setOption(option1);

    var v_dataSize = Enumerable.From(DistrictCurrentLandUseStruc).Where("x=>x.year==" + year).ToArray()[0];
    var seriesData2 = [{ value: v_dataSize.jzyd, name: "居住用地" }, { value: v_dataSize.cyyd, name: "产业用地" }, { value: v_dataSize.ptyd, name: "配套用地" }, { value: v_dataSize.ld, name: "绿地" }, { value: v_dataSize.dlyd, name: "道路用地" }, { value: v_dataSize.syyd, name: "商业用地" }];
    var myChart2 = echarts.init(document.getElementById('echart2'));
    var option2 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        color: echartColor,
        grid: {
            left: 15,
            right: 48,
            bottom: 15,
            top: 15
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            top: 'middle',
            data: ['居住用地', '产业用地', '配套用地', '绿地', '道路用地', '商业用地']
            // data: ['用地类型']
        },
        xAxis: {
            name: "公顷",
            nameGap: 5,
            nameTextStyle: {
                color: "#fff"
            },
            type: 'value',
            boundaryGap: [0, 0.01],
            splitLine: {
                show: false
            }
        },
        yAxis: {
            name: "用地性质",
            nameGap: 5,
            nameTextStyle: {
                color: "#fff"
            },
            type: 'category',
            data: [],
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#272C30",
                    type: "doted"
                }
            }
        },
        series: [
            {
                name: '居住用地',
                type: 'bar',
                data: [v_dataSize.jzyd]
            }, {
                name: '产业用地',
                type: 'bar',
                data: [v_dataSize.cyyd]
            }, {
                name: '配套用地',
                type: 'bar',
                data: [v_dataSize.ptyd]
            }, {
                name: '绿地',
                type: 'bar',
                data: [v_dataSize.ld]
            }, {
                name: '道路用地',
                type: 'bar',
                data: [v_dataSize.dlyd]
            }, {
                name: '商业用地',
                type: 'bar',
                data: [v_dataSize.syyd]
            }
        ]
    };
    myChart2.setOption(option2);

    var myChart3 = echarts.init(document.getElementById('echart3'));
    var option3 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        tooltip: {},
        legend: {
            left: 'right',
            top: 'middle',
            data: [year + '年现状建设用地']
        },
        grid: {
            tooltip: 20

        },
        radar: {
            indicator: [
                { name: '居住用地', max: 6500 },
                { name: '产业用地', max: 16000 },
                { name: '配套用地', max: 30000 },
                { name: '绿地', max: 38000 },
                { name: '道路用地', max: 52000 },
                { name: '商业用地', max: 25000 }
            ],
            nameGap: 5,
            center: ['40%', '50%']
        },
        series: [{
            name: year + '年现状建设用地',
            type: 'radar',
            data: [
                {
                    value: [4300, 10000, 28000, 35000, 50000, 19000],
                    name: year + "年"
                }
            ]
        }]
    };
    myChart3.setOption(option3);

    var data4 = Enumerable.From(VillageCurrentLandUseSize).Where("x=>x.year==" + year).ToArray();
    var xdata4 = [], seriesData4 = [];
    var data41 = [], data42 = [], data43 = [];
    for (var i = 0; i < data4.length; i++) {
        xdata4.push(data4[i].name);
        data41.push(data4[i].city);
        data42.push(data4[i].village);
        data43.push(data4[i].other);
    }

    var myChart4 = echarts.init(document.getElementById('echart4'));
    var option4 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        color: echartColor,
        tooltip: {
            trigger: 'axis'
        },

        legend: {
            left: 'right',
            data: ['城镇建设用地', '村庄建设用地', '非建设用地']
        },
        grid: {
            top: '15%',
            left: '15%',
            bottom: 25
        },
        xAxis: [
            {
                name: "乡镇",
                nameTextStyle: {
                    color: "#fff"
                },
                nameGap: 5,
                type: 'category',
                axisLabel: {
                    "interval": 0,
                    "rotate": 45
                },
                data: xdata4
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '公顷',
                nameTextStyle: {
                    color: "#fff"
                },
                nameGap: 5,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#272C30",
                        type: "doted"
                    }
                }
            }
        ],
        series: [{
            name: "城镇建设用地", type: 'bar', data: data41
        },
        {
            name: "村庄建设用地", type: 'bar', data: data42
        }, {
            name: "非建设用地", type: 'bar', data: data43
        }
        ]
    };
    myChart4.setOption(option4);


    var data5 = Enumerable.From(VillageCurrentLandUseStruc).Where("x=>x.year==" + year).ToArray();
    var xdata5 = [], seriesData5 = [];
    var data51 = [], data52 = [], data53 = [], data54 = [], data55 = [], data56 = [];
    for (var i = 0; i < data4.length; i++) {
        xdata4.push(data5[i].name);
        data51.push(data5[i].jzyd);
        data52.push(data5[i].cyyd);
        data53.push(data5[i].ptyd);
        data54.push(data5[i].ld);
        data55.push(data5[i].dlyd);
        data56.push(data5[i].syyd);
    }
    var myChart5 = echarts.init(document.getElementById('echart5'));
    var option5 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        color: echartColor,
        tooltip: {
            trigger: 'axis'
        },

        legend: {
            orient: 'vertical',
            align: 'left',
            left: 'right',
            data: ['居住用地', '产业用地', '配套用地', '绿地', '道路用地', '商业用地']
        },
        grid: {
            top: '15%',
            left: 30,
            right: 40,
            bottom: 25
        },
        xAxis: [
            {
                name: "乡镇",
                nameTextStyle: {
                    color: "#fff"
                },
                nameGap: 5,
                type: 'category',
                axisLabel: {
                    "interval": 0,
                    "rotate": 45
                },
                data: xdata4
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '公顷',
                nameTextStyle: {
                    color: "#fff"
                },
                nameGap: 5,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#272C30",
                        type: "doted"
                    }
                }
            }
        ],
        series: [
            {
                name: "居住用地", type: 'bar', stack: '总量', data: data51
            },
            {
                name: "产业用地", type: 'bar', stack: '总量', data: data52
            },
            {
                name: "配套用地", type: 'bar', stack: '总量', data: data53
            },
            {
                name: "绿地", type: 'bar', stack: '总量', data: data54
            },
            {
                name: "道路用地", type: 'bar', stack: '总量', data: data55
            },
            {
                name: "商业用地", type: 'bar', stack: '总量', data: data56
            }
        ]
    };
    myChart5.setOption(option5);

    var data6 = Enumerable.From(DistrictCurrentLandUseSize).Where("x=>x.year==" + year).ToArray();
    var myChart6 = echarts.init(document.getElementById('echart6'));
    var option6 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        color: echartColor,
        title: {
            text: '',
            subtext: '',
            x: 'center'
        },
        grid: {
            left: "5px"
        },
        tooltip: {
            trigger: 'item',
            formatter: "{c} 公顷"
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            top: 'middle',
            data: ['城镇建设用地', '非建设用地'],
            formatter: function (name) {
                var oa = option6.series[0].data;
                for (var i = 0; i < oa.length; i++) {
                    if (name == oa[i].name) {
                        return oa[i].value + "    " + name;
                    }
                }
            }
        },

        series: [
            {
                name: '公顷',
                type: 'pie',
                center: ['30%', '50%'],
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: "{d}%"
                    }
                },
                data: [
                    {
                        name: '城镇建设用地',
                        value: data6[0].city
                    },
                    {
                        name: '非建设用地',
                        value: data6[0].other
                    }
                ]
            }
        ]
    };
    myChart6.setOption(option6);

    // var data7 = Enumerable.From(DistrictCurrentLandUseSize).Where("x=>x.year==" + year).ToArray();
    var data7 = DistrictCurrentLandUseSize;
    var xdata7 = [];
    var data71 = [], data72 = [], data73 = [];

    for (var i = 0; i < data7.length; i++) {
        xdata7.push(data7[i].year);
        data71.push(data7[i].city);
        data72.push(data7[i].village);
        data73.push(data7[i].other);
    }
    var myChart7 = echarts.init(document.getElementById('echart7'));
    var option7 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        color: echartColor,
        tooltip: {
            trigger: 'axis'
        },
        legend: {

            left: 'right',
            data: ['城镇建设用地', '村庄建设用地', '非建设用地']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: 25,
            containLabel: true
        },
        xAxis: {
            name: "时间",
            type: 'category',
            boundaryGap: false,
            data: xdata7,
            nameGap: 5,
            nameTextStyle: {
                color: "#fff"
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#272C30",
                    type: "dotted"
                }
            }
        },
        yAxis: {
            name: "用地规模",
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#272C30"
                }
            },
            nameTextStyle: {
                color: "#fff"
            },
            nameGap: 5
        },
        series: [
            {
                name: '城镇建设用地',
                type: 'line',
                data: data71
            },
            {
                name: '村庄建设用地',
                type: 'line',
                data: data72
            },
            {
                name: '非建设用地',
                type: 'line',
                data: data73
            }
        ]
    };
    myChart7.setOption(option7);
}

//规划用地
function planLandUse(year) {
    var d_dataSize = Enumerable.From(DistrictCurrentLandUseSize).Where("x=>x.year==" + year).ToArray()[0];
    var d_seriesData = [{ value: d_dataSize.city, name: "城镇建设用地" }, { value: d_dataSize.village, name: "村庄建设用地" }, { value: d_dataSize.other, name: "其他建设用地" }];
    var myChart1 = echarts.init(document.getElementById('echart1'));
    var option1 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        color: echartColor,
        title: {
            text: '',
            subtext: '',
            x: 'center'
        },
        grid: {
            left: "5px"
        },
        tooltip: {
            trigger: 'item',
            formatter: "{c} 公顷"
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            top: 'middle',
            data: ['城镇建设用地', '村庄建设用地', '其他建设用地'],
            formatter: function (name) {
                var oa = option1.series[0].data;
                for (var i = 0; i < oa.length; i++) {
                    if (name == oa[i].name) {
                        return oa[i].value + "    " + name;
                    }
                }
            }
        },

        series: [
            {
                name: '公顷',
                type: 'pie',
                center: ['30%', '50%'],
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: "{d}%"
                    }
                },
                data: d_seriesData
            }
        ]
    };
    myChart1.setOption(option1);

    var v_dataSize = Enumerable.From(DistrictCurrentLandUseStruc).Where("x=>x.year==" + year).ToArray()[0];
    var seriesData2 = [{ value: v_dataSize.jzyd, name: "居住用地" }, { value: v_dataSize.cyyd, name: "产业用地" }, { value: v_dataSize.ptyd, name: "配套用地" }, { value: v_dataSize.ld, name: "绿地" }, { value: v_dataSize.dlyd, name: "道路用地" }, { value: v_dataSize.syyd, name: "商业用地" }];
    var myChart2 = echarts.init(document.getElementById('echart2'));
    var option2 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        color: echartColor,
        grid: {
            left: 15,
            right: 48,
            bottom: 15,
            top: 15
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            top: 'middle',
            data: ['居住用地', '产业用地', '配套用地', '绿地', '道路用地', '商业用地']
            // data: ['用地类型']
        },
        xAxis: {
            name: "公顷",
            nameGap: 5,
            nameTextStyle: {
                color: "#fff"
            },
            type: 'value',
            boundaryGap: [0, 0.01],
            splitLine: {
                show: false
            }
        },
        yAxis: {
            name: "用地性质",
            nameGap: 5,
            nameTextStyle: {
                color: "#fff"
            },
            type: 'category',
            data: [],
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#272C30",
                    type: "doted"
                }
            }
        },
        series: [
            {
                name: '居住用地',
                type: 'bar',
                data: [v_dataSize.jzyd]
            }, {
                name: '产业用地',
                type: 'bar',
                data: [v_dataSize.cyyd]
            }, {
                name: '配套用地',
                type: 'bar',
                data: [v_dataSize.ptyd]
            }, {
                name: '绿地',
                type: 'bar',
                data: [v_dataSize.ld]
            }, {
                name: '道路用地',
                type: 'bar',
                data: [v_dataSize.dlyd]
            }, {
                name: '商业用地',
                type: 'bar',
                data: [v_dataSize.syyd]
            }
        ]
    };
    myChart2.setOption(option2);

    var myChart3 = echarts.init(document.getElementById('echart3'));
    var option3 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        color: echartColor,
        grid: {
            left: 15,
            right: 48,
            bottom: 15,
            top: 15
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            top: 'middle',
            data: ['居住用地', '产业用地', '配套用地', '绿地', '道路用地', '商业用地']
            // data: ['用地类型']
        },
        xAxis: {
            name: "公顷",
            nameGap: 5,
            nameTextStyle: {
                color: "#fff"
            },
            type: 'value',
            boundaryGap: [0, 0.01],
            splitLine: {
                show: false
            }
        },
        yAxis: {
            name: "用地性质",
            nameGap: 5,
            nameTextStyle: {
                color: "#fff"
            },
            type: 'category',
            data: [],
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#272C30",
                    type: "doted"
                }
            }
        },
        series: [
            {
                name: '居住用地',
                type: 'bar',
                data: [v_dataSize.jzyd]
            }, {
                name: '产业用地',
                type: 'bar',
                data: [v_dataSize.cyyd]
            }, {
                name: '配套用地',
                type: 'bar',
                data: [v_dataSize.ptyd]
            }, {
                name: '绿地',
                type: 'bar',
                data: [v_dataSize.ld]
            }, {
                name: '道路用地',
                type: 'bar',
                data: [v_dataSize.dlyd]
            }, {
                name: '商业用地',
                type: 'bar',
                data: [v_dataSize.syyd]
            }
        ]
    };
    myChart3.setOption(option3);
}

//平原地区开发强度
function PlainAreaDevstrength(year) {

    var myChart1 = echarts.init(document.getElementById('echart1'));
    var option1 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',        
        series: [{
            name: '业务指标',
            type: 'gauge',
            radius: '60%',
            max: 1,
            axisLine: {
                show: false,
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0.782, echartColor[0]],
                        [1, 'rgba(1, 147, 207, 0.3)']
                    ],
                    width: 10
                }
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            pointer: {
                width: 3
            },
            title: {
                "show": true,
                "offsetCenter": [0, "90%"], //标题位置设置
                "textStyle": { //标题样式设置
                    "color": echartColor[0]
                }
            },
            center: ['25%', '50%'],
            detail: {
                formatter: '{value}'
            },
            data: [{
                value: 0.782,
                name: '通州新城'
            }]
        },
        {
            name: '业务指标',
            type: 'gauge',
            radius: '60%',
            max: 1,
            axisLine: {
                show: false,
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0.355, echartColor[1]],
                        [1, 'rgba(1, 147, 207, 0.3)']
                    ],
                    width: 10
                }
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            pointer: {
                width: 3
            },
            title: {
                "show": true,
                "offsetCenter": [0, "90%"],
                "textStyle": {
                    "color": echartColor[1]
                }
            },
            center: ['75%', '50%'],
            detail: {
                formatter: '{value}'
            },
            data: [{
                value: 0.355,
                name: '新城外'
            }]
        }]
    };
    myChart1.setOption(option1);

    var myChart2 = echarts.init(document.getElementById('echart2'));
    var option2 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        color: echartColor,
        grid: {
            left: 20,
            right: 30,
            bottom: 25,
            top: 15
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['建设用地']
        },
        xAxis: {
            name: "乡镇",
            nameGap: 5,
            nameTextStyle: {
                color: "#fff"
            },
            type: 'category',
            splitLine: {
                show: false
            },
            axisLabel: {
                "interval": 0,
                "rotate": 45
            },
            data: ['通州新城', '潞城镇', '台湖镇', '漷县镇', '梨园地区', '马驹桥镇', '宋庄镇', '西集镇', '永乐店镇', '永顺镇', '于家务', '张家湾镇']
        },
        yAxis: {
            name: "万公顷",
            nameGap: 5,
            nameTextStyle: {
                color: "#fff"
            },
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#272C30",
                    type: "doted"
                }
            }
        },
        series: [
            {
                name: '建设用地',
                type: 'bar',
                data: ['30', '70', '40', '50', '70', '60', '55', '45', '35', '40', '53', '47'],
                markArea: {
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            // textStyle: {
                            //     formatter: '{b}{c}'
                            // }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#60A158',
                            borderWidth: 1,
                            borderColor: '#60A158'

                        }
                    },
                    data: [[
                        { name: 'Average', yAxis: 0 },
                        { yAxis: 30 }
                        // { type: 'average' }
                    ]]
                }
            }
        ]
    };
    myChart2.setOption(option2);

    var myChart3 = echarts.init(document.getElementById('echart3'));
    var option3 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        color: echartColor,
        title: {
            text: '',
            subtext: '',
            x: 'center'
        },
        grid: {
            left: "5px"
        },
        tooltip: {
            trigger: 'item',
            formatter: "{c} 公顷"
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            top: 'middle',
            data: ['通州新城', '潞城镇', '漷县镇', '台湖镇', '宋庄镇', '于家务'],
            formatter: function (name) {
                var oa = option3.series[0].data;
                for (var i = 0; i < oa.length; i++) {
                    if (name == oa[i].name) {
                        return oa[i].value + "    " + name;
                    }
                }
            }
        },

        series: [
            {
                name: '公顷',
                type: 'pie',
                center: ['30%', '50%'],
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: "{d}%"
                    }
                },
                data: [{ value: 4000, name: "通州新城" },
                { value: 2000, name: "潞城镇" },
                { value: 2000, name: "漷县镇" },
                { value: 2000, name: "台湖镇" },
                { value: 2000, name: "宋庄镇" },
                { value: 2000, name: "于家务" },
                ]
            }
        ]
    };
    myChart3.setOption(option3);

    var myChart4 = echarts.init(document.getElementById('echart4'));
    var option4 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        color: echartColor,
        tooltip: {
            trigger: 'axis'
        },

        legend: {
            show: false,
            left: 'right',
            data: ['城镇建设用地']
        },
        grid: {
            top: '15%',
            left: '15%',
            bottom: 25
        },
        xAxis: [
            {
                name: "乡镇",
                nameTextStyle: {
                    color: "#fff"
                },
                nameGap: 5,
                type: 'category',
                axisLabel: {
                    "interval": 0,
                    "rotate": 45
                },
                data: ['通州新城', '潞城镇', '漷县镇', '台湖镇', '于家务', '次渠镇', '宋庄镇', '永乐店', '甘棠镇']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '万公顷',
                nameTextStyle: {
                    color: "#fff"
                },
                nameGap: 5,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#272C30",
                        type: "doted"
                    }
                }
            }
        ],
        series: [{
            name: "城镇建设用地", type: 'bar', data: [30, 65, 35, 41, 65, 38, 43, 38, 38]
        }]
    };
    myChart4.setOption(option4);

    var myChart5 = echarts.init(document.getElementById('echart5'));
    var option5 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        color: echartColor,
        tooltip: {
            trigger: 'axis'
        },

        legend: {
            show: false,
            left: 'right',
            data: ['居住用地']
        },
        grid: {
            top: '15%',
            left: 20,
            right: 20,
            bottom: 25
        },
        xAxis: [
            {
                name: "区域",
                nameTextStyle: {
                    color: "#fff"
                },
                nameGap: 5,
                type: 'category',
                axisLabel: {
                    "interval": 0,
                    "rotate": 45
                },
                data: ['通州新城', '潞城镇', '漷县镇', '台湖镇', '于家务', '次渠镇', '宋庄镇', '永乐店', '甘棠镇']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'VOL',
                nameTextStyle: {
                    color: "#fff"
                },
                nameGap: 5,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#272C30",
                        type: "doted"
                    }
                }
            }
        ],
        series: [
            {
                name: "居住用地", type: 'line', data: [0.2, 0.2, 0.2, 0.3, 0.7, 0.8, 0.4, 0.3, 0.2],
                showSymbol: false, symbol: 'circle', symbolSize: 2,
                areaStyle: {
                    normal: {
                        color: '#461E1C'
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1,
                        color: '#C03F36'
                    }
                }
            }
        ]
    };
    myChart5.setOption(option5);

    var data6 = Enumerable.From(DistrictCurrentLandUseSize).Where("x=>x.year==" + year).ToArray();
    var myChart6 = echarts.init(document.getElementById('echart6'));
    var option6 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        color: echartColor,
        title: {
            text: '',
            subtext: '',
            x: 'center'
        },
        grid: {
            left: "5px"
        },
        tooltip: {
            trigger: 'item',
            formatter: "{c} 公顷"
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            top: 'middle',
            data: ['通州新城建设用地', '新城外建设用地'],
            formatter: function (name) {
                var oa = option6.series[0].data;
                for (var i = 0; i < oa.length; i++) {
                    if (name == oa[i].name) {
                        return oa[i].value + "    " + name;
                    }
                }
            }
        },

        series: [
            {
                name: '公顷',
                type: 'pie',
                center: ['30%', '50%'],
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: "{d}%"
                    }
                },
                data: [
                    {
                        name: '通州新城建设用地',
                        value: 2300
                    },
                    {
                        name: '新城外建设用地',
                        value: 3000
                    }
                ]
            }
        ]
    };
    myChart6.setOption(option6);

    // var data7 = Enumerable.From(DistrictCurrentLandUseSize).Where("x=>x.year==" + year).ToArray();
    var data7 = DistrictCurrentLandUseSize;
    var xdata7 = [];
    var data71 = [], data72 = [], data73 = [];

    for (var i = 0; i < data7.length; i++) {
        xdata7.push(data7[i].year);
        data71.push(data7[i].city);
        data72.push(data7[i].village);
        data73.push(data7[i].other);
    }
    var myChart7 = echarts.init(document.getElementById('echart7'));
    var option7 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        color: echartColor,
        tooltip: {
            trigger: 'axis'
        },
        legend: {

            left: 'right',
            data: ['通州新城', '新城外']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: 25,
            containLabel: true
        },
        xAxis: {
            name: "时间",
            type: 'category',
            boundaryGap: false,
            data: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015],
            nameGap: 5,
            nameTextStyle: {
                color: "#fff"
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#272C30",
                    type: "dotted"
                }
            }
        },
        yAxis: {
            name: "VOL",
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#272C30"
                }
            },
            nameTextStyle: {
                color: "#fff"
            },
            nameGap: 5
        },
        series: [
            {
                name: '通州新城',
                type: 'line',
                data: [0.18,0.3,0.18,0.4,0.19,0.5,0.6,0.5,0.4,0.33,0.6,0.4,0.5,0.34]
            },
            {
                name: '新城外',
                type: 'line',
                data: [0.2,0.34,0.1,0.34,0.29,0.3,0.3,0.6,0.4,0.33,0.3,0.4,0.34,0.45]
            }
        ]
    };
    myChart7.setOption(option7);
}
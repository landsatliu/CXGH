var myChart1, myChart2, myChart3, myChart4, myChart5, myChart6, myChart7;
var echartCount = 0;

$(function () {
    myChart1 = echarts.init(document.getElementById('echart1'));
    myChart2 = echarts.init(document.getElementById('echart2'));
    myChart3 = echarts.init(document.getElementById('echart3'));
    myChart4 = echarts.init(document.getElementById('echart4'));
    myChart5 = echarts.init(document.getElementById('echart5'));
    myChart6 = echarts.init(document.getElementById('echart6'));
    myChart7 = echarts.init(document.getElementById('echart7'));
});

//人口
function householdPopulation(year) {
    //  var myChart1 = echarts.init(document.getElementById('echart1'));
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
            formatter: "{c} 万人"
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            top: 'middle',
            data: ['农业人口', '非农业人口'],
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
                name: '万人',
                type: 'pie',
                center: ['30%', '50%'],
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: "{d}%"
                    }
                },

                data: [{ value: 1500, name: "农业人口" },
                    { value: 1300, name: "非农业人口" }]
            }
        ]
    };
    checkEchartState(myChart1, option1);
    myChart1.setOption(option1);

    // var myChart2 = echarts.init(document.getElementById('echart2'));
    var option2 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        animationDuration: 1,
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
            formatter: "{c} 万人"
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            top: 'middle',
            data: ['通州新城', '昌平新城', '丰台新城', '大兴新城', '朝阳新城', '延庆新城'],
            formatter: function (name) {
                var oa = option2.series[0].data;
                for (var i = 0; i < oa.length; i++) {
                    if (name == oa[i].name) {
                        return oa[i].value + "    " + name;
                    }
                }
            }
        },
        series: [
            {
                name: '地区',
                type: 'pie',
                center: ['30%', '50%'],
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: "{d}%"
                    }
                },
                data: [{ value: 200, name: "通州新城" },
                    { value: 200, name: "昌平新城" },
                    { value: 200, name: "丰台新城" },
                    { value: 150, name: "大兴新城" },
                    { value: 100, name: "朝阳新城" },
                    { value: 60, name: "延庆新城" }]
            }
        ]
    };
    checkEchartState(myChart2, option2);
    myChart2.setOption(option2);

    // var myChart3 = echarts.init(document.getElementById('echart3'));
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
            formatter: "{c} 万人"
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            top: 'middle',
            data: ['农业人口', '非农业人口'],
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
                name: '地区',
                type: 'pie',
                center: ['30%', '50%'],
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: "{d}%"
                    }
                },
                data: [{ value: 300, name: "农业人口" },
                    { value: 500, name: "非农业人口" }]
            }
        ]
    };
    checkEchartState(myChart3, option3);
    myChart3.setOption(option3);

    // var myChart4 = echarts.init(document.getElementById('echart4'));
    var option4 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        color: echartColor,
        tooltip: {
            trigger: 'axis'
        },

        legend: {
            orient: "vertical",
            right: 'right',
            top: 'middle',
            data: ['通州区', '丰台区', '大兴区', '海淀区', '延庆区', '东城区']
        },
        grid: {
            top: 15,
            left: 18,
            right: 35,
            bottom: 15
        },
        xAxis: [
            {
                name: "",
                nameTextStyle: {
                    color: "#fff"
                },
                nameGap: 5,
                type: 'category',
                axisLabel: {
                    "interval": 0,
                    "rotate": 45
                },
                data: []
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '万人',
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
                name: "通州区", type: 'bar', data: [1.5]
            },
            {
                name: "丰台区", type: 'bar', data: [-1.5]
            },
            {
                name: "大兴区", type: 'bar', data: [2.5]
            },
            {
                name: "海淀区", type: 'bar', data: [2]
            },
            {
                name: "延庆区", type: 'bar', data: [-2]
            },
            {
                name: "东城区", type: 'bar', data: [3]
            }
        ]
    };
    checkEchartState(myChart4, option4);
    myChart4.setOption(option4);

    // var myChart5 = echarts.init(document.getElementById('echart5'));
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
            top: "middle",
            data: ['总人口', '出生', '死亡', '迁入', '迁出']
        },
        grid: {
            top: '15%',
            left: 30,
            right: 40,
            bottom: 25
        },
        xAxis: [
            {
                name: "区县",
                nameTextStyle: {
                    color: "#fff"
                },
                nameGap: 5,
                type: 'category',
                axisLabel: {
                    "interval": 0,
                    "rotate": 45
                },
                data: ["通州", "昌平", "丰台", "大兴", "朝阳", "海淀", "延庆", "东城", "西城"]
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '万人',
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
                name: "总人口", type: 'line', data: [40, 30, 33, 35, 46, 38, 33, 45, 34], symbol: "circle"
            },
            {
                name: "出生", type: 'line', data: [20, 24, 17, 18, 23, 19, 16, 23, 17], symbol: "circle"
            },
            {
                name: "死亡", type: 'line', data: [10, 7, 8, 9, 12, 9, 8, 11, 8], symbol: "circle"
            },
            {
                name: "迁入", type: 'line', data: [22, 20, 29, 8, 25, 16, 29, 15, 18], symbol: "circle"
            },
            {
                name: "迁出", type: 'line', data: [19, 33, 17, 20, 28, 20, 15, 22, 25], symbol: "circle"
            }
        ]
    };
    checkEchartState(myChart5, option5);
    myChart5.setOption(option5);

    // var myChart6 = echarts.init(document.getElementById('echart6'));
    var option6 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        tooltip: {},
        legend: {
            orient: 'vertical',
            right: 'right',
            top: 'middle',
            data: ["通州区", "丰台区", "大兴区", "海淀区", "延庆区", "东城区"]
        },
        grid: {
            tooltip: 20
        },
        radar: {
            indicator: [
                { name: 'N', max: 1000 },
                { name: 'NNE', max: 1000 },
                { name: 'NE', max: 1000 },
                { name: 'NNE', max: 1000 },
                { name: 'E', max: 1000 },
                { name: 'SSE', max: 1000 },
                { name: 'SE', max: 1000 },
                { name: 'SSE', max: 1000 },
                { name: 'S', max: 1000 },
                { name: 'SSW', max: 1000 },
                { name: 'SW', max: 1000 },
                { name: 'SSW', max: 1000 },
                { name: 'W', max: 1000 },
                { name: 'SSW', max: 1000 },
                { name: 'SW', max: 1000 },
                { name: 'SSW', max: 1000 }
            ],
            nameGap: 5,
            center: ['40%', '50%']
        },
        series: [{
            name: '通州区',
            type: 'radar',
            // itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    value: [800, 700, 777, 678, 790, 910, 920, 910, 930, 890, 900, 950, 790, 900, 900, 900],
                    name: '通州区'
                },
                {
                    value: [900, 600, 677, 778, 890, 610, 720, 810, 830, 790, 950, 940, 840, 920, 850, 740],
                    name: '丰台区'
                },
                {
                    value: [700, 750, 877, 778, 950, 910, 920, 930, 830, 790, 800, 750, 890, 600, 600, 780],
                    name: '大兴区'
                },
                {
                    value: [600, 850, 877, 788, 670, 810, 780, 810, 630, 890, 700, 750, 590, 800, 700, 670],
                    name: '海淀区'
                },
                {
                    value: [860, 750, 717, 638, 710, 810, 780, 410, 730, 690, 500, 750, 990, 700, 569, 780],
                    name: '延庆区'
                },
                {
                    value: [670, 700, 777, 678, 790, 610, 920, 710, 840, 790, 900, 950, 790, 900, 900, 900],
                    name: '东城区'
                }
            ]
        }]
    };
    checkEchartState(myChart6, option6);
    myChart6.setOption(option6);

    // var myChart7 = echarts.init(document.getElementById('echart7'));
    var option7 = {
        backgroundColor: 'rgba(1, 6, 10,0.6)',
        color: echartColor,
        tooltip: {
            trigger: 'axis'
        },
        legend: {

            left: 'right',
            data: ['总人口', '农业人口', '非农业人口']
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
            data: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
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
            name: "万人",
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
                name: '总人口',
                type: 'line',
                data: [200, 300, 240, 230, 300, 270, 280, 350, 230, 220, 210, 250, 260, 300]
            },
            {
                name: '农业人口',
                type: 'line',
                data: [90, 140, 130, 80, 180, 130, 120, 200, 100, 130, 120, 140, 125, 170]
            },
            {
                name: '非农业人口',
                type: 'line',
                data: [110, 160, 110, 150, 120, 140, 160, 150, 130, 90, 90, 110, 135, 130]
            }
        ]
    };
    checkEchartState(myChart7, option7);
    myChart7.setOption(option7);
}

//现状用地规模
function currentLandUse(year) {
    var d_dataSize = Enumerable.From(DistrictCurrentLandUseSize).Where("x=>x.year==" + year).ToArray()[0];
    var d_seriesData = [{ value: d_dataSize.city, name: "城镇建设用地" }, { value: d_dataSize.village, name: "村庄建设用地" }, { value: d_dataSize.other, name: "其他建设用地" }];
    // var myChart1 = echarts.init(document.getElementById('echart1'));
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
    checkEchartState(myChart1, option1);
    myChart1.setOption(option1);

    var v_dataSize = Enumerable.From(DistrictCurrentLandUseStruc).Where("x=>x.year==" + year).ToArray()[0];
    var seriesData2 = [{ value: v_dataSize.jzyd, name: "居住用地" }, { value: v_dataSize.cyyd, name: "产业用地" }, { value: v_dataSize.ptyd, name: "配套用地" }, { value: v_dataSize.ld, name: "绿地" }, { value: v_dataSize.dlyd, name: "道路用地" }, { value: v_dataSize.syyd, name: "商业用地" }];
    // var myChart2 = echarts.init(document.getElementById('echart2'));
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
    checkEchartState(myChart2, option2);
    myChart2.setOption(option2);

    echartCount++;
    var seriesdata33;
    if (echartCount % 2 == 0) {
        seriesdata33 = [4300, 10000, 28000, 35000, 50000, 19000];
    } else {
        seriesdata33 = [3800, 12000, 30000, 30000, 47000, 24000];
    }
    // var myChart3 = echarts.init(document.getElementById('echart3'));
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
            name: '现状建设用地',
            type: 'radar',
            data: [
                {
                    value: seriesdata33,
                    name: year + '年现状建设用地'
                }
            ]
        }]
    };
    checkEchartState(myChart3, option3);
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

    // var myChart4 = echarts.init(document.getElementById('echart4'));
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
    checkEchartState(myChart4, option4);
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
    // var myChart5 = echarts.init(document.getElementById('echart5'));
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
    checkEchartState(myChart5, option5);
    myChart5.setOption(option5);

    var data6 = Enumerable.From(DistrictCurrentLandUseSize).Where("x=>x.year==" + year).ToArray();
    // var myChart6 = echarts.init(document.getElementById('echart6'));
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
    checkEchartState(myChart6, option6);
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
    // var myChart7 = echarts.init(document.getElementById('echart7'));
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
    checkEchartState(myChart7, option7);
    myChart7.setOption(option7);
}

//规划用地
function planLandUse(year) {
    var d_dataSize = Enumerable.From(DistrictCurrentLandUseSize).Where("x=>x.year==" + year).ToArray()[0];
    var d_seriesData = [{ value: d_dataSize.city, name: "城镇建设用地" }, { value: d_dataSize.village, name: "村庄建设用地" }, { value: d_dataSize.other, name: "其他建设用地" }];
    // var myChart1 = echarts.init(document.getElementById('echart1'));
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
    // var myChart2 = echarts.init(document.getElementById('echart2'));
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

    // var myChart3 = echarts.init(document.getElementById('echart3'));
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

    // var myChart1 = echarts.init(document.getElementById('echart1'));
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

    // var myChart2 = echarts.init(document.getElementById('echart2'));
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

    // var myChart3 = echarts.init(document.getElementById('echart3'));
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

    // var myChart4 = echarts.init(document.getElementById('echart4'));
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

    // var myChart5 = echarts.init(document.getElementById('echart5'));
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
    // var myChart6 = echarts.init(document.getElementById('echart6'));
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
    // var myChart7 = echarts.init(document.getElementById('echart7'));
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
            data: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
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
                data: [0.18, 0.3, 0.18, 0.4, 0.19, 0.5, 0.6, 0.5, 0.4, 0.33, 0.6, 0.4, 0.5, 0.34]
            },
            {
                name: '新城外',
                type: 'line',
                data: [0.2, 0.34, 0.1, 0.34, 0.29, 0.3, 0.3, 0.6, 0.4, 0.33, 0.3, 0.4, 0.34, 0.45]
            }
        ]
    };
    myChart7.setOption(option7);
}
//查看是否清除echarts
function checkEchartState(echart, option) {
    if (echart.getOption()) {
        if (echart.getOption().series[0].type != option.series[0].type) {
            echart.clear();
        }
    }
}
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
    console.log(xdata4);

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

}
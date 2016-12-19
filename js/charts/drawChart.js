var UserDrawChart = {
    drawLine: function (divID, legend, xAxis, series) { //绘制堆叠折线图
        var dom = document.getElementById(divID);
        var myChart = echarts.init(dom);
        var app = {};
        option = null;

        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: legend
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: xAxis
            },
            yAxis: {
                type: 'value'
            },
            series: series
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    },
    drawPie1: function (divID) {
        var dom = document.getElementById(divID);
        var myChart = echarts.init(dom);
        option = null;
        option = {
            backgroundColor: '#2c343c',

            title: {
                text: 'Customized Pie',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },

            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series: [
           {
               name: '访问来源',
               type: 'pie',
               radius: '55%',
               center: ['50%', '50%'],
               data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 274, name: '联盟广告' },
                { value: 235, name: '视频广告' },
                { value: 400, name: '搜索引擎' }
            ].sort(function (a, b) { return a.value - b.value }),
               roseType: 'angle',
               label: {
                   normal: {
                       textStyle: {
                           color: 'rgba(255, 255, 255, 0.3)'
                       }
                   }
               },
               labelLine: {
                   normal: {
                       lineStyle: {
                           color: 'rgba(255, 255, 255, 0.3)'
                       },
                       smooth: 0.2,
                       length: 10,
                       length2: 20
                   }
               },
               itemStyle: {
                   normal: {
                       color: '#c23531',
                       shadowBlur: 200,
                       shadowColor: 'rgba(0, 0, 0, 0.5)'
                   }
               }
           }
        ]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }
}
var DynamicLayerURL="http://localhost:6080/arcgis/rest/services/CXGH/beijing/MapServer";
var featurelayerURL="http://localhost:6080/arcgis/rest/services/CXGH/beijing/MapServer/2";//A13_镇街界 
var pointlayerURL="http://localhost:6080/arcgis/rest/services/CXGH/beijing/MapServer/0";//A13_镇街界 

var echartColor = ['#42B5F8', '#CD6860', '#F0CD31', '#AF65FF', '#5AE777', '#6CFAFB'];
var waterRes = [
    {
        "id": "",
        "text": "可供水资源总量",
        "children": []
    }, {
        "id": "",
        "text": "用水总量",
        "children": []
    }, {
        "id": "",
        "text": "用水结构",
        "children": []
    }, {
        "id": "",
        "text": "单位GDP水耗",
        "children": []
    }, {
        "id": "",
        "text": "再生水资源利用率",
        "children": []
    }];
var landRes = [
    {
        "id": "",
        "text": "城乡用地规模",
        "children":
        [
            {
                "id": "",
                "text": "现状用地规模",
                "children": []
            },
            {
                "id": "",
                "text": "规划用地规模",
                "children": []
            },
            {
                "id": "",
                "text": "土地用途分区",
                "children": []
            },
            {
                "id": "",
                "text": "用地资源变化",
                "children": []
            }
        ]
    }, {
        "id": "",
        "text": "平原地区开发强度",
        "children": []
    }, {
        "id": "",
        "text": "现状存量建设用地",
        "children":
        [
            {
                "id": "",
                "text": "可更新改造用地",
                "children": []
            },
            {
                "id": "",
                "text": "新发展用地",
                "children": []
            }
        ]
    }
];
var energyRes = [
    {
        "id": "",
        "text": "能源消费总量",
        "children": []
    }, {
        "id": "",
        "text": "清洁能源比重",
        "children": []
    }, {
        "id": "",
        "text": "新能源及可再生能源比重",
        "children": []
    }, {
        "id": "",
        "text": "清洁能源供热比例",
        "children": []
    }, {
        "id": "",
        "text": "单位GDP能耗",
        "children": []
    }];
//社会人文--人口
var populationData = [
    {
        "id": "",
        "text": "人口规模",
        "children": [
            {
                "id": "",
                "text": "户籍人口",
            },
            {
                "id": "",
                "text": "常住人口",
            }, {
                "id": "",
                "text": "流动人口",
            }, {
                "id": "",
                "text": "就业人口",
            }]
    }, {
        "id": "",
        "text": "人口分布",
        "children": []
    }, {
        "id": "",
        "text": "人口结构",
        "children": [
            {
                "id": "",
                "text": "年龄结构"
            },
            {
                "id": "",
                "text": "文化素质结构"
            }
        ]
    }];
//社会人文--公共服务
var puclicServiceData = [
    {
        "id": "",
        "text": "基础教育",
        "children": []
    },
    {
        "id": "",
        "text": "医疗卫生",
        "children": []
    },
    {
        "id": "",
        "text": "养老",
        "children": []
    },
    {
        "id": "",
        "text": "文化",
        "children": []
    },
    {
        "id": "",
        "text": "体育",
        "children": []
    },
    {
        "id": "",
        "text": "一刻钟服务圈覆盖率",
        "children": []
    },
];
//社会人文--交通
var trafficData = [
    {
        "id": "",
        "text": "步行、自行车出行比例",
        "children": []
    },
    {
        "id": "",
        "text": "公交交通出行比例",
        "children": []
    },
    {
        "id": "",
        "text": "轨道交通里程",
        "children": []
    },
    {
        "id": "",
        "text": "出行总量",
        "children": []
    },
    {
        "id": "",
        "text": "机动车保有量",
        "children": []
    },
    {
        "id": "",
        "text": "停车位指标",
        "children": []
    },
];
//社会人文--住房
var liveData = [
    {
        "id": "",
        "text": "城镇人均住房建筑面积"
    },
    {
        "id": "",
        "text": "城镇家庭户户均成套住房套数"
    }
];
//社会人文--安全
var safeData = [
    {
        "id": "",
        "text": "人均紧急避难场所面积"
    }
];
//生态环境--大气环境
var enviData=[
    {
        "id":"",
        "text":"年均PM2.5浓度"
    }
];
//生态环境--生态空间
var spaceData=[
    {
        "id":"",
        "text":"生态保护红线控制面积"
    }
];
//生态环境--水环境
var waterEnviData=[
    {
        "id":"",
        "text":"水功能区水质达标率"
    }
];
//生态环境--绿化环境
var greenData=[
    {
        "id":"",
        "text":"森林覆盖率"
    },
    {
        "id":"",
        "text":"公园绿地500米服务半径覆盖率"
    },
    {
        "id":"",
        "text":"建成区范围人均公园绿地面积"
    },
    {
        "id":"",
        "text":"全市城市建成区范围万人拥有综合"
    },
    {
        "id":"",
        "text":"公园指数"
    }
];
//生态环境--城乡污水处理
var wasteWaterData=[
    {
        "id":"",
        "text":"城乡污水处理率"
    }
];
//生态环境--城乡垃圾处理
var garbageData=[
    {
        "id":"",
        "text":"垃圾处理工艺比例"
    }
];

//区县现状用地规模及历年数据
var DistrictCurrentLandUseSize = [{ "name": "通州区", "year": 2005, "city": 7149, "village": 16031, "other": 67416, "cscale": 7.89, "vscale": 17.70, "oscale": 74.41 },
    { "name": "通州区", "year": 2006, "city": 7250, "village": 16000, "other": 67346, "cscale": 8.00, "vscale": 17.66, "oscale": 74.34 },
    { "name": "通州区", "year": 2007, "city": 7351, "village": 15969, "other": 67276, "cscale": 8.11, "vscale": 17.63, "oscale": 74.26 },
    { "name": "通州区", "year": 2008, "city": 7452, "village": 15938, "other": 67206, "cscale": 8.23, "vscale": 17.59, "oscale": 74.18 },
    { "name": "通州区", "year": 2009, "city": 7553, "village": 15907, "other": 67136, "cscale": 8.34, "vscale": 17.56, "oscale": 74.10 },
    { "name": "通州区", "year": 2010, "city": 7654, "village": 15876, "other": 67066, "cscale": 8.45, "vscale": 17.52, "oscale": 74.03 },
    { "name": "通州区", "year": 2011, "city": 7755, "village": 15845, "other": 66996, "cscale": 8.56, "vscale": 17.49, "oscale": 73.95 },
    { "name": "通州区", "year": 2012, "city": 7856, "village": 15812, "other": 66926, "cscale": 8.67, "vscale": 17.45, "oscale": 73.87 }];
//区县现状城市建设用地结构
var DistrictCurrentLandUseStruc = [{ "name": "通州区", "year": 2005, "jzyd": 2148.97, "cyyd": 457.18, "ptyd": 457.18, "ld": 418.91, "dlyd": 4061.81, "syyd": 584.18, "jzbl": 26.44, "cybl": 5.62, "ptbl": 5.62, "ldbl": 5.15, "dlbl": 49.97, "sybl": 7.19 },
    { "name": "通州区", "year": 2006, "jzyd": 2284.20, "cyyd": 787.25, "ptyd": 433.18, "ld": 466.72, "dlyd": 4355.66, "syyd": 583.57, "jzbl": 25.63, "cybl": 8.84, "ptbl": 4.86, "ldbl": 5.24, "dlbl": 48.88, "sybl": 6.55 },
    { "name": "通州区", "year": 2007, "jzyd": 2419.43, "cyyd": 1117.33, "ptyd": 409.17, "ld": 514.53, "dlyd": 4649.52, "syyd": 582.96, "jzbl": 24.96, "cybl": 11.53, "ptbl": 4.22, "ldbl": 5.31, "dlbl": 47.97, "sybl": 6.01 },
    { "name": "通州区", "year": 2008, "jzyd": 2554.66, "cyyd": 1447.40, "ptyd": 385.17, "ld": 562.34, "dlyd": 4943.37, "syyd": 582.35, "jzbl": 24.39, "cybl": 13.82, "ptbl": 3.68, "ldbl": 5.37, "dlbl": 47.19, "sybl": 5.56 },
    { "name": "通州区", "year": 2009, "jzyd": 2689.89, "cyyd": 1777.48, "ptyd": 361.16, "ld": 610.14, "dlyd": 5237.22, "syyd": 581.73, "jzbl": 23.89, "cybl": 15.79, "ptbl": 3.21, "ldbl": 5.42, "dlbl": 46.52, "sybl": 5.17 },
    { "name": "通州区", "year": 2010, "jzyd": 2825.12, "cyyd": 2107.55, "ptyd": 337.16, "ld": 657.95, "dlyd": 5531.07, "syyd": 581.12, "jzbl": 23.46, "cybl": 17.50, "ptbl": 2.80, "ldbl": 5.46, "dlbl": 45.94, "sybl": 4.83 },
    { "name": "通州区", "year": 2011, "jzyd": 2960.35, "cyyd": 2437.63, "ptyd": 313.15, "ld": 705.76, "dlyd": 5824.93, "syyd": 580.51, "jzbl": 23.09, "cybl": 19.01, "ptbl": 2.44, "ldbl": 5.50, "dlbl": 45.43, "sybl": 4.53 },
    { "name": "通州区", "year": 2012, "jzyd": 3095.58, "cyyd": 2767.70, "ptyd": 289.15, "ld": 753.57, "dlyd": 6118.78, "syyd": 579.90, "jzbl": 22.75, "cybl": 20.34, "ptbl": 2.13, "ldbl": 5.54, "dlbl": 44.98, "sybl": 4.26 }];

//乡镇现状用地规模
var VillageCurrentLandUseSize = [{ "name": "通州新城", "year": 2005, "city": 4500, "village": 5500, "other": 6500 },
    { "name": "潞城镇", "year": 2005, "city": 1500, "village": 2500, "other": 2200 },
    { "name": "台湖镇", "year": 2005, "city": 1300, "village": 3500, "other": 2100 },
    { "name": "漷县镇", "year": 2005, "city": 1600, "village": 2800, "other": 2300 },
    { "name": "梨园地区", "year": 2005, "city": 1700, "village": 2600, "other": 2300 },
    { "name": "马驹桥镇", "year": 2005, "city": 1300, "village": 2000, "other": 2490 },
    { "name": "宋庄镇", "year": 2005, "city": 1800, "village": 2300, "other": 2200 },
    { "name": "西集镇", "year": 2005, "city": 1400, "village": 3000, "other": 2100 },
    { "name": "永乐店镇", "year": 2005, "city": 1300, "village": 2500, "other": 3000 },
    { "name": "永顺镇", "year": 2005, "city": 1600, "village": 2200, "other": 2700 },
    { "name": "于家务", "year": 2005, "city": 1400, "village": 2700, "other": 2900 },
    { "name": "张家湾镇", "year": 2005, "city": 1500, "village": 2500, "other": 2200 },
    { "name": "通州新城", "year": 2006, "city": 4700, "village": 5500, "other": 6500 },
    { "name": "潞城镇", "year": 2006, "city": 1200, "village": 2500, "other": 2200 },
    { "name": "台湖镇", "year": 2006, "city": 1300, "village": 2600, "other": 2300 },
    { "name": "漷县镇", "year": 2006, "city": 1400, "village": 2700, "other": 2400 },
    { "name": "梨园地区", "year": 2006, "city": 1500, "village": 2800, "other": 2500 },
    { "name": "马驹桥镇", "year": 2006, "city": 1600, "village": 2900, "other": 2600 },
    { "name": "宋庄镇", "year": 2006, "city": 1700, "village": 3000, "other": 2700 },
    { "name": "西集镇", "year": 2006, "city": 1800, "village": 3100, "other": 2800 },
    { "name": "永乐店镇", "year": 2006, "city": 1900, "village": 3200, "other": 2900 },
    { "name": "永顺镇", "year": 2006, "city": 2000, "village": 3300, "other": 3000 },
    { "name": "于家务", "year": 2006, "city": 2100, "village": 3400, "other": 3100 },
    { "name": "张家湾镇", "year": 2006, "city": 2200, "village": 3500, "other": 3200 },
    { "name": "通州新城", "year": 2007, "city": 4500, "village": 5500, "other": 6500 },
    { "name": "潞城镇", "year": 2007, "city": 1500, "village": 3000, "other": 2200 },
    { "name": "台湖镇", "year": 2007, "city": 1700, "village": 2900, "other": 2270 },
    { "name": "漷县镇", "year": 2007, "city": 1900, "village": 2800, "other": 2340 },
    { "name": "梨园地区", "year": 2007, "city": 2100, "village": 2700, "other": 2410 },
    { "name": "马驹桥镇", "year": 2007, "city": 2300, "village": 2600, "other": 2480 },
    { "name": "宋庄镇", "year": 2007, "city": 2500, "village": 2500, "other": 2550 },
    { "name": "西集镇", "year": 2007, "city": 2700, "village": 2400, "other": 2620 },
    { "name": "永乐店镇", "year": 2007, "city": 2900, "village": 2300, "other": 2690 },
    { "name": "永顺镇", "year": 2007, "city": 3100, "village": 2200, "other": 2760 },
    { "name": "于家务", "year": 2007, "city": 3300, "village": 2100, "other": 2830 },
    { "name": "张家湾镇", "year": 2007, "city": 3500, "village": 2000, "other": 2900 },
    { "name": "通州新城", "year": 2008, "city": 4500, "village": 5500, "other": 6500 },
    { "name": "潞城镇", "year": 2008, "city": 1000, "village": 2300, "other": 2200 },
    { "name": "台湖镇", "year": 2008, "city": 1080, "village": 2390, "other": 2167 },
    { "name": "漷县镇", "year": 2008, "city": 1160, "village": 2480, "other": 2134 },
    { "name": "梨园地区", "year": 2008, "city": 1240, "village": 2570, "other": 2101 },
    { "name": "马驹桥镇", "year": 2008, "city": 1320, "village": 2660, "other": 2068 },
    { "name": "宋庄镇", "year": 2008, "city": 1400, "village": 2750, "other": 2035 },
    { "name": "西集镇", "year": 2008, "city": 1480, "village": 2840, "other": 2002 },
    { "name": "永乐店镇", "year": 2008, "city": 1560, "village": 2930, "other": 1969 },
    { "name": "永顺镇", "year": 2008, "city": 1640, "village": 3020, "other": 1936 },
    { "name": "于家务", "year": 2008, "city": 1720, "village": 3110, "other": 1903 },
    { "name": "张家湾镇", "year": 2008, "city": 1800, "village": 3200, "other": 1870 },
    { "name": "通州新城", "year": 2009, "city": 4500, "village": 5500, "other": 6500 },
    { "name": "潞城镇", "year": 2009, "city": 1500, "village": 2500, "other": 2200 },
    { "name": "台湖镇", "year": 2009, "city": 1300, "village": 3500, "other": 2100 },
    { "name": "漷县镇", "year": 2009, "city": 1600, "village": 2800, "other": 2300 },
    { "name": "梨园地区", "year": 2009, "city": 1700, "village": 2600, "other": 2300 },
    { "name": "马驹桥镇", "year": 2009, "city": 1300, "village": 2000, "other": 2490 },
    { "name": "宋庄镇", "year": 2009, "city": 1800, "village": 2300, "other": 2200 },
    { "name": "西集镇", "year": 2009, "city": 1400, "village": 3000, "other": 2100 },
    { "name": "永乐店镇", "year": 2009, "city": 1300, "village": 2500, "other": 3000 },
    { "name": "永顺镇", "year": 2009, "city": 1600, "village": 2200, "other": 2700 },
    { "name": "于家务", "year": 2009, "city": 1400, "village": 2700, "other": 2900 },
    { "name": "张家湾镇", "year": 2009, "city": 1500, "village": 2500, "other": 2200 },
    { "name": "通州新城", "year": 2010, "city": 4500, "village": 5500, "other": 6500 },
    { "name": "潞城镇", "year": 2010, "city": 1600, "village": 2500, "other": 2200 },
    { "name": "台湖镇", "year": 2010, "city": 1655, "village": 2534, "other": 2180 },
    { "name": "漷县镇", "year": 2010, "city": 1710, "village": 2568, "other": 2160 },
    { "name": "梨园地区", "year": 2010, "city": 1765, "village": 2602, "other": 2140 },
    { "name": "马驹桥镇", "year": 2010, "city": 1820, "village": 2636, "other": 2120 },
    { "name": "宋庄镇", "year": 2010, "city": 1875, "village": 2670, "other": 2100 },
    { "name": "西集镇", "year": 2010, "city": 1930, "village": 2704, "other": 2080 },
    { "name": "永乐店镇", "year": 2010, "city": 1985, "village": 2738, "other": 2060 },
    { "name": "永顺镇", "year": 2010, "city": 2040, "village": 2772, "other": 2040 },
    { "name": "于家务", "year": 2010, "city": 2095, "village": 2806, "other": 2020 },
    { "name": "张家湾镇", "year": 2010, "city": 2150, "village": 2840, "other": 2000 },
    { "name": "通州新城", "year": 2011, "city": 4500, "village": 5500, "other": 6500 },
    { "name": "潞城镇", "year": 2011, "city": 1500, "village": 2500, "other": 2200 },
    { "name": "台湖镇", "year": 2011, "city": 1300, "village": 3500, "other": 2100 },
    { "name": "漷县镇", "year": 2011, "city": 1600, "village": 2800, "other": 2300 },
    { "name": "梨园地区", "year": 2011, "city": 1700, "village": 2600, "other": 2300 },
    { "name": "马驹桥镇", "year": 2011, "city": 1300, "village": 2000, "other": 2490 },
    { "name": "宋庄镇", "year": 2011, "city": 1800, "village": 2300, "other": 2200 },
    { "name": "西集镇", "year": 2011, "city": 1400, "village": 3000, "other": 2100 },
    { "name": "永乐店镇", "year": 2011, "city": 1300, "village": 2500, "other": 3000 },
    { "name": "永顺镇", "year": 2011, "city": 1600, "village": 2200, "other": 2700 },
    { "name": "于家务", "year": 2011, "city": 1400, "village": 2700, "other": 2900 },
    { "name": "张家湾镇", "year": 2011, "city": 1500, "village": 2500, "other": 2200 },
    { "name": "通州新城", "year": 2012, "city": 4500, "village": 5500, "other": 6500 },
    { "name": "潞城镇", "year": 2012, "city": 1500, "village": 2500, "other": 2200 },
    { "name": "台湖镇", "year": 2012, "city": 1590, "village": 2530, "other": 2240 },
    { "name": "漷县镇", "year": 2012, "city": 1680, "village": 2560, "other": 2280 },
    { "name": "梨园地区", "year": 2012, "city": 1770, "village": 2590, "other": 2320 },
    { "name": "马驹桥镇", "year": 2012, "city": 1860, "village": 2620, "other": 2360 },
    { "name": "宋庄镇", "year": 2012, "city": 1950, "village": 2650, "other": 2400 },
    { "name": "西集镇", "year": 2012, "city": 2040, "village": 2680, "other": 2440 },
    { "name": "永乐店镇", "year": 2012, "city": 2130, "village": 2710, "other": 2480 },
    { "name": "永顺镇", "year": 2012, "city": 2220, "village": 2740, "other": 2520 },
    { "name": "于家务", "year": 2012, "city": 2310, "village": 2770, "other": 2560 },
    { "name": "张家湾镇", "year": 2012, "city": 2400, "village": 2800, "other": 2600 }];
//乡镇现状用地结构
var VillageCurrentLandUseStruc = [{ 'name': '通州新城', 'year': 2005, 'jzyd': 1800, 'cyyd': 2500, 'ptyd': 3000, 'ld': 1500, 'dlyd': 2000, 'syyd': 1900 },
    { 'name': '潞城:', 'year': 2005, 'jzyd': 1899, 'cyyd': 2410, 'ptyd': 2890, 'ld': 1600, 'dlyd': 2048, 'syyd': 1920 },
    { 'name': '台湖:', 'year': 2005, 'jzyd': 1998, 'cyyd': 2320, 'ptyd': 2780, 'ld': 1700, 'dlyd': 2096, 'syyd': 1940 },
    { 'name': '漷县:', 'year': 2005, 'jzyd': 2097, 'cyyd': 2230, 'ptyd': 2670, 'ld': 1800, 'dlyd': 2144, 'syyd': 1960 },
    { 'name': '梨园地区', 'year': 2005, 'jzyd': 2196, 'cyyd': 2140, 'ptyd': 2560, 'ld': 1900, 'dlyd': 2192, 'syyd': 1980 },
    { 'name': '马驹桥镇', 'year': 2005, 'jzyd': 2295, 'cyyd': 2050, 'ptyd': 2450, 'ld': 2000, 'dlyd': 2240, 'syyd': 2000 },
    { 'name': '宋庄:', 'year': 2005, 'jzyd': 2394, 'cyyd': 1960, 'ptyd': 2340, 'ld': 2100, 'dlyd': 2288, 'syyd': 2020 },
    { 'name': '西集:', 'year': 2005, 'jzyd': 2493, 'cyyd': 1870, 'ptyd': 2230, 'ld': 2200, 'dlyd': 2336, 'syyd': 2040 },
    { 'name': '永乐店镇', 'year': 2005, 'jzyd': 2592, 'cyyd': 1780, 'ptyd': 2120, 'ld': 2300, 'dlyd': 2384, 'syyd': 2060 },
    { 'name': '永顺:', 'year': 2005, 'jzyd': 2691, 'cyyd': 1690, 'ptyd': 2010, 'ld': 2400, 'dlyd': 2432, 'syyd': 2080 },
    { 'name': '于家:', 'year': 2005, 'jzyd': 2790, 'cyyd': 1600, 'ptyd': 1900, 'ld': 2500, 'dlyd': 2480, 'syyd': 2100 },
    { 'name': '张家湾镇', 'year': 2005, 'jzyd': 2889, 'cyyd': 1510, 'ptyd': 1790, 'ld': 2600, 'dlyd': 2528, 'syyd': 2120 },
    { 'name': '通州新城', 'year': 2006, 'jzyd': 1800, 'cyyd': 2500, 'ptyd': 3000, 'ld': 1500, 'dlyd': 2000, 'syyd': 1900 },
    { 'name': '潞城:', 'year': 2006, 'jzyd': 1890, 'cyyd': 2410, 'ptyd': 2890, 'ld': 1600, 'dlyd': 2048, 'syyd': 1920 },
    { 'name': '台湖:', 'year': 2006, 'jzyd': 1980, 'cyyd': 2320, 'ptyd': 2780, 'ld': 1700, 'dlyd': 2096, 'syyd': 1940 },
    { 'name': '漷县:', 'year': 2006, 'jzyd': 2070, 'cyyd': 2230, 'ptyd': 2670, 'ld': 1800, 'dlyd': 2144, 'syyd': 1960 },
    { 'name': '梨园地区', 'year': 2006, 'jzyd': 2160, 'cyyd': 2140, 'ptyd': 2560, 'ld': 1900, 'dlyd': 2192, 'syyd': 1980 },
    { 'name': '马驹桥镇', 'year': 2006, 'jzyd': 2250, 'cyyd': 2050, 'ptyd': 2450, 'ld': 2000, 'dlyd': 2240, 'syyd': 2000 },
    { 'name': '宋庄:', 'year': 2006, 'jzyd': 2340, 'cyyd': 1960, 'ptyd': 2340, 'ld': 2100, 'dlyd': 2288, 'syyd': 2020 },
    { 'name': '西集:', 'year': 2006, 'jzyd': 2430, 'cyyd': 1870, 'ptyd': 2230, 'ld': 2200, 'dlyd': 2336, 'syyd': 2040 },
    { 'name': '永乐店镇', 'year': 2006, 'jzyd': 2520, 'cyyd': 1780, 'ptyd': 2120, 'ld': 2300, 'dlyd': 2384, 'syyd': 2060 },
    { 'name': '永顺:', 'year': 2006, 'jzyd': 2610, 'cyyd': 1690, 'ptyd': 2010, 'ld': 2400, 'dlyd': 2432, 'syyd': 2080 },
    { 'name': '于家:', 'year': 2006, 'jzyd': 2700, 'cyyd': 1600, 'ptyd': 1900, 'ld': 2500, 'dlyd': 2480, 'syyd': 2100 },
    { 'name': '张家湾镇', 'year': 2006, 'jzyd': 2790, 'cyyd': 1510, 'ptyd': 1790, 'ld': 2600, 'dlyd': 2528, 'syyd': 2120 },
    { 'name': '通州新城', 'year': 2007, 'jzyd': 1800, 'cyyd': 2500, 'ptyd': 3000, 'ld': 1500, 'dlyd': 2000, 'syyd': 1900 },
    { 'name': '潞城:', 'year': 2007, 'jzyd': 1888, 'cyyd': 2410, 'ptyd': 2890, 'ld': 1600, 'dlyd': 2048, 'syyd': 1920 },
    { 'name': '台湖:', 'year': 2007, 'jzyd': 1976, 'cyyd': 2320, 'ptyd': 2780, 'ld': 1700, 'dlyd': 2096, 'syyd': 1940 },
    { 'name': '漷县:', 'year': 2007, 'jzyd': 2064, 'cyyd': 2230, 'ptyd': 2670, 'ld': 1800, 'dlyd': 2144, 'syyd': 1960 },
    { 'name': '梨园地区', 'year': 2007, 'jzyd': 2152, 'cyyd': 2140, 'ptyd': 2560, 'ld': 1900, 'dlyd': 2192, 'syyd': 1980 },
    { 'name': '马驹桥镇', 'year': 2007, 'jzyd': 2240, 'cyyd': 2050, 'ptyd': 2450, 'ld': 2000, 'dlyd': 2240, 'syyd': 2000 },
    { 'name': '宋庄:', 'year': 2007, 'jzyd': 2328, 'cyyd': 1960, 'ptyd': 2340, 'ld': 2100, 'dlyd': 2288, 'syyd': 2020 },
    { 'name': '西集:', 'year': 2007, 'jzyd': 2416, 'cyyd': 1870, 'ptyd': 2230, 'ld': 2200, 'dlyd': 2336, 'syyd': 2040 },
    { 'name': '永乐店镇', 'year': 2007, 'jzyd': 2504, 'cyyd': 1780, 'ptyd': 2120, 'ld': 2300, 'dlyd': 2384, 'syyd': 2060 },
    { 'name': '永顺:', 'year': 2007, 'jzyd': 2592, 'cyyd': 1690, 'ptyd': 2010, 'ld': 2400, 'dlyd': 2432, 'syyd': 2080 },
    { 'name': '于家:', 'year': 2007, 'jzyd': 2680, 'cyyd': 1600, 'ptyd': 1900, 'ld': 2500, 'dlyd': 2480, 'syyd': 2100 },
    { 'name': '张家湾镇', 'year': 2007, 'jzyd': 2768, 'cyyd': 1510, 'ptyd': 1790, 'ld': 2600, 'dlyd': 2528, 'syyd': 2120 },
    { 'name': '通州新城', 'year': 2008, 'jzyd': 1800, 'cyyd': 2500, 'ptyd': 3000, 'ld': 1500, 'dlyd': 2000, 'syyd': 1900 },
    { 'name': '潞城:', 'year': 2008, 'jzyd': 1870, 'cyyd': 2410, 'ptyd': 2890, 'ld': 1600, 'dlyd': 2048, 'syyd': 1920 },
    { 'name': '台湖:', 'year': 2008, 'jzyd': 1940, 'cyyd': 2320, 'ptyd': 2780, 'ld': 1700, 'dlyd': 2096, 'syyd': 1940 },
    { 'name': '漷县:', 'year': 2008, 'jzyd': 2010, 'cyyd': 2230, 'ptyd': 2670, 'ld': 1800, 'dlyd': 2144, 'syyd': 1960 },
    { 'name': '梨园地区', 'year': 2008, 'jzyd': 2080, 'cyyd': 2140, 'ptyd': 2560, 'ld': 1900, 'dlyd': 2192, 'syyd': 1980 },
    { 'name': '马驹桥镇', 'year': 2008, 'jzyd': 2150, 'cyyd': 2050, 'ptyd': 2450, 'ld': 2000, 'dlyd': 2240, 'syyd': 2000 },
    { 'name': '宋庄:', 'year': 2008, 'jzyd': 2220, 'cyyd': 1960, 'ptyd': 2340, 'ld': 2100, 'dlyd': 2288, 'syyd': 2020 },
    { 'name': '西集:', 'year': 2008, 'jzyd': 2290, 'cyyd': 1870, 'ptyd': 2230, 'ld': 2200, 'dlyd': 2336, 'syyd': 2040 },
    { 'name': '永乐店镇', 'year': 2008, 'jzyd': 2360, 'cyyd': 1780, 'ptyd': 2120, 'ld': 2300, 'dlyd': 2384, 'syyd': 2060 },
    { 'name': '永顺:', 'year': 2008, 'jzyd': 2430, 'cyyd': 1690, 'ptyd': 2010, 'ld': 2400, 'dlyd': 2432, 'syyd': 2080 },
    { 'name': '于家:', 'year': 2008, 'jzyd': 2500, 'cyyd': 1600, 'ptyd': 1900, 'ld': 2500, 'dlyd': 2480, 'syyd': 2100 },
    { 'name': '张家湾镇', 'year': 2008, 'jzyd': 2570, 'cyyd': 1510, 'ptyd': 1790, 'ld': 2600, 'dlyd': 2528, 'syyd': 2120 },
    { 'name': '通州新城', 'year': 2009, 'jzyd': 1800, 'cyyd': 2500, 'ptyd': 3000, 'ld': 1500, 'dlyd': 2000, 'syyd': 1900 },
    { 'name': '潞城:', 'year': 2009, 'jzyd': 1896, 'cyyd': 2410, 'ptyd': 2890, 'ld': 1600, 'dlyd': 2048, 'syyd': 1920 },
    { 'name': '台湖:', 'year': 2009, 'jzyd': 1992, 'cyyd': 2320, 'ptyd': 2780, 'ld': 1700, 'dlyd': 2096, 'syyd': 1940 },
    { 'name': '漷县:', 'year': 2009, 'jzyd': 2088, 'cyyd': 2230, 'ptyd': 2670, 'ld': 1800, 'dlyd': 2144, 'syyd': 1960 },
    { 'name': '梨园地区', 'year': 2009, 'jzyd': 2184, 'cyyd': 2140, 'ptyd': 2560, 'ld': 1900, 'dlyd': 2192, 'syyd': 1980 },
    { 'name': '马驹桥镇', 'year': 2009, 'jzyd': 2280, 'cyyd': 2050, 'ptyd': 2450, 'ld': 2000, 'dlyd': 2240, 'syyd': 2000 },
    { 'name': '宋庄:', 'year': 2009, 'jzyd': 2376, 'cyyd': 1960, 'ptyd': 2340, 'ld': 2100, 'dlyd': 2288, 'syyd': 2020 },
    { 'name': '西集:', 'year': 2009, 'jzyd': 2472, 'cyyd': 1870, 'ptyd': 2230, 'ld': 2200, 'dlyd': 2336, 'syyd': 2040 },
    { 'name': '永乐店镇', 'year': 2009, 'jzyd': 2568, 'cyyd': 1780, 'ptyd': 2120, 'ld': 2300, 'dlyd': 2384, 'syyd': 2060 },
    { 'name': '永顺:', 'year': 2009, 'jzyd': 2664, 'cyyd': 1690, 'ptyd': 2010, 'ld': 2400, 'dlyd': 2432, 'syyd': 2080 },
    { 'name': '于家:', 'year': 2009, 'jzyd': 2760, 'cyyd': 1600, 'ptyd': 1900, 'ld': 2500, 'dlyd': 2480, 'syyd': 2100 },
    { 'name': '张家湾镇', 'year': 2009, 'jzyd': 2856, 'cyyd': 1510, 'ptyd': 1790, 'ld': 2600, 'dlyd': 2528, 'syyd': 2120 },
    { 'name': '通州新城', 'year': 2010, 'jzyd': 1800, 'cyyd': 2500, 'ptyd': 3000, 'ld': 1500, 'dlyd': 2000, 'syyd': 1900 },
    { 'name': '潞城:', 'year': 2010, 'jzyd': 1900, 'cyyd': 2410, 'ptyd': 2890, 'ld': 1600, 'dlyd': 2048, 'syyd': 1920 },
    { 'name': '台湖:', 'year': 2010, 'jzyd': 2000, 'cyyd': 2320, 'ptyd': 2780, 'ld': 1700, 'dlyd': 2096, 'syyd': 1940 },
    { 'name': '漷县:', 'year': 2010, 'jzyd': 2100, 'cyyd': 2230, 'ptyd': 2670, 'ld': 1800, 'dlyd': 2144, 'syyd': 1960 },
    { 'name': '梨园地区', 'year': 2010, 'jzyd': 2200, 'cyyd': 2140, 'ptyd': 2560, 'ld': 1900, 'dlyd': 2192, 'syyd': 1980 },
    { 'name': '马驹桥镇', 'year': 2010, 'jzyd': 2300, 'cyyd': 2050, 'ptyd': 2450, 'ld': 2000, 'dlyd': 2240, 'syyd': 2000 },
    { 'name': '宋庄:', 'year': 2010, 'jzyd': 2400, 'cyyd': 1960, 'ptyd': 2340, 'ld': 2100, 'dlyd': 2288, 'syyd': 2020 },
    { 'name': '西集:', 'year': 2010, 'jzyd': 2500, 'cyyd': 1870, 'ptyd': 2230, 'ld': 2200, 'dlyd': 2336, 'syyd': 2040 },
    { 'name': '永乐店镇', 'year': 2010, 'jzyd': 2600, 'cyyd': 1780, 'ptyd': 2120, 'ld': 2300, 'dlyd': 2384, 'syyd': 2060 },
    { 'name': '永顺:', 'year': 2010, 'jzyd': 2700, 'cyyd': 1690, 'ptyd': 2010, 'ld': 2400, 'dlyd': 2432, 'syyd': 2080 },
    { 'name': '于家:', 'year': 2010, 'jzyd': 2800, 'cyyd': 1600, 'ptyd': 1900, 'ld': 2500, 'dlyd': 2480, 'syyd': 2100 },
    { 'name': '张家湾镇', 'year': 2010, 'jzyd': 2900, 'cyyd': 1510, 'ptyd': 1790, 'ld': 2600, 'dlyd': 2528, 'syyd': 2120 },
    { 'name': '通州新城', 'year': 2011, 'jzyd': 1800, 'cyyd': 2500, 'ptyd': 3000, 'ld': 1500, 'dlyd': 2000, 'syyd': 1900 },
    { 'name': '潞城:', 'year': 2011, 'jzyd': 1855, 'cyyd': 2410, 'ptyd': 2890, 'ld': 1600, 'dlyd': 2048, 'syyd': 1920 },
    { 'name': '台湖:', 'year': 2011, 'jzyd': 1910, 'cyyd': 2320, 'ptyd': 2780, 'ld': 1700, 'dlyd': 2096, 'syyd': 1940 },
    { 'name': '漷县:', 'year': 2011, 'jzyd': 1965, 'cyyd': 2230, 'ptyd': 2670, 'ld': 1800, 'dlyd': 2144, 'syyd': 1960 },
    { 'name': '梨园地区', 'year': 2011, 'jzyd': 2020, 'cyyd': 2140, 'ptyd': 2560, 'ld': 1900, 'dlyd': 2192, 'syyd': 1980 },
    { 'name': '马驹桥镇', 'year': 2011, 'jzyd': 2075, 'cyyd': 2050, 'ptyd': 2450, 'ld': 2000, 'dlyd': 2240, 'syyd': 2000 },
    { 'name': '宋庄:', 'year': 2011, 'jzyd': 2130, 'cyyd': 1960, 'ptyd': 2340, 'ld': 2100, 'dlyd': 2288, 'syyd': 2020 },
    { 'name': '西集:', 'year': 2011, 'jzyd': 2185, 'cyyd': 1870, 'ptyd': 2230, 'ld': 2200, 'dlyd': 2336, 'syyd': 2040 },
    { 'name': '永乐店镇', 'year': 2011, 'jzyd': 2240, 'cyyd': 1780, 'ptyd': 2120, 'ld': 2300, 'dlyd': 2384, 'syyd': 2060 },
    { 'name': '永顺:', 'year': 2011, 'jzyd': 2295, 'cyyd': 1690, 'ptyd': 2010, 'ld': 2400, 'dlyd': 2432, 'syyd': 2080 },
    { 'name': '于家:', 'year': 2011, 'jzyd': 2350, 'cyyd': 1600, 'ptyd': 1900, 'ld': 2500, 'dlyd': 2480, 'syyd': 2100 },
    { 'name': '张家湾镇', 'year': 2011, 'jzyd': 2405, 'cyyd': 1510, 'ptyd': 1790, 'ld': 2600, 'dlyd': 2528, 'syyd': 2120 },
    { 'name': '通州新城', 'year': 2012, 'jzyd': 1800, 'cyyd': 2500, 'ptyd': 3000, 'ld': 1500, 'dlyd': 2000, 'syyd': 1900 },
    { 'name': '潞城:', 'year': 2012, 'jzyd': 1899, 'cyyd': 2410, 'ptyd': 2890, 'ld': 1600, 'dlyd': 2048, 'syyd': 1920 },
    { 'name': '台湖:', 'year': 2012, 'jzyd': 1998, 'cyyd': 2320, 'ptyd': 2780, 'ld': 1700, 'dlyd': 2096, 'syyd': 1940 },
    { 'name': '漷县:', 'year': 2012, 'jzyd': 2097, 'cyyd': 2230, 'ptyd': 2670, 'ld': 1800, 'dlyd': 2144, 'syyd': 1960 },
    { 'name': '梨园地区', 'year': 2012, 'jzyd': 2196, 'cyyd': 2140, 'ptyd': 2560, 'ld': 1900, 'dlyd': 2192, 'syyd': 1980 },
    { 'name': '马驹桥镇', 'year': 2012, 'jzyd': 2295, 'cyyd': 2050, 'ptyd': 2450, 'ld': 2000, 'dlyd': 2240, 'syyd': 2000 },
    { 'name': '宋庄:', 'year': 2012, 'jzyd': 2394, 'cyyd': 1960, 'ptyd': 2340, 'ld': 2100, 'dlyd': 2288, 'syyd': 2020 },
    { 'name': '西集:', 'year': 2012, 'jzyd': 2493, 'cyyd': 1870, 'ptyd': 2230, 'ld': 2200, 'dlyd': 2336, 'syyd': 2040 },
    { 'name': '永乐店镇', 'year': 2012, 'jzyd': 2592, 'cyyd': 1780, 'ptyd': 2120, 'ld': 2300, 'dlyd': 2384, 'syyd': 2060 },
    { 'name': '永顺:', 'year': 2012, 'jzyd': 2691, 'cyyd': 1690, 'ptyd': 2010, 'ld': 2400, 'dlyd': 2432, 'syyd': 2080 },
    { 'name': '于家:', 'year': 2012, 'jzyd': 2790, 'cyyd': 1600, 'ptyd': 1900, 'ld': 2500, 'dlyd': 2480, 'syyd': 2100 },
    { 'name': '张家湾镇', 'year': 2012, 'jzyd': 2889, 'cyyd': 1510, 'ptyd': 1790, 'ld': 2600, 'dlyd': 2528, 'syyd': 2120 }];

//通州全区规划
var DistrictPlanLandUse = [{ 'name': '通州区', 'year': 2005, 'city': 11424, 'village': 2110, 'other': 69286 },
    { 'name': '通州区', 'year': 2006, 'city': 11524, 'village': 2120, 'other': 70286 },
    { 'name': '通州区', 'year': 2007, 'city': 11624, 'village': 2130, 'other': 71286 },
    { 'name': '通州区', 'year': 2008, 'city': 11724, 'village': 2140, 'other': 72286 },
    { 'name': '通州区', 'year': 2009, 'city': 11824, 'village': 2150, 'other': 73286 },
    { 'name': '通州区', 'year': 2010, 'city': 11924, 'village': 2160, 'other': 74286 },
    { 'name': '通州区', 'year': 2011, 'city': 12024, 'village': 2170, 'other': 75286 },
    { 'name': '通州区', 'year': 2012, 'city': 12124, 'village': 2185, 'other': 76286 }];
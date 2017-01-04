$(function () {
    App.init();
});

var App = {
    //初始化
    init: function () {
        _self = this;
        _self.count = 0;
        this.initSize();
        console.log("this is fix2Big");
        //require(["esri/map", "dojo/dom", "dojo/domReady!"], function (Map, dom) {
        //    //var map = new Map("mainmap", {
        //    //    basemap: "dark-gray",
        //    //    center: [105, 40],
        //    //    zoom: 5,
        //    //    logo: false,
        //    //    showAttribution: false
        //    //});
        //});

        this.initMap();
        this.initSilderBar();
        this.initJSTree();
        this.initInnerJStree();
        this.loadChart();
        this.addEvent();
    },
    initMap: function () {
        var map = new BMap.Map("mainmap");
        window.map = map;
        var point = new BMap.Point(118.9, 30.915);
        map.enableScrollWheelZoom();                            //启用滚轮放大缩小
        //map.addControl(new BMap.MapTypeControl());          //添加地图类型控件
        map.disable3DBuilding();
        map.centerAndZoom(point, 7);

        map.setMapStyle({ style: 'midnight' });
        if (!isSupportCanvas()) {
            alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~');
            return;
        }
        function isSupportCanvas() {
            var elem = document.createElement('canvas');
            return !!(elem.getContext && elem.getContext('2d'));
        }
        _self.heatmapOverlay = new BMapLib.HeatmapOverlay({ "radius": 100 });
        map.addOverlay(_self.heatmapOverlay);
        this.refreshHeatMapData();
    },
    refreshHeatMapData: function () {
        var datass = [{ "lng": 121.15, "lat": 31.89, "count": 0 },
        { "lng": 109.781327, "lat": 39.608266, "count": 0 },
        { "lng": 120.38, "lat": 37.35, "count": 0 },
        { "lng": 122.207216, "lat": 29.985295, "count": 0 },
        { "lng": 123.97, "lat": 47.33, "count": 0 },
        { "lng": 120.13, "lat": 33.38, "count": 0 },
        { "lng": 118.87, "lat": 42.28, "count": 0 },
        { "lng": 120.33, "lat": 36.07, "count": 0 },
        { "lng": 121.52, "lat": 36.89, "count": 0 },
        { "lng": 102.188043, "lat": 38.520089, "count": 0 },
        { "lng": 118.58, "lat": 24.93, "count": 0 },
        { "lng": 120.53, "lat": 36.86, "count": 0 },
        { "lng": 119.46, "lat": 35.42, "count": 0 },
        { "lng": 119.97, "lat": 35.88, "count": 0 },
        { "lng": 121.05, "lat": 32.08, "count": 0 },
        { "lng": 91.11, "lat": 29.97, "count": 0 },
        { "lng": 112.02, "lat": 22.93, "count": 0 },
        { "lng": 116.1, "lat": 24.55, "count": 0 },
        { "lng": 122.05, "lat": 37.2, "count": 0 },
        { "lng": 121.48, "lat": 31.22, "count": 0 },
        { "lng": 101.718637, "lat": 26.582347, "count": 0 },
        { "lng": 122.1, "lat": 37.5, "count": 0 },
        { "lng": 117.93, "lat": 40.97, "count": 0 },
        { "lng": 118.1, "lat": 24.46, "count": 0 },
        { "lng": 115.375279, "lat": 22.786211, "count": 0 },
        { "lng": 116.63, "lat": 23.68, "count": 0 },
        { "lng": 124.37, "lat": 40.13, "count": 0 },
        { "lng": 121.1, "lat": 31.45, "count": 0 },
        { "lng": 103.79, "lat": 25.51, "count": 0 },
        { "lng": 121.39, "lat": 37.52, "count": 0 },
        { "lng": 119.3, "lat": 26.08, "count": 0 },
        { "lng": 121.979603, "lat": 39.627114, "count": 0 },
        { "lng": 120.45, "lat": 36.38, "count": 0 },
        { "lng": 123.97, "lat": 41.97, "count": 0 },
        { "lng": 102.52, "lat": 24.35, "count": 0 },
        { "lng": 114.87, "lat": 40.82, "count": 0 },
        { "lng": 113.57, "lat": 37.85, "count": 0 },
        { "lng": 119.942327, "lat": 37.177017, "count": 0 },
        { "lng": 120.1, "lat": 30.86, "count": 0 },
        { "lng": 116.69, "lat": 23.39, "count": 0 },
        { "lng": 120.95, "lat": 31.39, "count": 0 },
        { "lng": 121.56, "lat": 29.86, "count": 0 },
        { "lng": 110.359377, "lat": 21.270708, "count": 0 },
        { "lng": 116.35, "lat": 23.55, "count": 0 },
        { "lng": 122.41, "lat": 37.16, "count": 0 },
        { "lng": 119.16, "lat": 34.59, "count": 0 },
        { "lng": 120.836932, "lat": 40.711052, "count": 0 },
        { "lng": 120.74, "lat": 31.64, "count": 0 },
        { "lng": 113.75, "lat": 23.04, "count": 0 },
        { "lng": 114.68, "lat": 23.73, "count": 0 },
        { "lng": 119.15, "lat": 33.5, "count": 0 },
        { "lng": 119.9, "lat": 32.49, "count": 0 },
        { "lng": 108.33, "lat": 22.84, "count": 0 },
        { "lng": 122.18, "lat": 40.65, "count": 0 },
        { "lng": 114.4, "lat": 23.09, "count": 0 },
        { "lng": 120.26, "lat": 31.91, "count": 0 },
        { "lng": 120.75, "lat": 37.8, "count": 0 },
        { "lng": 113.62, "lat": 24.84, "count": 0 },
        { "lng": 98.289152, "lat": 39.77313, "count": 0 },
        { "lng": 113.23, "lat": 23.16, "count": 0 },
        { "lng": 109.47, "lat": 36.6, "count": 0 },
        { "lng": 112.53, "lat": 37.87, "count": 0 },
        { "lng": 113.01, "lat": 23.7, "count": 0 },
        { "lng": 113.38, "lat": 22.52, "count": 0 },
        { "lng": 102.73, "lat": 25.04, "count": 0 },
        { "lng": 118.73, "lat": 36.86, "count": 0 },
        { "lng": 122.070714, "lat": 41.119997, "count": 0 },
        { "lng": 113.08, "lat": 36.18, "count": 0 },
        { "lng": 114.07, "lat": 22.62, "count": 0 },
        { "lng": 113.52, "lat": 22.3, "count": 0 },
        { "lng": 118.3, "lat": 33.96, "count": 0 },
        { "lng": 108.72, "lat": 34.36, "count": 0 },
        { "lng": 109.11, "lat": 35.09, "count": 0 },
        { "lng": 119.97, "lat": 36.77, "count": 0 },
        { "lng": 113.11, "lat": 23.05, "count": 0 },
        { "lng": 110.35, "lat": 20.02, "count": 0 },
        { "lng": 113.06, "lat": 22.61, "count": 0 },
        { "lng": 117.53, "lat": 36.72, "count": 0 },
        { "lng": 112.44, "lat": 23.05, "count": 0 },
        { "lng": 121.62, "lat": 38.92, "count": 0 },
        { "lng": 111.5, "lat": 36.08, "count": 0 },
        { "lng": 120.63, "lat": 31.16, "count": 0 },
        { "lng": 106.39, "lat": 39.04, "count": 0 },
        { "lng": 123.38, "lat": 41.8, "count": 0 },
        { "lng": 120.62, "lat": 31.32, "count": 0 },
        { "lng": 110.88, "lat": 21.68, "count": 0 },
        { "lng": 120.76, "lat": 30.77, "count": 0 },
        { "lng": 125.35, "lat": 43.88, "count": 0 },
        { "lng": 120.03336, "lat": 36.264622, "count": 0 },
        { "lng": 106.27, "lat": 38.47, "count": 0 },
        { "lng": 120.555821, "lat": 31.875428, "count": 0 },
        { "lng": 111.19, "lat": 34.76, "count": 0 },
        { "lng": 121.15, "lat": 41.13, "count": 0 },
        { "lng": 115.89, "lat": 28.68, "count": 0 },
        { "lng": 109.4, "lat": 24.33, "count": 0 },
        { "lng": 109.511909, "lat": 18.252847, "count": 0 },
        { "lng": 104.778442, "lat": 29.33903, "count": 0 },
        { "lng": 126.57, "lat": 43.87, "count": 0 },
        { "lng": 111.95, "lat": 21.85, "count": 0 },
        { "lng": 105.39, "lat": 28.91, "count": 0 },
        { "lng": 101.74, "lat": 36.56, "count": 0 },
        { "lng": 104.56, "lat": 29.77, "count": 0 },
        { "lng": 111.65, "lat": 40.82, "count": 0 },
        { "lng": 104.06, "lat": 30.67, "count": 0 },
        { "lng": 113.3, "lat": 40.12, "count": 0 },
        { "lng": 119.44, "lat": 32.2, "count": 0 },
        { "lng": 110.28, "lat": 25.29, "count": 0 },
        { "lng": 110.479191, "lat": 29.117096, "count": 0 },
        { "lng": 119.82, "lat": 31.36, "count": 0 },
        { "lng": 109.12, "lat": 21.49, "count": 0 },
        { "lng": 108.95, "lat": 34.27, "count": 0 },
        { "lng": 119.56, "lat": 31.74, "count": 0 },
        { "lng": 118.49, "lat": 37.46, "count": 0 },
        { "lng": 129.58, "lat": 44.6, "count": 0 },
        { "lng": 106.9, "lat": 27.7, "count": 0 },
        { "lng": 120.58, "lat": 30.01, "count": 0 },
        { "lng": 119.42, "lat": 32.39, "count": 0 },
        { "lng": 119.95, "lat": 31.79, "count": 0 },
        { "lng": 119.1, "lat": 36.62, "count": 0 },
        { "lng": 106.54, "lat": 29.59, "count": 0 },
        { "lng": 121.420757, "lat": 28.656386, "count": 0 },
        { "lng": 118.78, "lat": 32.04, "count": 0 },
        { "lng": 118.03, "lat": 37.36, "count": 0 },
        { "lng": 106.71, "lat": 26.57, "count": 0 },
        { "lng": 120.29, "lat": 31.59, "count": 0 },
        { "lng": 123.73, "lat": 41.3, "count": 0 },
        { "lng": 84.77, "lat": 45.59, "count": 0 },
        { "lng": 109.5, "lat": 34.52, "count": 0 },
        { "lng": 118.48, "lat": 31.56, "count": 0 },
        { "lng": 107.15, "lat": 34.38, "count": 0 },
        { "lng": 113.21, "lat": 35.24, "count": 0 },
        { "lng": 119.16, "lat": 31.95, "count": 0 },
        { "lng": 116.46, "lat": 39.92, "count": 0 },
        { "lng": 117.2, "lat": 34.26, "count": 0 },
        { "lng": 115.72, "lat": 37.72, "count": 0 },
        { "lng": 110, "lat": 40.58, "count": 0 },
        { "lng": 104.73, "lat": 31.48, "count": 0 },
        { "lng": 87.68, "lat": 43.77, "count": 0 },
        { "lng": 117.57, "lat": 34.86, "count": 0 },
        { "lng": 120.19, "lat": 30.26, "count": 0 },
        { "lng": 118.05, "lat": 36.78, "count": 0 },
        { "lng": 122.85, "lat": 41.12, "count": 0 },
        { "lng": 119.48, "lat": 31.43, "count": 0 },
        { "lng": 86.06, "lat": 41.68, "count": 0 },
        { "lng": 114.35, "lat": 36.1, "count": 0 },
        { "lng": 114.35, "lat": 34.79, "count": 0 },
        { "lng": 117, "lat": 36.65, "count": 0 },
        { "lng": 104.37, "lat": 31.13, "count": 0 },
        { "lng": 120.65, "lat": 28.01, "count": 0 },
        { "lng": 115.97, "lat": 29.71, "count": 0 },
        { "lng": 114.47, "lat": 36.6, "count": 0 },
        { "lng": 119.72, "lat": 30.23, "count": 0 },
        { "lng": 103.73, "lat": 36.03, "count": 0 },
        { "lng": 116.83, "lat": 38.33, "count": 0 },
        { "lng": 118.35, "lat": 35.05, "count": 0 },
        { "lng": 106.110698, "lat": 30.837793, "count": 0 },
        { "lng": 117.2, "lat": 39.13, "count": 0 },
        { "lng": 119.95, "lat": 30.07, "count": 0 },
        { "lng": 117.13, "lat": 36.18, "count": 0 },
        { "lng": 120.23, "lat": 29.71, "count": 0 },
        { "lng": 113.65, "lat": 34.76, "count": 0 },
        { "lng": 126.63, "lat": 45.75, "count": 0 },
        { "lng": 115.97, "lat": 36.45, "count": 0 },
        { "lng": 118.38, "lat": 31.33, "count": 0 },
        { "lng": 118.02, "lat": 39.63, "count": 0 },
        { "lng": 113.29, "lat": 33.75, "count": 0 },
        { "lng": 114.48, "lat": 37.05, "count": 0 },
        { "lng": 116.29, "lat": 37.45, "count": 0 },
        { "lng": 116.59, "lat": 35.38, "count": 0 },
        { "lng": 112.239741, "lat": 30.335165, "count": 0 },
        { "lng": 111.3, "lat": 30.7, "count": 0 },
        { "lng": 120.06, "lat": 29.32, "count": 0 },
        { "lng": 119.92, "lat": 28.45, "count": 0 },
        { "lng": 112.44, "lat": 34.7, "count": 0 },
        { "lng": 119.57, "lat": 39.95, "count": 0 },
        { "lng": 113.16, "lat": 27.83, "count": 0 },
        { "lng": 114.48, "lat": 38.03, "count": 0 },
        { "lng": 117.67, "lat": 36.19, "count": 0 },
        { "lng": 111.69, "lat": 29.05, "count": 0 },
        { "lng": 115.48, "lat": 38.85, "count": 0 },
        { "lng": 112.91, "lat": 27.87, "count": 0 },
        { "lng": 119.64, "lat": 29.12, "count": 0 },
        { "lng": 113.09, "lat": 29.37, "count": 0 },
        { "lng": 113, "lat": 28.21, "count": 0 },
        { "lng": 118.88, "lat": 28.97, "count": 0 },
        { "lng": 116.7, "lat": 39.53, "count": 0 },
        { "lng": 115.480656, "lat": 35.23375, "count": 0 },
        { "lng": 117.27, "lat": 31.86, "count": 0 },
        { "lng": 114.31, "lat": 30.52, "count": 0 },
        { "lng": 125.03, "lat": 46.5, "count": 0 }];

        var da = [{ name: "海门", value: 9 },
        { name: "鄂尔多斯", value: 12 },
        { name: "招远", value: 12 },
        { name: "舟山", value: 12 },
        { name: "齐齐哈尔", value: 14 },
        { name: "盐城", value: 15 },
        { name: "赤峰", value: 16 },
        { name: "青岛", value: 18 },
        { name: "乳山", value: 18 },
        { name: "金昌", value: 19 },
        { name: "泉州", value: 21 },
        { name: "莱西", value: 21 },
        { name: "日照", value: 21 },
        { name: "胶南", value: 22 },
        { name: "南通", value: 23 },
        { name: "拉萨", value: 24 },
        { name: "云浮", value: 24 },
        { name: "梅州", value: 25 },
        { name: "文登", value: 25 },
        { name: "上海", value: 25 },
        { name: "攀枝花", value: 25 },
        { name: "威海", value: 25 },
        { name: "承德", value: 25 },
        { name: "厦门", value: 26 },
        { name: "汕尾", value: 26 },
        { name: "潮州", value: 26 },
        { name: "丹东", value: 27 },
        { name: "太仓", value: 27 },
        { name: "曲靖", value: 27 },
        { name: "烟台", value: 28 },
        { name: "福州", value: 29 },
        { name: "瓦房店", value: 30 },
        { name: "即墨", value: 30 },
        { name: "抚顺", value: 31 },
        { name: "玉溪", value: 31 },
        { name: "张家口", value: 31 },
        { name: "阳泉", value: 31 },
        { name: "莱州", value: 32 },
        { name: "湖州", value: 32 },
        { name: "汕头", value: 32 },
        { name: "昆山", value: 33 },
        { name: "宁波", value: 33 },
        { name: "湛江", value: 33 },
        { name: "揭阳", value: 34 },
        { name: "荣成", value: 34 },
        { name: "连云港", value: 35 },
        { name: "葫芦岛", value: 35 },
        { name: "常熟", value: 36 },
        { name: "东莞", value: 36 },
        { name: "河源", value: 36 },
        { name: "淮安", value: 36 },
        { name: "泰州", value: 36 },
        { name: "南宁", value: 37 },
        { name: "营口", value: 37 },
        { name: "惠州", value: 37 },
        { name: "江阴", value: 37 },
        { name: "蓬莱", value: 37 },
        { name: "韶关", value: 38 },
        { name: "嘉峪关", value: 38 },
        { name: "广州", value: 38 },
        { name: "延安", value: 38 },
        { name: "太原", value: 39 },
        { name: "清远", value: 39 },
        { name: "中山", value: 39 },
        { name: "昆明", value: 39 },
        { name: "寿光", value: 40 },
        { name: "盘锦", value: 40 },
        { name: "长治", value: 41 },
        { name: "深圳", value: 41 },
        { name: "珠海", value: 42 },
        { name: "宿迁", value: 43 },
        { name: "咸阳", value: 43 },
        { name: "铜川", value: 44 },
        { name: "平度", value: 44 },
        { name: "佛山", value: 44 },
        { name: "海口", value: 44 },
        { name: "江门", value: 45 },
        { name: "章丘", value: 45 },
        { name: "肇庆", value: 46 },
        { name: "大连", value: 47 },
        { name: "临汾", value: 47 },
        { name: "吴江", value: 47 },
        { name: "石嘴山", value: 49 },
        { name: "沈阳", value: 50 },
        { name: "苏州", value: 50 },
        { name: "茂名", value: 50 },
        { name: "嘉兴", value: 51 },
        { name: "长春", value: 51 },
        { name: "胶州", value: 52 },
        { name: "银川", value: 52 },
        { name: "张家港", value: 52 },
        { name: "三门峡", value: 53 },
        { name: "锦州", value: 54 },
        { name: "南昌", value: 54 },
        { name: "柳州", value: 54 },
        { name: "三亚", value: 54 },
        { name: "自贡", value: 56 },
        { name: "吉林", value: 56 },
        { name: "阳江", value: 57 },
        { name: "泸州", value: 57 },
        { name: "西宁", value: 57 },
        { name: "宜宾", value: 58 },
        { name: "呼和浩特", value: 58 },
        { name: "成都", value: 58 },
        { name: "大同", value: 58 },
        { name: "镇江", value: 59 },
        { name: "桂林", value: 59 },
        { name: "张家界", value: 59 },
        { name: "宜兴", value: 59 },
        { name: "北海", value: 60 },
        { name: "西安", value: 61 },
        { name: "金坛", value: 62 },
        { name: "东营", value: 62 },
        { name: "牡丹江", value: 63 },
        { name: "遵义", value: 63 },
        { name: "绍兴", value: 63 },
        { name: "扬州", value: 64 },
        { name: "常州", value: 64 },
        { name: "潍坊", value: 65 },
        { name: "重庆", value: 66 },
        { name: "台州", value: 67 },
        { name: "南京", value: 67 },
        { name: "滨州", value: 70 },
        { name: "贵阳", value: 71 },
        { name: "无锡", value: 71 },
        { name: "本溪", value: 71 },
        { name: "克拉玛依", value: 72 },
        { name: "渭南", value: 72 },
        { name: "马鞍山", value: 72 },
        { name: "宝鸡", value: 72 },
        { name: "焦作", value: 75 },
        { name: "句容", value: 75 },
        { name: "北京", value: 79 },
        { name: "徐州", value: 79 },
        { name: "衡水", value: 80 },
        { name: "包头", value: 80 },
        { name: "绵阳", value: 80 },
        { name: "乌鲁木齐", value: 84 },
        { name: "枣庄", value: 84 },
        { name: "杭州", value: 84 },
        { name: "淄博", value: 85 },
        { name: "鞍山", value: 86 },
        { name: "溧阳", value: 86 },
        { name: "库尔勒", value: 86 },
        { name: "安阳", value: 90 },
        { name: "开封", value: 90 },
        { name: "济南", value: 92 },
        { name: "德阳", value: 93 },
        { name: "温州", value: 95 },
        { name: "九江", value: 96 },
        { name: "邯郸", value: 98 },
        { name: "临安", value: 99 },
        { name: "兰州", value: 99 },
        { name: "沧州", value: 100 },
        { name: "临沂", value: 103 },
        { name: "南充", value: 104 },
        { name: "天津", value: 105 },
        { name: "富阳", value: 106 },
        { name: "泰安", value: 112 },
        { name: "诸暨", value: 112 },
        { name: "郑州", value: 113 },
        { name: "哈尔滨", value: 114 },
        { name: "聊城", value: 116 },
        { name: "芜湖", value: 117 },
        { name: "唐山", value: 119 },
        { name: "平顶山", value: 119 },
        { name: "邢台", value: 119 },
        { name: "德州", value: 120 },
        { name: "济宁", value: 120 },
        { name: "荆州", value: 127 },
        { name: "宜昌", value: 130 },
        { name: "义乌", value: 132 },
        { name: "丽水", value: 133 },
        { name: "洛阳", value: 134 },
        { name: "秦皇岛", value: 136 },
        { name: "株洲", value: 143 },
        { name: "石家庄", value: 147 },
        { name: "莱芜", value: 148 },
        { name: "常德", value: 152 },
        { name: "保定", value: 153 },
        { name: "湘潭", value: 154 },
        { name: "金华", value: 157 },
        { name: "岳阳", value: 169 },
        { name: "长沙", value: 175 },
        { name: "衢州", value: 177 },
        { name: "廊坊", value: 193 },
        { name: "菏泽", value: 194 },
        { name: "合肥", value: 229 },
        { name: "武汉", value: 273 },
        { name: "大庆", value: 279 }];

        for (var i = 0; i < datass.length; i++) {
            if (_self.count > 5) {
                _self.count = 0;
            }
            datass[i].lat += _self.count;
            datass[i].lng += _self.count;
            datass[i].count = da[i].value;
        }
        _self.heatmapOverlay.setDataSet({ data: datass, max: 500, min: 0 });
        var gradient = {
            0: 'rgb(102, 255, 0)',
            .5: 'rgb(255, 170, 0)',
            1: 'rgb(255, 0, 0)'
        };
        _self.heatmapOverlay.setOptions({ "gradient": gradient });
        _self.heatmapOverlay.show();
    },
    initSize: function () {
        $(".left_region").mCustomScrollbar({ setLeft: "10px" });
        $(".region").css("width", $(".region").width());
        $("#body_left").css("height", $(".main").height() - $("#main_header").outerHeight(true) - $("#body_header").outerHeight(true) - $("#main_footer").outerHeight(true));
        $(".left_region").css("height", $("#body_left").height() - $(".left_city").outerHeight(true));
        $("#body_right").css({ "height": $("#body_left").height() - 10, "left": $(".main").width() - 615 });
        $(".left_click").css({ "left": $("#body_left").outerWidth(true), "top": $("#body_left").height() / 2 + $("#body_left").offset().top });
        $(".body_legend").css({ "left": $("#body_left").outerWidth(true) + 14, "bottom": $("#main_footer").outerHeight(true) + 14 });
        _self.$bodyinnerHeight = $(".body_inner").outerHeight(true);

    },
    initJSTree: function () {
        var check = true;
        $(".treespan").on("click", function () {
            if (check) {
                $(this).parent().removeClass("regionSeclect");
                $(this).removeClass("glyphicon-chevron-up");
                $(this).addClass("glyphicon-chevron-down");
                $(this).parent().next().removeClass("treeregion_show");
                check = false;
            } else {
                $(this).parent().addClass("regionSeclect");
                $(this).removeClass("glyphicon-chevron-down");
                $(this).addClass("glyphicon-chevron-up");
                $(this).parent().next().addClass("treeregion_show");
                check = true;
            }
        });
        var data = [
            {
                "id": "",
                "text": "通州新城",
                "children":
                [
                    {
                        "id": "",
                        "text": "01片区",
                        "children": [{
                            "id": "",
                            "text": "011片区",
                            "children": []
                        }, {
                            "id": "",
                            "text": "012片区"
                        }]
                    },
                    {
                        "id": "",
                        "text": "02片区",
                        "children": [{
                            "id": "",
                            "text": "011片区",
                            "children": []
                        }, {
                            "id": "",
                            "text": "012片区"
                        }]
                    },
                    {
                        "id": "",
                        "text": "03片区",
                        "children": [{
                            "id": "",
                            "text": "011片区",
                            "children": []
                        }, {
                            "id": "",
                            "text": "012片区"
                        }]
                    }
                ]
            },
            {
                "id": "",
                "text": "新城内",
                "children":
                [
                    {
                        "id": "",
                        "text": "01片区",
                        "children": [{
                            "id": "",
                            "text": "011片区",
                            "children": []
                        }, {
                            "id": "",
                            "text": "012片区"
                        }]
                    },
                    {
                        "id": "",
                        "text": "02片区",
                        "children": [{
                            "id": "",
                            "text": "011片区",
                            "children": []
                        }, {
                            "id": "",
                            "text": "012片区"
                        }]
                    },
                    {
                        "id": "",
                        "text": "03片区",
                        "children": [{
                            "id": "",
                            "text": "011片区",
                            "children": []
                        }, {
                            "id": "",
                            "text": "012片区"
                        }]
                    }
                ]
            }
        ];
        var count = 0;
        $("#tree_tz").prev().find(".treespan").removeClass("glyphicon-chevron-down");
        $("#tree_tz").prev().find(".treespan").addClass("glyphicon-chevron-up");
        $("#tree_tz").prev().addClass("regionSeclect");
        $('#tree_tz').addClass("treeregion_show");
        tree = $('#tree_tz').on("loaded.jstree", function (e, data) {
            data.instance.open_all();
        }).jstree({
            "plugins": ["checkbox"],
            "core": {
                "animation": 0,
                'dblclick_toggle': true,
                'themes': { 'theme': "classic", 'dots': true, 'icons': false },
                'data': data,
            },
        }).on("loaded.jstree", function (e, data) {
            $("#tree_tz").mCustomScrollbar();
        });
    },
    initInnerJStree: function () {
        var check = true;
        $(".innertreespan").on("click", function () {
            if (check) {
                $(this).removeClass("glyphicon-chevron-up");
                $(this).addClass("glyphicon-chevron-down");
                $(this).parent().next().removeClass("treeregion_show");
                $(this).parent().removeClass("treeSelect");
                check = false;
            } else {
                $(this).removeClass("glyphicon-chevron-down");
                $(this).addClass("glyphicon-chevron-up");
                $(this).parent().next().addClass("treeregion_show");
                $(this).parent().addClass("treeSelect");
                check = true;
            }
        });
        var data = [
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
                "children":
                [
                    {
                        "id": "",
                        "text": "现状用地规模",
                        "children": []
                    }
                ]
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
        $("#tree_land").prev().find(".innertreespan").removeClass("glyphicon-chevron-down");
        $("#tree_land").prev().find(".innertreespan").addClass("glyphicon-chevron-up");
        $('#tree_land').addClass("treeregion_show");
        $('#tree_land').prev().addClass("treeSelect");
        $('#tree_land').on("loaded.jstree", function (e, data) {
            data.instance.open_all();
        }).jstree({
            "plugins": [""],
            "core": {
                "animation": 0,
                'dblclick_toggle': true,
                'themes': { 'theme': "classic", 'dots': true, 'icons': false },
                'data': data,
            },
        }).on("loaded.jstree", function (e, data) {
            $("#tree_land").mCustomScrollbar();
        });
    },
    initSilderBar: function () {
        var year = [1991, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];
        var position = [];
        position.push(0);
        for (var i = 1, max = year.length - 1; i < max; i++) {
            position.push(i / max * 100);
        }
        position.push(100);
        $("#sliderbar").slider({
            id: "slider_bar",
            min: 1991,
            max: 2017,
            value: "2013",
            step: 1,
            ticks: year,
            ticks_labels: year,
            ticks_positions: position,
            ticks_snap_bounds: 0,
            handle: "custom"
        });
        $("#sliderbar").on("slideStop", this.silderbar_stop);
    },
    //加载echart
    loadChart: function () {
        var myChart1 = echarts.init(document.getElementById('echart1'));
        var option1 = {
            backgroundColor: 'rgba(1, 6, 10,0.6)',
            textStyle: {
                color: "#FFFFFF",
                fontSize: 6
            },
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
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                top: 'top',
                data: ['直接访问', '邮件营销', '联盟广告'],
                textStyle: {
                    color: "#fff",
                    fontSize: 6
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        myChart1.setOption(option1);

        var myChart2 = echarts.init(document.getElementById('echart2'));
        var option2 = {
            backgroundColor: 'rgba(1, 6, 10,0.6)',
            textStyle: {
                color: "#FFFFFF",
                fontSize: 6
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                textStyle: {
                    color: "#FFFFFF",
                    fontSize: 6
                },
                data: ['2011年', '2012年']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name: '2012年',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]
        };

        myChart2.setOption(option2);

        // Schema:
        // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
        var myChart3 = echarts.init(document.getElementById('echart3'));
        var dataBJ = [
            [55, 9, 56, 0.46, 18, 6, 1],
            [25, 11, 21, 0.65, 34, 9, 2],
            [56, 7, 63, 0.3, 14, 5, 3],
            [33, 7, 29, 0.33, 16, 6, 4],
            [42, 24, 44, 0.76, 40, 16, 5],
            [82, 58, 90, 1.77, 68, 33, 6],
            [74, 49, 77, 1.46, 48, 27, 7],
            [78, 55, 80, 1.29, 59, 29, 8],
            [267, 216, 280, 4.8, 108, 64, 9],
            [185, 127, 216, 2.52, 61, 27, 10],
            [39, 19, 38, 0.57, 31, 15, 11],
            [41, 11, 40, 0.43, 21, 7, 12],
            [64, 38, 74, 1.04, 46, 22, 13],
            [108, 79, 120, 1.7, 75, 41, 14],
            [108, 63, 116, 1.48, 44, 26, 15],
            [33, 6, 29, 0.34, 13, 5, 16],
            [94, 66, 110, 1.54, 62, 31, 17],
            [186, 142, 192, 3.88, 93, 79, 18],
            [57, 31, 54, 0.96, 32, 14, 19],
            [22, 8, 17, 0.48, 23, 10, 20],
            [39, 15, 36, 0.61, 29, 13, 21],
            [94, 69, 114, 2.08, 73, 39, 22],
            [99, 73, 110, 2.43, 76, 48, 23],
            [31, 12, 30, 0.5, 32, 16, 24],
            [42, 27, 43, 1, 53, 22, 25],
            [154, 117, 157, 3.05, 92, 58, 26],
            [234, 185, 230, 4.09, 123, 69, 27],
            [160, 120, 186, 2.77, 91, 50, 28],
            [134, 96, 165, 2.76, 83, 41, 29],
            [52, 24, 60, 1.03, 50, 21, 30],
            [46, 5, 49, 0.28, 10, 6, 31]
        ];

        var dataGZ = [
            [26, 37, 27, 1.163, 27, 13, 1],
            [85, 62, 71, 1.195, 60, 8, 2],
            [78, 38, 74, 1.363, 37, 7, 3],
            [21, 21, 36, 0.634, 40, 9, 4],
            [41, 42, 46, 0.915, 81, 13, 5],
            [56, 52, 69, 1.067, 92, 16, 6],
            [64, 30, 28, 0.924, 51, 2, 7],
            [55, 48, 74, 1.236, 75, 26, 8],
            [76, 85, 113, 1.237, 114, 27, 9],
            [91, 81, 104, 1.041, 56, 40, 10],
            [84, 39, 60, 0.964, 25, 11, 11],
            [64, 51, 101, 0.862, 58, 23, 12],
            [70, 69, 120, 1.198, 65, 36, 13],
            [77, 105, 178, 2.549, 64, 16, 14],
            [109, 68, 87, 0.996, 74, 29, 15],
            [73, 68, 97, 0.905, 51, 34, 16],
            [54, 27, 47, 0.592, 53, 12, 17],
            [51, 61, 97, 0.811, 65, 19, 18],
            [91, 71, 121, 1.374, 43, 18, 19],
            [73, 102, 182, 2.787, 44, 19, 20],
            [73, 50, 76, 0.717, 31, 20, 21],
            [84, 94, 140, 2.238, 68, 18, 22],
            [93, 77, 104, 1.165, 53, 7, 23],
            [99, 130, 227, 3.97, 55, 15, 24],
            [146, 84, 139, 1.094, 40, 17, 25],
            [113, 108, 137, 1.481, 48, 15, 26],
            [81, 48, 62, 1.619, 26, 3, 27],
            [56, 48, 68, 1.336, 37, 9, 28],
            [82, 92, 174, 3.29, 0, 13, 29],
            [106, 116, 188, 3.628, 101, 16, 30],
            [118, 50, 0, 1.383, 76, 11, 31]
        ];

        var dataSH = [
            [91, 45, 125, 0.82, 34, 23, 1],
            [65, 27, 78, 0.86, 45, 29, 2],
            [83, 60, 84, 1.09, 73, 27, 3],
            [109, 81, 121, 1.28, 68, 51, 4],
            [106, 77, 114, 1.07, 55, 51, 5],
            [109, 81, 121, 1.28, 68, 51, 6],
            [106, 77, 114, 1.07, 55, 51, 7],
            [89, 65, 78, 0.86, 51, 26, 8],
            [53, 33, 47, 0.64, 50, 17, 9],
            [80, 55, 80, 1.01, 75, 24, 10],
            [117, 81, 124, 1.03, 45, 24, 11],
            [99, 71, 142, 1.1, 62, 42, 12],
            [95, 69, 130, 1.28, 74, 50, 13],
            [116, 87, 131, 1.47, 84, 40, 14],
            [108, 80, 121, 1.3, 85, 37, 15],
            [134, 83, 167, 1.16, 57, 43, 16],
            [79, 43, 107, 1.05, 59, 37, 17],
            [71, 46, 89, 0.86, 64, 25, 18],
            [97, 71, 113, 1.17, 88, 31, 19],
            [84, 57, 91, 0.85, 55, 31, 20],
            [87, 63, 101, 0.9, 56, 41, 21],
            [104, 77, 119, 1.09, 73, 48, 22],
            [87, 62, 100, 1, 72, 28, 23],
            [168, 128, 172, 1.49, 97, 56, 24],
            [65, 45, 51, 0.74, 39, 17, 25],
            [39, 24, 38, 0.61, 47, 17, 26],
            [39, 24, 39, 0.59, 50, 19, 27],
            [93, 68, 96, 1.05, 79, 29, 28],
            [188, 143, 197, 1.66, 99, 51, 29],
            [174, 131, 174, 1.55, 108, 50, 30],
            [187, 143, 201, 1.39, 89, 53, 31]
        ];

        var lineStyle = {
            normal: {
                width: 1,
                opacity: 0.5
            }
        };

        var option3 = {
            backgroundColor: 'rgba(1, 6, 10,0.6)',
            title: {
                text: '',
                left: 'center',
                textStyle: {
                    color: '#eee',
                    fontSize: 6
                }
            },
            legend: {
                bottom: 5,
                data: ['北京', '上海', '广州'],
                itemGap: 20,
                textStyle: {
                    color: '#fff',
                    fontSize: 6
                },
                selectedMode: 'single'
            },
            radar: {
                indicator: [
                    { name: 'AQI', max: 300 },
                    { name: 'PM2.5', max: 250 },
                    { name: 'PM10', max: 300 },
                    { name: 'CO', max: 5 },
                    { name: 'NO2', max: 200 },
                    { name: 'SO2', max: 100 }
                ],
                shape: 'circle',
                splitNumber: 5,
                name: {
                    textStyle: {
                        color: 'rgb(238, 197, 102)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                            'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                            'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                        ].reverse()
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(238, 197, 102, 0.5)'
                    }
                }
            },
            series: [
                {
                    name: '北京',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataBJ,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: '#F9713C'
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.1
                        }
                    }
                },
                {
                    name: '上海',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataSH,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: '#B3E4A1'
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.05
                        }
                    }
                },
                {
                    name: '广州',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataGZ,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: 'rgb(238, 197, 102)'
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.05
                        }
                    }
                }
            ]
        };
        myChart3.setOption(option3);

        var myChart4 = echarts.init(document.getElementById('echart4'));
        var option4 = {
            tooltip: {
                trigger: 'axis'
            },
            textStyle: {
                color: "#FFFFFF",
                fontSize: 6
            },
            legend: {
                textStyle: {
                    color: "#FFFFFF",
                    fontSize: 6
                },
                data: ['蒸发量', '降水量']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '水量',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} ml'
                    }
                }
            ],
            series: [
                {
                    name: '蒸发量',
                    type: 'bar',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name: '降水量',
                    type: 'bar',
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                
            ]
        };
        myChart4.setOption(option4);


        var myChart5 = echarts.init(document.getElementById('echart5'));
        var option5 = {
            backgroundColor: 'rgba(1, 6, 10,0.6)',
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            textStyle: {
                color: "#FFFFFF",
                fontSize: 6
            },
            legend: {
                textStyle: {
                    color: "#fff",
                    fontSize: 6
                },
                data: ['直接访问', '邮件营销', '联盟广告']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '邮件营销',
                    type: 'bar',
                    stack: '广告',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'bar',
                    stack: '广告',
                    data: [220, 182, 191, 234, 290, 330, 310]
                }
            ]
        };

        myChart5.setOption(option5);

        var myChart7 = echarts.init(document.getElementById('echart7'));
        var option7 = {
            backgroundColor: 'rgba(1, 6, 10,0.6)',
            textStyle: {
                color: "#FFFFFF",
                fontSize: 6
            },
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                textStyle: {
                    color: "#fff",
                    fontSize: 6
                },
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                name: "星期",
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#272C30",
                        type: "dotted"
                    }
                }
            },
            yAxis: {
                name: "访问量",
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color: "#272C30"
                    }
                }
            },
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
        myChart7.setOption(option7);

        $(".img_resize").on("click", function () {
            $(this).parent().next().toggle();
            $(this).parent().parent().height($(this).prev().outerHeight(true));
        });
    },
    addEvent: function () {
        $(".left_click").on("click", this.hideLeftTree);
        $(".region").find("input:checkbox").on("click", function () {
            if ($(this).is(":checked")) {
                if ($(this).parent().parent().next().jstree()) {
                    $(this).parent().parent().next().jstree().select_node(tree.jstree().get_node("#").children);
                }
            } else {
                if ($(this).parent().parent().next().jstree()) {
                    $(this).parent().parent().next().jstree().deselect_node(tree.jstree().get_node("#").children);
                }
            }
        });
        $(".citydiv").find("label").on("click", function () {
            if ($(this).prev().is(":checked")) {
                $(".left_city").removeClass("treeSelect");
                $(this).parent().parent().next().find(".chkdiv").find("input:checkbox").prop("checked", true);
                $(this).parent().parent().next().find(".chkdiv").find("input:checkbox").click();
            } else {
                $(".left_city").addClass("treeSelect");
                $(this).parent().parent().next().find(".chkdiv").find("input:checkbox").prop("checked", false);
                $(this).parent().parent().next().find(".chkdiv").find("input:checkbox").click();
            }
        });
        $(".inner_title").find("span").on("click", function () {
            $(".inner_body").toggle();
            var show = $(".inner_body").is(":visible");
            if (show) {
                $(".body_inner").height(_self.$bodyinnerHeight);
            } else {
                $(".body_inner").height($(".inner_title").outerHeight());
            }
        });
    },
    hideLeftTree: function () {
        if ($(".left_click").find(".leftclick_span").hasClass("glyphicon-chevron-left")) {
            $("#body_left").hide();
            $(".left_click").css("left", 0);
            $(".left_click").find(".leftclick_span").removeClass("glyphicon-chevron-left");
            $(".left_click").find(".leftclick_span").addClass("glyphicon-chevron-right");
        } else {
            $("#body_left").show();
            $(".left_click").css("left", $("#body_left").outerWidth(true));
            $(".left_click").find(".leftclick_span").removeClass("glyphicon-chevron-right");
            $(".left_click").find(".leftclick_span").addClass("glyphicon-chevron-left");
        }

    },
    silderbar_stop: function () {
        _self.count++;
        _self.loadChart();
        _self.refreshHeatMapData();
    }
}
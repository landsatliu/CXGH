$(function () {
    App.init();
});

var App = {
    //初始化
    init: function () {
        _self = this;
        _self.count = 0;
        this.initSize();
        this.initMap();

    },
    initMap: function () {
        require(["esri/map", "esri/geometry/Point", "esri/SpatialReference", "esri/layers/FeatureLayer", "esri/layers/ArcGISDynamicMapServiceLayer", "esri/symbols/SimpleFillSymbol",
            "esri/renderers/ClassBreaksRenderer", "esri/Color", "dojo/domReady!"], function (Map, Point, SpatialReference, FeatureLayer, ArcGISDynamicMapServiceLayer, SimpleFillSymbol, ClassBreaksRenderer, Color) {
                var layer = new ArcGISDynamicMapServiceLayer(DynamicLayerURL);
                var map = new Map("mainmap", {
                    logo: false
                });
                map.addLayer(layer);
                _self.map = map;
                _self.initSilderBar();
                _self.initJSTree();
                //社会人文
                _self.initInnerJStree("tree_popu", populationData, false);
                _self.initInnerJStree("tree_public", puclicServiceData, false);
                _self.initInnerJStree("tree_traffic", trafficData, false);
                _self.initInnerJStree("tree_live", liveData, false);
                _self.initInnerJStree("tree_safe", safeData, false);

                //资源
                _self.initInnerJStree("tree_land", landRes, true);
                _self.initInnerJStree('tree_water', waterRes, false);
                _self.initInnerJStree('tree_energy', energyRes, false);
                //生态环境
                _self.initInnerJStree("tree_envi", enviData, false);
                _self.initInnerJStree('tree_space', spaceData, false);
                _self.initInnerJStree('tree_water_envi', waterEnviData, false);
                _self.initInnerJStree('tree_green', greenData, false);
                _self.initInnerJStree('tree_waste_water', wasteWaterData, false);
                _self.initInnerJStree('tree_garbage', garbageData, false);

                _self.addEvent();
                $(".h_social:eq(1)").click();
            });
    },
    initHeatMap: function () {
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
                "children": [
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
                "text": "新城外",
                "children":
                [
                    {
                        "id": "",
                        "text": "潞城镇",
                        "children": [{
                            "id": "",
                            "text": "大豆各庄村",
                            "children": []
                        }, {
                                "id": "",
                                "text": "辛安屯村"
                            }, {
                                "id": "",
                                "text": "武疃村"
                            }, {
                                "id": "",
                                "text": "岔道村"
                            }, {
                                "id": "",
                                "text": "李疃村"
                            }]
                    },
                    {
                        "id": "",
                        "text": "台湖镇",
                        "children": [{
                            "id": "",
                            "text": "尖垡村",
                            "children": []
                        }, {
                                "id": "",
                                "text": "孟庄村"
                            }, {
                                "id": "",
                                "text": "郑庄村"
                            }, {
                                "id": "",
                                "text": "铺头村"
                            }, {
                                "id": "",
                                "text": "白庄村"
                            }]
                    },
                    {
                        "id": "",
                        "text": "漷县镇",
                        "children": [{
                            "id": "",
                            "text": "小香仪村",
                            "children": []
                        }, {
                                "id": "",
                                "text": "漷县村"
                            }, {
                                "id": "",
                                "text": "翟各庄村"
                            }, {
                                "id": "",
                                "text": "马务村"
                            }, {
                                "id": "",
                                "text": "东鲁村"
                            }]
                    }, {
                        "id": "",
                        "text": "梨园镇",
                        "children": [{
                            "id": "",
                            "text": "大马庄村",
                            "children": []
                        }, {
                                "id": "",
                                "text": "东总屯村"
                            }, {
                                "id": "",
                                "text": "李老公庄村"
                            }, {
                                "id": "",
                                "text": "东小马庄村"
                            }, {
                                "id": "",
                                "text": "半壁店村"
                            }]
                    }, {
                        "id": "",
                        "text": "马驹桥镇",
                        "children": [{
                            "id": "",
                            "text": "北门口村",
                            "children": []
                        }, {
                                "id": "",
                                "text": "柴务村"
                            }, {
                                "id": "",
                                "text": "小杜社村"
                            }, {
                                "id": "",
                                "text": "小周易村"
                            }, {
                                "id": "",
                                "text": "团瓢庄村"
                            }]
                    }, {
                        "id": "",
                        "text": "宋庄镇",
                        "children": [{
                            "id": "",
                            "text": "宋庄镇",
                            "children": []
                        }, {
                                "id": "",
                                "text": "双埠头村"
                            }, {
                                "id": "",
                                "text": "疃里村"
                            }, {
                                "id": "",
                                "text": "大兴庄村"
                            }, {
                                "id": "",
                                "text": "西赵村"
                            }]
                    }, {
                        "id": "",
                        "text": "西集镇",
                        "children": [{
                            "id": "",
                            "text": "西集村",
                            "children": []
                        }, {
                                "id": "",
                                "text": "车屯村"
                            }, {
                                "id": "",
                                "text": "后寨府村"
                            }, {
                                "id": "",
                                "text": "胡庄村"
                            }, {
                                "id": "",
                                "text": "岳上村"
                            }]
                    }, {
                        "id": "",
                        "text": "永乐店镇",
                        "children": [{
                            "id": "",
                            "text": "225街坊",
                            "children": []
                        }, {
                                "id": "",
                                "text": "永顺村"
                            }, {
                                "id": "",
                                "text": "228街坊"
                            }, {
                                "id": "",
                                "text": "新建村"
                            }, {
                                "id": "",
                                "text": "226街坊"
                            }]
                    }, {
                        "id": "",
                        "text": "永顺镇",
                        "children": [{
                            "id": "",
                            "text": "225街坊",
                            "children": []
                        }, {
                                "id": "",
                                "text": "永顺村"
                            }, {
                                "id": "",
                                "text": "228街坊"
                            }, {
                                "id": "",
                                "text": "新建村"
                            }, {
                                "id": "",
                                "text": "226街坊"
                            }]
                    }, {
                        "id": "",
                        "text": "于家务",
                        "children": [{
                            "id": "",
                            "text": "225街坊",
                            "children": []
                        }, {
                                "id": "",
                                "text": "永顺村"
                            }, {
                                "id": "",
                                "text": "228街坊"
                            }, {
                                "id": "",
                                "text": "新建村"
                            }, {
                                "id": "",
                                "text": "226街坊"
                            }]
                    }, {
                        "id": "",
                        "text": "张家湾镇",
                        "children": [{
                            "id": "",
                            "text": "225街坊",
                            "children": []
                        }, {
                                "id": "",
                                "text": "永顺村"
                            }, {
                                "id": "",
                                "text": "228街坊"
                            }, {
                                "id": "",
                                "text": "新建村"
                            }, {
                                "id": "",
                                "text": "226街坊"
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

            //选中第一个区县
            $(".region").find("input:checkbox")[0].click();
        }).on("changed.jstree", function (e, data) {


        });
    },
    initInnerJStree: function (id, data, show) {
        var data1 = [
            {
                "id": "",
                "text": "城乡用地规模",
                "children":
                [
                    {
                        "id": "",
                        "text": "现状用地规模",
                        // "state": { "selected": true },
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
        if (show) {
            $("#" + id).prev().find(".innertreespan").removeClass("glyphicon-chevron-down");
            $("#" + id).prev().find(".innertreespan").addClass("glyphicon-chevron-up");
            $('#' + id).addClass("treeregion_show");
            $('#' + id).prev().addClass("treeSelect");
        }
        $('#' + id).jstree({
            "plugins": [""],
            "core": {
                "animation": 0,
                'dblclick_toggle': true,
                'themes': { 'theme': "classic", 'dots': true, 'icons': false },
                'data': data,
            },
        }).on("loaded.jstree", function (e, data) {
            $("#" + id).mCustomScrollbar();
            if (show) {
                data.instance.open_all();
                var inst = data.instance;
                var obj = inst.get_node(e.target.firstChild.firstChild.firstChild.firstChild);
                inst.select_node(obj.children[0]);
            }
        }).on("changed.jstree", function (e, data) {
            if (data.node) {
                _self.currentMenuname = data.node.text;
                _self.changeEcharts(data.node.text);
            }
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
            value: "2005",
            step: 1,
            ticks: year,
            ticks_labels: year,
            ticks_positions: position,
            ticks_snap_bounds: 0,
            handle: "custom"
        });
        $silderbar = $("#sliderbar");
        $silderbar.on("change", this.silderbar_stop);
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
        $(".img_resize").on("click", function () {
            $(this).parent().next().toggle();
            $(this).parent().parent().height($(this).prev().outerHeight(true));
        });
        var check = true;
        $(".innertreespan").on("click", function () {
            if ($(this).hasClass('glyphicon-chevron-up')) {
                check = true;
            } else {
                check = false;
            }
            if (check) {
                $(this).removeClass("glyphicon-chevron-up");
                $(this).addClass("glyphicon-chevron-down");
                $(this).parent().siblings().find('span').addClass("glyphicon-chevron-down");
                $(this).parent().siblings().find('span').removeClass("glyphicon-chevron-up");
                $(this).parent().next().removeClass("treeregion_show");
                $(this).parent().removeClass("treeSelect");
                check = false;
            } else {
                $(this).removeClass("glyphicon-chevron-down");
                $(this).addClass("glyphicon-chevron-up");
                $(this).parent().siblings().find('span').removeClass("glyphicon-chevron-up");
                $(this).parent().siblings().find('span').addClass("glyphicon-chevron-down");
                $(this).parent().next().siblings().removeClass("treeregion_show");
                $(this).parent().next().addClass("treeregion_show");
                $(this).parent().addClass("treeSelect");
                $(this).parent().siblings().removeClass("treeSelect");
                check = true;
            }
        });

        //切换社会人文、资源、生态环境、经济等
        $('.h_social').on('click', function () {
            $(this).addClass('h_social_selectd');
            $(this).siblings().removeClass('h_social_selectd');
            $('.body_inner').show();
            switch ($(this).find('span')[0].innerHTML) {
                case "社会人文":
                    changeVisible(['block', 'none', 'none', 'none', 'none']);
                    break;
                case "资源":
                    changeVisible(['none', 'block', 'none', 'none', 'none']);
                    break;
                case "生态环境":
                    changeVisible(['none', 'none', 'block', 'none', 'none']);
                    break;
                case "经济":
                    changeVisible(['none', 'none', 'none', 'none', 'none']);
                    $('.body_inner').hide();
                    _self.map.setMapStyle('blue_night');
                    break;
                case "预留板块":
                    changeVisible(['none', 'none', 'none', 'none', 'none']);
                    $('.body_inner').hide();
                    break;
                default:
                    break;
            }
            function changeVisible(array) {
                $(".inner_social")[0].style.display = array[0];
                $(".inner_resourse")[0].style.display = array[1];
                $(".inner_environment")[0].style.display = array[2];
                $(".inner_economy")[0].style.display = array[3];
                $(".inner_reserve")[0].style.display = array[4];
            }
        });
        var playCount = 0;
        //自动播放
        $(".footplay").on("click", function () {
            require(["esri/layers/FeatureLayer", "esri/symbols/SimpleFillSymbol",
                "esri/renderers/ClassBreaksRenderer", "esri/Color"], function (FeatureLayer, SimpleFillSymbol, ClassBreaksRenderer, Color) {
                    var endyear = $("#sliderbar").slider("getAttribute", "max");
                    var featureLayer = new FeatureLayer(featurelayerURL, {
                        mode: FeatureLayer.MODE_SNAPSHOT,
                        outFields: ["*"]
                    });
                    _self.map.addLayer(featureLayer);
                    var symbol = new SimpleFillSymbol();
                    symbol.setColor(new Color([150, 150, 150, 0.5]));
                    var autoplay = setInterval(function () {
                        var startyear = parseFloat($("#sliderbar").slider("getValue"));
                        console.log(startyear);

                        var renderer = new ClassBreaksRenderer(symbol, "Y" + startyear);
                        renderer.addBreak(0, 2300, new SimpleFillSymbol().setColor(new Color([56, 168, 0])));
                        renderer.addBreak(2300, 4000, new SimpleFillSymbol().setColor(new Color([139, 209, 0])));
                        renderer.addBreak(4000, 6000, new SimpleFillSymbol().setColor(new Color([255, 255, 0])));
                        renderer.addBreak(6000, 10000, new SimpleFillSymbol().setColor(new Color([255, 128, 0])));
                        renderer.addBreak(10000, Infinity, new SimpleFillSymbol().setColor(new Color([255, 0, 0])));
                        featureLayer.setRenderer(renderer);
                        featureLayer.refresh();

                        if (startyear >= endyear) {
                            clearInterval(autoplay);
                            _self.map.removeLayer(featureLayer);
                            console.log(startyear, endyear);
                            $(".footplay").find("span").removeClass("glyphicon-pause");
                            $(".footplay").find("span").addClass("glyphicon-play");
                            playCount = 0;
                        }
                        $("#sliderbar").slider('setValue', startyear + 1, false, true);
                    }, 2000);

                    if (playCount) {
                        $(".footplay").find("span").removeClass("glyphicon-pause");
                        $(".footplay").find("span").addClass("glyphicon-play");
                        playCount = 0;
                    } else {
                        $(".footplay").find("span").removeClass("glyphicon-play");
                        $(".footplay").find("span").addClass("glyphicon-pause");
                        playCount = 1;
                    }
                });
        })
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
    silderbar_stop: function (event) {
        console.log(event.value);
        _self.changeEcharts(_self.currentMenuname);
        _self.count++;
        // _self.refreshHeatMapData();
    },
    changeEcharts: function (menuname) {
        var year = $silderbar.slider("getValue");
        switch (menuname) {
            case "户籍人口":
                _self.setEchartsVisble(['市户籍人口占比', '区县户籍人口占比', '区县新城户籍人口', '区县户籍人口增减情况', '区县户籍人口变化情况', '区县户籍人口密度分布', '历年户籍人口变化趋势'], ['inline-table', 'inline-table', 'inline-table', 'inline-table', 'inline-table', 'inline-table', 'inline-table']);
                householdPopulation(year);
                // _self.initHeatMap();
                _self.heatMap();
                break;
            case "现状用地规模":
                _self.setEchartsVisble(['区县现状用地规模占比', '区县现状城市建设用地结构', '区县现状建设用地扩张雷达分析', '乡镇现状用地规模', '乡镇现状用地结构', '乡镇居住产业用地分布', '区县历年现状用地规模变化趋势',], ['inline-table', 'inline-table', 'inline-table', 'inline-table', 'inline-table', 'inline-table', 'inline-table']);
                currentLandUse(year);
                break;
            case "规划用地规模":
                _self.setEchartsVisble(['土地使用规划平衡表', '建设用地规划平衡表', '新城规划建设用地平衡表'], ['inline-table', 'inline-table', 'inline-table', 'none', 'none', 'none', 'none']);
                planLandUse(year);
                break;
            case "土地用途分区":
                _self.setEchartsVisble(['土地使用规划平衡表', '建设用地规划平衡表', '新城规划建设用地平衡表'], ['none', 'none', 'none', 'none', 'none', 'none', 'none']);
                break;
            case "用地资源变化":
                _self.setEchartsVisble(['土地使用规划平衡表', '建设用地规划平衡表', '新城规划建设用地平衡表'], ['none', 'none', 'none', 'none', 'none', 'none', 'none']);
                break;
            case "平原地区开发强度":
                _self.setEchartsVisble(['平原地区开发强度', '城乡建设用地', '行政区域用地面积', '建筑规模', '平均容积率', '新城内外建设用地分布', '历年平原地区开发强度变化趋势'], ['inline-table', 'inline-table', 'inline-table', 'inline-table', 'inline-table', 'inline-table', 'inline-table']);
                PlainAreaDevstrength(year);
                break;

            default:
                break;
        }
    },
    //设置echarts的显隐及名称
    setEchartsVisble: function (title, display) {
        var $divEcharts = $(".div_echart");
        for (var i = 0; i < 6; i++) {
            $divEcharts[i].style.display = display[i];
            $($divEcharts.find('span')[i]).text(title[i]);
        }
        $(".div_echart_lg")[0].style.display = display[6];
    },

    heatMap: function () {
        require(["esri/layers/FeatureLayer", "esri/Color", "esri/renderers/HeatmapRenderer",], function (FeatureLayer, Color, HeatmapRenderer) {
            var serviceURL = featurelayerURL;
            var heatmapFeatureLayerOptions = {
                mode: FeatureLayer.MODE_SNAPSHOT,
                outFields: ["*"]
            };

            var heatmapFeatureLayer = new FeatureLayer(serviceURL, heatmapFeatureLayerOptions);
            var heatmapRenderer = new HeatmapRenderer({
                colors: ["rgba(0, 0, 255, 0)", "rgb(0, 0, 20)", "rgb(255, 0, 255)", "rgb(255, 0, 0)"],
                blurRadius: 12,
                field: "value"
            });
            heatmapFeatureLayer.setRenderer(heatmapRenderer);
            _self.map.addLayer(heatmapFeatureLayer);
            heatmapFeatureLayer.refresh();
            console.log("heatmap");
        });
    }
}
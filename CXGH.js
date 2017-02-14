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
                var layer = new ArcGISDynamicMapServiceLayer(DynamicLayerURL, {
                    id: 'agsDynclayer'
                });
                var map = new Map("mainmap", {
                    logo: false
                });
                map.addLayer(layer);
                _self.map = map;
                _self.heatMapLayer = new FeatureLayer(pointlayerURL, {
                    mode: FeatureLayer.MODE_SNAPSHOT,
                    outFields: ["*"],
                    id: "heatmap"
                });
                _self.currentLandLayer = new FeatureLayer(featurelayerURL, {
                    mode: FeatureLayer.MODE_SNAPSHOT,
                    outFields: ["*"],
                    id: "currentland"
                });
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
    
    initSize: function () {
        // $(".left_region").mCustomScrollbar({ setLeft: "10px" });
        // $(".region").css("width", $(".region").width());
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
                _self.closeAutoPlay("现状用地规模");
                _self.closeAutoPlay("户籍人口");
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
        _self.clAutolayer = [];

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
        _self.autoPlay = false;
        //自动播放
        $(".footplay").on("click", function () {
            switch (_self.currentMenuname) {
                case "户籍人口":
                    if (_self.autoPlay) {
                        _self.closeAutoPlay("户籍人口");
                    } else {
                        _self.heatMap();
                    }
                    break;
                case "现状用地规模":
                    if (_self.autoPlay) {
                        _self.closeAutoPlay("现状用地规模");
                    } else {
                        _self.currentLandAutoPlay();
                    }
                    break;
                default:
                    break;
            }
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
        _self.changeEcharts(_self.currentMenuname);
        _self.count++;
    },
    changeEcharts: function (menuname) {
        var year = $silderbar.slider("getValue");

        if (menuname != "现状用地规模") {
            _self.currentLandLayer.setVisibility(false);
        }
        if (menuname != "户籍人口") {
            if (_self.heatMapLayer) {
                _self.heatMapLayer.setVisibility(false);
            }
        }
        switch (menuname) {
            case "户籍人口":
                _self.setEchartsVisble(['市户籍人口占比', '区县户籍人口占比', '区县新城户籍人口', '区县户籍人口增减情况', '区县户籍人口变化情况', '区县户籍人口密度分布', '历年户籍人口变化趋势'], ['inline-table', 'inline-table', 'inline-table', 'inline-table', 'inline-table', 'inline-table', 'inline-table']);
                householdPopulation(year);
                _self.heatMap(year);
                break;
            case "常住人口":
                break;
            case "现状用地规模":
                _self.setEchartsVisble(['区县现状用地规模占比', '区县现状城市建设用地结构', '区县现状建设用地扩张雷达分析', '乡镇现状用地规模', '乡镇现状用地结构', '乡镇居住产业用地分布', '区县历年现状用地规模变化趋势',], ['inline-table', 'inline-table', 'inline-table', 'inline-table', 'inline-table', 'inline-table', 'inline-table']);
                currentLandUse(year);
                _self.currentLandAutoPlay(year);
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

    heatMap: function (year) {
        require(["esri/layers/FeatureLayer", "esri/Color", "esri/renderers/HeatmapRenderer"], function (FeatureLayer, Color, HeatmapRenderer) {
            if (typeof (_self.map.getLayer(_self.heatMapLayer.id)) == "undefined") {
                _self.map.addLayer(_self.heatMapLayer);
            }
            _self.heatMapLayer.setVisibility(true);
            if (year) {
                var heatmapRenderer = new HeatmapRenderer({
                    colorStops: [
                        { ratio: 0, color: "rgba(102, 255, 0,0)" },
                        { ratio: 0.3, color: "rgb(102, 255, 0)" },
                        { ratio: 0.6, color: "rgb(255, 170, 0)" },
                        { ratio: 1, color: "rgb(255, 0, 0)" }
                    ],
                    blurRadius: 6,
                    field: "Y" + year,
                    maxPixelIntensity: 35000,
                    minPixelIntensity: 2000
                });
                _self.heatMapLayer.setRenderer(heatmapRenderer);
                _self.heatMapLayer.redraw();
            } else {
                var endyear = $("#sliderbar").slider("getAttribute", "max");
                _self.heatMapAutoplay = setInterval(function () {
                    var startyear = parseFloat($("#sliderbar").slider("getValue"));
                    var heatlayer = new FeatureLayer(pointlayerURL, {
                        mode: FeatureLayer.MODE_SNAPSHOT,
                        outFields: ["*"]
                    });
                    var heatmapRenderer = new HeatmapRenderer({
                        colorStops: [
                            { ratio: 0, color: "rgba(102, 255, 0,0)" },
                            { ratio: 0.3, color: "rgb(102, 255, 0)" },
                            { ratio: 0.6, color: "rgb(255, 170, 0)" },
                            { ratio: 1, color: "rgb(255, 0, 0)" }
                        ],
                        blurRadius: 6,
                        field: "Y" + startyear,
                        maxPixelIntensity: 35000,
                        minPixelIntensity: 2000
                    });
                    _self.heatMapLayer.setRenderer(heatmapRenderer);
                    _self.heatMapLayer.redraw();

                    if (startyear >= endyear) {
                        clearInterval(_self.heatMapAutoplay);
                        $(".footplay").find("span").removeClass("glyphicon-pause");
                        $(".footplay").find("span").addClass("glyphicon-play");
                        $(".footplay").removeClass("autoplay");
                        _self.autoPlay = false;
                    }
                    $("#sliderbar").slider('setValue', startyear + 1, false, true);
                }, 2000);
                if (_self.autoPlay) {
                    $(".footplay").find("span").removeClass("glyphicon-pause");
                    $(".footplay").find("span").addClass("glyphicon-play");
                    $(".footplay").removeClass("autoplay");
                    _self.autoPlay = false;
                } else {
                    $(".footplay").find("span").removeClass("glyphicon-play");
                    $(".footplay").find("span").addClass("glyphicon-pause");
                    $(".footplay").addClass("autoplay");
                    _self.autoPlay = true;
                }
            }

        });
    },
    //现状用地自动播放
    currentLandAutoPlay: function (year) {
        require(["esri/layers/FeatureLayer", "esri/symbols/SimpleFillSymbol",
            "esri/renderers/ClassBreaksRenderer", "esri/Color"], function (FeatureLayer, SimpleFillSymbol, ClassBreaksRenderer, Color) {
                var endyear = $("#sliderbar").slider("getAttribute", "max");
                var symbol = new SimpleFillSymbol();
                symbol.setColor(new Color("red"));

                if (typeof (_self.map.getLayer(_self.currentLandLayer.id)) == "undefined") {
                    _self.map.addLayer(_self.currentLandLayer);
                }
                _self.currentLandLayer.setVisibility(true);
                if (year) {
                    var renderer = new ClassBreaksRenderer(symbol, "Y" + year);
                    renderer.addBreak(0, 2300, new SimpleFillSymbol().setColor(new Color([56, 168, 0])));
                    renderer.addBreak(2300, 4000, new SimpleFillSymbol().setColor(new Color([139, 209, 0])));
                    renderer.addBreak(4000, 6000, new SimpleFillSymbol().setColor(new Color([255, 255, 0])));
                    renderer.addBreak(6000, 10000, new SimpleFillSymbol().setColor(new Color([255, 128, 0])));
                    renderer.addBreak(10000, Infinity, new SimpleFillSymbol().setColor(new Color([255, 0, 0])));
                    _self.currentLandLayer.setRenderer(renderer);
                    _self.currentLandLayer.redraw();
                } else {
                    _self.currentLandAutoplay = setInterval(function () {
                        var startyear = parseFloat($("#sliderbar").slider("getValue"));
                        var renderer = new ClassBreaksRenderer(symbol, "Y" + startyear);
                        renderer.addBreak(0, 2300, new SimpleFillSymbol().setColor(new Color([56, 168, 0])));
                        renderer.addBreak(2300, 4000, new SimpleFillSymbol().setColor(new Color([139, 209, 0])));
                        renderer.addBreak(4000, 6000, new SimpleFillSymbol().setColor(new Color([255, 255, 0])));
                        renderer.addBreak(6000, 10000, new SimpleFillSymbol().setColor(new Color([255, 128, 0])));
                        renderer.addBreak(10000, Infinity, new SimpleFillSymbol().setColor(new Color([255, 0, 0])));
                        _self.currentLandLayer.setRenderer(renderer);
                        _self.currentLandLayer.redraw();

                        if (startyear >= endyear) {
                            clearInterval(_self.currentLandAutoplay);
                            $(".footplay").find("span").removeClass("glyphicon-pause");
                            $(".footplay").find("span").addClass("glyphicon-play");
                            $(".footplay").removeClass("autoplay");
                            _self.autoPlay = false;
                        }
                        $("#sliderbar").slider('setValue', startyear + 1, false, true);
                    }, 2000);
                    if (_self.autoPlay) {
                        $(".footplay").find("span").removeClass("glyphicon-pause");
                        $(".footplay").find("span").addClass("glyphicon-play");
                        $(".footplay").removeClass("autoplay");
                        _self.autoPlay = false;
                    } else {
                        $(".footplay").find("span").removeClass("glyphicon-play");
                        $(".footplay").find("span").addClass("glyphicon-pause");
                        $(".footplay").addClass("autoplay");
                        _self.autoPlay = true;
                    }
                }

            })
    },
    //关闭自动播放
    closeAutoPlay: function (name) {
        switch (name) {
            case "户籍人口":
                if (_self.heatMapAutoplay) {
                    clearInterval(_self.heatMapAutoplay);
                    $(".footplay").find("span").removeClass("glyphicon-pause");
                    $(".footplay").find("span").addClass("glyphicon-play");
                    $(".footplay").removeClass("autoplay");
                    _self.autoPlay = false;
                }
                break;
            case "现状用地规模":
                if (_self.currentLandAutoplay) {
                    clearInterval(_self.currentLandAutoplay);
                    $(".footplay").find("span").removeClass("glyphicon-pause");
                    $(".footplay").find("span").addClass("glyphicon-play");
                    $(".footplay").removeClass("autoplay");
                    _self.autoPlay = false;
                }
                break;
            default:
                break;
        }
    }
}
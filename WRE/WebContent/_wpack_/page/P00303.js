/*amd /page/P00303.xml 25526 73f0b6c6be6e46fac34169b39ddd115e0139d1f04f5f349083e89a3cea8f061f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}},{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

scwin.onpageload = function () {
    scwin.importWidget();
    $(".ui_widget").bind("touchend", function (e) { e.preventDefault() });
};
/**
 * Widget 기본 배치
 */
scwin.initWidget = function () {
    scwin.addWidget("01", 0, 0);
    scwin.addWidget("02", 1, 0);
    scwin.addWidget("03", 2, 0);
    scwin.addWidget("04", 0, 1);
    scwin.addWidget("05", 1, 1);
    scwin.addWidget("06", 2, 1);
};
/**
 * Widget 추가
 */
scwin.addWidget = function (type, x, y) {
    var wTitle, wTitleClass = "", wSrc, wWidth = 1, wHeight = 1, wPath = "/page/", wId;

    var _toDay = $p.getCurrentServerDate();
    var _day = _toDay.substring(0, 4) + "." + _toDay.substring(4, 6) + "." + _toDay.substring(6, 8);
    // 입력에 따른 Widget 배치
    switch (type) {
        case "01":
            wTitle = "캘린더"
            wSrc = wPath + "P00303S01.xml";
            break;
        case "02":
            wTitle = "상담업무";
            wSrc = wPath + "P00303S02.xml";
            break;
        case "03":
            wTitle = "금융";
            wSrc = wPath + "P00303S03.xml";
            break;
        case "04":
            wTitle = "공지사항";
            wSrc = wPath + "P00303S04.xml";
            break;
        case "05":
            wTitle = "고객센터";
            wSrc = wPath + "P00303S05.xml";
            break;
        case "06":
            wTitle = "기기 유형별 조회수";
            wSrc = wPath + "P00303S06.xml";
            break;
        default: return;
    }
    // Widget ID 생성
    wId = "W" + type;
    // 이미 사용중인 ID인 경우 (0,0) 좌표로 이동
    if (ui_widget.getWidgetById(wId)) {
        ui_widget.moveWidget(wId, 0, 0);
        return;
    }

    // Widget 생성 옵션
    var opt = {
        id: wId,
        src: wSrc,
        title: wTitle,
        titleClass: wTitleClass,
        x: x,
        y: y,
        scope: true,
        unitWidth: wWidth,
        unitHeight: wHeight
    };
    // Widget 생성
    ui_widget.addWidgets(opt);

};

/**
 * Widget 추가 selectbox의 onviewchange 이벤트 함수
 */
scwin.selWidget_onviewchange = function (info) {
    var label = selWidget.getItemArray()[selWidget.getSelectedIndex()].label;
    var _widgetInfo = ui_widget.exportWidgets();
    var arr0 = [0, 1, 2];
    var arr1 = [0, 1, 2];
    var x = 0, y = 0;
    this.setValue("");
    // WidgetContainer의 빈 좌표 탐색
    for (var i = 0; i < _widgetInfo.length; i++) {
        if (_widgetInfo[i].y == 0) {
            for (var j = 0; j < arr0.length; j++) {
                if (arr0[j] == _widgetInfo[i].x) {
                    arr0.splice(j, 1)
                }
            }
        } else {
            for (var j = 0; j < arr1.length; j++) {
                if (arr1[j] == _widgetInfo[i].x) {
                    arr1.splice(j, 1)
                }
            }
        }

    }
    // 좌표 저장
    if (arr0.length > 0){
        y = 0;
        x = arr0[0];
    } 
    else if (arr1.length > 0){
        y = 1;
        x = arr1[0];
    }
    // Widget 추가
    scwin.addWidget(info.newValue, x, y);
};

/**
 * Widget 정보 저장
 */
scwin.btnWidgetSave_onclick = function (e) {
    var _widgetInfo = JSON.stringify(ui_widget.exportWidgets());
    $p.local.setItem("P00303", _widgetInfo);

    alert("저장 하였습니다.");
};

/**
 * Widget 정보 불러오기 및 설정
 */
scwin.importWidget = function (e) {
    var _widgetInfo = JSON.parse($p.local.getItem("P00303"));
    if (_widgetInfo) {
        ui_widget.importWidgets(_widgetInfo, true);
    } else {
        scwin.initWidget();
    }
};

/**
 * Widget 정보 삭제 및 초기화
 */
scwin.btnInitWidget_onclick = function (e) {
    $p.local.removeItem("P00303");

    ui_widget.removeWidgetsAll();

    scwin.initWidget();
};

}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.P00303.sub_contents .w2widgetContainer{flex:1}.P00303 .w2widget{color:#333;background:#fff;border-radius:10px;box-shadow:0 3px 10px rgb(0 0 0 / 10%);border:1px solid #c2cdd3}.P00303 .w2widget_icon{display:none;background:0 0}.P00303 .w2widget_title{height:50px;display:flex;align-items:center;padding:0 15px 0 20px;background:#fff;border-bottom:0}.P00303 .w2widget_title_text{font-size:1.7rem;font-weight:600;color:#333;line-height:unset}.P00303 .w2widget_title_buttons,.P00303 .w2widget_title_buttons_accessibility{display:flex;position:relative;top:0;right:0}.P00303 .w2widget_content{position:relative;top:0;padding:10px 20px;height:calc(100% - 50px);overflow:auto;box-sizing:border-box}.P00303 .w2widget .w2widget_title.input_cal_bg{background:#fff}.P00303 .w2widget_title_buttons>div{height:16px}.P00303 .w2widget_btnFix{height:16px;background:url(/frame/images/widget_pin.png) center center no-repeat}.P00303 .w2widget_fixed .w2widget_btnFix{background:url(/frame/images/widget_pin_on.png) center center no-repeat}.P00303 .w2widget_btnMinimize{height:5px;background:url(/frame/images/widget_under.png) center center no-repeat;margin-left:10px!important}.P00303 .w2widget_btnMaximize{background:url(/frame/images/widget_plus.png) center center no-repeat;margin-left:10px!important}.P00303 .w2widget_btnClose{background:url(/frame/images/widget_close.png) center center no-repeat;margin-left:10px!important}.P00303 .w2widget_content .w2selectbox .w2selectbox_col_button:after{border-top:1px solid #5a5a5a;border-right:1px solid #5a5a5a}.P00303 .w2widget_content .w2calendar_selectbox_month_native,.P00303 .w2widget_content .w2calendar_selectbox_year_native{color:#000}.P00303 .wd_select{height:26px;border:1px solid #ced4da;border-radius:3px;float:right}.P00303 .wd_select.w2table_sb{border:1px solid #ddd!important}.P00303 .wd_select.w2selectbox{border-radius:3px;overflow:hidden}.P00303 .wd_select.w2selectbox .w2selectbox_col_label{color:#fff;border:0}.P00303 .wd_select.w2selectbox .w2selectbox_col_button{width:24px;color:#fff;border:0;background:#646464 url(/frame/images/ico_selectarrow_white.png) no-repeat center center;border-radius:0 3px 3px 0}.P00303 .wd_select.w2selectbox .w2selectbox_label{padding-top:0;height:26px;line-height:26px}.P00303 .wd_select.w2selectbox .w2selectbox_col_button:after{display:none;border-top:1px solid #fff;border-right:1px solid #fff}.P00303 .w2widget_content .fc-day-grid-container.fc-scroller{height:205px!important}.P00303 .widget_cal,.widget_cal table{font-family:Roboto,\'Noto Sans KR\',Malgun Gothic,Verdana,sans-serif;font-weight:500}.P00303 .widget_cal table{box-sizing:border-box}.P00303 .widget_cal th{height:30px;line-height:28px;background:#fff;color:#56606b;font-size:1.4rem}.P00303 .widget_cal .fc-toolbar.fc-header-toolbar{margin-bottom:5px}.P00303 .widget_cal .fc-toolbar h2{font-size:2rem;font-weight:400;color:#2b64ce;line-height:1.2}.P00303 .widget_cal .fc-toolbar{box-sizing:border-box;position:relative}.P00303 .widget_cal .fc-today-button{display:none}.P00303 .widget_cal .fc-toolbar .fc-button-group button{padding:0;width:24px;height:24px;color:#a8a8a8;font-size:1.2rem;text-shadow:none;background:#f5f5f5;border-color:#f5f5f5;border-radius:3px;box-shadow:none}.P00303 .widget_cal .fc-button-group>:not(first-child){margin-left:3px}.P00303 .widget_cal .fc-toolbar .fc-widget-header{margin-right:0!important}.P00303 .widget_cal .fc-toolbar .fc-icon{height:24px}.P00303 .widget_cal .fc-toolbar .fc-icon-left-single-arrow:after{content:"";display:block;top:7px;left:2px;width:6px;height:6px;border-top:2px solid #b2b2b2;border-left:2px solid #b2b2b2;transform:rotate(315deg)}.P00303 .widget_cal .fc-toolbar .fc-icon-right-single-arrow:after{content:"";display:block;top:7px;left:-2px;width:6px;height:6px;border-bottom:2px solid #b2b2b2;border-right:2px solid #b2b2b2;transform:rotate(315deg)}.P00303 .widget_cal.fc-unthemed .fc-divider,.P00303 .widget_cal.fc-unthemed .fc-popover,.P00303 .widget_cal.fc-unthemed th,.P00303 .widget_cal.fc-unthemed thead,.widget_cal.fc-unthemed .fc-content,.widget_cal.fc-unthemed .fc-list-heading td,.widget_cal.fc-unthemed .fc-list-view,.widget_cal.fc-unthemed .fc-row,.widget_cal.fc-unthemed tbody,.widget_cal.fc-unthemed td{border-color:transparent}.P00303 .widget_cal .fc-day-header>span{display:none}.P00303 .widget_cal .fc-day-header:after{display:block;margin-top:2px}.P00303 .widget_cal .fc-day-header.fc-sun::after{content:"Sun";color:#e96e7b}.P00303 .widget_cal .fc-day-header.fc-mon::after{content:"Mon"}.P00303 .widget_cal .fc-day-header.fc-tue::after{content:"Tue"}.P00303 .widget_cal .fc-day-header.fc-wed::after{content:"Wed"}.P00303 .widget_cal .fc-day-header.fc-thu::after{content:"Thu"}.P00303 .widget_cal .fc-day-header.fc-fri::after{content:"Fri"}.P00303 .widget_cal .fc-day-header.fc-sat::after{content:"Sat";color:#7ea5d9}.P00303 .widget_cal .fc-day.fc-sat,.P00303 .widget_cal .fc-day.fc-sun{background-color:#fff;opacity:1;background-color:transparent!important}.P00303 .widget_cal.fc-ltr .fc-basic-view .fc-day-top{text-align:center}.P00303 .widget_cal.fc-ltr .fc-basic-view .fc-day-number{float:none!important;font-size:1.2rem;color:#56606b}.P00303 .widget_cal .fc-basic-view .fc-sat .fc-day-number{color:#7ea5d9}.P00303 .widget_cal .fc-basic-view .fc-sun .fc-day-number{color:#e96e7b}.P00303 .widget_cal .fc-basic-view .fc-body .fc-row{min-height:3rem}.P00303 .fc-event.fc-event{text-align:center;background-color:#ff836d;border-color:transparent;border-radius:100px}.P00303 .fc-event .fc-title{font-size:1.2rem;font-weight:400;vertical-align:middle}.P00303 .fc a.fc-more{font-size:1.2rem}.P00303 .inputcalbox .w2calendar{width:280px;margin:0 auto;border:0;box-shadow:none}.P00303 .inputcalbox .w2calendar_header{background:#fff}.P00303 .inputcalbox .w2calendar_content{border-bottom:none}.P00303 .fc-toolbar h2{font-size:18px}.P00303 .fc-toolbar{box-sizing:border-box;position:relative}.P00303 .fc-right .fc-button-group{box-sizing:border-box;border-radius:3px}.P00303 .fc .fc-right .fc-button-group .fc-button:first-of-type{margin-left:0}.P00303 .fc button{padding:0 5px}.P00303 .fc .fc-left .fc-button-group .fc-button:first-of-type{margin-left:0}.P00303 .fc table{box-sizing:border-box}.P00303 .fc th{height:30px;line-height:28px;background:#f0f0fe;color:#735bf3;border-color:#f0f0fe!important;font-size:12px}.P00303 .fc .fc-widget-header{margin-right:0!important}.P00303 .fc-toolbar .fc-icon-left-single-arrow:after{font-size:180%;top:-8%}.P00303 .fc-toolbar .fc-icon-right-single-arrow:after{font-size:180%;top:-8%}.P00303 .fc-today-button{display:none}.P00303 .fc-day-number{color:#8181a5!important}.P00303 .fc-day-number.fc-other-month{opacity:1;color:#cdcddb!important}.P00303 .fc-day.fc-sat,.P00303 .fc-day.fc-sun{background-color:#fff!important;opacity:1}.P00303 .fc-ltr .fc-basic-view .fc-day-number{font-size:12px;text-align:left!important;color:#000!important}.P00303 .w2widget_content .fc-day-grid-container.fc-scroller{height:200px!important}.P00303 .todo_box{display:flex;flex-direction:column;height:100%;justify-content:space-between}.P00303 .todo_box>div{flex:1 1 auto;height:50%;overflow-y:hidden}.P00303 .todo_list+.todo_list{margin-top:14px}.P00303 .todo_list .title_box{display:flex;margin-bottom:5px}.P00303 .todo_list .title_box .btn_sort{margin-left:auto;width:25px;text-indent:-9999em;background:url(/frame/images/todo_sort.png) no-repeat right center;border:none}.P00303 .todo_list .month_list{margin-left:10px}.P00303 .todo_list .month_list .btn_next,.P00303 .todo_list .month_list .btn_prev{display:inline-block;position:relative;width:22px;height:22px;font-size:0;text-indent:-9999em;vertical-align:top;border:none}.P00303 .todo_list .month_list .btn_next::before,.P00303 .todo_list .month_list .btn_prev::before{content:"";display:block;position:absolute;width:6px;height:6px;border-left:2px solid #cfcfcf;border-bottom:2px solid #cfcfcf}.P00303 .todo_list .month_list .btn_prev::before{top:7px;left:8px;transform:rotate(45deg)}.P00303 .todo_list .month_list .btn_next::before{top:7px;left:8px;transform:rotate(225deg)}.P00303 .todo_list .month_list .month{line-height:22px;font-size:1.3rem;color:#a8a8a8;vertical-align:top}.P00303 .todo_list ul{padding-right:5px;height:calc(100% - 29px);overflow-y:auto}.P00303 .todo_list li{margin-bottom:5px;background:#fff;border:1px solid #ebebeb;border-radius:3px}.P00303 .todo_list li:last-child{margin-bottom:0}.P00303 .todo_list .list{display:flex;align-items:center;padding:0 10px;min-height:35px;cursor:pointer}.P00303 .todo_list .list>*{flex-shrink:0}.P00303 .todo_list .category{margin-right:6px;width:12px;height:12px;text-indent:-9999em;border-radius:12px;background-color:#ebebeb}.P00303 .todo_list .category.red{background-color:#e96e7b}.P00303 .todo_list .category.green{background-color:#2b64ce}.P00303 .todo_list .category.yellow{background-color:#f5a952}.P00303 .todo_list .category.red{background-color:#e96e7b}.P00303 .todo_list .favorite{margin-right:15px;width:12px;height:12px;text-indent:-9999em;background:url(/frame/images/todo_fav.png) no-repeat}.P00303 .todo_list .favorite.on{background-image:url(/frame/images/todo_fav_on.png)}.P00303 .todo_list .date{margin-right:10px;font-size:1rem;color:#ccc}.P00303 .todo_list .title{font-size:1.4rem}.P00303 .todo_list .arrow{margin-left:auto;width:18px;height:18px;text-indent:-9999em;background:url(/frame/images/todo_open.png) no-repeat center center;border:none}.P00303 .todo_list .detail{display:none;padding:5px 10px}.P00303 .todo_list li.open .detail{display:block}.P00303 .todo_list .detail>.w2textbox{padding-left:47px;font-size:1.2rem;line-height:18px;color:#a8a8a8}.P00303 .todo_list .btn_del,.P00303 .todo_list .btn_edit{width:20px;height:20px;text-indent:-9999em;border:none}.P00303 .todo_list .btn_edit{background:url(/frame/images/todo_edit.png) no-repeat center}.P00303 .todo_list .btn_del{background:url(/frame/images/todo_del.png) no-repeat center}.P00303 .finance .sub_title.gray{color:#56606b}.P00303 .finance li{margin-bottom:8px;padding:10px;border:1px solid #ebebeb;border-radius:3px}.P00303 .finance li:last-child{margin-bottom:0}.P00303 .finance .box{display:flex;align-items:center;margin-top:5px}.P00303 .finance .main_value{width:28%;font-size:2rem;color:#e96e7b}.P00303 .finance .value{margin-left:20px;font-size:1.2rem;color:#e96e7b}.P00303 .finance .value:not(.p):before{content:"▲";margin-right:2px}.P00303 .finance .value.p:before{content:"+";margin-right:2px}.P00303 .finance li.top .main_value{font-size:2.2rem;color:#56606b;line-height:30px}.P00303 .finance li.top .main_value+div{margin-left:auto}.P00303 .finance .down .main_value,.P00303 .finance .down .value{color:#7ea5d9}.P00303 .finance .down .value:not(.p):before{content:"▼";margin-right:2px}.P00303 .finance .down .value.p:before{content:"-";margin-right:2px}.P00303 .finance .chart{margin-top:-25px;margin-left:auto;width:100px;height:50px}.P00303 .stockbox{margin-top:0}.P00303 .stockbox .stock_items{display:flex;justify-content:space-between;align-items:end;margin-top:5px;border-bottom:1px solid #ebebeb;padding:0 5px 7px 5px}.P00303 .stockbox .stock_items .tit{color:#333;font-size:1.5rem;font-family:Noto Sans KR medium}.P00303 .stockbox .stock_items .stock_conbox{display:flex;align-items:baseline;background:rgba(242,134,51,.05);padding:2px 15px 2px 10px;margin-top:6px;border-radius:100px;box-sizing:border-box}.P00303 .stockbox .stock_items .stock_conbox.sub_con{justify-content:space-between}.P00303 .stockbox .stock_items .stock_conbox.row_center{align-items:center}.P00303 .stockbox .stock_items .contxt{color:#333;font-size:2rem;min-width:100px;text-align:right}.P00303 .stockbox .stock_items .smalltxt{color:#fc5588;font-size:14px}.P00303 .stockbox .stock_items .contxt+.smalltxt{margin-left:12px}.P00303 .stockbox .stock_items .contxt+.smalltxt+.smalltxt{margin:0 10px}.P00303 .stockbox .stock_items .arrtxt{padding-left:15px;position:relative;box-sizing:border-box}.P00303 .stockbox .stock_items .arrtxt:before{content:"";width:0;height:0;border-bottom:8px solid #fc5588;border-left:5px solid transparent;border-right:5px solid transparent;position:absolute;left:0;bottom:4px}.P00303 .stockbox .stock_items.toptxt .contxt{color:#333;font-size:25px;font-weight:700}.P00303 .stockbox .stock_items.toptxt .smalltxt{color:#fc5588;font-size:14px}.P00303 .stockbox .stock_items .smalltxt:last-of-type{margin-left:25px}.P00303 .stockbox .stock_items.toptxt .arrtxt:before{content:""}.P00303 .stockbox .stock_items .chart_img{display:none;width:121px;height:46px;background:url(/frame/images/stock_chart_img01.png) no-repeat center}.P00303 .stockbox .stock_items .chart_img.type02{background:url(/frame/images/stock_chart_img02.png) no-repeat center}.P00303 .stockbox .stock_items .chart_img.type03{background:url(/frame/images/stock_chart_img03.png) no-repeat center}.P00303 .noticbox .w2tabcontrol_tabhost{width:auto}.P00303 .noticbox .w2tabcontrol_tabhost li{margin-left:0;margin-right:0;border-radius:0;z-index:100}.P00303 .noticbox .w2tabcontrol_tabhost .w2tabcontrol_tab_left,.P00303 .noticbox .w2tabcontrol_tabhost .w2tabcontrol_tab_right{display:none}.P00303 .noticbox .w2tabcontrol_tabhost .w2tabcontrol_tab_center{box-sizing:border-box;border:0}.P00303 .noticbox .w2tabcontrol_tabhost .w2tabcontrol_tab_center a{top:0;margin-left:0;margin-right:0;color:#b2b2b2;font-size:1.4rem;font-weight:400}.P00303 .noticbox .w2tabcontrol_tabhost .w2tabcontrol_active .w2tabcontrol_tab_center{background:#fff}.P00303 .noticbox .w2tabcontrol_tabhost .w2tabcontrol_active .w2tabcontrol_tab_center a{color:#2b64ce}.P00303 .noticbox .w2tabcontrol_container{border:0;padding:0 20px;box-sizing:border-box}.P00303 .noticbox .notic_tit li{display:inline-block;margin-right:20px;height:30px;box-sizing:border-box;box-shadow:none}.P00303 .noticbox .notic_tit li a{display:block;padding:2px 10px;box-sizing:border-box;text-align:center;font-size:1.3rem;color:#b2b2b2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.P00303 .noticbox .notic_tit li.on a{color:#fff;background:#f15c21;border-radius:100px}.P00303 .noticbox .notic_con{padding:10px;width:100%;max-height:235px;box-sizing:border-box;overflow-y:auto}.P00303 .noticbox .notic_items{display:flex;justify-content:space-between;margin-top:16px;position:relative}.P00303 .noticbox .notic_items:first-child{margin-top:0}.P00303 .noticbox .notic_items:before{content:\'\';width:8px;height:2px;background:#f15c21;position:absolute;top:0;left:0}.P00303 .noticbox .notic_items>div{overflow:hidden}.P00303 .noticbox .notic_items .contxt{font-size:1.4rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.P00303 .noticbox .notic_items .tit{color:#797c7f;font-size:1.2rem;margin-top:3px}.P00303 .noticbox .notic_items .ymdtxt{flex-shrink:0;color:#797c7f;font-size:1rem}.P00303 ._flex{display:flex}.P00303 ._flex.between{justify-content:space-between}.P00303 ._flex.around{justify-content:space-around}.P00303 .helpbox{margin:auto 0}.P00303 .helpbox .help_items{margin-top:15px}.P00303 .helpbox .help_items:first-of-type{margin-top:0}.P00303 .helpbox .help_items .contxt{margin-top:5px;font-size:2rem;font-family:Noto Sans KR medium;letter-spacing:-1px}.P00303 .helpbox .help_items .tit{color:#0055a2;font-size:1.5rem;font-family:Noto Sans KR medium;letter-spacing:-.75px}.P00303 .workflow .tag{margin:5px 0;padding:6px;height:30px;color:#fff;line-height:18px;text-align:center;background:#f8f8f8;border-radius:6px;box-sizing:border-box}.P00303 .workflow .workflow_content{background:#f8f8f8}.P00303 .tag.tag_color1{background:#7671bc}.P00303 .tag.tag_color2{background:#7ea5d9}.P00303 .tag.tag_color3{background:#f5c858}.P00303 .tag.tag_color4{background:#e96e7b}.P00303 .tag.tag_color5{background:#9fcb78}.P00303 .widget07_grp{display:flex;flex-direction:column;justify-content:space-between}.P00303 .widget07_listbox{display:flex;justify-content:space-between;flex-wrap:wrap;margin-top:-20px}.P00303 .widget07_listbox li{width:33.333%;margin-top:20px}.P00303 .imgtype{width:78px;display:block;margin:0 auto;padding-top:70px;box-sizing:border-box;text-align:center;color:#0055a2;font-size:1.2rem;font-family:Noto Sans KR medium;position:relative}.P00303 .imgtype:after{content:\'\';width:16px;height:16px;background:url(/frame/images/ico_arrow_r.png) no-repeat center;position:absolute;right:-5px;bottom:1px}.P00303 .imgtype.type1{background:url(/frame/images/icon_quick01.png) no-repeat top center}.P00303 .imgtype.type2{background:url(/frame/images/icon_quick02.png) no-repeat top center}.P00303 .imgtype.type3{background:url(/frame/images/icon_quick03.png) no-repeat top center}.P00303 .imgtype.type4{background:url(/frame/images/icon_quick04.png) no-repeat top center}.P00303 .imgtype.type5{background:url(/frame/images/icon_quick05.png) no-repeat top center}.P00303 .imgtype.type6{background:url(/frame/images/icon_quick06.png) no-repeat top center}.P00303 .widget07_bottombox{width:100%;height:50px;display:flex;align-items:center;position:absolute;bottom:0;left:0;padding:0 15px;background-color:#0055a2;box-sizing:border-box}.P00303 .widget07_bottombox span{font-size:1.4rem;color:#fff}.P00303 .widget07_bottombox .txt2{font-size:1.4rem;font-family:Noto Sans KR medium}.P00303 .widget07_bottombox.type02{justify-content:space-between;background:#0099da}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents P00303',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'Widget과 localStorage를 활용해서 만든 개인화 화면 복합 예제입니다.<br/>Widget은 Widget이 배치되는 영역인 WidgetContainer 안에 배치되고, Widget 하나 하나는 하나의 페이지로 구성됩니다.<br/>때문에 이 예제는 WidgetContainer가 배치되는 메인 페이지와 6개의 Widget으로 구성됩니다.<br/>이 예제의 개인화는 localStarage를 활용한 예제입니다. 데이터는 브라우저에 저장 되기 때문에 해당 예제의 방식으로 개인화나 데이터 저장 기능을 구현 하면 PC를 이동 할 때 데이터가 유지되지 않습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'테스트 방법<br/>- Widget의 순서 변경, 닫기, 크기 조절 등 변화를 준 뒤 “widget 저장” 버튼을 클릭합니다.<br/>- 예제 제목 우측의 새로고침 버튼이나 브라우저 새로 고침 후 예제를 다시 열어 이전에 저정된 상태를 확인합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 시연용 예제로 예제 가이드 문서가 포함되어 있지 않습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 PC에 최적화 된 화면입니다. 모바일에서는 기능 일부가 작동하지 않을 수 있습니다.',style:''}}]},{T:1,N:'xf:group',A:{id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'dfbox widget',id:''},E:[{T:1,N:'xf:group',A:{class:'tar',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm white','ev:onclick':'scwin.btnInitWidget_onclick',id:'btnInitWidget',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm white','ev:onclick':'scwin.btnWidgetSave_onclick',id:'btnWidgetSave',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'widget 저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btnWidgetImport_onclick',id:'btnWidgetImport',style:'display: none;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'widget 불러오기'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'widget 추가',class:'wd_select',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled','ev:onviewchange':'scwin.selWidget_onviewchange',id:'selWidget',ref:'',renderType:'',style:'width: 130px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'캘린더'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상담업무'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'금융'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공지사항'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고객센터'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차트'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'06'}]}]}]}]}]}]}]},{T:1,N:'w2:widgetContainer',A:{class:'ui_widget',cols:'3',horizontalMargin:'15',id:'ui_widget',maxUnitWidth:'350',minUnitWidth:'1',mode:'switch',params:'false',style:'height: 700px;',unitHeightPixel:'350',verticalMargin:'15',widgetMove:'true',widgetResize:'true'}}]}]}]}]})
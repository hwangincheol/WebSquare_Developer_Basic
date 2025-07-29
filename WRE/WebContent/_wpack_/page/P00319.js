/*amd /page/P00319.xml 5392 059f136cc424d58c4bdadd364f9ef6d1e823a2002d6d698a34a3afce33bc709e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo'},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {

};

/**
 * 버튼 [단건 위젯 추가하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // 위젯 생성 옵션 정보
    let widgetOptions = {};

    // [필수] 위젯 ID. 동일한 ID를 가진 위젯이 있으면 추가되지 않습니다.
    widgetOptions.id = "wg_exam1";

    // [필수] 위젯 파일 경로 
    widgetOptions.src = "/page/P00319S01.xml";

    // [필수] scope 적용 여부로 true 고정
    widgetOptions.scope = true;

    // [필수] 위젯 너비 : (설정 값 / WidgetContainer의 속성 'col'의 설정 값 * 100)으로 '%'단위로 그려집니다.
    widgetOptions.unitWidth = 4;

    // [필수] 위젯 높이 : (설정 값 * WidgetContainer의 속성 'unitHeightPixel'의 설정 값)으로 'px'단위로 그려집니다.
    widgetOptions.unitHeight = 6;

    // [권장] 위젯 타이틀
    widgetOptions.title = "ID : wg_exam1";

    // 위젯의 x 위치
    widgetOptions.x = 0;

    // 위젯의 y 위치
    widgetOptions.y = 0;

    // WidgetContainer 'wgc_exam1'에 위젯 1개를 추가합니다.
    wgc_exam1.addWidgets(widgetOptions);

    // 추가된 위젯이 있는지의 여부를 판단할 때 함수 'getWidgetByTitle( id )'를 사용할 수 있습니다.
};

/**
 * 버튼 [다건 위젯 추가하기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // 위젯 'wg_exam2' 생성 옵션 정보
    let widgetOptions1 = {};

    // [필수] 위젯 ID. 동일한 ID를 가진 위젯이 있으면 추가되지 않습니다.
    widgetOptions1.id = "wg_exam2";

    // [필수] 위젯 파일 경로 
    widgetOptions1.src = "/page/P00319S02.xml";

    // [필수] scope 적용 여부로 true 고정
    widgetOptions1.scope = true;

    // [필수] 위젯 너비 : (설정 값 / WidgetContainer의 속성 'col'의 설정 값 * 100)으로 '%'단위로 그려집니다.
    widgetOptions1.unitWidth = 3;

    // [필수] 위젯 높이 : (설정 값 * WidgetContainer의 속성 'unitHeightPixel'의 설정 값)으로 'px'단위로 그려집니다.
    widgetOptions1.unitHeight = 5;

    // [권장] 위젯 타이틀
    widgetOptions1.title = "ID  = wg_exam2";

    // 위젯의 x 위치
    widgetOptions1.x = 0;

    // 위젯의 y 위치
    widgetOptions1.y = 6;

    // 위젯 'wg_exam3' 생성 옵션 정보 (주석 생략)
    let widgetOptions2 = {};
    widgetOptions2.id = "wg_exam3";
    widgetOptions2.src = "/page/P00319S03.xml";
    widgetOptions2.scope = true;
    widgetOptions2.unitWidth = 4;
    widgetOptions2.unitHeight = 4;
    widgetOptions2.title = "ID  = wg_exam3";
    widgetOptions2.x = 0;
    widgetOptions2.y = 11;

    // WidgetContainer 'wgc_exam1'에 위젯 2개를 추가합니다. 위젯의 생성 정보 JSON을 Array에 담아 인자로 할당합니다.
    wgc_exam1.addWidgets([widgetOptions1, widgetOptions2]);

    // 추가된 위젯이 있는지의 여부를 판단할 때 함수 'getWidgetByTitle( id )'를 사용할 수 있습니다.
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents'},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc'},E:[{T:1,N:'w2:textbox',A:{escape:'false',label:'WidgetContainer에 위젯을 추가하는 기본 예제로 함수 \'addWidgets\'의 필수 설정 값을 확인할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'동일한 ID를 가진 위젯이 있으면 위젯이 추가되지 않습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap'},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style'},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단건 위젯 추가하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다건 위젯 추가하기'}]}]}]},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'아래의 영역에 위젯이 추가됩니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:'box-sizing:border-box;border: 1px solid #ddd;padding: 1px 4px;'},E:[{T:1,N:'w2:widgetContainer',A:{verticalMargin:'0',threshold:'null',params:'false',mode:'pushpull',style:'height: 300px;',id:'wgc_exam1',cols:'4',unitHeightPixel:'20',class:'ws_exam_comm',horizontalMargin:'8'}}]}]}]}]}]}]}]}]})
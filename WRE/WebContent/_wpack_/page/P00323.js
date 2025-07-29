/*amd /page/P00323.xml 3950 7cc1d7ca0309de4144362a47e3917704fc4e82b784b97d3b457b8560b882a13c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo'},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    // WidgetContainer 'wgc_exam1'에 위젯 1개를 추가합니다.
    wgc_exam1.addWidgets({
        id: "wg_exam1",
        src: "/page/P00323S01.xml",
        scope: true,
        unitWidth: 1,
        unitHeight: 5,
        title: "src 변경",
        x: 0,
        y: 0,
        buttonFormatter: function (argWidgetID) {
            // 테스트를 위해 우측 상단의 기능 버튼 제거 - 'fix': 고정, 'minimize': 최소화, 'maximize': 최대화, 'close': 닫기
            return [];
        }
    });
};


/**
 * 버튼 [위젯의 화면을 'P00323S02.xml'로 변경하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // WidgetContainer에 추가된 위젯의 ID가 'wgc_exam1'인 위젯 객체를 반환받습니다.
    let objWidget = wgc_exam1.getWidgetById("wg_exam1");

    // 위젯의 파일 경로를 "/page/P00323S02.xml"로 변경합니다.
    objWidget.setSrc("/page/P00323S02.xml");
};

/**
 * 버튼 [위젯의 화면을 'P00323S01.xml'로 변경하기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // WidgetContainer에 추가된 위젯의 ID가 'wgc_exam1'인 위젯 객체를 반환받습니다.
    let objWidget = wgc_exam1.getWidgetById("wg_exam1");

    // 위젯의 파일 경로를 "/page/P00323S01.xml"로 변경합니다.
    objWidget.setSrc("/page/P00323S01.xml");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents'},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc'},E:[{T:1,N:'w2:textbox',A:{escape:'false',label:'WidgetContainer에 추가된 위젯의 화면(src)을 변경하는 예제입니다.<br/>추가된 위젯 객체의 함수 \'setSrc\'를 사용하여 구현할 수 있습니다.<br/>위젯 객체를 반환하는 주요 함수는 다음과 같습니다.<br/>- getWidgetById: 위젯의 \'id\'를 받아 widget 객체를 반환<br/>- getWidgetByTitle: 위젯의 \'title\'을 받아 widget 객체를 반환',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',label:'화면이 로딩되면 위젯 \'src 변경\'이 추가됩니다. 테스트를 위해 기능 버튼은 제거되었습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap'},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style'},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'위젯의 화면을 \'P00323S02.xml\'로 변경하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'위젯의 화면을 \'P00323S01.xml\'로 변경하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'w2:widgetContainer',A:{verticalMargin:'0',threshold:'null',params:'false',mode:'pushpull',style:'height: 130px;',id:'wgc_exam1',cols:'1',unitHeightPixel:'20',class:'ws_exam_comm',horizontalMargin:'8',preventMaximizeByTitle:'true'}}]}]}]}]}]}]}]}]})
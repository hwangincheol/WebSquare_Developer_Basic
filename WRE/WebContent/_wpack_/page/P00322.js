/*amd /page/P00322.xml 6445 eea476b86d3def4111160d8078cfa3f05524cc00cfcefdb20bed5c2f86b5108b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo'},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {

};

/**
 * 로그 출력용 Textrea의 Value 삭제하기
 */
scwin.btn_clearLog_onclick = function (e) {
    let strTargetId = this.getUserData("userData1");
    let cmpTarget;
    if (strTargetId) {
        cmpTarget = $p.getComponentById(strTargetId) || txa_log;
    } else {
        cmpTarget = txa_log;
    }
    //textarea value를 빈문자열로 할당.
    cmpTarget.setValue("");
};

/**
 * 버튼 [1. 위젯 추가하기 - 파라미터 설정] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // 위젯 생성 옵션 정보
    let widgetOptions = {};

    // [필수] 위젯에 할당할 파라미터.
    // - Widget 화면(src)에서는 $p.getParameter("params")로 추출할 수 있습니다.
    // - Widget 객체에서는 함수 'getParams'로 추출할 수 있습니다.
    widgetOptions.params = {
        "type": "exam",
        "widget_id": "wg_exam1"
    };

    // [필수] 위젯 ID. 동일한 ID를 가진 위젯이 있으면 추가되지 않습니다.
    widgetOptions.id = "wg_exam1";

    // [필수] 위젯 파일 경로 
    widgetOptions.src = "/page/P00322S01.xml";

    // [필수] scope 적용 여부로 true 고정
    widgetOptions.scope = true;

    // [필수] 위젯 너비 : (설정 값 / WidgetContainer의 속성 'col'의 설정 값 * 100)으로 '%'단위로 그려집니다.
    widgetOptions.unitWidth = 1;

    // [필수] 위젯 높이 : (설정 값 * WidgetContainer의 속성 'unitHeightPixel'의 설정 값)으로 'px'단위로 그려집니다.
    widgetOptions.unitHeight = 10;

    // [권장] 위젯 타이틀
    widgetOptions.title = "params 설정";

    // 위젯의 x 위치
    widgetOptions.x = 0;

    // 위젯의 y 위치
    widgetOptions.y = 0;

    // WidgetContainer 'wgc_exam1'에 위젯 1개를 추가합니다.
    wgc_exam1.addWidgets(widgetOptions);
};

/**
 * 버튼 [2. 위젯 'params 설정'의 파라미터 반환받기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // WidgetContainer에 추가된 위젯의 ID가 'wgc_exam1'인 위젯 객체를 반환받습니다.
    let objWidget = wgc_exam1.getWidgetById("wg_exam1");

    // 추가된 위젯이 없는 경우 메시지 처리.
    if (!objWidget) {
        alert("버튼 [1. 위젯 추가하기 - 파라미터 설정] 클릭 후 사용할 수 있습니다.");
        return;
    }

    // 위젯 객체에서 파라미터를 반환받습니다.
    // (WidgetContainer의 함수 'addWidgets'의 첫 번째 인자의 위젯 옵션 'params'에 지정한 값)
    let result = objWidget.getParams();

    // 반환 값 예시)
    // {
    //     "type": "exam",
    //     "widget_id": "wg_exam1"
    // }

    // 로그 출력
    let strLog = '# 스크립트 wgc_exam1.getWidgetById("wg_exam1").getParams(); 반환 값: \n';
    $c.frame.printExampleLog(strLog + JSON.stringify(result, null, "  "), txa_log_1, false);
    console.log(strLog, result);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents'},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc'},E:[{T:1,N:'w2:textbox',A:{escape:'false',label:'WidgetContainer의 함수 \'addWidgets\'로 위젯을 추가할 때, 위젯에 파라미터를 설정하고, 설정된 파라미터를 반환받는 예제입니다.<br/>Widget이 추가되면 위젯 화면의 이벤트 \'onpageload\'에서 위젯에 정의된 파라미터를 위젯 화면의 Textarea에 출력합니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',label:'아래의 버튼을 순서대로 클릭하여 테스트합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'동일한 ID를 가진 위젯이 있으면 위젯이 추가되지 않습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap'},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style'},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1. 위젯 추가하기 - 파라미터 설정'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2. 위젯 \'params 설정\'의 파라미터 반환받기'}]}]}]},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'아래의 영역에 위젯이 추가됩니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box',style:'box-sizing:border-box;border: 1px solid #ddd;padding: 1px 4px;'},E:[{T:1,N:'w2:widgetContainer',A:{verticalMargin:'0',threshold:'null',params:'false',mode:'pushpull',style:'height: 200px;',id:'wgc_exam1',cols:'1',unitHeightPixel:'20',class:'ws_exam_comm',horizontalMargin:'8'}}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',label:'로그 확인'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',title:'로그 삭제',type:'button',userData1:'txa_log_1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_1',spellcheck:'false',style:'width: 100%;height: 110px;'}}]}]}]}]}]}]}]})
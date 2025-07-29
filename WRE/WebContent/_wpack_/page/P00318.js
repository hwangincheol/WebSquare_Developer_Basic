/*amd /page/P00318.xml 6839 053abb79af63e44fa1d3e6ab4acf121065581f09c37d88d3a87f0f15f0cf5e5a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo'},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    // 예제 테스트를 위해 위젯 추가
    wgc_exam1.addWidgets([
        {
            id: "wg_exam1",
            src: "/page/P00318S01.xml",
            title: "ID : wg_exam1",
            x: 0,
            y: 0,
            scope: true,
            unitWidth: 1,
            unitHeight: 5
        },
        {
            id: "wg_exam2",
            src: "/page/P00318S02.xml",
            title: "ID : wg_exam2",
            x: 0,
            y: 6,
            scope: true,
            unitWidth: 1,
            unitHeight: 5
        }
    ]);
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
 * 버튼 [위젯의 ID가 'wg_exam2'인 위젯의 정보 반환받기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // WidgetContainer 'wgc_exam1'에 추가된 위젯의 ID가 'wg_exam2'인 위젯의 정보를 반환받습니다.
    let result = wgc_exam1.exportWidget("wg_exam2");

    // 반환 값 예시)
    // {
    //     "id": "wg_exam2",
    //     "src": "/page/P00318S02.xml",
    //     "scope": true,
    //     "minimized": false,
    //     "maximized": false,
    //     "x": 0,
    //     "y": 5,
    //     "unitWidth": 1,
    //     "unitHeight": 5,
    //     "fixed": false,
    //     "oriFixed": false,
    //     "title": "ID : wg_exam2",
    //     "className": "w2widget",
    //     "maximizeFormatter": null,
    //     "buttonFormatter": null,
    //     "titleClass": ""
    // }

    // 로그 출력
    let strLog = "# 스크립트 wgc_exam1.exportWidget('wg_exam2'); 반환 값: \n";
    $c.frame.printExampleLog(strLog + JSON.stringify(result, null, "  "), txa_log_1, false);
    console.log(strLog, result);
};

/**
 * 버튼 [모든 위젯 정보 반환받기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // WidgetContainer 'wgc_exam1'에 추가된 모든 위젯의 정보를 배열로 반환받습니다.
    let result = wgc_exam1.exportWidgets();

    // 반환 값 예시)
    // [
    //     {
    //         "id": "wg_exam1",
    //         "src": "/page/P00318S01.xml",
    //         "scope": true,
    //         "minimized": false,
    //         "maximized": false,
    //         "x": 0,
    //         "y": 0,
    //         "unitWidth": 1,
    //         "unitHeight": 5,
    //         "fixed": false,
    //         "oriFixed": false,
    //         "title": "ID : wg_exam1",
    //         "className": "w2widget",
    //         "maximizeFormatter": null,
    //         "buttonFormatter": null,
    //         "titleClass": ""
    //     },
    //     {
    //         "id": "wg_exam2",
    //         "src": "/page/P00318S02.xml",
    //         "scope": true,
    //         "minimized": false,
    //         "maximized": false,
    //         "x": 0,
    //         "y": 5,
    //         "unitWidth": 1,
    //         "unitHeight": 5,
    //         "fixed": false,
    //         "oriFixed": false,
    //         "title": "ID : wg_exam2",
    //         "className": "w2widget",
    //         "maximizeFormatter": null,
    //         "buttonFormatter": null,
    //         "titleClass": ""
    //     }
    // ]

    // 로그 출력
    let strLog = "# 스크립트 wgc_exam1.exportWidgets(); 반환 값: \n";
    $c.frame.printExampleLog(strLog + JSON.stringify(result, null, "  "), txa_log_1, false);
    console.log(strLog, result);
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents'},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc'},E:[{T:1,N:'w2:textbox',A:{escape:'false',label:'WidgetContainer에 추가된 위젯의 정보를 JSON으로 반환받는 예제입니다.<br/>아래의 WidgetContainer 함수를 통해 구현할 수 있습니다.<br/>- exportWidget : 위젯의 ID로 위젯의 정보를 반환합니다.<br/>- exportWidgets : 모든 위젯의 정보를 Array로 반환합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap'},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style'},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'위젯의 ID가 \'wg_exam2\'인 위젯의 정보 반환받기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'모든 위젯 정보 반환받기'}]}]}]},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'위젯의 타이틀에 위젯의 ID를 표기하였습니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:widgetContainer',A:{verticalMargin:'0',threshold:'null',params:'false',mode:'pushpull',style:'height: 200px;box-sizing:border-box;',id:'wgc_exam1',cols:'1',unitHeightPixel:'20',class:'ws_exam_comm',horizontalMargin:'8'}}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',label:'로그 확인'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',title:'로그 삭제',type:'button',userData1:'txa_log_1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_1',spellcheck:'false',style:'width: 100%;height: 100px;'}}]}]}]}]}]}]}]})
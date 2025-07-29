/*amd /page/P00294.xml 4724 6b9e3040977ff1864dbab65ffdd3da22acf8613e4d1c2b7c5011aaf9ec0a02f7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = async function () {
    // 예제 테스트를 위해 탭 추가
    await tac_exam1.addTab(
        "tab_exam",
        {
            "label": "TAB2",
            "openAction": "select",
            "tabWidth": 70
        },
        {
            "src": "/page/P00294S01.xml",
            "wframe": true
        }
    );
};

/**
 * 버튼 [탭의 정보 반환받기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // TabControl 'tac_exam1'의 탭 정보를 반환받습니다.
    let result = tac_exam1.getTabInfo();
    // 반환 값 예시)
    // [
    //   {
    //     "id": "tabs1",
    //     "label": "TAB1",
    //     "defaultTabIndex": 0,
    //     "currentTabIndex": 0,
    //     "src": "",
    //     "alwaysDraw": false
    //   },
    //   {
    //     "id": "tab_exam",
    //     "label": "TAB2",
    //     "defaultTabIndex": 1,
    //     "currentTabIndex": 1,
    //     "src": "/page/P00294S01.xml",
    //     "alwaysDraw": false
    //   }
    // ]

    // 로그 출력
    let strLog = "# TabControl의 함수 'getTabInfo'의 반환 값: \n";
    $c.frame.printExampleLog(strLog + JSON.stringify(result, null, "  "), txa_log_1, false);
    console.log(strLog);
    console.log(result);
};

/**
 * textarea의 로그 삭제
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

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'TabControl의 탭 정보를 반환하는 함수 \'getTabInfo\' 예시입니다.<br/>각 탭의 정보를 JSON으로 구성하여 Array로 반환합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.<br/>로그를 통해 반환되는 데이터를 확인할 수 있습니다.',style:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:''}},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mw600',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'탭의 정보 반환받기'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:''},E:[{T:1,N:'w2:tabControl',A:{confirmTrueAction:'exist',confirmFalseAction:'new',useTabKeyOnly:'true',tabScroll:'',useMoveNextTabFocus:'false',useConfirmMessage:'false',alwaysDraw:'false',style:'position: relative;height: 120px;',id:'tac_exam1',class:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:70px;height:30px;',id:'tabs1',label:'TAB1'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'min-height:30px;',id:'content1'},E:[{T:1,N:'w2:textbox',A:{style:'font-size: 1.2em;padding: 6px;color: steelblue;font-weight: bold;',id:'',label:'TAB1 CONTENT'}}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'',style:'',title:'로그 삭제',type:'button',userData1:'txa_log_1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_1',spellcheck:'false',style:'width: 100%;height: 90px;'}}]}]}]}]}]}]}]})
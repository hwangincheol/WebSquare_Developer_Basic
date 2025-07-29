/*amd /page/P00314.xml 6178 078d64b0d240c7d9bab3574572daa6ed0874bc1299700ff6d9146cebd9198ff5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo'},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    
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

/**
 * 버튼 [탭 추가하기 - 콘텐츠 옵션 'wframe'을 true로 설정] 클릭 시
 */
scwin.btn_exam1_1_onclick = async function (e) {
    // TabControl 'tac_exam1'에 탭 추가하기 - "wframe": true
    // wframe에 파일이 구성됩니다.
    let result = await tac_exam1.addTab(
        "tac_exam1_wframe",
        {
            "label": "TAB_wframe",
            "openAction": "select"
        },
        {
            "src": "/page/P00314S01.xml",
            "wframe": true // 필수
        }
    );

    // 추가된 탭 선택하기
    tac_exam1.setSelectedTabIndex("tac_exam1_wframe");

    // 로그 출력
    let strLog = "# TabControl 'tac_exam1'의 함수 'addTab'의 반환 값(탭의 ID): \n";
    $c.frame.printExampleLog(strLog + JSON.stringify(result, null, "  "), txa_log_1, false);
    console.log(strLog, result);
};

/**
 * 버튼 [탭 추가하기 - 콘텐츠 옵션 'wframe'을 false로 설정] 클릭 시
 */
scwin.btn_exam1_2_onclick = async function (e) {
    // TabControl 'tac_exam1'에 탭 추가하기 - "wframe": false
    // iframe에 파일이 링크됩니다.
    let result = await tac_exam1.addTab(
        "tac_exam1_iframe",
        {
            "label": "TAB_iframe",
            "openAction": "select"
        },
        {
            "src": "/page/P00314S02.xml",
            "wframe": false // 필수
        }
    );

    // 추가된 탭 선택하기
    tac_exam1.setSelectedTabIndex("tac_exam1_iframe");

    // 로그 출력
    let strLog = "# TabControl 'tac_exam1'의 함수 'addTab'의 반환 값(탭의 ID): \n";
    $c.frame.printExampleLog(strLog + JSON.stringify(result, null, "  "), txa_log_1, false);
    console.log(strLog);
    console.log(result);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents'},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc'},E:[{T:1,N:'w2:textbox',A:{escape:'false',label:'TabControl의 함수 \'addTab\'의 세 번째 인자 JSON 객체의 \'wframe\' 설정 값 비교 예제입니다.<br/>세 번째 인자는 콘텐츠에 관련된 옵션들로 구성되어있습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',label:'콘텐츠 옵션 \'wframe\'의 설정 값에 따른 동작 방식은 다음과 같습니다.<br/>- false : (기본 값) 콘텐츠 영역이 iframe으로 구성됩니다.<br/>- true : 콘텐츠 영역이 wframe으로 구성됩니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'\'wframe\'의 권장 설정 값은 false입니다.<br/>true로 설정한 경우보다 브라우저 메모리 사용량이 낮고 콘텐츠 로딩 속도가 빠르며 부모(상위) 화면에 더 쉽게 접근할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.<br/>함수 \'addTab\'의 반환 값을 확인할 수 있습니다.'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap'},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style'},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'탭 추가하기 - 콘텐츠 옵션 \'wframe\'을 true로 설정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'탭 추가하기 - 콘텐츠 옵션 \'wframe\'을 false로 설정'}]}]}]},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'테스트를 위해 함수 \'addTab\' 호출 후 함수 \'setSelectedTabIndex\'를 호출하여 추가한 탭을 선택합니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:tabControl',A:{confirmTrueAction:'exist',confirmFalseAction:'new',useTabKeyOnly:'true',useMoveNextTabFocus:'false',useConfirmMessage:'false',alwaysDraw:'false',style:'position: relative;height: 120px;',id:'tac_exam1',class:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:54px;height:30px',id:'tac_exam1_1',label:'TAB1'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'min-height:30px',id:'content1_1',scope:'true'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'TAB1 Content',style:'font-size: 1.2em;font-weight: bold;padding: 6px;'}}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',label:'로그 확인'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',title:'로그 삭제',type:'button',userData1:'txa_log_1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_1',spellcheck:'false',style:'width: 100%;height: 60px;'}}]}]}]}]}]}]}]})
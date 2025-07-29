/*amd /page/P00353.xml 5461 59ff68f26d6516b0f7089a47f19911ed9dbf0105bb59cf9d9959bc688215c1a4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    ibx_exam1.focus();
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
 * 영역 [(기본 설정) 'Enter' 키 입력 시 포커스가 아웃되고 이벤트 'onblur' 발생] 하단
 * Input 'ibx_exam1'의 이벤트 'onblur' 핸들러
 */
scwin.ibx_exam1_onblur = function (e) {
    let result = ibx_exam1.getValue();

    // 로그 출력
    let strLog = '# 이벤트 onblur 발생 - scwin.ibx_exam1_onblur\nibx_exam1.getValue();\n반환 값) ';
    $c.frame.printExampleLog(strLog + result, txa_log_1, false);
    console.log(strLog, result);
};

/**
 * 영역 ['Enter' 키 입력 시 포커스가 유지되고 이벤트 'onblur' 미발생] 하단
 * Input 'ibx_exam2'의 이벤트 'onblur' 핸들러
 */
scwin.ibx_exam2_onblur = function (e) {
    let result = ibx_exam2.getValue();

    // 로그 출력
    let strLog = '# 이벤트 onblur 발생 - scwin.ibx_exam1_onblur\nibx_exam2.getValue();\n반환 값) ';
    $c.frame.printExampleLog(strLog + result, txa_log_2, false);
    console.log(strLog, result);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'Input의 속성 \'enterBlur\' 예제입니다.<br/>이 속성은 입력 영역에서 키보드(키패드)의 \'Enter\'키가 입력되었을 때 동작합니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'속성의 설정 값에 따른 동작은 다음과 같습니다.<br/>- true : (기본 값) 포커스가 아웃(입력 커서가 없어짐)되고 이벤트 \'onblur\'가 발생합니다.<br/>- false : 별도의 동작을 하지 않습니다. 포커스가 유지됩니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'각 Input 컴포넌트에는 이벤트 \'onblur\' 핸들러가 등록되어 있습니다. 핸들러에서는 예제의 \'로그 확인 영역\'과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(기본 설정) \'Enter\' 키 입력 시 포커스가 아웃되고 이벤트 \'onblur\' 발생',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',label:'Input의 입력 영역에서 키보드의 \'Enter\' 키를 입력합니다.',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ibx_exam1',style:'min-width:120px;','ev:onblur':'scwin.ibx_exam1_onblur',enterBlur:'true',initValue:'예시1'}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',label:'로그 확인'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',title:'로그 삭제',type:'button',userData1:'txa_log_1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_1',spellcheck:'false',style:'width: 100%;height: 60px;'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'\'Enter\' 키 입력 시 포커스가 유지되고 이벤트 \'onblur\' 미발생',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',label:'Input의 입력 영역에서 키보드의 \'Enter\' 키를 입력합니다.',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ibx_exam2',style:'min-width:120px;','ev:onblur':'scwin.ibx_exam2_onblur',enterBlur:'false',initValue:'예시2'}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',label:'로그 확인'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',title:'로그 삭제',type:'button',userData1:'txa_log_2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_2',spellcheck:'false',style:'width: 100%;height: 60px;'}}]}]}]}]}]}]}]})
/*amd /page/P00270.xml 5432 cb6781b6f5162682ec64f1afb70e5c635c84e00d696ce0c6bb48499ed92938b8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    // 예제 테스트를 위해 기 저장된 LocalStorage의 키 "EXAMPLE_P00270"를 삭제합니다.
    $p.local.removeItem("EXAMPLE_P00270");
};

/**
 * 버튼 [$p.local.setItem] 클릭 시
 */
scwin.btn_exam1_onclick = function (e) {
    // LocalStorage의 키 "EXAMPLE_P00270"에 "한글_Abc_一二三"을 할당합니다.
    $p.local.setItem("EXAMPLE_P00270", "한글_Abc_一二三");

    // 로그 출력
    let strLog = '# LocalStorage의 키 "EXAMPLE_P00270"에 "한글_Abc_一二三"을 할당합니다.';
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
};

/**
 * 버튼 [$p.local.getItem] 클릭 시
 */
scwin.btn_exam2_onclick = function (e) {
    // LocalStorage의 키 "EXAMPLE_P00270"의 값을 반환받습니다.
    let strItem = $p.local.getItem("EXAMPLE_P00270");

    // 로그 출력
    let strLog = '# LocalStorage의 키 "EXAMPLE_P00270"의 값은 ' + '"' + strItem + '" 입니다.';
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
    console.log(strItem);
};

/**
 * 버튼 [$p.local.removeItem] 클릭 시
 */
scwin.btn_exam3_onclick = function (e) {
    // LocalStorage의 키 "EXAMPLE_P00270"를 삭제합니다.
    $p.local.removeItem("EXAMPLE_P00270");

    // 로그 출력
    let strLog = '# LocalStorage의 키 "EXAMPLE_P00270"를 삭제합니다.';
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
};

/**
 * 버튼 [페이지 열기] 클릭 시
 */
scwin.btn_openPage_onclick = function (e) {
    let strPage = $c.frame.getBasePageURL(true) + "?w2xPath=/page/P00270P01.xml";
    window.open(strPage, "_blank");
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'\'$p.local\' 객체 하위의 함수를 이용하여 브라우저의 LocalStorage에 값을 저장, 삭제, 반환받습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'브라우저의 LocalStorage는 모든 화면에 영향을 미치므로 사용 시 주의가 필요합니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'화면이 로딩되면 예제 테스트를 위해 기 저장된 LocalStorage의 키 "EXAMPLE_P00270"가 삭제됩니다.',style:''}},{T:1,N:'w2:textbox',A:{id:'',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.',style:'',class:'ws_example_txt_desc_info'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style no_padding',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false',id:'btn_openPage',style:'',type:'button','ev:onclick':'scwin.btn_openPage_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'페이지 열기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_exam1_onclick',id:'btn_exam1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.local.setItem'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_exam2_onclick',id:'btn_exam2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.local.getItem'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false',id:'btn_exam3',style:'',type:'button','ev:onclick':'scwin.btn_exam3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.local.removeItem'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})
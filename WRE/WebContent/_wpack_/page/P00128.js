/*amd /page/P00128.xml 3281 71bee021fe535b0ddae3010f9b6ded5cd76c16556db6fb42c8fe705298079e85 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * Input "ibx_exam1"의 oneditfull 핸들러
 * 입력된 값이 maxByteLength과 같을 경우 발생.
 * 입력값이 영문, 숫자이고, 속성 maxByteLength이 설정된 경우만 동작합니다.
 */
scwin.ibx_exam1_oneditfull = function () {
    var strLog;

    //로그 출력
    $c.frame.printExampleLog("**** oneditfull 발생 ****", txa_log);

    strLog = "이벤트 발생 컴포넌트 ID : " + this.getOriginalID() + " | ";
    strLog += "입력값 : " + this.getValue();

    //로그 출력
    $c.frame.printExampleLog(strLog, txa_log, false);
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'Input의 이벤트 oneditfull 예제입니다.<br/>이벤트 oneditfull는 입력값이 속성 maxByteLength의 설정값과 동일할 때 발생합니다.<br/>이 기능은 입력값이 영문, 숫자이고, 속성 maxByteLength이 설정된 경우만 동작합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'이벤트 oneditfull 설정',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'입력값이 영문, 숫자이고,<br/>입력값이 4byte에 도달하면 발생됩니다.',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ibx_exam1',style:'min-width:120px;',maxByteLength:'4',placeholder:'maxByteLength : 4','ev:oneditfull':'scwin.ibx_exam1_oneditfull'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})
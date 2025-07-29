/*amd /page/P00331.xml 3756 c6cf9dbde231ba6f1681280e9a2cad6f4f3683acb9b586dffd3e3bffa8078108 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    var _date = new Date();
    var _formatted = WebSquare.date.getFormattedDate(_date, "yyyyMMdd");

    ipt_date.setValue(_formatted);
};

/**
 * 버튼 "요일 확인하기"의 onclick 이벤트
 */
scwin.btn_getDay_onclick = function (e) {
    var _result = "";
    
    // 입력 컴포넌트에 입력된 "yyyyMMdd"형식의 값 가져오기.
    var _date = ipt_date.getValue();

    // "yyyyMMdd" 형식의 날짜 문자열로 입력받아 요일 문자열을 반환합니다.
    // ex) WebSquare.date.getDay("20230810");
    _result = WebSquare.date.getDay(_date)

    // 로그 출력
    let strLog = _date + " : " + _result;
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
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

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:'',nextTabID:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'WebSquare의 API를 활용해 "yyyyMMdd" 형태의 날짜 문자열을 입력받아 해당 요일을 반환하는 예제입니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'"yyyyMMdd" 형식으로 날짜 문자열을 입력하고 버튼을 클릭하면 해당 요일을 출력합니다.<br/><br/>ex) 20230807 -> 월요일',style:''}},{T:1,N:'xf:group',A:{id:'',style:'overflow: hidden;'},E:[{T:1,N:'xf:input',A:{style:'width : calc(100% - 110px);margin-right: 10px;',id:'ipt_date',class:'fl',allowChar:'0-9',maxlength:'8'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_getDay',type:'button',class:'btn_exam_exec fr','ev:onclick':'scwin.btn_getDay_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'요일 확인하기'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})
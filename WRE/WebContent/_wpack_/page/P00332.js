/*amd /page/P00332.xml 4093 7a2339cc1955ec1995939b2c449548c6bfc495d34a9a7aa45fb72189ed9032ac */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    var _date = new Date();
    var _formatted = WebSquare.date.getFormattedDate(_date, "yyyyMMdd");

    ica.setValue(_formatted);
};

/**
 * 버튼 "AddDate"의 onclick 이벤트
 */
scwin.btn_addDate_onclick = function (e) {

    var _result = "";
    // InputCalendar에서 받은 "yyyyMMdd" 형식의 날짜
    var _date = ica.getValue();
    // Input에서 받은 더할 숫자
    var _offset = ipt_num.getValue();
    // "yyyyMMdd" 형식의 날짜와 더할 수를 입력받아 더한 날짜를 반환합니다.
    // ex) WebSquare.date.dateAdd("20230810", 3)
    _result = WebSquare.date.dateAdd(_date, _offset);

    // 로그 출력
    let strLog = "Date: " + _date + " , Result : " + _result + ", Offset: " + _offset;
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

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:'',nextTabID:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'WebSquare의 API를 활용해 "yyyyMMdd" 형태의 날짜 문자열에 지정된 수 만큼 일 수를 더하는 예제입니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'yyyyMMdd형식 날짜 문자열과 숫자를 입력하고 버튼을 클릭하면 더해진 날짜를 출력합니다.<br/><br/>ex) 20230807 , &nbsp;3 -> 20230810',style:''}},{T:1,N:'xf:group',A:{id:'',style:'margin-bottom: 5px;'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',footerDiv:'true',id:'ica',renderDiv:'true',renderType:'',rightAlign:'false',style:'width: 120px;margin-right: 10px;',showToday:'true'}},{T:1,N:'xf:input',A:{allowChar:'0-9',class:'',id:'ipt_num',maxlength:'8',style:'width : 50px;margin-right: 10px;',dataType:'number',initValue:'1'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_addDate',type:'button',class:'btn_exam_exec','ev:onclick':'scwin.btn_addDate_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'AddDate'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})
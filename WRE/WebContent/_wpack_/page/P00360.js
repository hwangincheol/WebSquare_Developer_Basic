/*amd /page/P00360.xml 4827 f44ad74c0d93382994eac931c9f41603379743268598b9c72b9f306f61175907 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
};

scwin.btn_show_onclick = function (e) {
    // 선택된 메뉴의 label 정보 가져오기
    var _input = ipt_separator.getValue();
    var _values = null;
    var _separator = null;

    if (_input != "") {
        _separator = _input;
    }
    _values = msb_main.getValue(_separator);
    if (_values == "" || _values == null) {
        _values = "선택된 값이 없습니다.";
    }
    // 로그 출력
    let strLog = "[Values] " + _values;
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
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:'',nextTabID:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'MultiSelect의 선택된 값을 가져오는 예제입니다.<br/>여러개의 값을 선택하는 경우 separator의 값을 구분자로 사용해서 출력합니다.<br/>컴포넌트의 separator 값을 설정해서 defalut separator를 설정하거나<br/>getValue를 호출 할 때 구분자로 사용할 문자열을 입력해서 변경할 수 있습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'선택한 여러 값 가져오기',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'separator를 입력하면 입력한 문자열을 구분자로 사용해서 값을 받아올 수 있습니다.<br/>값을 입력하지 않은 경우 separator 속성에 입력한 "-"를 구분자로 사용합니다.<br/>shift 키를 사용해 범위를 선택하거나 ctrl 키를 이용해 개별 선택할 수 있습니다.',style:''}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'ipt_separator',style:'width: 100%;margin-bottom: 5px;',placeholder:'seprator를 입력하세요'}},{T:1,N:'xf:group',A:{id:'',style:'margin-bottom: 5px;'},E:[{T:1,N:'xf:select',A:{id:'msb_main',appearance:'minimal',style:'',ref:'',separator:'-'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Red'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'red'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Blue'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'blue'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Green'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'green'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yellow'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'yellow'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Pink'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'pink'}]}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'btn_show',style:'width: 100%;margin-top: 5px;',class:'btn_exam_exec','ev:onclick':'scwin.btn_show_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택한 값 보기'}]}]},{T:1,N:'w2:span',A:{id:'spn_res',label:'',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})
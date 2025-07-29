/*amd /page/P00368.xml 5016 043833e412e670d716ceac751cc58096746bd76a22c8b873f269d29cb81a7dd0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
};

/**
 * CheckBox의 onlabelclick 이벤트
 */
scwin.cbx_main_onlabelclick = function (index, checked, value) {
    // 로그 출력
    let strLog = "[onlabelclick] I: " + index + ", C: " + checked + ", V: " + value;
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

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:'',nextTabID:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'CheckBox의 onlabelclick 이벤트 예제입니다.<br/>onlabelclick 이벤트는 선택 항목의 label을 클릭할 때 발생하는 이벤트입니다.<br/>주의할 점은 checkbox가 클릭 됐을 때는 발생하지 않습니다.<br/>이벤트가 발생할 때 매개변수로는 index, checked, value가 입력되며 각각 아래의 값을 가집니다.<br/>index : 이벤트가 발생한 선택 항목의 index<br/>checked : 이벤트가 발생한 선택 항목의 check 여부<br/>value : 이벤트가 발생한 선택 항목의 value',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'Event: onlabelclick',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'선택 항목의 label을 클릭하면 로그 확인 영역에 로그가 출력됍니다.<br/>(로그 영역엔 각각 index - I, checked - C, value - V로 표기)',style:''}},{T:1,N:'xf:group',A:{id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',cols:'4',id:'cbx_main',ref:'',rows:'',selectedindex:'-1',style:'','ev:onlabelclick':'scwin.cbx_main_onlabelclick'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 2'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 3'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 4'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 4'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 5'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 5'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 6'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 6'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 7'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 7'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 8'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 8'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 9'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 9'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 10'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 11'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 12'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 12'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})
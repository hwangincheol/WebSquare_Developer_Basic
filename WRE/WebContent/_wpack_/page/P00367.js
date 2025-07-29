/*amd /page/P00367.xml 6571 b5f8c0c45014215663411d431c971c30ad195193626f912ef410b6c4ce6dc857 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
};

/**
 * CheckBox의 onchange 이벤트
 */
scwin.cbx_main_onchange = function (info) {
    // 로그 출력
    let strLog = "[onchange] 선택한 값 : " + info.newValue;
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

scwin.btn_check_onclick = function (e) {
    let _value = sbx_value.getValue();

    cbx_main.setValue(_value);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:'',nextTabID:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'CheckBox의 onchange 이벤트 예제입니다.<br/>onchange 이벤트는 CheckBox의 선택 값이 변경될 때 발생하는 이벤트로, <br/>사용자가 화면을 조작해서 발생한 변화와 개발자가 script로 작성한 기능들에 의해 변경된 것을 모두 포함해서 발생합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'Event: onchange',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'버튼의 onclick 이벤트를 활용해 SelectBox에 선택된 값으로 CheckBox의 선택된 값을 변경합니다.<br/>이 때도 화면에서 조작한 것과 마찬가지로 onchange 이벤트가 실행됩니다.',style:''}},{T:1,N:'xf:group',A:{id:'',style:''},E:[{T:1,N:'xf:select1',A:{id:'sbx_value',chooseOption:'true',style:'width: 50px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',chooseOptionLabel:'선택'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'4'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'5'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'6'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'7'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'7'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'8'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'8'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'9'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'9'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'10'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'11'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'12'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',id:'btn_check',style:'',type:'button','ev:onclick':'scwin.btn_check_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Excute: setValue'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',cols:'4',id:'cbx_main',ref:'',rows:'',selectedindex:'-1',style:'','ev:onchange':'scwin.cbx_main_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 2'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 3'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 4'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 4'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 5'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 5'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 6'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 6'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 7'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 7'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 8'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 8'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 9'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 9'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 10'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 11'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Label 12'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Value 12'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})
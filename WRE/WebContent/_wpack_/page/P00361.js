/*amd /page/P00361.xml 4861 a653bf9b9ddbfa72741c607316252b9c5983d677f35b9f7dbaaf14916d2a5411 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};


/**
 * setSelectedIndex 버튼 onclick event
 */
scwin.btn_change_onclick = function (e) {
    var _idx = ipt_index.getValue() | 0;
    
    sbx_select11.setSelectedIndex(_idx)
};


scwin.sbx_select11_onchange = function (info) {
    var _index = this.getSelectedIndex();
    // 로그 출력
    let strLog = "[SelectedIndex] " + _index;
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
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:'',nextTabID:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'SelectBox의 getSelectedIndex와 setSelectedIndex의 예제입니다.<br/>selectedIndex는 현재 선택되어 있는 값은 index를 뜻하며 이름 그대로 현재 index 값을 받거나(get) 설정하는(set) 예제입니다.<br/>getSelectedIndex: 현재 설정되어 있는 값의 index를 받는다.<br/>setSelectedIndex: SelectBox의 선택된 값을 입력한 Index로 바꾼다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'SelectedIndex',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'SelectBox의 선택 값이 변경되면 로그영역에 현재 선택된 index가 출력됩니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'InputBox에 선택 항목의 index 0~4를 입력하고 버튼을 클릭하면 SelectBox의 index가 변경되고 값이 로그 영역에 출력됩니다.',style:''}},{T:1,N:'xf:group',A:{id:'',style:'margin-bottom: 5px;'},E:[{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sbx_select11',ref:'',renderType:'',style:'width: 148px;margin-right: 10px;',submenuSize:'auto','ev:onchange':'scwin.sbx_select11_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Korea'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ko'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'China'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'cn'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Japan'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'jp'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'America'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'us'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:input',A:{maxlength:'1',dataType:'number',editType:'select',adjustMaxLength:'false',style:'width: 20px;text-align: center;margin-right: 5px;',id:'ipt_index',allowChar:'0-4',placeholder:'0'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_change_onclick',style:'width: 123px;',id:'btn_change',type:'button',class:'btn_exam_exec'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setSelectedIndex'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})
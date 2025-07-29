/*amd /page/P00254.xml 4153 f0aab26b847855b86299de698b99c4743edf4e6997729e85b7729d5269323540 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

scwin.tabc_main_onchange = function (tabID, idx, userTabID) {
    // 로그 출력
    let strLog = tabID + " - " + idx + " - "+ userTabID;
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

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:'',nextTabID:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'TabControl의 onchange 이벤트 예제입니다.<br/>onchange 이벤트는 TabContol의 탭을 선택해서 선택된 탭이 바뀐 경우 발생하는 이벤트입니다.<br/>이벤트의 매개변수로는 tabID, idx, userTabID가 입력되며 각각의 설명은 아래와 같습니다.<br/><br/>tabID: 변경된 탭의 엔진 내부에서 사용하는 ID<br/>idx: 변경된 탭의 Index<br/>userTabID: 변경된 탭의 사용자가 지정한 ID(addTab API 사용한 경우 옵션 값 중 ID값에 해당)',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'Event: onchange',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'onchange 이벤트는 다른 탭으로 변경 될 때 발생합니다.<br/>탭을 변경하면 로그 확인 영역에 탭 관련 정보가 출력됩니다.',style:''}},{T:1,N:'xf:group',A:{id:'',style:'margin-bottom: 5px;'},E:[{T:1,N:'w2:tabControl',A:{id:'tabc_main',alwaysDraw:'false',style:'width: 100%;height: 80px;','ev:onchange':'scwin.tabc_main_onchange'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:70px;height:30px;',id:'tabs1',label:'탭 A'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:70px;height:30px',id:'tabs2',label:'탭 B'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'height:50px;',id:'content1'},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'탭 A의 콘텐츠입니다.',style:''}}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'height:50px;',id:'content2'},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'탭 B의 콘텐츠입니다.',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})
/*amd /page/P00251.xml 7876 8ad0c8a19b14e61c9a439dccf9e9b6b8149adbfdb009e039b12971378477fb11 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_list',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'City',name:'Label'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Code',name:'Code'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Seoul'}]},{T:1,N:'Code',E:[{T:4,cdata:'SE'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Paris'}]},{T:1,N:'Code',E:[{T:4,cdata:'PA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'London'}]},{T:1,N:'Code',E:[{T:4,cdata:'LN'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Beijing'}]},{T:1,N:'Code',E:[{T:4,cdata:'BJ'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
    txa_log.setValue("");
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};

/**
 * 영역 [Event: onchange]의
 * Autocomplet [acb1]의 onviewchange
 */
scwin.acb1_onviewchange = function(info) {
    acb_onchange.setValue(info.newValue);
};

/**
 * 영역 [Event: onchange]의
 * Autocomplet [acb_onchange]의 onchange
 */
scwin.acb_onchange_onchange = function(info) {
    //로그 출력
    var strLog = "[Even: onchange] onchange 발생";
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
};

/**
 * 영역 [Event: oncviewhange]의
 * Autocomplet [acb2]의 onviewchange
 */
scwin.acb2_onviewchange = function(info) {
    acb_onviewchange.setValue(info.newValue);
};

/**
 * 영역 [Event: oncviewhange]의
 * Autocomplet [acb_onviewchange]의 onviewchange
 */
scwin.acb_onviewchange_onviewchange = function(info) {
    //로그 출력
    var strLog = "[Even: onvuewchange] onviewchange 발생";
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'AutoComplete의 이벤트 onchange와 이벤트 onviewchange의 동작 차이를 확인하는 예제입니다.<br/>onchange: script 상으로 조작이나 사용자의 화면 조작 등 컴포넌트의 값이 변경되는 경우 발생하는 이벤트<br/>onviewchange: 화면에서 사용자의 조작으로 인해 값이 변경되는 경우 발생하는 이벤트',style:'margin-bottom: 10px;'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Event: onchange',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'AoutoComplete 1번 값을 변경하면 이벤트 onviewchange가 발생해 script 상으로 AutoComplete 2번의 값을 변경합니다.<br/>1. AutoComplete 1번을 선택해 값을 선택하고 "로그 확인" 영역에서 로그를 확인합니다.<br/>2. AutoComplete 2번을 선택해 값을 선택하고 "로그 확인" 영역에서 로그를 확인합니다.',style:''}},{T:1,N:'xf:group',A:{id:'',style:'margin-bottom: 15px;'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',autoFocus:'true',chooseOption:'true',chooseOptionLabel:'AutoComplete 1',class:'',delimiter:' - ',displayMode:'label delim value',editType:'select',id:'acb1',ref:'',search:'start',style:'width: 150px;',submenuSize:'auto',useKeywordHighlight:'false',useLocale:'false','ev:onviewchange':'scwin.acb1_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_list'},E:[{T:1,N:'w2:label',A:{ref:'City'}},{T:1,N:'w2:value',A:{ref:'Code'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'margin-bottom: 15px;'},E:[{T:1,N:'w2:autoComplete',A:{submenuSize:'auto',search:'start',editType:'select',useKeywordHighlight:'false',style:'width: 150px;',id:'acb_onchange',useLocale:'false',class:'',allOption:'',chooseOption:'true',ref:'',autoFocus:'true',chooseOptionLabel:'AutoComplete 2',displayMode:'label delim value',delimiter:' - ','ev:onchange':'scwin.acb_onchange_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_list'},E:[{T:1,N:'w2:label',A:{ref:'City'}},{T:1,N:'w2:value',A:{ref:'Code'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Event: onviewchange',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'AoutoComplete 3번 값을 변경하면 이벤트 onviewchange가 발생해 script 상으로 AutoComplete 4번의 값을 변경합니다.<br/>AoutoComplete 4번은 onviewchange 이벤트가 적용되어 AutoComplete3번의 이벤트로 AutoComplete4번의 값을 변경해도 이벤트는 발생하지 않습니다.<br/>1. AutoComplete 3번을 선택해 값을 선택하고 "로그 확인" 영역에서 로그를 확인합니다.<br/>2. AutoComplete 4번을 선택해 값을 선택하고 "로그 확인" 영역에서 로그를 확인합니다.',style:''}},{T:1,N:'xf:group',A:{id:'',style:'margin-bottom: 15px;'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',autoFocus:'true',chooseOption:'true',chooseOptionLabel:'AutoComplete 3',class:'',delimiter:' - ',displayMode:'label delim value',editType:'select',id:'acb2',ref:'',search:'start',style:'width: 150px;',submenuSize:'auto',useKeywordHighlight:'false',useLocale:'false','ev:onviewchange':'scwin.acb2_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_list'},E:[{T:1,N:'w2:label',A:{ref:'City'}},{T:1,N:'w2:value',A:{ref:'Code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'gvwbox',id:'',style:''}},{T:1,N:'xf:group',A:{id:'',style:'margin-bottom: 15px;'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',autoFocus:'true',chooseOption:'true',chooseOptionLabel:'AutoComplete 4',class:'',delimiter:' - ',displayMode:'label delim value',editType:'select',id:'acb_onviewchange',ref:'',search:'start',style:'width: 150px;',submenuSize:'auto',useKeywordHighlight:'false',useLocale:'false',displayModeSync:'true',searchTarget:'both','ev:onviewchange':'scwin.acb_onviewchange_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_list'},E:[{T:1,N:'w2:label',A:{ref:'City'}},{T:1,N:'w2:value',A:{ref:'Code'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})
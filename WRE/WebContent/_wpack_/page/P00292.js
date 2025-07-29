/*amd /page/P00292.xml 4103 605a3c6fd4869bda23af4df895582c06453de087bbcdd61ec77c3b1f9fa1a751 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    // TabControl 'tac_exam1'의 두번째 탭을 선택합니다.
    tac_exam1.setSelectedTabIndex(1);
};

/**
 * 버튼 [선택된 탭의 ID 반환받기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // TabControl 'tac_exam1'의 선택된 탭의 ID를 반환받습니다.
    let result = tac_exam1.getSelectedTabID();
    // 반환 값 예시) 'tabs2'

    alert("getSelectedTabID: " + result);
    console.log("getSelectedTabID: ", result);
};

/**
 * 버튼 [선택된 탭의 Index 반환받기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // TabControl 'tac_exam1'의 선택된 탭의 Index를 반환받습니다.
    let result = tac_exam1.getSelectedTabIndex();
    // 반환 값 예시) 1
    
    alert("getSelectedTabIndex: " + result);
    console.log("getSelectedTabIndex: ", result);
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'TabControl의 선택된 탭의 ID 또는 탭의 Index를 반환받는 예제입니다.<br/>이 기능은 아래의 함수를 통해 사용할 수 있습니다.<br/>- getSelectedTabID: 선택된 탭의 ID를 반환합니다.<br/>- getSelectedTabIndex: 선택된 탭의 Index를 반환합니다.',style:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:''}},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mw600',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택된 탭의 ID 반환받기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택된 탭의 Index 반환받기'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:''},E:[{T:1,N:'w2:tabControl',A:{confirmTrueAction:'exist',confirmFalseAction:'new',useTabKeyOnly:'true',tabScroll:'',useMoveNextTabFocus:'false',useConfirmMessage:'false',alwaysDraw:'false',style:'position: relative;height: 120px;',id:'tac_exam1',class:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:70px;height:30px;',id:'tabs1',label:'TAB1'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:70px;height:30px;',id:'tabs2',label:'TAB2'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:70px;height:30px',id:'tabs3',label:'TAB3'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'min-height:30px;',id:'content1'},E:[{T:1,N:'w2:textbox',A:{style:'font-size: 1.2em;padding: 6px;color: steelblue;font-weight: bold;',id:'',label:'TAB1 CONTENT'}}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'min-height:30px;',id:'content2'},E:[{T:1,N:'w2:textbox',A:{style:'font-size: 1.2em;padding: 6px;color: salmon;font-weight: bold;',id:'',label:'TAB2 CONTENT'}}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'height:90px',id:'content3'},E:[{T:1,N:'w2:textbox',A:{style:'font-size: 1.2em;padding: 6px;color: forestgreen;font-weight: bold;',id:'',label:'TAB3 CONTENT'}}]}]}]}]}]}]}]}]}]}]})
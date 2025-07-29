/*amd /page/P00293.xml 4193 9ceb24fd59a713dd069bdd15400d0733ff74fde45df74a16571b750db4a649fc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {

};

/**
 * 버튼 [Index가 1인 탭 선택하기 - await 사용] 클릭 시
 * 이 함수는 TabControl의 함수 'setSelectedTabIndex'가 실행이 완료된 후 로직을 구성할 때의 예시입니다.
 */
scwin.btn_exam1_1_onclick = async function (e) {
    // TabControl 'tac_exam1'의 2번째 탭을 선택합니다.
    await tac_exam1.setSelectedTabIndex(1);

    // 탭 선택 이후 진행할 로직을 구성합니다.
};

/**
 * 버튼 [Index가 2인 탭 선택하기] 클릭 시
 * 이 함수는 TabControl의 함수 'setSelectedTabIndex'가 실행의 완료 여부와 무관하게 로직을 구성할 때의 예시입니다.
 */
scwin.btn_exam1_2_onclick = function (e) {
    // TabControl 'tac_exam1'의 3번째 탭을 선택합니다.
    tac_exam1.setSelectedTabIndex(2);

    // 탭의 선택 완료 여부와는 무관하게 로직을 구성합니다.
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'TabControl의 탭 Index로 탭을 선택하는 함수 \'setSelectedTabIndex\' 예시입니다.<br/>이 함수는 비동기로 실행되기 때문에 탭 선택이 완료된 후 로직을 구성해야 한다면 키워드 \'await\'와 \'async\'를 사용해야 합니다.<br/>스크립트에서 작성 예시를 확인할 수 있습니다.',style:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:''}},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mw600',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Index가 1인 탭 선택하기 - await 사용'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Index가 2인 탭 선택하기'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:''},E:[{T:1,N:'w2:tabControl',A:{confirmTrueAction:'exist',confirmFalseAction:'new',useTabKeyOnly:'true',tabScroll:'',useMoveNextTabFocus:'false',useConfirmMessage:'false',alwaysDraw:'false',style:'position: relative;height: 120px;',id:'tac_exam1',class:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:70px;height:30px;',id:'tabs1',label:'TAB1'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:70px;height:30px;',id:'tabs2',label:'TAB2'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:70px;height:30px',id:'tabs3',label:'TAB3'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'min-height:30px;',id:'content1'},E:[{T:1,N:'w2:textbox',A:{style:'font-size: 1.2em;padding: 6px;color: steelblue;font-weight: bold;',id:'',label:'TAB1 CONTENT'}}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'min-height:30px;',id:'content2'},E:[{T:1,N:'w2:textbox',A:{style:'font-size: 1.2em;padding: 6px;color: salmon;font-weight: bold;',id:'',label:'TAB2 CONTENT'}}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'height:90px',id:'content3'},E:[{T:1,N:'w2:textbox',A:{style:'font-size: 1.2em;padding: 6px;color: forestgreen;font-weight: bold;',id:'',label:'TAB3 CONTENT'}}]}]}]}]}]}]}]}]}]}]})
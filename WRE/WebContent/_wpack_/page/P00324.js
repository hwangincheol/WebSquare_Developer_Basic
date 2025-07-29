/*amd /page/P00324.xml 5820 35eb490b2a81e7b68a84cf0dde7c09b985e33744765b56df9db8bf4b83fa7dbe */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    // 테스트를 위해 컴포넌트의 초기 값 할당하기
    scwin.setInitValue();
};

/**
 * 컴포넌트의 초기 값 할당하기
 */
scwin.setInitValue = function () {
    // Input 'ibx_exam1'에 value 할당
    ibx_exam1.setValue("초기 값");
    // InputCalenar 'ica_exam1'에 value 할당
    ica_exam1.setValue("19450815");
    // Selectbox 'sbx_exam1'에 value 할당
    sbx_exam1.setValue("2");
};

/**
 * 버튼 [컴포넌트에 초기 값 할당하기] 클릭 시
 */
scwin.btn_setInitValue_onclick = function(e) {
    // 컴포넌트의 초기 값 할당하기
    scwin.setInitValue();
};

/**
 * 버튼 [각 컴포넌트에 빈 값을 할당하고 CSS class 추가하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function(e) {
    // Input 'ibx_exam1', InputCalendar 'ica_exam1', Selectbox 'sbx_exam1'의 컴포넌트 함수 'setValue', 'addClass'를 호출합니다.
    let arrCmp = $p.$("#ibx_exam1:wq, #ica_exam1:wq, #sbx_exam1:wq").wq("setValue","").wq("addClass","P00324_highlight");
    // ID Selector는 "#"+컴포넌트 ID+":wq"로 구성되어 있습니다. 마지막 ":wq" 문자열은 웹스퀘어 컴포넌트만 추출하기 위한 키워드입니다.

    // 첫 번째 컴포넌트인 Input 'ibx_exam1'에 포커스합니다. (기능을 분리하여 보여주고자 스크립트를 나누어 작성하였습니다. 위의 스크립트에 이어서 작성해도 무관합니다.)
    arrCmp[0].focus();
};

/**
 * 버튼 [추가한 CSS class 제거하기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function(e) {
    // Input 'ibx_exam1', InputCalendar 'ica_exam1', Selectbox 'sbx_exam1'의 컴포넌트 함수 'removeClass'를 호출합니다.
    let arrCmp = $p.$("#ibx_exam1:wq, #ica_exam1:wq, #sbx_exam1:wq").wq("removeClass","P00324_highlight");
    // ID Selector는 "#"+컴포넌트 ID+":wq"로 구성되어 있습니다. 마지막 ":wq" 문자열은 웹스퀘어 컴포넌트만 추출하기 위한 키워드입니다.

    // 첫 번째 컴포넌트인 Input 'ibx_exam1'에 포커스합니다. (기능을 분리하여 보여주고자 스크립트를 나누어 작성하였습니다. 위의 스크립트에 이어서 작성해도 무관합니다.)
    arrCmp[0].focus();
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'jQuery 문법을 사용하여 웹스퀘어 컴포넌트의 함수를 체이닝 기법으로 호출합니다.<br/>이 예제는 컴포넌트의 \'ID Selector\'를 사용하여 구현되었습니다.',style:'margin-bottom: 10px;'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_setInitValue',type:'button','ev:onclick':'scwin.btn_setInitValue_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컴포넌트에 초기 값 할당하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'각 컴포넌트에 빈 값을 할당하고 CSS class 추가하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추가된 CSS class 제거하기'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'mb_def_box nobottom'},E:[{T:1,N:'w2:span',A:{id:'',label:'Input',style:'display: inline-block;width:86px;margin-right: 6px;'}},{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ibx_exam1',class:''}}]},{T:1,N:'xf:group',A:{id:'',class:'mb_def_box nobottom'},E:[{T:1,N:'w2:span',A:{id:'',label:'InputCalendar',style:'display: inline-block;width:86px;margin-right: 6px;'}},{T:1,N:'w2:inputCalendar',A:{footerDiv:'true',rightAlign:'false',focusOnDateSelect:'false',style:'width: 100px;',id:'ica_exam1',renderType:'',renderDiv:'true',class:'tal',calendarValueType:'yearMonthDate'}}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'w2:span',A:{id:'',label:'Selectbox',style:'display: inline-block;width:86px;margin-right: 6px;'}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sbx_exam1',ref:'',renderType:'',style:'width: 100px;',submenuSize:'auto',chooseOptionLabel:'$blank'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'TYPE 1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'TYPE 2'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]}]}]}]}]})
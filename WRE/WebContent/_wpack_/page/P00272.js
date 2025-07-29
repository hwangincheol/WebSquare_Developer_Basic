/*amd /page/P00272.xml 6032 ff7a3f31ebe056768992733f93434626aad28afc46d123ebb40ed6f568fae79e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [Group 비활성화하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // Group 'grp_exam1'을 비활성화합니다.
    grp_exam1.setDisabled(true);
};

/**
 * 버튼 [Group 활성화하기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // Group 'grp_exam1'을 활성화합니다.
    grp_exam1.setDisabled(false);
};

/**
 * 버튼 [버튼 '임시 버튼' 비활성화하기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // Trigger 'btn_temp'을 비활성화합니다.
    btn_temp.setDisabled(true);
};

/**
 * 버튼 [버튼 '임시 버튼' 활성화하기] 클릭 시
 */
scwin.btn_exam2_2_onclick = function (e) {
    // Trigger 'btn_temp'을 활성화합니다.
    btn_temp.setDisabled(false);
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'컴포넌트에 공통으로 제공하는 함수 \'setDisabled\'의 사용 예시입니다.<br/>함수 \'setDisabled\'은 컴포넌트의 비활성화 여부를 지정하는 기능으로, 첫 번째 인자에 전달된 값이 true이면 브라우저에 표시된 \'element\'의 속성 \'disabled\'값을 \'disabled\'로 설정합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style no_padding',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false',id:'btn_exam1_1',style:'',type:'button','ev:onclick':'scwin.btn_exam1_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Group 비활성화하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Group 활성화하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'\'임시 버튼\' 비활성화하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_exam2_2_onclick',id:'btn_exam2_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'\'임시 버튼\' 활성화하기'}]}]}]},{T:1,N:'w2:textbox',A:{class:'com_example_heading mb10',id:'',label:'* 아래의 Table은 Group 컴포넌트를 이용하여 구성되었습니다.',style:''}},{T:1,N:'xf:group',A:{class:'tblbox no_padding no_margin',id:'grp_exam1',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'600',class:'w2tb tbl no_padding P00271',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도서명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'',initValue:'신규 도서',placeholder:'',ref:'',style:'width:100%;'}}]}]},{T:1,N:'xf:group',A:{id:'grp_tr',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'저자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'',initValue:'무명',placeholder:'',ref:'',style:'width:96px;'}},{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false',id:'btn_temp',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'임시 버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출간일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',footerDiv:'true',id:'',ref:'',renderDiv:'true',renderType:'',rightAlign:'false',setCurrentDate:'true',style:'width:96px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'',placeholder:'',ref:'',style:'width:100%;'}}]}]}]}]}]}]}]}]}]}]}]})
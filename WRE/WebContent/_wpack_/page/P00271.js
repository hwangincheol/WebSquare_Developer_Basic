/*amd /page/P00271.xml 8246 f87bb4b6261377ea996ce4c71fef63ec1c8d12f721436629bc609e3c75781622 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [Group 숨기기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // Group 'grp_exam1'을 숨깁니다.
    grp_exam1.hide();
};

/**
 * 버튼 [Group 보이기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // Group 'grp_exam1'을 표시합니다. - CSS 'display' 속성의 설정 값을 빈 문자열로 지정되고 'visibility' 속성은 'visible'로 지정됩니다.
    grp_exam1.show("");
};

/**
 * 버튼 ['저자' 행(tr) 숨기기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // Group 'grp_tr'을 숨깁니다.
    grp_tr.hide();
};

/**
 * 버튼 ['저자' 행(tr) 보이기] 클릭 시
 */
scwin.btn_exam2_2_onclick = function (e) {
    // Group 'grp_tr'을 표시합니다. - CSS 'display' 속성의 설정 값을 빈 문자열로 지정되고 'visibility' 속성은 'visible'로 지정됩니다.
    grp_tr.show("");

    // 또는 다음과 같이 호출합니다. - tr 구성 시 CSS 'display' 속성의 설정 값은 'table-row'입니다.
    // grp_tr.show("table-row");
};

/**
 * 버튼 [버튼 '임시 버튼' 숨기기] 클릭 시
 */
scwin.btn_exam3_1_onclick = function (e) {
    // Trigger 'btn_temp'을 숨깁니다.
    btn_temp.hide();
};

/**
 * 버튼 [버튼 '임시 버튼' 보이기] 클릭 시
 */
scwin.btn_exam3_2_onclick = function (e) {
    // Trigger 'btn_temp'을 표시합니다. - CSS 'display' 속성의 설정 값을 빈 문자열로 지정되고 'visibility' 속성은 'visible'로 지정됩니다.
    btn_temp.show("");
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'컴포넌트에 공통으로 제공하는 함수 \'show\'와 \'hide\'의 사용 예시입니다.<br/>함수 \'show\'와 \'hide\'는 CSS 속성인 \'display\'와 \'visibility\'를 사용하여 컴포넌트를 보이게 하거나 숨기는 기능을 제공합니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'함수 \'hide\'는 브라우저에 표시된 \'element\'의 \'style.visibility\' 값을 \'hidden\'으로 설정하고, \'element\'의 \'style.display\' 값을 \'none\'으로 설정합니다.<br/>함수 \'show\'는 브라우저에 표시된 \'element\'의 \'style.visibility\' 값을 \'visible\'로 설정하고, 첫 번째 인자 값으로 지정한 값을 \'element\'의 \'style.display\'에 할당합니다. 첫 번째 인자 값이 지정되지 않으면 \'block\'이 할당됩니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'또 다른 방법으로는 CSS 파일에 \'display:none;\'을 클래스로 정의한 후, 컴포넌트의 함수 \'addClass\'와 \'removeClass\'를 호출하여 컴포넌트 표시 여부를 설정할 수 있습니다.',style:'',class:'ws_example_txt_desc_info'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style no_padding',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false',id:'btn_exam1_1',style:'',type:'button','ev:onclick':'scwin.btn_exam1_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Group 숨기기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Group 보이기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'두 번째 행(\'저자\' TR 영역) 숨기기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_exam2_2_onclick',id:'btn_exam2_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'두 번째 행(\'저자\' TR 영역) 보이기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_exam3_1_onclick',id:'btn_exam3_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼 \'임시 버튼\' 숨기기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_exam3_2_onclick',id:'btn_exam3_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼 \'임시 버튼\' 보이기'}]}]}]},{T:1,N:'w2:textbox',A:{class:'com_example_heading mb10',id:'',label:'* 아래의 Table은 Group 컴포넌트를 이용하여 구성되었습니다.',style:''}},{T:1,N:'xf:group',A:{id:'',style:'padding:4px;border: 1px solid #ddd;'},E:[{T:1,N:'xf:group',A:{style:'',id:'grp_exam1',class:'tblbox no_padding no_margin'},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'600',tagname:'table',style:'',id:'',class:'w2tb tbl no_padding P00271'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'도서명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{ref:'',style:'width:100%;',id:'',placeholder:'',class:'',initValue:'신규 도서'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'grp_tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'저자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'',style:'width:96px;',id:'',placeholder:'',class:'',initValue:'무명'}},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_temp',type:'button',class:'btn_cm',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'임시 버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'출간일',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{ref:'',footerDiv:'true',rightAlign:'false',focusOnDateSelect:'false',style:'width:96px;',id:'',renderType:'',renderDiv:'true',calendarValueType:'yearMonthDate',setCurrentDate:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'비고',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'',style:'width:100%;',id:'',placeholder:'',class:''}}]}]}]}]}]}]}]}]}]}]}]}]})
/*amd /page/P00129.xml 2817 a55e4ac8052c75253e0a783f78cf92bda4e420fc2f9cd3a8f5e69c84978ef326 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    scwin.setInitPage();
};

/**
 * 화면 초기화
 */
scwin.setInitPage = function () {
    var strDate;

    //서버에서 오늘 날짜 반환 받기.
    strDate = $p.getCurrentServerDate("yyyyMMdd");

    //inputCalendar에 오늘 날짜 할당.
    ica_exam_1.setValue(strDate);
    ica_exam_2.setValue(strDate);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'입력값이 유효한 날짜가 아닌 경우 직전 값으로 복원하는 예제입니다.<br/>이 기능은 속성 "dateValidSet"을 활성화하여 사용할 수 있습니다.',style:'margin-bottom: 10px;'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'속성 dateValidSet 적용',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'유효하지 않은 값이 입력되면 직전 값으로 복원합니다.<br/>직전 값의 유효성 검증은 진행하지 않습니다.',style:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',id:'ica_exam_1',renderDiv:'true',rightAlign:'false',style:'width:110px;min-height: 24px;',dateValidSet:'true',validateOnInput:'true',validateOnInputMobile:'true'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'기본 설정',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',id:'ica_exam_2',renderDiv:'true',rightAlign:'false',style:'width:110px;min-height: 24px;',validateOnInputMobile:'true',validateOnInput:'true'}}]}]}]}]}]}]}]})
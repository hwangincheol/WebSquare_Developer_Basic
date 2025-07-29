/*amd /page/P00133.xml 4243 433dca8e28e6fd8807440d9f7d12478bac86e68d3785c182f9a96337211167ce */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    scwin.setInitPage();
};

/**
 * 화면 초기화
 */
scwin.setInitPage = function () {
    var strYear;

    //서버에서 올해 반환 받기.
    strYear = $p.getCurrentServerDate("yyyy");

    //inputCalendar에 올해 8월 1일 할당하기
    ica_exam_1.setValue(strYear + "0801");
    ica_exam_2.setValue(strYear + "0801");
    ica_exam_3.setValue(strYear + "0801");
};

/**
 * 버튼 [올해의 8월 15일 비활성화] 클릭 시 호출
 */
scwin.btn_ex1_onclick = function (e) {
    var strYear;

    //서버에서 올해 반환 받기.
    strYear = $p.getCurrentServerDate("yyyy");

    //inputCalendar "ica_exam_2"에 올해의 8월 15일 비활성화 하기
    ica_exam_2.disableDate(strYear + "0815");
};

/**
 * 버튼 [올해의 8월 14, 16일 비활성화] 클릭 시 호출
 */
scwin.btn_ex2_onclick = function (e) {
    var strYear;

    //서버에서 올해 반환 받기.
    strYear = $p.getCurrentServerDate("yyyy");

    //inputCalendar "ica_exam_3"에 올해의 8월 14, 16일 비활성화 하기
    ica_exam_3.disableDate(strYear + "0814 " + strYear + "0816"); //날짜는 공백으로 구분
    //ex) ica_exam_3.disableDate("20220814 20220816")


};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'InputCalendar의 캘린더에 지정한 날짜를 비활성화하는 예제입니다.',style:'margin-bottom: 10px;'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'캘린더의 날짜 비활성화화기 - &nbsp;지정일',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',id:'ica_exam_2',renderDiv:'true',rightAlign:'false',style:'width:110px;min-height: 24px;',class:'mr_def'}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'올해의 8월 15일 비활성화'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'캘린더의 날짜 비활성화화기 - &nbsp;지정일(다중)',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',id:'ica_exam_3',renderDiv:'true',rightAlign:'false',style:'width:110px;min-height: 24px;',class:'mr_def'}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'올해의 8월 14, 16일 비활성화'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'기본 설정',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',id:'ica_exam_1',renderDiv:'true',rightAlign:'false',style:'width:110px;min-height: 24px;',validateOnInput:'true',validateOnInputMobile:'true'}}]}]}]}]}]}]}]})
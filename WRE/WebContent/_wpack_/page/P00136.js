/*amd /page/P00136.xml 2671 f1b1f02b936c03e3fba4a551d81c2c75c29c3703256c112ea04872aced2398f4 */
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
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'InputCalendar의 캘린더의 연도와 월을 선택하는 UI를 지정하는 예제입니다.<br/>(기본 설정) select : 연도와 월 선택하는 UI를 drop down 형태로 구성<br/>dynamic : 연도와 월을 선택하는 UI를 list 형태로 구성 ',style:'margin-bottom: 10px;'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(기본 설정) DropDown 형태의 UI',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',id:'ica_exam_1',rightAlign:'false',style:'width:110px;min-height: 24px;',validateOnInput:'true',validateOnInputMobile:'true',renderDiv:'true'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'List 형태의 UI',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',id:'ica_exam_2',style:'width:110px;min-height: 24px;',validateOnInput:'true',validateOnInputMobile:'true',pickerType:'dynamic',dynamicHeaderOrder:'year',renderDiv:'true'}}]}]}]}]}]}]}]})
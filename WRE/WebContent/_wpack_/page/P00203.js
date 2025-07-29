/*amd /page/P00203.xml 3385 f9d72a471314977b968861709eeb797a052ee764d79ea2bb6302d6876a3b5b60 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    ica_exam_2.setValue("2020-11-30 12:12:12");
};

// trigger1 버튼의 onClick 함수
scwin.trigger1_onclick = function (e) {
    let options = {
        ioFormat: "MMddyyyy", // Date input format 날짜 입력 순서
        displayFormat: "MM-dd-yyyy", // Date display in input box 입력란에 표시되는 날짜 순서
        calendarDisplayFormat: "yyyy(Y) - MM(M) - dd(D)" // Date display on Calendar 달력에 표시되는 날짜 순서
    };

    // InputCalendar의 날짜 표시형식을 지정한다.
    ica_exam_2.setIoFormat(options);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'InputCalendar의 날짜 입력 형식, 입력란의 날짜 출력 형식, 달력의 날짜 출력 형식에 관한 예제입니다.',style:'margin-bottom: 10px;'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(속성 기본) ioFormat = "", displayFormat = "", calendarDisplayFormat = ""',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'기본 포맷으로 입, 출력 형태는 yyyyMMdd 이다.',style:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',id:'ica_exam_1',rightAlign:'false',style:'width:100px;min-height: 24px;',renderDiv:'true',class:'mr_def'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(속성 변경) ioFormat = "MMddyyyy", displayFormat = "MM-dd-yyyy", calendarDisplayFormat = "yyyy(Y) - MM(M) - dd(D)"',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'setIoFormat버튼을 클릭 시 입, 출력 형태가 MMddyyyy로 바뀐다.',style:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',id:'ica_exam_2',rightAlign:'false',style:'width:100px;min-height: 24px;',renderDiv:'true',class:'mr_def',dayMoveFixed:'true'}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec','ev:onclick':'scwin.trigger1_onclick',id:'trigger1',localeRef:'',style:'min-width: 30px;height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setIoFormat'}]}]}]}]}]}]}]}]}]})
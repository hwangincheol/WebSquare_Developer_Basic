/*amd /page/P00373.xml 6296 39a1bd6b6260bfce097b643aff0cdbe0dd1afec40a08c4d557c6f18a48b7af1e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    // InputCalendar에 할당할 날짜 문자열. 연월일시분초(yyyyMMddHHmmss)
    let strCurDate = "19450815235959";

    // InputCalendar 'ica_exam1'의 초기 값 할당
    // calendarValueType="yearMonthDate" : 연월일(yyyyMMdd)
    ica_exam1.setValue(strCurDate.substr(0, 8));

    // InputCalendar 'ica_exam2'의 초기 값 할당
    // calendarValueType="yearMonth" : 연월(yyyyMM)
    ica_exam2.setValue(strCurDate.substr(0, 6));

    // InputCalendar 'ica_exam3'의 초기 값 할당
    // calendarValueType="year" : 연도(yyyy)
    ica_exam3.setValue(strCurDate.substr(0, 4));

    // InputCalendar 'ica_exam4'의 초기 값 할당
    // calendarValueType="yearMonthDateHour" : 연월일시(yyyyMMddHH)
    ica_exam4.setValue(strCurDate.substr(0, 10));

    // InputCalendar 'ica_exam5'의 초기 값 할당
    // calendarValueType="yearMonthDateTime" : 연월일시분(yyyyMMddHHmm)
    ica_exam5.setValue(strCurDate.substr(0, 12));

    // InputCalendar 'ica_exam6'의 초기 값 할당
    // calendarValueType="yearMonthDateTimeSec" : 연월일시분초(yyyyMMddHHmmss)
    ica_exam6.setValue(strCurDate.substr(0, 14));
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents P00373',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'InputCalendar의 속성 \'calendarValueType\'의 설정 값에 따른 기능을 비교하는 예제입니다.<br/>이 속성을 통해 달력의 구성과 입력 필드의 출력 형식을 결정할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'설정 값에 따른 구성은 다음과 같습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'- yearMonthDate: [default] 입력 필드의 날짜 형식은 \'yyyy-MM-dd\'이고 달력의 형태는 연도, 월, 일을 선택할 수 있도록 구성됩니다.<br/>- yearMonth: 입력 필드의 날짜 형식은 \'yyyy-MM\'이고 달력의 형태는 연도, 월을 선택할 수 있도록 구성됩니다.<br/>- year: 입력 필드의 날짜 형식은 \'yyyy\'이고 달력의 형태는 연도를 선택할 수 있도록 구성됩니다.<br/>- yearMonthDateHour: 입력 필드의 날짜 형식은 \'yyyy-MM-dd HH\'이고 달력의 형태는 연도, 월, 일, 시를 선택할 수 있도록 구성됩니다.<br/>- yearMonthDateTime: 입력 필드의 날짜 형식은 \'yyyy-MM-dd HH:mm\'이고 달력의 형태는 연도, 월, 일, 시, 분을 선택할 수 있도록 구성됩니다.<br/>- yearMonthDateTimeSec: 입력 필드의 날짜 형식은 \'yyyy-MM-dd HH:mm:ss\'이고 달력의 형태는 연도, 월, 일, 시, 분, 초를 선택할 수 있도록 구성됩니다',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'예제의 초기 날짜 값에 의해 InputCalenar의 속성 \'minYear\'의 설정 값이 \'1944\'로 지정되었습니다. 이 속성의 기본 설정 값은 \'1978\'입니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'입력 필드에 출력된 날짜 형식과 달력 아이콘을 클릭하여 달력의 형식을 비교합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'속성 \'calendarValueType\' 설정 값 비교하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'ws_exam_txt_list',id:'',label:'(기본 설정 값) yearMonthDate',style:'display: inline-block;width:100%;margin-bottom:2px;'}},{T:1,N:'w2:inputCalendar',A:{id:'ica_exam1',style:'width: 100px;height: 26px;',calendarValueType:'yearMonthDate',minYear:'1944'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'ws_exam_txt_list',id:'',label:'yearMonth',style:'display: inline-block;width:100%;margin-bottom:2px;'}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',id:'ica_exam2',style:'width: 80px;height: 26px;',minYear:'1944'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'ws_exam_txt_list',id:'',label:'year',style:'display: inline-block;width:100%;margin-bottom:2px;'}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',id:'ica_exam3',style:'width: 60px;height: 26px;',minYear:'1944'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'ws_exam_txt_list',id:'',label:'yearMonthDateHour',style:'display: inline-block;width:100%;margin-bottom:2px;'}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDateHour',id:'ica_exam4',style:'width: 116px;height: 26px;',minYear:'1944'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'ws_exam_txt_list',id:'',label:'yearMonthDateTime',style:'display: inline-block;width:100%;margin-bottom:2px;'}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDateTime',id:'ica_exam5',style:'width: 130px;height: 26px;',minYear:'1944'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'ws_exam_txt_list',id:'',label:'yearMonthDateTimeSec',style:'display: inline-block;width:100%;margin-bottom:2px;'}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDateTimeSec',id:'ica_exam6',style:'width: 146px;height: 26px;',minYear:'1944'}}]}]}]}]}]}]}]}]})
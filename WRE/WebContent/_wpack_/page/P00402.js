/*amd /page/P00402.xml 4735 b9335ce8a5ba5c6378b153afb04363e537424e4f6042124a868ec75ff67f9563 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    // InputCalendar 'ica_exam_1'에 초기 값 할당
    ica_exam_1.setValue("19450815");

    // InputCalendar 'ica_exam_1'에 입력된 값을 음력으로 변환하여 출력하기
    scwin.ica_exam_1_toLunar();
};

/**
 * 버튼 [음력으로 반환받기] 클릭 시
 */
scwin.btn_ex1_1_onclick = function (e) {
    // InputCalendar 'ica_exam_1'에 입력된 값을 음력으로 변환하여 출력하기
    scwin.ica_exam_1_toLunar();
};

/**
 * InputCalendar 'ica_exam_1'에 입력된 값을 음력으로 변환하여 출력하기
 */
scwin.ica_exam_1_toLunar = function () {
    // InputCalendar 'ica_exam_1'의 입력 값 반환
    let strDate = ica_exam_1.getValue().replace(new RegExp("[^0-9]", "g"), "");

    // 길이로 유효성 체크
    if (strDate.length != 8 || strDate.indexOf("0") == 0) {
        txt_result1.setValue("오류: InputCalenar의 입력 값은 'yyyyMMdd' 형식의 유효한 날짜이어야 합니다. 입력 예시) 19450815");
        ica_exam_1.focus();
        return;
    }

    let result; // 결과 문자열
    let isError = false; // 오류 여부 판단

    try {
        // InputCalendar 'ica_exam_1'의 입력 값을 음력 날짜 문자열로 반환받기
        result = WebSquare.date.toLunar(strDate);

        // WebSquare.date.toLunar('19450815');
        // 반환 예시) 19450708

        // 결과 값이 undefined으로 반환되는 경우 오류 처리
        if (!result) { isError = true; }

    } catch (ex) {
        isError = true;
        console.error(ex);
    }

    if (isError === true) {
        result = "음력 날짜 변환 중 오류가 발생하였습니다. InputCalenar의 입력 값은 'yyyyMMdd' 형식의 유효한 날짜이어야 합니다. 입력 예시) 19450815";
        ica_exam_1.focus();
    }

    // 결과 문자열 출력
    txt_result1.setValue(result);
};

/**
 * InputCalendar 'ica_exam_1'의 값이 변경되었을 때 이벤트
 */
scwin.ica_exam_1_onviewchange = function (info) {
    // 결과 값을 빈 값으로 초기화
    txt_result1.setValue("");
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'날짜(yyyyMMdd) 형식의 문자열을 음력 날짜로 변환하는예제입니다.<br/>이 기능은 함수 \'WebSquare.date.toLunar\'를 사용하여 구현할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',label:'양력 날짜로 변환하는 경우 함수 \'WebSquare.date.toSolar\'로 구현할 수 있습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'버튼을 클릭하면 InputCalendar에 입력된 값이 음력으로 변환되어 \'실행 결과\'에 출력됩니다.',style:''}},{T:1,N:'xf:group',A:{class:'no_bottom',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'mr_def',focusOnDateSelect:'false',id:'ica_exam_1',minYear:'1900',renderDiv:'true',rightAlign:'false',style:'width:100px;','ev:onviewchange':'scwin.ica_exam_1_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_1_onclick',id:'btn_exam1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'음력으로 반환받기'}]}]}]},{T:1,N:'xf:group',A:{class:'no_bottom ws5_example_txt_normal',style:''},E:[{T:1,N:'w2:span',A:{class:'txt_bold mr_def',label:'실행 결과:',style:'display: inline-block;min-width:12px;line-height: 1.5em;'}},{T:1,N:'w2:span',A:{class:'',dataType:'text',label:'결과 값 출력 영역',style:'display: inline-block;min-width:60px;line-height: 1.5em;',id:'txt_result1'}}]}]}]}]}]}]}]}]})
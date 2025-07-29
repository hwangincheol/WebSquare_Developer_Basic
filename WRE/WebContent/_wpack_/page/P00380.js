/*amd /page/P00380.xml 13675 708e7d10da07ef9c74f3f7262c11f7c4c509883e29e8b10132bc0c368b618d32 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_exam1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'key_1',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key_2',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'key_1',E:[{T:4,cdata:'금요일'}]},{T:1,N:'key_2',E:[{T:4,cdata:'월요일'}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_exam1',saveRemovedData:'true',initRowPosition:'0'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col_1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col_2',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col_1',E:[{T:4,cdata:'금요일'}]},{T:1,N:'col_2',E:[{T:4,cdata:'월요일'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col_1',E:[{T:4,cdata:'화요일'}]},{T:1,N:'col_2',E:[{T:4,cdata:'일요일'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    // 로그 출력 - DataMap의 데이터
    scwin.printDataMapWithMessage();

    // 로그 출력 - DataMap의 데이터
    scwin.printDataListWithMessage();
};

/**
 * 로그 출력용 Textrea의 Value 삭제하기
 */
scwin.btn_clearLog_onclick = function (e) {
    let strTargetId = this.getUserData("userData1");
    let cmpTarget;
    if (strTargetId) {
        cmpTarget = $p.getComponentById(strTargetId) || txa_log;
    } else {
        cmpTarget = txa_log;
    }
    //textarea value를 빈문자열로 할당.
    cmpTarget.setValue("");
};

/**
 * 버튼 [1-1 DataMap 'dma_exam1'의 키 'key_1'의 값을 '목요일'로 변경하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // DataMap 'dma_exam1'의 키 'key_1'의 값을 '목요일'로 변경합니다.
    dma_exam1.set("key_1", "목요일");

    // 로그 출력 - DataMap의 데이터
    scwin.printDataMapWithMessage('스크립트 실행 : dma_exam1.set("key_1", "목요일");');
};

/**
 * 버튼 [1-2 Input의 값을 '토요일'로 변경하기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // Input 'ibx_exam1'의 값을 '토요일'로 변경합니다.
    ibx_exam1.setValue("토요일");

    // 로그 출력 - DataMap의 데이터
    scwin.printDataMapWithMessage('스크립트 실행 : ibx_exam1.setValue("토요일");');
};

/**
 * 버튼 [1-3 속성 'ref'를 DataMap 'dma_exam1'의 키 'key_2'로 변경하기] 클릭 시
 */
scwin.btn_exam1_3_onclick = function (e) {
    // Input 'ibx_exam1'의 속성 'ref'의 설정 값을 DataMap 'dma_exam1'의 키 'key_2'로 변경합니다.
    // 설정 값의 'data:'는 고정 값입니다.
    ibx_exam1.setRef("data:dma_exam1.key_2");

    // 로그 출력 - DataMap의 데이터
    scwin.printDataMapWithMessage('스크립트 실행 : ibx_exam1.setRef("data:dma_exam1.key_2");');
};

/**
 * 버튼 [DataMap의 데이터 확인하기] 클릭 시
 */
scwin.btn_printDataMapWithMessage_onclick = function (e) {
    // 로그 출력 - DataMap의 데이터
    scwin.printDataMapWithMessage();
};

/**
 * DataMap 'dma_exam1'의 데이터를 JSON 형식으로 출력합니다.
 */
scwin.printDataMapWithMessage = function (argMsg) {
    // DataMap 'dma_exam1'의 데이터를 JSON 형식으로 반환받습니다.
    let result = dma_exam1.getJSON();

    // 로그 출력
    if (argMsg && typeof argMsg == "string") {
        $c.frame.printExampleLog(argMsg, txa_log_1, false);
        console.log(argMsg);
    }
    let strLog = '# DataMap "dma_exam1"의 JSON 형식의 데이터\n';
    $c.frame.printExampleLog(strLog + JSON.stringify(result, null, "  "), txa_log_1, false);
    console.log(strLog);
    console.log(result);
};

/**
 * 버튼 [2-1 DataList 'dlt_exam1'의 키 'col_1'의 값을 '목요일'로 변경하기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // DataList 'dlt_exam1'의 1번째 로우의 컬럼 'col_1'의 값을 '목요일'로 변경합니다.
    dlt_exam1.setCellData(0, "col_1", "목요일");

    // 로그 출력 - DataList의 데이터
    scwin.printDataListWithMessage('스크립트 실행 : dlt_exam1.setCellData(0, "col_1", "목요일");');
};

/**
 * 버튼 [2-2 Input의 값을 '토요일'로 변경하기] 클릭 시
 */
scwin.btn_exam2_2_onclick = function (e) {
    // Input 'ibx_exam2'의 값을 '토요일'로 변경합니다.
    ibx_exam2.setValue("토요일");

    // 로그 출력 - DataList의 데이터
    scwin.printDataListWithMessage('스크립트 실행 : ibx_exam2.setValue("토요일");');
};

/**
 * 버튼 [2-3 속성 'ref'를 DataList 'dlt_exam1'의 첫 번째 로우의 컬럼 'col_2'로 변경하기] 클릭 시
 */
scwin.btn_exam2_3_onclick = function (e) {
    // Input 'ibx_exam2'의 속성 'ref'의 설정 값을 DataList 'dlt_exam1'의 키 'col_2'로 변경합니다.
    // 설정 값의 'data:'는 고정 값입니다.
    ibx_exam2.setRef("data:dlt_exam1.col_2");

    // 로그 출력 - DataList의 데이터
    scwin.printDataListWithMessage('스크립트 실행 : ibx_exam2.setRef("data:dlt_exam1.col_2");');
};

/**
 * 버튼 [DataList의 데이터 확인하기] 클릭 시
 */
scwin.btn_printDataListWithMessage_onclick = function (e) {
    // 로그 출력 - DataList의 데이터
    scwin.printDataListWithMessage();
};

/**
 * DataList 'dlt_exam1'의 데이터를 JSON 형식으로 출력합니다.
 */
scwin.printDataListWithMessage = function (argMsg) {
    // DataList 'dlt_exam1'의 데이터를 JSON 형식으로 반환받습니다.
    let result = dlt_exam1.getAllJSON();

    // 로그 출력
    if (argMsg && typeof argMsg == "string") {
        $c.frame.printExampleLog(argMsg, txa_log_2, false);
        console.log(argMsg);
    }

    let strLog = '# DataList "dlt_exam1"의 JSON 형식의 데이터\n';
    $c.frame.printExampleLog(strLog + JSON.stringify(result, null, "  "), txa_log_2, false);
    console.log(strLog);
    console.log(result);
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'Input의 속성 \'ref\'와 함수 \'setRef\' 예제입니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'속성 \'ref\'는 컴포넌트의 값(value)과 데이터 객체의 키 또는 컬럼의 값(value)을 연결하는 기능을 제공합니다. 데이터 객체와 연결되면 값이 동기화됩니다.<br/>속성의 설정 값 구조는 모든 데이터 객체가 동일합니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'함수 \'setRef\'는 속성 \'ref\'의 값을 변경하는 기능을 제공합니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'\'ref\'의 설정 값이 리스트(다건)형 데이터 객체의 컬럼이라면, 데이터 객체의 선택된 행의 컬럼의 값과 연결됩니다.<br/>대표적으로 \'DataList\', \'AliasDataList\'가 리스트형 데이터 객체에 해당합니다.<br/>리스트 형식의 데이터 객체에서 행을 선택하는 기능은 데이터 객체의 속성 \'initRowPosition\'과 함수 \'setRowPosition\'을 통해 제공됩니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'Input의 속성 \'ref\'의 유의 사항은 다음과 같습니다.<br/>사용자가 입력 필드에 값을 입력하는 경우, 값이 동기화되는 시점은 입력 필드에서 포커스가 사라질 때입니다.<br/>값이 입력될 때 동기화하는 기능을 적용할 때는, 속성 \'refSync\'을 \'true\'으로 설정합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'버튼에 표시된 순서에 따라 버튼을 클릭하여 실행 결과를 확인합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'DataMap의 \'key\'와 연결',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'Input의 속성 \'ref\'의 초기 설정 값은 DataMap \'dma_exam1\'의 키 \'key_1\'입니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_printDataMapWithMessage_onclick',id:'btn_printDataMap',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DataMap의 데이터 확인하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1-1 DataMap \'dma_exam1\'의 키 \'key_1\'의 값을 \'목요일\'로 변경하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1-2 Input의 값을 \'토요일\'로 변경하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',id:'btn_exam1_3',style:'',type:'button','ev:onclick':'scwin.btn_exam1_3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1-3 속성 \'ref\'를 DataMap \'dma_exam1\'의 키 \'key_2\'로 변경하기'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'mb_def_box'},E:[{T:1,N:'xf:input',A:{ref:'data:dma_exam1.key_1',style:'width:110px;height: 26px;margin-right: 8px;',id:'ibx_exam1'}}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',label:'로그 확인'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',title:'로그 삭제',type:'button',userData1:'txa_log_1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_1',spellcheck:'false',style:'width: 100%;height: 110px;'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'DataList의 \'column\'과 연결',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'Input의 속성 \'ref\'의 초기 설정 값은 DataList \'dlt_exam1\'의 첫 번째 로우의 컬럼 \'col_1\'입니다.<br/>(DataList \'dlt_exam1\'의 속성 \'initRowPosition\'이 \'0\'으로 설정되었습니다.)',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.printDataListWithMessage',id:'btn_printDataList',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DataList의 데이터 확인하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2-1 DataList \'dlt_exam1\'의 첫 번째 로우의 컬럼 \'col_1\'의 값을 \'목요일\'로 변경하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam2_2_onclick',id:'btn_exam2_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2-2 Input의 값을 \'토요일\'로 변경하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam2_3_onclick',id:'btn_exam2_3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2-3 속성 \'ref\'를 DataList \'dlt_exam1\'의 첫 번째 로우의 컬럼 \'col_2\'로 변경하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box',id:''},E:[{T:1,N:'xf:input',A:{id:'ibx_exam2',ref:'data:dlt_exam1.col_1',style:'width:110px;height: 26px;margin-right: 8px;'}}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',label:'로그 확인'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',title:'로그 삭제',type:'button',userData1:'txa_log_2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_2',spellcheck:'false',style:'width: 100%;height: 220px;'}}]}]}]}]}]}]}]})
/*amd /page/P00423.xml 8543 f5246512e7bbcceb5513fdb798a08d4d7c289f72ac5fec5a229a36d0ab64ece3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_exam1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'type1',name:'예시유형1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'type2',name:'예시유형2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    // 최초 선택 값 로그 출력
    scwin.printInitLog();
};

scwin.printInitLog = function () {
    // 로그 출력
    let strLog = '# 최초 선택 값 확인\n';
    strLog += "선택된 값 : " + acb_exam1.getValue();
    strLog += "\n";
    strLog += "선택된 인덱스 : " + acb_exam1.getSelectedIndex();

    $c.frame.printExampleLog(strLog, txa_log_1, false);
    console.log(strLog);
};

/**
 * [공통] 로그 출력용 Textrea의 Value 삭제하기
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
 * 버튼 [1.1 선택된 값과 인덱스 확인하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // 로그 출력
    let strLog = '# 버튼 [' + this.getValue() + '] 클릭\n';
    strLog += "선택된 값 : " + acb_exam1.getValue();
    strLog += "\n";
    strLog += "선택된 인덱스 : " + acb_exam1.getSelectedIndex();

    $c.frame.printExampleLog(strLog, txa_log_1, false);
    console.log(strLog);
};

/**
 * 버튼 [2.2 함수 setValue("") 실행하기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    acb_exam1.setValue("");

    // 로그 출력
    let strLog = '# 버튼 [' + this.getValue() + '] 클릭\n';
    strLog += "선택된 값 : " + acb_exam1.getValue();
    strLog += "\n";
    strLog += "선택된 인덱스 : " + acb_exam1.getSelectedIndex();

    $c.frame.printExampleLog(strLog, txa_log_1, false);
    console.log(strLog);
};

/**
 * 버튼 [1.3 목록에 없는 항목 설정하기 - 함수 setValue("NONE") 실행] 클릭 시
 */
scwin.btn_exam1_3_onclick = function (e) {
    acb_exam1.setValue("NONE");

    // 로그 출력
    let strLog = '# 버튼 [' + this.getValue() + '] 클릭\n';
    strLog += "선택된 값 : " + acb_exam1.getValue();
    strLog += "\n";
    strLog += "선택된 인덱스 : " + acb_exam1.getSelectedIndex();

    $c.frame.printExampleLog(strLog, txa_log_1, false);
    console.log(strLog);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'최초 로딩 시 항목을 선택하지 않는 예제입니다.<br/>이 예제는 컴포넌트의 값(value)이 설정되지 않았거나 빈 문자열로 연결(속성 \'ref\' 설정)된 경우을 대상으로 작성되었습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'이 기능은 속성 \'emptyItem\'의 설정 값을 \'true\'로 지정하고 속성 \'emptyIndex\'의 설정을 통해 구현할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'(유의 사항)<br/>- 속성 \'emptyIndex\'는 최초 로딩 시에만 적용됩니다. 예를 들어 \'1\'로 설정 값을 지정했다면 최초 로딩 시 두 번째 항목이 표시됩니다. 이후 스크립트를 통해 항목에 없는 값을 할당하면 빈 항목이 표시됩니다.<br/>- 속성 \'emptyItem\'이 \'false\'로 설정되었을 때, 사용자가 직접 값을 입력한 경우에는 속성 \'noResult\'의 설정 값에 따라 동작됩니다.<br/>- 만약 속성 \'ref\'를 설정하지 않고 최초 로딩 시에만 빈 항목을 선택하는 경우라면, 속성 \'emptyIndex\'만 적용하여 구현할 수도 있습니다.<br/>&nbsp;&nbsp;(권장은 속성 \'emptyItem\'의 설정 값을 \'true\'로 설정해서 함께 사용하는 것입니다.)',style:''}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'details'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'속성별 설정 값 보기',style:'',tagname:'summary'}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'1. [속성] emptyIndex<br/>- [default: 0] 최초 AutoComplete를 브라우저에 구성 때 선택할 항목의 인덱스를 지정합니다. 설정 값이 "-1"이면 빈 항목이 선택되며, 속성 \'emptyItem\'을 "true"로 설정해야 선택 값이 빈 문자열로 적용됩니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'2. [속성] emptyItem<br/>(setValue, setSelectedIndex 등을 사용하여) 선택 항목에 없는 value나 index가 설정된 경우 동작 방식을 설정합니다.<br/>- false : [default] 첫 번째 항목이 선택됩니다. 속성 \'noResult\'의 설정 값은 무시됩니다.<br/>- true : 빈 항목(label과 value가 빈 문자열로 적용)이 선택됩니다. 속성 \'noResult\'의 설정 값은 \'clear\'로 적용됩니다.',style:''}}]},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'항목을 선택하고 버튼을 클릭하여 실행 결과를 비교합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'emptyItem="true" emptyIndex="-1"',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1.1 선택된 값과 인덱스 확인하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false',id:'btn_exam1_2',style:'',type:'button','ev:onclick':'scwin.btn_exam1_2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1.2 함수 setValue("") 실행하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false',id:'btn_exam1_3',style:'',type:'button','ev:onclick':'scwin.btn_exam1_3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1.3 목록에 없는 항목 설정하기 - 함수 setValue("NONE") 실행'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'mb_def_box nobottom'},E:[{T:1,N:'w2:autoComplete',A:{emptyIndex:'-1',emptyItem:'true',id:'acb_exam1',ref:'',style:'width: 120px;height:26px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Apple'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Apple'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Banana'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Banana'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Cat'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Cat'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Dog'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Dog'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Happy'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Happy'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',label:'로그 확인'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',title:'로그 삭제',type:'button',userData1:'txa_log_1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_1',spellcheck:'false',style:'width: 100%;height: 120px;'}}]}]}]}]}]}]}]})
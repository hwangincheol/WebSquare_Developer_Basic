/*amd /page/P00342.xml 7526 ecd29e54efaeb38afe16b8d75cb3cee7615e0a733292e4e230edb6d952426b55 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_exam1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'categoryLabel',name:'분류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'label',name:'도서명',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'categoryLabel',E:[{T:4,cdata:'인문'}]},{T:1,N:'label',E:[{T:4,cdata:'내가 틀릴 수도 있습니다'}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo'},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {

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
 * 버튼 [2. 스크립트로 데이터 할당하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // DataMap 'dma_exam1'에 key 'label'의 값을 할당합니다.
    dma_exam1.setJSON({
        "label": "그렇게 인생은 이야기가 된다"
    });

    // 로그 출력
    let strLog = '# 스크립트 실행\ndma_exam1.setJSON({ "label" : "그렇게 인생은 이야기가 된다" });';
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    console.log(strLog);
};

/**
 * 버튼 [4. 스크립트로 데이터(도서명) 할당하고 원본 데이터로 지정하기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // DataMap 'dma_exam1'에 key 'label'의 값을 할당합니다.
    dma_exam1.setJSON({
        "label": "사람일까 상황일까"
    });

    // DataMap 'dma_exam1'의 현재 데이터를 원본(Original) 데이터로 지정합니다. 데이터의 상태 값은 모두 초기화됩니다.
    dma_exam1.reform();

    // 로그 출력
    let strLog = '# 스크립트 실행\ndma_exam1.setJSON({ "label" : "사람일까 상황일까" });\ndma_exam1.reform();';
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    console.log(strLog);
};

/**
 * 버튼 [1. 변경된 데이터의 'key' 목록 반환받기], 
 * 버튼 [3. 변경된 데이터의 'key' 목록 반환받기],
 * 버튼 [5. 변경된 데이터의 'key' 목록 반환받기]
 * 클릭 시
 */
scwin.dma_exam1_getModifiedKey = function (e) {
    // DataMap 'dma_exam1'의 수정된 'key' 목록 반환받기
    let result = dma_exam1.getModifiedKey();

    // 로그 출력
    let strLog = '# 스크립트 dma_exam1.getModifiedKey(); 반환 값: \n';
    $c.frame.printExampleLog(strLog + JSON.stringify(result), txa_log_1, false);
    console.log(strLog, result);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents'},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc'},E:[{T:1,N:'w2:textbox',A:{escape:'false',label:'DataMap의 함수 \'setJSON\'와 함수 \'reform\'의 예제입니다.<br/>함수 \'setJSON\'은 JSON 형식의 데이터로 DataMap의 데이터를 할당할 수 있습니다. DataMap에 정의되지 않은 \'Key\'는 무시됩니다.<br/>함수 \'reform\'은 DataMap의 상태를 초기화하고 현재의 데이터를 원본 데이터로 설정합니다.<br/>함수 \'setJSON\'으로 할당된 데이터는 원본 데이터로 지정되지 않기 때문에, 원본 데이터로 지정하기 위해서는 함수 \'reform\'을 함께 사용해야 합니다.',class:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'버튼을 순서대로 클릭하여 테스트합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap'},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style'},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.dma_exam1_getModifiedKey',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1. 변경된 데이터의 \'key\' 목록 반환받기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2. 스크립트로 데이터(도서명) 할당하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.dma_exam1_getModifiedKey',id:'btn_exam1_2',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3. 변경된 데이터의 \'key\' 목록 반환받기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'4. 스크립트로 데이터(도서명) 할당하고 원본 데이터로 지정하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.dma_exam1_getModifiedKey',id:'btn_exam2_2',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'5. 변경된 데이터의 \'key\' 목록 반환받기'}]}]}]},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',label:'아래는 DataMap의 데이터를 확인하기 위해 구성된 출력 폼입니다.'}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:group',A:{class:'',style:'margin-bottom: 0px !important;'},E:[{T:1,N:'w2:span',A:{class:'txt_bold',label:'분류',style:'background-color:#eee;display: inline-block;padding-left:8px;width:42px;margin-right:6px;'}},{T:1,N:'w2:span',A:{class:'',label:'',style:'display: inline-block;line-height: 26px;min-width:100px;',ref:'data:dma_exam1.categoryLabel'}}]},{T:1,N:'xf:group',A:{class:''},E:[{T:1,N:'w2:span',A:{class:'txt_bold',label:'도서명',style:'background-color:#eee;display: inline-block;padding-left:8px;width:42px;margin-right:6px;'}},{T:1,N:'w2:span',A:{class:'',label:'',ref:'data:dma_exam1.label',style:'display: inline-block;line-height: 26px;min-width:100px;'}}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',label:'로그 확인'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',title:'로그 삭제',type:'button',userData1:'txa_log_1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_1',spellcheck:'false',style:'width: 100%;height: 110px;'}}]}]}]}]}]}]}]})
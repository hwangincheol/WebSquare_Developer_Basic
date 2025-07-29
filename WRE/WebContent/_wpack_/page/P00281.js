/*amd /page/P00281.xml 18315 22905ea87c6fc4bdc9dc00103abbe6cc830f8a0f0709fa7c7e12040c575eadb3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}},{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    // DataList에 초기 데이터 할당
    scwin.initData();
};

/**
 * DataList 'dlt_books_1'에 데이터 할당하기
 */
scwin.initData = function () {
    // DataList 'dlt_books_1'에 데이터 할당하기
    let data = [
        { "label": "공정하다는 착각", "categoryLabel": "인문" },
        { "label": "기분을 관리하면 인생이 관리된다", "categoryLabel": "시/에세이" },
        { "label": "만일 내가 인생을 다시 산다면", "categoryLabel": "인문" },
        { "label": "인생 수업", "categoryLabel": "시/에세이" },
        { "label": "내가 틀릴 수도 있습니다", "categoryLabel": "인문" },
        { "label": "무엇이 옳은가", "categoryLabel": "인문" },
        { "label": "문명의 붕괴(Collapse)", "categoryLabel": "역사/문화" },
        { "label": "불편한 편의점", "categoryLabel": "소설" },
        { "label": "우리는 여전히 삶을 사랑하는가", "categoryLabel": "인문" },
        { "label": "책들의 부엌", "categoryLabel": "소설" }
    ];
    dlt_books_1.setJSON(data);
};

/**
 * 버튼 [컬럼 '분류'의 값이 '소설'과 일치하는 데이터 받기 - JSON 형식] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // DataList 'dlt_books_1'의 컬럼 '분류'의 값이 '소설'과 일치하는 데이터를 JSON으로 반환받습니다.
    let result = dlt_books_1.getMatchedJSON("categoryLabel", "소설");
    // return 예시) [{"categoryLabel":"소설","label":"불편한 편의점","rowStatus":"R"},{"categoryLabel":"소설","label":"책들의 부엌","rowStatus":"R"}]

    // 로그 출력
    let strLog = "# 컬럼 '분류'의 값이 '소설'과 일치하는 데이터 받기 - JSON 형식 | 함수 getMatchedJSON 호출 값";
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    $c.frame.printExampleLog(JSON.stringify(result), txa_log_1, false);
    console.log(strLog);
    console.log(result);

};

/**
 * 버튼 [컬럼 '분류'의 값이 '소설'과 일치하는 데이터 받기 - 1차원 Array 형식 + 컬럼 정보] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // DataList 'dlt_books_1'의 컬럼 '분류'의 값이 '소설'과 일치하는 데이터를 '1차원 Array 형식 + 컬럼 정보'으로 반환받습니다.
    let result = dlt_books_1.getMatchedArray("categoryLabel", "소설");
    // return 예시) {"columnInfo":["categoryLabel","label"],"data":["소설","불편한 편의점","소설","책들의 부엌"]}

    // 로그 출력
    let strLog = "# 컬럼 '분류'의 값이 '소설'과 일치하는 데이터 받기 - 1차원 Array 형식 + 컬럼 정보 | 함수 getMatchedArray 호출 값";
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    $c.frame.printExampleLog(JSON.stringify(result), txa_log_1, false);
    console.log(strLog);
    console.log(result);
};

/**
 * 버튼 [컬럼 '분류'의 값이 '소설'과 일치하는 데이터 받기 - 2차원 Array 형식] 클릭 시
 */
scwin.btn_exam1_3_onclick = function (e) {
    // DataList 'dlt_books_1'의 컬럼 '분류'의 값이 '소설'과 일치하는 데이터를 '2차원 Array 형식'으로 반환받습니다.
    let result = dlt_books_1.getMatchedData("categoryLabel", "소설");
    // return 예시) [["소설","불편한 편의점"],["소설","책들의 부엌"]]

    // 로그 출력
    let strLog = "# 컬럼 '분류'의 값이 '소설'과 일치하는 데이터 받기 - 1차원 Array 형식 | 함수 getMatchedData 호출 값";
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    $c.frame.printExampleLog(JSON.stringify(result), txa_log_1, false);
    console.log(strLog);
    console.log(result);
};

/**
 * 버튼 [컬럼 '분류'의 값이 '소설'과 일치하는 데이터 받기 - XML 형식] 클릭 시
 */
scwin.btn_exam1_4_onclick = function (e) {
    // DataList 'dlt_books_1'의 컬럼 '분류'의 값이 '소설'과 일치하는 데이터를 'XML' 형식으로 반환받습니다.
    let result = dlt_books_1.getMatchedXML("categoryLabel", "소설");
    // return 예시) <list id="dlt_books_1"><map index="8"><categoryLabel>소설</categoryLabel><label>불편한 편의점</label><rowStatus statusValue="0">R</rowStatus></map><map index="11"><categoryLabel>소설</categoryLabel><label>책들의 부엌</label><rowStatus statusValue="0">R</rowStatus></map></list>

    // 로그 출력
    let strLog = "# 컬럼 '분류'의 값이 '소설'과 일치하는 데이터 받기 - XML 형식 | 함수 getMatchedXML 호출 값";
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    $c.frame.printExampleLog(WebSquare.xml.serialize(result), txa_log_1, false);
    console.log(strLog);
    console.log(result);
};

/**
 * 버튼 [컬럼 '분류'의 값이 '소설'과 일치하는 Row Index 받기 - 1차원 Array 형식] 클릭 시
 */
scwin.btn_exam1_5_onclick = function (e) {
    // DataList 'dlt_books_1'의 컬럼 '분류'의 값이 '소설'과 일치하는 Row Index를 '1차원 Array'로 반환받습니다.
    let result = dlt_books_1.getMatchedIndex("categoryLabel", "소설");
    // return 예시) [8,11]

    // 로그 출력
    let strLog = "# 컬럼 '분류'의 값이 '소설'과 일치하는 Row Index 받기 - 1차원 Array 형식 | 함수 getMatchedIndex 호출 값";
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    $c.frame.printExampleLog(JSON.stringify(result), txa_log_1, false);
    console.log(strLog);
    console.log(result);
};

/**
 * textarea의 로그 삭제
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
 * 버튼 [컬럼 '분류'의 값이 '에세이'와 일치하는 데이터 받기 - JSON 형식] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // DataList 'dlt_books_1'의 컬럼 '분류'의 값이 '에세이'와 일치하는 데이터를 JSON으로 반환받습니다.
    let result = dlt_books_1.getMatchedJSON("categoryLabel", "에세이", true);
    // return 예시) []

    // 로그 출력
    let strLog = "# 컬럼 '분류'의 값이 '에세이'와 일치하는 데이터 받기 - JSON 형식 | 함수 getMatchedJSON 호출 값";
    $c.frame.printExampleLog(strLog, txa_log_2, false);
    $c.frame.printExampleLog(JSON.stringify(result), txa_log_2, false);
    console.log(strLog);
    console.log(result);
};

/**
 * 버튼 [컬럼 '분류'의 값에 '에세이'가 포함된 데이터 받기 - JSON 형식] 클릭 시
 */
scwin.btn_exam2_2_onclick = function (e) {
    // DataList 'dlt_books_1'의 컬럼 '분류'의 값에 '에세이'가 포함된 데이터를 JSON으로 반환받습니다.
    let result = dlt_books_1.getMatchedJSON("categoryLabel", "에세이", false);
    // return 예시) [{"categoryLabel":"시/에세이","label":"기분을 관리하면 인생이 관리된다","rowStatus":"R"},{"categoryLabel":"시/에세이","label":"인생 수업","rowStatus":"R"}]

    // 로그 출력
    let strLog = "# 컬럼 '분류'의 값에 '에세이'가 포함된 데이터 받기 - JSON 형식 | 함수 getMatchedJSON 호출 값";
    $c.frame.printExampleLog(strLog, txa_log_2, false);
    $c.frame.printExampleLog(JSON.stringify(result), txa_log_2, false);
    console.log(strLog);
    console.log(result);
};



/**
 * 버튼 [전체 행을 대상으로 컬럼 '분류'의 값이 '시/에세이'와 일치하는 데이터 받기 - JSON 형식]
 */
scwin.btn_exam3_1_onclick = function (e) {
    // DataList 'dlt_books_1'의 전체 행을 대상으로 컬럼 '분류'의 값이 '시/에세이'와 일치하는 데이터를 JSON으로 반환받습니다.
    let result = dlt_books_1.getMatchedJSON("categoryLabel", "시/에세이", true);
    // return 예시) [{"categoryLabel":"시/에세이","label":"기분을 관리하면 인생이 관리된다","rowStatus":"R"},{"categoryLabel":"시/에세이","label":"인생 수업","rowStatus":"R"}]

    // 로그 출력
    let strLog = "# 전체 행을 대상으로 컬럼 '분류'의 값이 '시/에세이'와 일치하는 데이터 받기 - JSON 형식 | 함수 getMatchedJSON 호출 값";
    $c.frame.printExampleLog(strLog, txa_log_3, false);
    $c.frame.printExampleLog(JSON.stringify(result), txa_log_3, false);
    console.log(strLog);
    console.log(result);
};

/**
 * 버튼 [0~2번째 행을 대상으로 컬럼 '분류'의 값이 '시/에세이'와 일치하는 데이터 받기 - JSON 형식]
 */
scwin.btn_exam3_2_onclick = function (e) {
    // DataList 'dlt_books_1'의  0~2번째 행을 대상으로 컬럼 '분류'의 값이 '시/에세이'와 일치하는 데이터를 JSON으로 반환받습니다.
    let result = dlt_books_1.getMatchedJSON("categoryLabel", "시/에세이", true, 0, 2);
    // return 예시) [{"categoryLabel":"시/에세이","label":"기분을 관리하면 인생이 관리된다","rowStatus":"R"}]

    // 로그 출력
    let strLog = "# 0~2번째 행을 대상으로 컬럼 '분류'의 값이 '시/에세이'와 일치하는 데이터 받기 - JSON 형식 | 함수 getMatchedJSON 호출 값";
    $c.frame.printExampleLog(strLog, txa_log_3, false);
    $c.frame.printExampleLog(JSON.stringify(result), txa_log_3, false);
    console.log(strLog);
    console.log(result);
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'DataList에서 지정한 컬럼의 데이터와 주어진 문자열이 일치하는 행 데이터를 반환받는 예시입니다.<br/>반환 데이터의 유형에 따라 함수가 분리되어 있습니다. 함수의 인자는 동일합니다.<br/>반환 데이터의 유형은 5가지이며, 유형별 함수는 다음과 같습니다.<br/>- JSON 형식 : getMatchedJSON<br/>- 1차원 Array 형식 + 컬럼 정보 : getMatchedArray<br/>- 2차원 Array 형식 : getMatchedData<br/>- XML 형식 : getMatchedXML<br/>- Row Index가 담긴 1차원 Array 형식 : getMatchedIndex',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'각 함수의 부가 기능으로는 데이터 검색 조건(일치 또는 포함) 설정과 검색할 행의 범위 설정이 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',id:'',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.<br/>로그를 통해 반환되는 데이터를 확인할 수 있습니다.',style:'',escape:'false'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'원본 데이터 확인용 GridView',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'220',class:'gvw',dataList:'data:dlt_books_1',defaultCellHeight:'26',id:'',initFixedHeightByRowNum:'4',readOnly:'true',rowNumWidth:'26',style:'height:60px;',tooltipDisplay:'true',visibleRowNum:'3',rowNumVisible:'true',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'분류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'100'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'함수별 반환 데이터 형식 비교하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'분류\'의 값이 \'소설\'과 일치하는 데이터 받기 - JSON 형식'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'분류\'의 값이 \'소설\'과 일치하는 데이터 받기 - 1차원 Array 형식 + 컬럼 정보'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_3_onclick',id:'btn_exam1_3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'분류\'의 값이 \'소설\'과 일치하는 데이터 받기 - 2차원 Array 형식'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_4_onclick',id:'btn_exam1_4',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'분류\'의 값이 \'소설\'과 일치하는 데이터 받기 - XML 형식'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_5_onclick',id:'btn_exam1_5',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'분류\'의 값이 \'소설\'과 일치하는 Row Index 받기 - 1차원 Array 형식'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'',style:'',title:'로그 삭제',type:'button',userData1:'txa_log_1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_1',spellcheck:'false',style:'width: 100%;height: 90px;'}}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'데이터 일치 여부 설정 비교하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'분류\'의 값이 \'에세이\'와 일치하는 데이터 받기 - JSON 형식'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam2_2_onclick',id:'btn_exam2_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'분류\'의 값에 \'에세이\'가 포함된 데이터 받기 - JSON 형식'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'',style:'',title:'로그 삭제',type:'button',userData1:'txa_log_2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_2',spellcheck:'false',style:'width: 100%;height: 90px;'}}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'검색할 행의 범위 설정 비교하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false',id:'btn_exam3_1',style:'',type:'button','ev:onclick':'scwin.btn_exam3_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체 행을 대상으로 컬럼 \'분류\'의 값이 \'시/에세이\'와 일치하는 데이터 받기 - JSON 형식'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false',id:'btn_exam3_2',style:'',type:'button','ev:onclick':'scwin.btn_exam3_2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0~2번째 행을 대상으로 컬럼 \'분류\'의 값이 \'시/에세이\'와 일치하는 데이터 받기 - JSON 형식'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'',style:'',title:'로그 삭제',type:'button',userData1:'txa_log_3'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_3',spellcheck:'false',style:'width: 100%;height: 90px;'}}]}]}]}]}]}]}]})
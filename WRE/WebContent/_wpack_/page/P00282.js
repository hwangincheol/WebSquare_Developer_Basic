/*amd /page/P00282.xml 13281 2e3d15caa4b6ffdbb8c398b81a04dfecd61a4163b2b91bb3679ebd36e0225049 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}},{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map',style:'',valueAttribute:'',getMatchedFromAllData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}},{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_2',repeatNode:'map',style:'',valueAttribute:'',getMatchedFromAllData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}},{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    // DataList에 초기 데이터 할당
    scwin.initData();
};

/**
 * DataList 'dlt_books_1'에 데이터 할당하기
 */
scwin.initData = function () {
    let data = [
        { "label": "책들의 부엌", "categoryLabel": "소설" },
        { "label": "내가 틀릴 수도 있습니다", "categoryLabel": "인문" },
        { "label": "불편한 편의점", "categoryLabel": "소설" },
        { "label": "공정하다는 착각", "categoryLabel": "인문" },
        { "label": "무엇이 옳은가", "categoryLabel": "인문" }
    ];

    // DataList 'dlt_books_1', 'dlt_books_2'에 데이터 할당하기
    dlt_books_1.setJSON(data);
    dlt_books_2.setJSON(data);

    // 테스트를 위해 DataList 'dlt_books_1', 'dlt_books_2'에 필터 적용하기 - 컬럼 '분류'의 값이 '인문'인 데이터 출력
    dlt_books_1.setColumnFilter({
        type: "row",
        colIndex: "categoryLabel",
        key: "인문",
        condition: "and",
        exactMatch: true
    });

    dlt_books_2.setColumnFilter({
        type: "row",
        colIndex: "categoryLabel",
        key: "인문",
        condition: "and",
        exactMatch: true
    });
};

/**
 * 버튼 [1.1 컬럼 '분류'의 값이 '소설'과 일치하는 데이터를 JSON 형식으로 받기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // DataList 'dlt_books_1'의 컬럼 '분류'의 값이 '소설'과 일치하는 데이터를 JSON으로 반환받습니다.
    let result = dlt_books_1.getMatchedJSON("categoryLabel", "소설");

    // 로그 출력
    let strLog = "# DatList의 속성 'getMatchedFromAllData'의 설정 값: \"false\"";
    let strLog2 = "함수 getMatchedJSON 호출 값 : \n";
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    $c.frame.printExampleLog(strLog2 + JSON.stringify(result), txa_log_1, false);
    console.log(strLog);
    console.log(strLog2);
    console.log(result);
};

/**
 * 버튼 [1.2 컬럼 '분류'의 값이 '인문'과 일치하는 Row Index 받기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // DataList 'dlt_books_1'의 컬럼 '분류'의 값이 '인문'과 일치하는 Row Index를 반환받습니다.
    let result = dlt_books_1.getMatchedIndex("categoryLabel", "인문");

    // 로그 출력
    let strLog = "# DatList의 속성 'getMatchedFromAllData'의 설정 값: \"false\"";
    let strLog2 = "함수 getMatchedIndex 호출 값 : \n";
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    $c.frame.printExampleLog(strLog2 + JSON.stringify(result), txa_log_1, false);
    console.log(strLog);
    console.log(strLog2);
    console.log(result);
};


/**
 * 버튼 [2.1 컬럼 '분류'의 값이 '소설'과 일치하는 데이터를 JSON 형식으로 받기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // DataList 'dlt_books_2'의 컬럼 '분류'의 값이 '소설'과 일치하는 데이터를 JSON으로 반환받습니다.
    let result = dlt_books_2.getMatchedJSON("categoryLabel", "소설");

    // 로그 출력
    let strLog = "# DatList의 속성 'getMatchedFromAllData'의 설정 값: \"true\"";
    let strLog2 = "함수 getMatchedJSON 호출 값 : \n";
    $c.frame.printExampleLog(strLog, txa_log_2, false);
    $c.frame.printExampleLog(strLog2 + JSON.stringify(result), txa_log_2, false);
    console.log(strLog);
    console.log(strLog2);
    console.log(result);
};

/**
 * 버튼 [2.2 컬럼 '분류'의 값이 '인문'과 일치하는 Row Index 받기] 클릭 시
 */
scwin.btn_exam2_2_onclick = function (e) {
    // DataList 'dlt_books_2'의 컬럼 '분류'의 값이 '인문'과 일치하는 Row Index를 반환받습니다.
    let result = dlt_books_2.getMatchedIndex("categoryLabel", "인문");

    // 로그 출력
    let strLog = "# DatList의 속성 'getMatchedFromAllData'의 설정 값: \"true\"";
    let strLog2 = "함수 getMatchedIndex 호출 값 : \n";
    $c.frame.printExampleLog(strLog, txa_log_2, false);
    $c.frame.printExampleLog(strLog2 + JSON.stringify(result), txa_log_2, false);
    console.log(strLog);
    console.log(strLog2);
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


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'DataList의 속성 \'getMatchedFromAllData\'의 설정 비교 예제입니다.<br/>이 속성은 DataList의 데이터 검색 함수가 동작할 때 사용됩니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'속성의 설정 값은 아래의 2가지입니다.<br/>- true : DataList의 데이터 검색 함수가 동작할 때 필터가 적용되지 않은 <span class="ws5_exam_txt_underline">원본 데이터를 대상</span>으로 검색합니다.<br/>- false : (기본 설정 값) DataList의 데이터 검색 함수가 동작할 때 <span class="ws5_exam_txt_underline">필터가 적용된 데이터를 대상</span>으로 검색합니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'DataList의 주요 데이터 검색 함수는 \'getMatched\' 또는 \'getUnmatched\'로 시작되는 함수입니다.',style:''}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'details'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주요 함수 목록',style:'',tagname:'summary'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'- getMatchedArray<br/>- getMatchedData<br/>- getMatchedIndex<br/>- getMatchedJSON<br/>- getMatchedXML<br/>- getMatchedColumnData<br/>- getUnmatchedArray<br/>- getUnmatchedColumnData<br/>- getUnmatchedData<br/>- getUnmatchedIndex<br/>- getUnmatchedJSON<br/>- getUnmatchedXML',style:'margin-bottom: 6px;'}}]},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',id:'',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.<br/>로그를 통해 반환되는 데이터를 확인할 수 있습니다.',style:'',escape:'false'}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 화면의 DataList는 테스트를 위해 컬럼 필터가 적용되어 있으며, 컬럼 \'분류\'의 값이 \'인문\'와 일치하는 조건입니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(기본 동작) 필터가 적용된 데이터에서 검색하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1.1 컬럼 \'분류\'의 값이 \'소설\'과 일치하는 데이터를 JSON 형식으로 받기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1.2 컬럼 \'분류\'의 값이 \'인문\'과 일치하는 데이터의 Row Index 받기'}]}]}]},{T:1,N:'w2:textbox',A:{class:'ws5_exam_txt_caption',escape:'false',id:'',label:'데이터 확인용 GridView',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'220',class:'gvw mb10',dataList:'data:dlt_books_1',defaultCellHeight:'26',id:'grd_exam_1',initFixedHeightByRowNum:'4',keepDefaultColumnWidth:'true',readOnly:'true',rowNumVisible:'true',rowNumWidth:'26',style:'height:60px;',tooltipDisplay:'true',visibleRowNum:'3'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'분류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'',style:'',title:'로그 삭제',type:'button',userData1:'txa_log_1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_1',spellcheck:'false',style:'width: 100%;height: 90px;'}}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'원본 데이터에서 검색하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2.1 컬럼 \'분류\'의 값이 \'소설\'과 일치하는 데이터를 JSON 형식으로 받기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam2_2_onclick',id:'btn_exam2_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2.2 컬럼 \'분류\'의 값이 \'인문\'과 일치하는 데이터의 Row Index 받기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_exam_txt_caption',escape:'false',id:'',label:'데이터 확인용 GridView',style:''}}]},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'220',class:'gvw mb10',dataList:'data:dlt_books_2',defaultCellHeight:'26',id:'grd_exam_2',initFixedHeightByRowNum:'4',keepDefaultColumnWidth:'true',readOnly:'true',rowNumVisible:'true',rowNumWidth:'26',style:'height:60px;',tooltipDisplay:'true',visibleRowNum:'3'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'분류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'',style:'',title:'로그 삭제',type:'button',userData1:'txa_log_2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_2',spellcheck:'false',style:'width: 100%;height: 90px;'}}]}]}]}]}]}]}]})
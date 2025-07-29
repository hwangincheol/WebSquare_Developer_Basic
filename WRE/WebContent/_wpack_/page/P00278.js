/*amd /page/P00278.xml 20524 e73eb41be364a84f2f04dac5e61ea6e91e5ec60522ff5ebaeb5ef9c7164a2e7c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}},{T:1,N:'w2:column',A:{id:'price',name:'정가',dataType:'text'}},{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
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
        { "label": "공정하다는 착각", "categoryLabel": "인문", "price": "18000" },
        { "label": "선을 넘지 않는 사람이 성공한다", "categoryLabel": "자기계발", "price": "17800" },
        { "label": "기분을 관리하면 인생이 관리된다", "categoryLabel": "시/에세이", "price": "17600" },
        { "label": "저만치 혼자서", "categoryLabel": "소설", "price": "15000" },
        { "label": "내가 틀릴 수도 있습니다", "categoryLabel": "인문", "price": "16000" },
        { "label": "무엇이 옳은가", "categoryLabel": "인문", "price": "17800" },
        { "label": "문명의 붕괴(Collapse)", "categoryLabel": "역사/문화", "price": "28900" },
        { "label": "불편한 편의점", "categoryLabel": "소설", "price": "14000" },
        { "label": "우리는 여전히 삶을 사랑하는가", "categoryLabel": "인문", "price": "15800" },
        { "label": "잘했고 잘하고 있고 잘 될 것이다", "categoryLabel": "시/에세이", "price": "15000" },
        { "label": "책들의 부엌", "categoryLabel": "소설", "price": "14500" }
    ];
    dlt_books_1.setJSON(data);

    // DataList 'dlt_books_1'의 모든 필터 해제하기
    dlt_books_1.clearFilter();
};

/**
 * 버튼 [DataList의 데이터 초기화] 클릭 시
 */
scwin.btn_initData_onclick = function (e) {
    scwin.initData();
};

/**
 * 버튼 [DataList의 필터 전체 해제] 클릭 시
 */
scwin.btn_clearFilter_onclick = function (e) {
    // DataList 'dlt_books_1'의 모든 필터 해제하기
    dlt_books_1.clearFilter();
};

/**
 * 버튼 [컬럼 '분류'에 필터 적용 - 데이터가 '인문'과 일치] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // DataList 'dlt_books_1'에 필터를 해제합니다.
    dlt_books_1.clearFilter();

    // 필터 조건이 담긴 JSON
    let jsnFilterOptions = {};

    jsnFilterOptions.type = "func"; // 검색 방식. 속성 'key'에 정의된 함수로 검색.
    jsnFilterOptions.colIndex = "categoryLabel"; // DataList의 컬럼 ID 또는 컬럼 Index. 검색 대상.
    jsnFilterOptions.key = scwin.userColumnFilter_type1; // 사용자 정의 함수 객체
    jsnFilterOptions.param = "type1"; // 함수에 전달할 인자 객체. 사용자 정의 함수의 두 번째 인자에 할당됩니다.
    jsnFilterOptions.condition = "and"; // 기 적용된 필터 데이터와의 병합 조건. 최초 필터를 적용하는 경우 "and"로 할당.     

    // 검색 대상 데이터 : ID가 "categoryLabel"인 컬럼
    // 검색 방법 : 사용자 정의 함수 - scwin.userColumnFilter_type1
    // 기 적용된 필터 데이터와의 병합 조건 : 교집합

    // DataList 'dlt_books_1'에 필터를 적용합니다.
    dlt_books_1.setColumnFilter(jsnFilterOptions);

    // 로그 출력
    let strLog = "# 컬럼 '분류'에 필터 적용 - 데이터가 '인문' | 필터 조건 ";
    let logOptions = '\n' +
        '{' + '\n' +
        '	"type": "func",' + '\n' +
        '	"colIndex": "categoryLabel",' + '\n' +
        '	"key": scwin.userColumnFilter_type1,' + '\n' +
        '	"param": "type1",' + '\n' +
        '	"condition": "and"' + '\n' +
        '}';
    $c.frame.printExampleLog(strLog, txa_log, false);
    $c.frame.printExampleLog(logOptions, txa_log, false);
    console.log(strLog);
    console.log(jsnFilterOptions);
};

/**
 * 사용자 정의 필터 함수
 * 함수 'scwin.btn_exam1_1_onclick'에서 호출
 * @param {string} argCellData 검색 대상 데이터.
 * @param {object} argUserParam 사용자가 할당한 인자.
 * @param {number} argRowIndex 행의 인덱스.
 * @returns {boolean} 데이터 추출(포함) 여부.
 */
scwin.userColumnFilter_type1 = function (argCellData, argUserParam, argRowIndex) {
    let returnValue = false;    // 반환 값.

    // 데이터가 '인문'과 동일하면 추출
    if (argCellData === "인문") {
        returnValue = true;
    }
    return returnValue;
};

/**
 * 버튼 [컬럼 '분류'에 필터 적용 - 데이터 중 '에세이'가 포함] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // DataList 'dlt_books_1'에 필터를 해제합니다.
    dlt_books_1.clearFilter();

    // 필터 조건이 담긴 JSON
    let jsnFilterOptions = {};

    jsnFilterOptions.type = "func"; // 검색 방식. 속성 'key'에 정의된 함수로 검색.
    jsnFilterOptions.colIndex = "categoryLabel"; // DataList의 컬럼 ID 또는 컬럼 Index. 검색 대상.
    jsnFilterOptions.key = scwin.userColumnFilter_type2; // 사용자 정의 함수 객체
    jsnFilterOptions.param = "type2"; // 함수에 전달할 인자 객체. 사용자 정의 함수의 두 번째 인자에 할당됩니다.
    jsnFilterOptions.condition = "and"; // 기 적용된 필터 데이터와의 병합 조건. 최초 필터를 적용하는 경우 "and"로 할당. 

    // 검색 대상 데이터 : ID가 "categoryLabel"인 컬럼
    // 검색 방법 : 사용자 정의 함수 - scwin.userColumnFilter_type2
    // 기 적용된 필터 데이터와의 병합 조건 : 교집합

    // DataList 'dlt_books_1'에 필터를 적용합니다.
    dlt_books_1.setColumnFilter(jsnFilterOptions);

    // 로그 출력
    let strLog = "# 컬럼 '분류'에 필터 적용 - 데이터 중 '에세이'가 포함 | 필터 조건 ";
    let logOptions = '\n' +
        '{' + '\n' +
        '	"type": "func",' + '\n' +
        '	"colIndex": "categoryLabel",' + '\n' +
        '	"key": scwin.userColumnFilter_type2,' + '\n' +
        '	"param": "type2",' + '\n' +
        '	"condition": "and"' + '\n' +
        '}';
    $c.frame.printExampleLog(strLog, txa_log, false);
    $c.frame.printExampleLog(logOptions, txa_log, false);
    console.log(strLog);
    console.log(jsnFilterOptions);
};

/**
 * 사용자 정의 필터 함수
 * 함수 'scwin.btn_exam1_2_onclick'에서 호출
 * @param {string} argCellData 검색 대상 데이터.
 * @param {object} argUserParam 사용자가 할당한 인자.
 * @param {number} argRowIndex 행의 인덱스.
 * @returns {boolean} 데이터 추출(포함) 여부.
 */
scwin.userColumnFilter_type2 = function (argCellData, argUserParam, argRowIndex) {
    let returnValue = false;    // 반환 값.

    // 데이터 중 '에세이'가 포함되어 있으면 추출
    if (typeof argCellData === "string" && argCellData.indexOf("에세이") > -1) {
        returnValue = true;
    }
    return returnValue;
};

/**
 * 버튼 [컬럼 '분류'에 필터 적용 - 데이터가 '에세이'와 일치] 클릭 시
 */
scwin.btn_exam1_3_onclick = function (e) {
    // DataList 'dlt_books_1'에 필터를 해제합니다.
    dlt_books_1.clearFilter();

    // 필터 조건이 담긴 JSON
    let jsnFilterOptions = {};

    jsnFilterOptions.type = "func"; // 검색 방식. 속성 'key'에 정의된 함수로 검색.
    jsnFilterOptions.colIndex = "categoryLabel"; // DataList의 컬럼 ID 또는 컬럼 Index. 검색 대상.
    jsnFilterOptions.key = scwin.userColumnFilter_type3; // 사용자 정의 함수 객체
    jsnFilterOptions.param = "type3"; // 함수에 전달할 인자 객체. 사용자 정의 함수의 두 번째 인자에 할당됩니다.
    jsnFilterOptions.condition = "and"; // 기 적용된 필터 데이터와의 병합 조건. 최초 필터를 적용하는 경우 "and"로 할당. 

    // 검색 대상 데이터 : ID가 "categoryLabel"인 컬럼
    // 검색 방법 : 사용자 정의 함수 - scwin.userColumnFilter_type3
    // 기 적용된 필터 데이터와의 병합 조건 : 교집합

    // DataList 'dlt_books_1'에 필터를 적용합니다.
    dlt_books_1.setColumnFilter(jsnFilterOptions);

    // 로그 출력
    let strLog = "# 컬럼 '분류'에 필터 적용 - 데이터가 '에세이'와 일치 | 필터 조건 ";
    let logOptions = '\n' +
        '{' + '\n' +
        '	"type": "func",' + '\n' +
        '	"colIndex": "categoryLabel",' + '\n' +
        '	"key": scwin.userColumnFilter_type3,' + '\n' +
        '	"param": "type3",' + '\n' +
        '	"condition": "and"' + '\n' +
        '}';
    $c.frame.printExampleLog(strLog, txa_log, false);
    $c.frame.printExampleLog(logOptions, txa_log, false);
    console.log(strLog);
    console.log(jsnFilterOptions);
};

/**
 * 사용자 정의 필터 함수
 * 함수 'scwin.btn_exam1_3_onclick'에서 호출
 * @param {string} argCellData 검색 대상 데이터.
 * @param {object} argUserParam 사용자가 할당한 인자.
 * @param {number} argRowIndex 행의 인덱스.
 * @returns {boolean} 데이터 추출(포함) 여부.
 */
scwin.userColumnFilter_type3 = function (argCellData, argUserParam, argRowIndex) {
    let returnValue = false;    // 반환 값.

    // 데이터가 '에세이'와 일치하면 추출
    if (argCellData === "에세이") {
        returnValue = true;
    }
    return returnValue;
};

/**
 * 버튼 [컬럼 '분류'에 필터 적용 - 데이터가 '소설'과 일치하거나 '에세이'가 포함] 클릭 시
 */
scwin.btn_exam1_4_onclick = function (e) {
    // DataList 'dlt_books_1'에 필터를 해제합니다.
    dlt_books_1.clearFilter();

    // 필터 조건이 담긴 JSON
    let jsnFilterOptions = {};

    jsnFilterOptions.type = "func"; // 검색 방식. 속성 'key'에 정의된 함수로 검색.
    jsnFilterOptions.colIndex = "categoryLabel"; // DataList의 컬럼 ID 또는 컬럼 Index. 검색 대상.
    jsnFilterOptions.key = scwin.userColumnFilter_type4; // 사용자 정의 함수 객체
    jsnFilterOptions.param = "type4"; // 함수에 전달할 인자 객체. 사용자 정의 함수의 두 번째 인자에 할당됩니다.
    jsnFilterOptions.condition = "and"; // 기 적용된 필터 데이터와의 병합 조건. 최초 필터를 적용하는 경우 "and"로 할당. 

    // DataList 'dlt_books_1'에 필터를 적용합니다.
    dlt_books_1.setColumnFilter(jsnFilterOptions);

    // 로그 출력
    let strLog = "# 컬럼 '분류'에 필터 적용 - 데이터가 '소설'과 일치하거나 '에세이'가 포함";
    let logOptions = '\n' +
        '{' + '\n' +
        '	"type": "func",' + '\n' +
        '	"colIndex": "categoryLabel",' + '\n' +
        '	"key": scwin.userColumnFilter_type4,' + '\n' +
        '	"param": "type4",' + '\n' +
        '	"condition": "and"' + '\n' +
        '}';
    $c.frame.printExampleLog(strLog, txa_log, false);
    $c.frame.printExampleLog(logOptions, txa_log, false);
    console.log(strLog);
    console.log(jsnFilterOptions);
};

/**
 * 사용자 정의 필터 함수
 * 함수 'scwin.btn_exam1_4_onclick'에서 호출
 * @param {string} argCellData 검색 대상 데이터.
 * @param {object} argUserParam 사용자가 할당한 인자.
 * @param {number} argRowIndex 행의 인덱스.
 * @returns {boolean} 데이터 추출(포함) 여부.
 */
scwin.userColumnFilter_type4 = function (argCellData, argUserParam, argRowIndex) {
    let returnValue = false;    // 반환 값.

    // 데이터가 '소설'과 일치하거나 '에세이'가 포함되어 있으면 추출
    if (argCellData.search(new RegExp("^소설$|에세이")) > -1) {
        returnValue = true;
    }
    return returnValue;
};

/**
 * 버튼 [컬럼 '분류'에 필터 적용 - '분류' 컬럼의 데이터가 '인문'과 일치하고 '정가' 컬럼의 데이터가 '17000' 이상] 클릭 시
 */
scwin.btn_exam1_5_onclick = function (e) {
    // DataList 'dlt_books_1'에 필터를 해제합니다.
    dlt_books_1.clearFilter();

    // 필터 조건이 담긴 JSON
    let jsnFilterOptions = {};

    jsnFilterOptions.type = "func"; // 검색 방식. 속성 'key'에 정의된 함수로 검색.
    jsnFilterOptions.colIndex = "categoryLabel"; // DataList의 컬럼 ID 또는 컬럼 Index. 검색 대상.
    jsnFilterOptions.key = scwin.userColumnFilter_type5; // 사용자 정의 함수 객체
    jsnFilterOptions.param = "type5"; // 함수에 전달할 인자 객체. 사용자 정의 함수의 두 번째 인자에 할당됩니다.
    jsnFilterOptions.condition = "and"; // 기 적용된 필터 데이터와의 병합 조건. 최초 필터를 적용하는 경우 "and"로 할당. 

    // DataList 'dlt_books_1'에 필터를 적용합니다.
    dlt_books_1.setColumnFilter(jsnFilterOptions);

    // 로그 출력
    let strLog = "# 컬럼 '분류'에 필터 적용 - '분류' 컬럼의 데이터가 '인문'과 일치하고 '정가' 컬럼의 데이터가 '17000' 이상";
    let logOptions = '\n' +
        '{' + '\n' +
        '	"type": "func",' + '\n' +
        '	"colIndex": "categoryLabel",' + '\n' +
        '	"key": scwin.userColumnFilter_type5,' + '\n' +
        '	"param": "type5",' + '\n' +
        '	"condition": "and"' + '\n' +
        '}';
    $c.frame.printExampleLog(strLog, txa_log, false);
    $c.frame.printExampleLog(logOptions, txa_log, false);
    console.log(strLog);
    console.log(jsnFilterOptions);
};

/**
 * 사용자 정의 필터 함수
 * 함수 'scwin.btn_exam1_5_onclick'에서 호출
 * @param {string} argCellData 검색 대상 데이터.
 * @param {object} argUserParam 사용자가 할당한 인자.
 * @param {number} argRowIndex 행의 인덱스.
 * @returns {boolean} 데이터 추출(포함) 여부.
 */
scwin.userColumnFilter_type5 = function (argCellData, argUserParam, argRowIndex) {
    let returnValue = false;    // 반환 값.

    // '분류' 컬럼의 데이터가 '인문'과 일치하고 '정가' 컬럼의 데이터가 '17000' 이상이면 추출
    if (argCellData === "인문") {
        // 컬럼 'price'의 값을 추출하여 숫자형으로 변환
        let numPrice = Number(dlt_books_1.getCellData(argRowIndex, "price"));

        if (typeof numPrice === "number" && numPrice >= 17000) {
            returnValue = true;
        }
    }

    return returnValue;
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    //textarea value를 빈문자열로 할당.
    txa_log.setValue("");
};



}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'DataList의 컬럼 데이터에 필터를 적용하는 예제입니다.<br/>이 예제는 함수 \'setColumnFilter\'의 첫 번째 인자의 속성 \'type\' 설정 값을 \'func\'로 지정한 예시입니다.<br/>속성 \'type\'의 설정 값이 \'func\'로 지정되면 사용자가 정의한 함수로 검색합니다.<br/>함수는 속성 \'key\'에 할당합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',id:'',label:'이 기능은 사용자 정의 함수에서 행의 인덱스를 받기 때문에 다른 컬럼의 데이터를 참조하여 로직을 구성할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',id:'',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style no_padding',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false',id:'btn_initData',style:'',type:'button','ev:onclick':'scwin.btn_initData_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DataList의 데이터 초기화'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false',id:'btn_clearFilter',style:'',type:'button','ev:onclick':'scwin.btn_clearFilter_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DataList의 필터 전체 해제'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'분류\'에 필터 적용 - 데이터가 \'인문\'과 일치'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'분류\'에 필터 적용 - 데이터 중 \'에세이\'가 포함'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_3_onclick',id:'btn_exam1_3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'분류\'에 필터 적용 - 데이터가 \'에세이\'와 일치'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_4_onclick',id:'btn_exam1_4',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'분류\'에 필터 적용 - 데이터가 \'소설\'과 일치하거나 \'에세이\'가 포함'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_5_onclick',id:'btn_exam1_5',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'분류\'에 필터 적용 - \'분류\' 컬럼의 데이터가 \'인문\'과 일치하고 \'정가\' 컬럼의 데이터가 \'17000\' 이상'}]}]}]},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'[ 결과 확인용 GridView ]',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',class:'gvw',dataList:'data:dlt_books_1',defaultCellHeight:'26',id:'',rowNumWidth:'26',style:'height:60px;',visibleRowNum:'4',autoFitMinWidth:'220',tooltipDisplay:'true',readOnly:'true',initFixedHeightByRowNum:'4'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'분류',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',value:'정가',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'categoryLabel',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'price',inputType:'text',width:'50',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',width:'100',textAlign:'left'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'example_div_th_style'},E:[{T:1,N:'w2:span',A:{label:'로그 확인',style:'',id:'',class:'mr_def txt_blue'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})
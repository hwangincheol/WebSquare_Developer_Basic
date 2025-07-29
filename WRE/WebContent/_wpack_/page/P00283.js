/*amd /page/P00283.xml 14892 9e114dddabc08445af8c7fa14003cc5763e45186c033f6787e2f25471f53be39 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}},{T:1,N:'w2:column',A:{id:'price',name:'정가',dataType:'number'}},{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_2',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}},{T:1,N:'w2:column',A:{id:'price',name:'정가',dataType:'number'}},{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_dataType',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'dataType_text',name:'text 형'}},{T:1,N:'w2:column',A:{dataType:'number',id:'dataType_number',name:'number 형'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    // DataList에 초기 데이터 할당
    scwin.initData();
};

/**
 * DataList 'dlt_books_1'에 데이터 할당하기
 */
scwin.initData = function () {
    let data = [
        { "label": "이벤트 도서", "categoryLabel": "인문", "price": "777" },
        { "label": "공정하다는 착각", "categoryLabel": "인문", "price": "18000" },
        { "label": "선을 넘지 않는 사람이 성공한다", "categoryLabel": "자기계발", "price": "17800" },
        { "label": "기분을 관리하면 인생이 관리된다", "categoryLabel": "시/에세이", "price": "17600" },
        { "label": "만일 내가 인생을 다시 산다면", "categoryLabel": "인문", "price": "17200" },
        { "label": "인생 수업", "categoryLabel": "시/에세이", "price": "18000" },
        { "label": "내가 틀릴 수도 있습니다", "categoryLabel": "인문", "price": "16000" },
        { "label": "무엇이 옳은가", "categoryLabel": "인문", "price": "17800" },
        { "label": "문명의 붕괴(Collapse)", "categoryLabel": "역사/문화", "price": "28900" },
        { "label": "불편한 편의점", "categoryLabel": "소설", "price": "14000" },
        { "label": "우리는 여전히 삶을 사랑하는가", "categoryLabel": "인문", "price": "15800" },
        { "label": "잘했고 잘하고 있고 잘 될 것이다", "categoryLabel": "시/에세이", "price": "15000" },
        { "label": "책들의 부엌", "categoryLabel": "소설", "price": "14500" }
    ];

    // DataList 'dlt_books_1'과 'dlt_books_2'에 데이터 할당하기
    dlt_books_1.setJSON(data);
    dlt_books_2.setJSON(data);

    let data2 = [
        { "dataType_text": "777", "dataType_number": "777" },
        { "dataType_text": "9", "dataType_number": "9" },
        { "dataType_text": "18000", "dataType_number": "18000" }
    ];

    dlt_dataType.setJSON(data2);
};

/**
 * 버튼 [DataList의 데이터 초기화] 클릭 시
 */
scwin.btn_initData_onclick = function (e) {
    scwin.initData();
};

/**
 * 버튼 [1.0 DataList의 정렬 해제] 클릭 시
 */
scwin.btn_sortInit_1_onclick = function (e) {
    // DataList 'dlt_books_1'의 정렬을 해제합니다.
    dlt_books_1.clearSort();
};

/**
 * 버튼 [1.1 컬럼 '분류'를 오름차순으로 정렬하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // DataList 'dlt_books_1'의 정렬을 해제합니다.
    dlt_books_1.clearSort();

    // DataList 'dlt_books_1'의 컬럼 '분류'를 오름차순으로 정렬합니다.
    dlt_books_1.sort("categoryLabel", 0); // 정렬 옵션 [0,1,2] 0:오름차순, 1:내림차순, 2:정렬 취소
};

/**
 * 버튼 [1.2 컬럼 '도서명'을 내림차순으로 정렬하기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // DataList 'dlt_books_1'의 정렬을 해제합니다.
    dlt_books_1.clearSort();

    // DataList 'dlt_books_1'의 컬럼 '도서명'을 내림차순으로 정렬합니다.
    dlt_books_1.sort("label", 1); // 정렬 옵션 [0,1,2] 0:오름차순, 1:내림차순, 2:정렬 취소
};

/**
 * 버튼 [2.0 DataList의 정렬 해제] 클릭 시
 */
scwin.btn_sortInit_2_onclick = function (e) {
    // DataList 'dlt_books_2'의 정렬을 해제합니다.
    dlt_books_2.clearSort();
};

/**
 * 버튼 [2.1 컬럼 '분류'를 오름차순으로, 컬럼 '도서명'을 내림차순으로 정렬하기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // DataList 'dlt_books_2'의 정렬을 해제합니다.
    dlt_books_2.clearSort();

    // DataList 'dlt_books_2'의 컬럼 '분류'를 오름차순으로, 컬럼 '도서명'을 내림차순으로 정렬합니다.
    let options = {};
    options.sortIndex = "categoryLabel label"; // DataList의 컬럼 ID 또는 Index. 공백으로 컬럼을 구분합니다.
    options.sortOrder = "1 -1"; // 정렬 기준으로 공백으로 구분합니다. 1:오름차순, -1:내림차순

    dlt_books_2.multisort(options);
};

/**
 * 버튼 [3.0 DataList의 정렬 해제] 클릭 시
 */
scwin.btn_sortInit_3_onclick = function (e) {
    // DataList 'dlt_dataType'의 정렬을 해제합니다.
    dlt_dataType.clearSort();
};

/**
 * 버튼 [3.1 컬럼 'dataType="text"'를 오름차순으로 정렬하기] 클릭 시
 */
scwin.btn_exam3_1_onclick = function (e) {
    // DataList 'dlt_dataType'의 정렬을 해제합니다.
    dlt_dataType.clearSort();

    // DataList 'dlt_dataType'의 컬럼 ID 'dataType_text'의 속성 'dataType'의 설정 값은 'text'입니다.
    // DataList 'dlt_dataType'의 컬럼 'dataType="text"'를 오름차순으로 정렬합니다.
    dlt_dataType.sort("dataType_text", 0); // 정렬 옵션 [0,1,2] 0:오름차순, 1:내림차순, 2:정렬 취소
};

/**
 * 버튼 [3.2 컬럼 'dataType="number"'를 오름차순으로 정렬하기] 클릭 시
 */
scwin.btn_exam3_2_onclick = function (e) {
    // DataList 'dlt_dataType'의 정렬을 해제합니다.
    dlt_dataType.clearSort();

    // DataList 'dlt_dataType'의 컬럼 ID 'dataType_number'의 속성 'dataType'의 설정 값은 'number'입니다.
    // DataList 'dlt_dataType'의 컬럼 'dataType="number"'를 오름차순으로 정렬합니다.
    dlt_dataType.sort("dataType_number", 0); // 정렬 옵션 [0,1,2] 0:오름차순, 1:내림차순, 2:정렬 취소
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'스크립트로 DataList의 컬럼의 데이터를 정렬하는 예제입니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'이 예제는 DataList의 함수가 세 가지 사용되었으며, 다음과 같습니다.<br/>- 단건 컬럼 정렬 : sort<br/>- 다건 컬럼 정렬 : multisort<br/>- 정렬 취소 : clearSort',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'숫자형 정렬을 적용하려면, DataList의 컬럼 속성 \'dataType\'의 설정 값을 \'number\' 또는 \'bigDecimal\'로 지정해야 합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',id:'',label:'버튼을 클릭하여 GridView의 출력 결과를 비교합니다.',style:'',escape:'false'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'단건 컬럼 정렬하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false',id:'btn_sortInit_1',style:'',type:'button','ev:onclick':'scwin.btn_sortInit_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1.0 DataList의 정렬 해제'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1.1 컬럼 \'분류\'를 오름차순으로 정렬하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1.2 컬럼 \'도서명\'을 내림차순으로 정렬하기'}]}]}]},{T:1,N:'w2:textbox',A:{class:'ws5_exam_txt_caption',escape:'false',id:'',label:'데이터 확인용 GridView',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'220',class:'gvw',dataList:'data:dlt_books_1',defaultCellHeight:'26',id:'grd_exam_1',initFixedHeightByRowNum:'4',readOnly:'true',rowNumWidth:'26',style:'height:60px;',tooltipDisplay:'true',visibleRowNum:'4'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'분류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',value:'정가',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'price',inputType:'text',value:'',width:'50',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'100'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'다건 컬럼 정렬하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false',id:'btn_sortInit_2',style:'',type:'button','ev:onclick':'scwin.btn_sortInit_2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2.0 DataList의 정렬 해제'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2.1 컬럼 \'분류\'를 오름차순으로, 컬럼 \'도서명\'을 내림차순으로 정렬하기'}]}]}]},{T:1,N:'w2:textbox',A:{class:'ws5_exam_txt_caption',escape:'false',id:'',label:'데이터 확인용 GridView',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'220',class:'gvw',dataList:'data:dlt_books_2',defaultCellHeight:'26',id:'',initFixedHeightByRowNum:'4',readOnly:'true',rowNumWidth:'26',style:'height:60px;',tooltipDisplay:'true',visibleRowNum:'4'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'분류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',value:'정가',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'price',inputType:'text',value:'',width:'50',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'100'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'숫자형 컬럼 정렬하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false','ev:onclick':'scwin.btn_sortInit_3_onclick',id:'btn_sortInit_3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3.0 DataList의 정렬 해제'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam3_1_onclick',id:'btn_exam3_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3.1 \'dataType="text"\'를 오름차순으로 정렬하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam3_2_onclick',id:'btn_exam3_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3.2 \'dataType="number"\'를 오름차순으로 정렬하기'}]}]}]},{T:1,N:'w2:textbox',A:{class:'ws5_exam_txt_caption',escape:'false',id:'',label:'데이터 확인용 GridView',style:''}},{T:1,N:'w2:gridView',A:{class:'gvw',dataList:'data:dlt_dataType',defaultCellHeight:'26',id:'',readOnly:'true',rowNumWidth:'26',style:'height:60px;',tooltipDisplay:'true',visibleRowNum:'all',initFixedHeightByRowNum:'3'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'dataType="text"',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',value:'dataType="number"',width:'140'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dataType_text',inputType:'text',textAlign:'right',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dataType_number',inputType:'text',textAlign:'right',width:'140'}}]}]}]}]}]}]}]}]}]}]})
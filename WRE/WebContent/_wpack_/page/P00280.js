/*amd /page/P00280.xml 9297 19ae675bceba08eb34ce3eddea222e920a743589a21d5c98ac56d4ccb97f602b */
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
 * 버튼 [1.1 필터 적용하기 - 컬럼 '도서명'의 값에 '인생'이 포함되고 컬럼 '분류'의 값이 '인문'과 일치] 클릭 시
 * 버튼 [2.1 필터 적용하기 - 컬럼 '도서명'의 값에 '인생'이 포함되고 컬럼 '분류'의 값이 '인문'과 일치] 클릭 시
 */
scwin.exam_setColumnFilter = function () {
    // DataList 'dlt_books_1'에 필터를 해제합니다.
    dlt_books_1.clearFilter();

    // DataList 'dlt_books_1'의 컬럼 '도서명'에 필터를 적용합니다. - 값에 '인생'이 포함
    dlt_books_1.setColumnFilter({
        "type": "row",
        "colIndex": "label",
        "key": "인생",
        "exactMatch": false,
        "condition": "and"
    });

    // DataList 'dlt_books_1'의 컬럼 '분류'에 필터를 적용합니다. - 값이 '인문'과 일치
    dlt_books_1.setColumnFilter({
        "type": "row",
        "colIndex": "categoryLabel",
        "key": "인문",
        "exactMatch": true,
        "condition": "and"
    });
};

/**
 * 버튼 [1.2 컬럼 '분류'의 필터 해제하기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // DataList 'dlt_books_1'의 컬럼 '분류'에 적용된 필터를 해제합니다.
    dlt_books_1.removeColumnFilter("categoryLabel");
};

/**
 * 버튼 [1.3 컬럼 '도서명'의 필터 해제하기] 클릭 시
 */
scwin.btn_exam1_3_onclick = function (e) {
    // DataList 'dlt_books_1'의 컬럼 '도서명'에 적용된 필터를 해제합니다.
    dlt_books_1.removeColumnFilter("label");
};

/**
 * 버튼 [2.2 모든 컬럼의 필터 해제하기] 클릭 시
 */
scwin.btn_exam2_2_onclick = function (e) {
    // DataList 'dlt_books_1'에 적용된 모든 필터를 해제합니다.
    dlt_books_1.clearFilter();
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'DataList의 컬럼에 적용된 필터를 해제하는 예제입니다.<br/>',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'필터를 해제하는 함수는 2가지가 있으며 다음과 같습니다.<br/>- removeColumnFilter : 컬럼 단위로 필터를 해제합니다.<br/>- clearFilter : 모든 필터를 해제합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',id:'',label:'순서에 맞게 버튼을 클릭하여 GridView의 출력 결과를 확인합니다.',style:'',escape:'false'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style no_padding',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false','ev:onclick':'scwin.btn_initData_onclick',id:'btn_initData',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DataList의 데이터 초기화'}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'컬럼에 적용된 필터 해제하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.exam_setColumnFilter',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1.1 필터 적용하기 - 컬럼 \'도서명\'의 값에 \'인생\'이 포함되고 컬럼 \'분류\'의 값이 \'인문\'과 일치'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1.2 컬럼 \'분류\'의 필터 해제하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_3_onclick',id:'btn_exam1_3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1.3 컬럼 \'도서명\'의 필터 해제하기'}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'모든 컬럼에 적용된 필터 해제하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.exam_setColumnFilter',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2.1 필터 적용하기 - 컬럼 \'도서명\'의 값에 \'인생\'이 포함되고 컬럼 \'분류\'의 값이 \'인문\'과 일치'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false',id:'btn_exam2_2',style:'',type:'button','ev:onclick':'scwin.btn_exam2_2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2.2 모든 컬럼의 필터 해제하기'}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'결과 확인용 GridView',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'220',class:'gvw',dataList:'data:dlt_books_1',defaultCellHeight:'26',id:'',initFixedHeightByRowNum:'4',readOnly:'true',rowNumWidth:'26',style:'height:60px;',tooltipDisplay:'true',visibleRowNum:'4'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'분류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',value:'정가',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'price',inputType:'text',value:'',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'100'}}]}]}]}]}]}]}]}]}]}]})
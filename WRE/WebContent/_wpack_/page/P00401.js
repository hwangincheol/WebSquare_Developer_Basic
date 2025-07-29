/*amd /page/P00401.xml 8792 d729364484930f63297b0604f6ededc0120a08587bffeecc027c67f3d8e0aca1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}},{T:1,N:'w2:column',A:{id:'price',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_2',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}},{T:1,N:'w2:column',A:{id:'price',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    
};

/**
 * DataList 'dlt_books_1'에 데이터 할당
 */
scwin.setData_dlt_books_1 = function () {
    dlt_books_1.setJSON([
        { "label": "공정하다는 착각", "categoryLabel": "인문", "price": "18000" },
        { "label": "기분을 관리하면 인생이 관리된다", "categoryLabel": "시/에세이", "price": "17600" },
        { "label": "내가 틀릴 수도 있습니다", "categoryLabel": "인문", "price": "16000" },
        { "label": "너무 잘하려고 애쓰지 마라", "categoryLabel": "시/에세이", "price": "14000" }
    ]);
};

/**
 * 버튼 [1.1 데이터 할당하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // DataList 'dlt_books_1'에 데이터를 할당합니다.
    dlt_books_1.setJSON([
        { "label": "공정하다는 착각", "categoryLabel": "인문", "price": "18000" },
        { "label": "기분을 관리하면 인생이 관리된다", "categoryLabel": "시/에세이", "price": "17600" },
        { "label": "내가 틀릴 수도 있습니다", "categoryLabel": "인문", "price": "16000" },
        { "label": "너무 잘하려고 애쓰지 마라", "categoryLabel": "시/에세이", "price": "14000" }
    ]);
};

/**
 * 버튼 [1.2 데이터 제거하기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // 데이터 제거 - 데이터 반환이 필요하지 않아 빈 데이터로 할당합니다.
    dlt_books_1.setData([]);
};

/**
 * 버튼 [2.1 데이터 할당하기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // DataList 'dlt_books_2'에 데이터를 할당합니다.
    dlt_books_2.setJSON([
        { "label": "공정하다는 착각", "categoryLabel": "인문", "price": "18000" },
        { "label": "기분을 관리하면 인생이 관리된다", "categoryLabel": "시/에세이", "price": "17600" },
        { "label": "내가 틀릴 수도 있습니다", "categoryLabel": "인문", "price": "16000" },
        { "label": "너무 잘하려고 애쓰지 마라", "categoryLabel": "시/에세이", "price": "14000" }
    ]);
};

/**
 * 버튼 [2.2 데이터 제거하기] 클릭 시
 */
scwin.btn_exam2_2_onclick = function (e) {
    // 데이터 제거 - 데이터 반환이 필요하지 않아 빈 데이터로 할당합니다.
    dlt_books_2.setData([]);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 속성 \'hideFilterIconOnNoData\' 설정 값 비교 예제입니다.<br/>이 속성은 GridView의 필터(filter) 기능을 사용하고 DataList에 할당된 데이터가 없는 경우, 헤더의 필터 아이콘 표시에 대한 설정입니다',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'설정 값에 따른 동작은 다음과 같습니다.<br/>- true : GridView에 할당된 데이터가 없으면 헤더에 필터 아이콘이 표시되지 않습니다.<br/>- false : [default] GridView에 할당된 데이터의 유무와 상관 없이 헤더에 필터 아이콘이 표시됩니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView와 연결된 DataList에 필터가 적용되어 출력된 데이터가 없는 경우에는 필터 아이콘이 표시됩니다.',style:'',class:'exam_txt caution'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(기본 설정) 속성 \'hideFilterIconOnNoData\' 미사용',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'헤더 컬럼에 필터 아이콘이 표시됩니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1.1 데이터 할당하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1.2 데이터 제거하기'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'260',class:'gvw',dataList:'data:dlt_books_1',id:'',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true',defaultCellHeight:'26',hideFilterIconOnNoData:'false',useFilterList:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'분류',width:'90',useFilter:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',sortable:'true',value:'도서명',width:'130'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'130',value:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'속성 \'hideFilterIconOnNoData\' 사용',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'할당된 데이터가 없으면 헤더 컬럼에 필터 아이콘이 표시되지 않습니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2.1 데이터 할당하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam2_2_onclick',id:'btn_exam2_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2.2 데이터 제거하기'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'260',class:'gvw',dataList:'data:dlt_books_2',defaultCellHeight:'26',hideFilterIconOnNoData:'true',id:'',style:'height:100px;',useFilterList:'true',visibleRowNum:'4',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',useFilter:'true',value:'분류',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',sortable:'true',value:'도서명',width:'130'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',value:'',width:'130'}}]}]}]}]}]}]}]}]}]}]})
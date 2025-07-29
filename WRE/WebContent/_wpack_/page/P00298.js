/*amd /page/P00298.xml 6069 73dfbfdddd2d1f2bb433ec6e11e8bbbe03a4284db9ba86802f3e6f7557209b48 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}},{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    // DataList 'dlt_books_1'에 데이터 할당하기
    let data = [
        { "label": "공정하다는 착각", "categoryLabel": "인문" },
        { "label": "기분을 관리하면 인생이 관리된다", "categoryLabel": "시/에세이" },
        { "label": "내가 틀릴 수도 있습니다", "categoryLabel": "인문" },
        { "label": "우리는 여전히 삶을 사랑하는가", "categoryLabel": "인문" },
        { "label": "저만치 혼자서", "categoryLabel": "소설" },
        { "label": "무엇이 옳은가", "categoryLabel": "인문" },
        { "label": "불편한 편의점", "categoryLabel": "소설" },
        { "label": "잘했고 잘하고 있고 잘 될 것이다", "categoryLabel": "시/에세이" },
        { "label": "책들의 부엌", "categoryLabel": "소설" }
    ];
    dlt_books_1.setJSON(data);
};

/**
 * 버튼 [바디 컬럼 '도서명'에 class 'P00298_body_column' 적용하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // GridView 'grd_exam'의 바디 컬럼 ID가 'label'인 컬럼에 class 'P00298_body_column'을 적용합니다.
    grd_exam.setColumnClass("label", "P00298_body_column");
};

/**
 * 버튼 [바디 컬럼 '분류'의 두 번째 로우의 셀에 class 'P00298_body_cell' 적용하기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // GridView 'grd_exam'의 바디 컬럼 ID가 'categoryLabel'인 컬럼의 두 번째 셀에 class 'P00298_body_cell'을 적용합니다.
    grd_exam.setCellClass(1, "categoryLabel", "P00298_body_cell");
};

/**
 * 버튼 [헤더 컬럼 '도서명'에 class 'P00298_header_cell' 적용하기] 클릭 시
 */
scwin.btn_exam3_1_onclick = function (e) {
    // GridView 'grd_exam'의 헤더 컬럼 ID가 'h_label'인 셀에 class 'P00298_header_cell'을 적용합니다.
    grd_exam.setHeaderClass("h_label", "P00298_header_cell");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 바디 컬럼 또는 바디 셀 또는 헤더 셀의 클래스를 스크립트로 적용하는 예제입니다.<br/>다음의 GridView 함수로 구현할 수 있습니다.<br/>- setColumnClass: 바디 컬럼의 클래스를 적용합니다.<br/>- setCellClass: 바디 셀의 클래스를 적용합니다.<br/>- setHeaderClass: 헤더 셀의 클래스를 적용합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'적용된 Class를 제거하는 주요 함수는 다음과 같습니다.<br/>- removeColumnClass: 바디 컬럼의 클래스를 제거합니다.<br/>- removeCellClass: 바디 셀의 클래스를 제거합니다.<br/>- removeHeaderClass: 헤더 셀의 클래스를 제거합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{id:'btn_exam1_1',style:'',type:'button',class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'바디 컬럼 \'도서명\'에 class \'P00298_body_column\' 적용하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',id:'btn_exam2_1',style:'',type:'button','ev:onclick':'scwin.btn_exam2_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'바디 컬럼 \'분류\'의 두 번째 로우의 셀에 class \'P00298_body_cell\' 적용하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam3_1_onclick',id:'btn_exam3_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'헤더 컬럼 \'도서명\'에 class \'P00298_header_cell\' 적용하기'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'mb_def_box nobottom',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'170',class:'gvw',dataList:'data:dlt_books_1',defaultCellHeight:'26',id:'grd_exam',initFixedHeightByRowNum:'4',readOnly:'true',rowNumWidth:'26',style:'height:60px;',tooltipDisplay:'true',visibleRowNum:'4',rowNumVisible:'true',fastScroll:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'h_categoryLabel',inputType:'text',value:'분류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_label',inputType:'text',value:'도서명',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'100'}}]}]}]}]}]}]}]}]}]}]}]})
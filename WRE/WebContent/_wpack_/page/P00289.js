/*amd /page/P00289.xml 6007 cac0062cd1134a04fa58d23ccf4e2c5d9d5cdf38388c8b312a18123e27a070eb */
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

    // 예제 테스트를 위해 셀에 포커스 지정.
    grd_exam.setFocusedCell(2, 1);
};

/**
 * 버튼 [선택된 열의 인덱스 반환받기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // GridView 'grd_exam'의 선택된 열의 Index를 반환받습니다.
    // 선택된 열이 없으면 null이 반환됩니다.
    let colIndex = grd_exam.getFocusedColumnIndex();

    alert("focusedColumnIndex : " + colIndex);
    console.log("focusedColumnIndex : ", colIndex);
};

/**
 * 버튼 [선택된 행의 인덱스 반환받기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // GridView 'grd_exam'의 선택된 행의 Index를 반환받습니다.
    // 선택된 행이 없으면 -1이 반환됩니다.
    let rowIndex = grd_exam.getFocusedRowIndex();

    alert("focusedRowIndex : " + rowIndex);
    console.log("focusedRowIndex : ", rowIndex);
};
/**
 * 버튼 [GridView의 포커스 제거하기] 클릭 시
 */
scwin.btn_exam_removeFocusedCell_onclick = function (e) {
    // GridView 'grd_exam'의 포커스를 제거합니다.
    grd_exam.removeFocusedCell();
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 선택된 열 또는 행의 인덱스를 반환받는 예제입니다.<br/>다음의 GridView 함수로 구현할 수 있습니다.<br/>- getFocusedColumnIndex: 포커스된 셀의 열 인덱스를 반환. 포커스된 열이 없으면 null이 반환됩니다.<br/>- getFocusedRowIndex: 포커스된 셀의 행 인덱스를 반환. 포커스된 행이 없으면 -1이 반환됩니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'GridView의 셀을 선택(클릭)하고, 버튼 [선택된 열의 인덱스 반환받기] 또는 [선택된 행의 인덱스 반환받기]를 클릭하면 브라우저 \'alert\'으로 반환 값을 확인할 수 있습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{id:'btn_exam1_1',style:'',type:'button',class:'btn_exam_exec','ev:onclick':'scwin.btn_exam1_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택된 열의 인덱스 반환받기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',id:'btn_exam1_2',style:'',type:'button','ev:onclick':'scwin.btn_exam1_2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택된 행의 인덱스 반환받기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_exam_removeFocusedCell_onclick',id:'btn_exam_removeFocusedCell',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'GridView의 포커스 제거하기'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'mb_def_box nobottom',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'170',class:'gvw',dataList:'data:dlt_books_1',defaultCellHeight:'26',id:'grd_exam',initFixedHeightByRowNum:'4',readOnly:'true',rowNumWidth:'26',style:'height:60px;',tooltipDisplay:'true',visibleRowNum:'4',rowNumVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'분류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'100'}}]}]}]}]}]}]}]}]}]}]}]})
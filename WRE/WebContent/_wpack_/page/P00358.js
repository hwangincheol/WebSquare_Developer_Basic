/*amd /page/P00358.xml 7882 0ae5784b2ff18b50289be91a4bd3fd5c0981b8db0204bf926418e4a3dd785238 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_exam1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col_a',name:'A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col_b',name:'B',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col_c',name:'C',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col_d',name:'D',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col_a',E:[{T:4,cdata:'A0'}]},{T:1,N:'col_b',E:[{T:4,cdata:'B0'}]},{T:1,N:'col_c',E:[{T:4,cdata:'C0'}]},{T:1,N:'col_d',E:[{T:4,cdata:'D0'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col_a',E:[{T:4,cdata:'A1'}]},{T:1,N:'col_b',E:[{T:4,cdata:'B1'}]},{T:1,N:'col_c',E:[{T:4,cdata:'C1'}]},{T:1,N:'col_d',E:[{T:4,cdata:'D1'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col_a',E:[{T:4,cdata:'A2'}]},{T:1,N:'col_b',E:[{T:4,cdata:'B2'}]},{T:1,N:'col_c',E:[{T:4,cdata:'C2'}]},{T:1,N:'col_d',E:[{T:4,cdata:'D2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col_a',E:[{T:4,cdata:'A3'}]},{T:1,N:'col_b',E:[{T:4,cdata:'B3'}]},{T:1,N:'col_c',E:[{T:4,cdata:'C3'}]},{T:1,N:'col_d',E:[{T:4,cdata:'D3'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [컬럼 'col_b'에 'readOnly' 적용하기 - 함수 setColumnReadOnly 사용] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // GridView 'grd_exam1'의 컬럼 'col_b'에 'readOnly'를 적용합니다.
    grd_exam1.setColumnReadOnly("col_b", true);
};

/**
 * 버튼 [컬럼 'col_b'에 'readOnly' 해제하기 - 함수 setColumnReadOnly 사용] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // GridView 'grd_exam1'의 컬럼 'col_b'에 'readOnly'를 해제합니다.
    grd_exam1.setColumnReadOnly("col_b", false);
};

/**
 * 버튼 [컬럼 'col_c'에 'readOnly' 적용하기 - 함수 setReadOnly 사용] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // GridView 'grd_exam1'의 컬럼 'col_c'에 'readOnly'를 적용합니다.
    grd_exam1.setReadOnly("column", "col_c", true);
};

/**
 * 버튼 [컬럼 'col_c'에 'readOnly' 해제하기 - 함수 setReadOnly 사용] 클릭 시
 */
scwin.btn_exam2_2_onclick = function (e) {
    // GridView 'grd_exam1'의 컬럼 'col_c'에 'readOnly'를 해제합니다.
    grd_exam1.setReadOnly("column", "col_c", false);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 컬럼(열)에 \'readOnly\'(읽기 전용)를 함수로 설정하는 예제입니다.<br/>\'readOnly\'가 \'true\'로 설정되면 셀이 수정 모드로 변경되지 않습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'사용할 수 있는 함수는 다음과 같습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'- setColumnReadOnly( colIndex , readOnly ) : 컬럼 단위 설정<br/>- setReadOnly( type , rowIndex , colIndex , readOnlyFlag ) : 첫 번째 인자 \'type\'을 통해 셀, 컬럼, 로우, GridView 전체를 설정',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 다른 함수를 통해 GridView 전체, 로우(Row), 셀(Cell) 단위로도 설정할 수 있습니다.',style:''}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'details'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'GridView의 \'readOnly\' 설정 관련 함수 목록 보기',style:'',tagname:'summary'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'- setCellReadOnly( rowIndex , colIndex , readOnly ) : 셀 단위 설정<br/>- setColumnReadOnly( colIndex , readOnly ) : 컬럼 단위 설정<br/>- setGridReadOnly( readOnly ) : GridView 전체 설정<br/>- setReadOnly( type , rowIndex , colIndex , readOnlyFlag ) : 첫 번째 인자 \'type\'을 통해 셀, 컬럼, 로우, GridView 전체를 설정<br/>- setRowReadOnly( rowIndex , readOnly ) : 로우 단위 설정',style:'margin-bottom: 6px;'}}]},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'\'readOnly\'가 설정된 셀의 배경색이 회색(#eee)으로 설정되어 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'Cell을 클릭하여 수정 모드로 변경되는지를 확인합니다. 모바일 테스트를 위해 수정 모드 변경 이벤트가 \'onclick\'으로 설정되었습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'col_b\'에 \'readOnly\' 적용하기 - 함수 setColumnReadOnly 사용'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'col_b\'에 \'readOnly\' 해제하기 - 함수 setColumnReadOnly 사용'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'col_c\'에 \'readOnly\' 적용하기 - 함수 setReadOnly 사용'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam2_2_onclick',id:'btn_exam2_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'col_c\'에 \'readOnly\' 해제하기 - 함수 setReadOnly 사용'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'252',class:'gvw',dataList:'data:dlt_exam1',defaultCellHeight:'26',id:'grd_exam1',keepDefaultColumnWidth:'true',rowNumVisible:'true',rowNumWidth:'20',style:'height: 100px;',visibleRowNum:'all',editModeEvent:'onclick',readOnlyBackgroundColor:'#eee'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column6',inputType:'text',value:'col_a',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'col_b',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',value:'col_c',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'col_d',width:'50'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'col_a',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col_b',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col_c',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col_d',inputType:'text',width:'50'}}]}]}]}]}]}]}]}]}]}]})
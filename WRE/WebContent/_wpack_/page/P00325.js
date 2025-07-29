/*amd /page/P00325.xml 5245 3f7ccddc467f7d95de13e2f4e8bba09c4c7cc0dbf795e03237e9e30fd01ea18d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'book_name',name:'도서명'}},{T:1,N:'w2:column',A:{id:'published_date',name:'출간일',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'사람일까 상황일까'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20190826'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'내가 틀릴 수도 있습니다'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20220418'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {

};

/**
 * 버튼 [DataList의 데이터 복원하기] 클릭 시
 */
scwin.btn_resetData_onclick = function(e) {
    // DataList 'dlt_books'의 값을 복원합니다.
    dlt_books.undoAll();
    // DataList 'dlt_books'에 적용된 정렬을 제거합니다.
    dlt_books.removeColumnFilterAll();
};

/**
 * 버튼 [DataList의 첫 번째 행의 '출간일' 열의 셀 값 변경하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function(e) {
    // DataList 'dlt_books'의 첫 번째 행의 '출간일' 열의 셀을 변경합니다.
    dlt_books.setCellData(0, "published_date", "19900101");
};

/**
 * 버튼 [DataList의 '도서명'을 오름차순으로 정렬하기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function(e) {
    // DataList 'dlt_books'의 '도서명'을 오름차순으로 정렬합니다.
    dlt_books.sort("book_name", 0);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'AliasDataList의 동작 방식을 확인할 수 있는 예제로 속성 \'scope\' 적용 예제입니다.<br/>속성 \'scope\'에 상위(부모, 조상)의 DataList의 경로를 지정하면, 상위 DataList가 링크됩니다.',style:'margin-bottom: 10px;'}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'버튼을 클릭하면 WFrame에 구성된 GridView의 데이터에도 반영되는 것을 확인할 수 있습니다.',style:'margin-bottom: 10px;'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_resetData',type:'button','ev:onclick':'scwin.btn_resetData_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DataList의 데이터 복원하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DataList의 첫 번째 행의 \'출간일\' 열의 셀 값 변경하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',id:'btn_exam2_1',type:'button','ev:onclick':'scwin.btn_exam2_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DataList의 \'도서명\'을 오름차순으로 정렬하기'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'mb_def_box nobottom'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'DataList의 ID : \'dlt_books\'',class:'ws5_example_txt_normal',escape:'false'}},{T:1,N:'w2:gridView',A:{dataList:'data:dlt_books',style:'height:60px;',autoFit:'allColumn',id:'grd_exam1',class:'gvw',defaultCellHeight:'26',autoFitMinWidth:'222',visibleRowNum:'2',editModeEvent:'onclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'146',inputType:'text',id:'column3',value:'도서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'76',inputType:'text',id:'column1',value:'출간일',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{textAlign:'left',width:'146',inputType:'text',id:'book_name',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'date',width:'76',displayFormat:'yyyy-MM-dd',inputType:'text',id:'published_date',value:'',displayMode:'label'}}]}]}]},{T:1,N:'w2:wframe',A:{src:'/page/P00325S01.xml',style:'min-height: 30px;border: 2px solid orange;padding: 6px 6px 0px 6px;',id:''}}]}]}]}]}]}]}]}]})
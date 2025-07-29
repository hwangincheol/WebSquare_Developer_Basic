/*amd /page/P00329.xml 4221 efe809d8bdb1d172a0c0ae512290642b8a6b6b2bf8d1dbe2543d8711204f3453 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}},{T:1,N:'w2:column',A:{id:'price',name:'정가',dataType:'text'}},{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'categoryLabel',E:[{T:4,cdata:'인문'}]},{T:1,N:'price',E:[{T:4,cdata:'18000'}]},{T:1,N:'label',E:[{T:4,cdata:'공정하다는 착각'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'categoryLabel',E:[{T:4,cdata:'소설'}]},{T:1,N:'price',E:[{T:4,cdata:'15000'}]},{T:1,N:'label',E:[{T:4,cdata:'저만치 혼자서'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'categoryLabel',E:[{T:4,cdata:'인문'}]},{T:1,N:'price',E:[{T:4,cdata:'16000'}]},{T:1,N:'label',E:[{T:4,cdata:'내가 틀릴 수도 있습니다'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo'},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    
};

/**
 * 버튼 [DataList의 컬럼 수 반환받기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function(e) {
    // DataList 'dlt_books'의 컬럼 수를 반환받습니다.
    let result = dlt_books.getTotalCol();
     
    // 반환 값 예시) 3
    
    alert("getTotalCol() 반환 값: " + result);
    
    // 로그 출력
    console.log('# 함수 getTotalCol() 반환 값');
    console.log(result);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents'},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc'},E:[{T:1,N:'w2:textbox',A:{escape:'false',label:'DataList의 컬럼 수를 반환하는 함수 \'getTotalCol\'의 예시입니다.<br/>함수 \'getTotalCol\'는 GridView에 구성된 컬럼과는 관련이 없습니다.',style:'',class:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap'},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style'},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DataList의 컬럼 수 반환받기'}]}]}]},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'아래의 GridView는 DataList의 데이터의 구조를 확인하기 위해 구성되었습니다.',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'220',class:'gvw',dataList:'data:dlt_books',defaultCellHeight:'26',id:'',initFixedHeightByRowNum:'4',readOnly:'true',rowNumWidth:'26',style:'height:60px;',tooltipDisplay:'true',visibleRowNum:'4'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'분류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',value:'정가',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'price',inputType:'text',value:'',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'100'}}]}]}]}]}]}]}]}]}]}]})
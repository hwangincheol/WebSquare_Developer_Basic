/*amd /page/P00406.xml 6843 1c5f0b6e6bee0d74e103e8ed5a172c453133dfb8661a4b3ce897e57aea795a01 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    // DataList에 데이터 할당
    scwin.setDataList();

    // DataList에 로우 추가, 로우 삭제, 셀 값 변경
    scwin.setDataStatus();
};

/**
 * DataList에 데이터 할당
 */
scwin.setDataList = function () {
    var arrData = [
        { "label": "무엇이 옳은가", "categoryLabel": "인문" },
        { "label": "내가 틀릴 수도 있습니다", "categoryLabel": "인문" },
        { "label": "공정하다는 착각", "categoryLabel": "인문" }
    ];

    dlt_books_1.setJSON(arrData);
};

/**
 * DataList의 값 변경
 */
scwin.setDataStatus = function () {
    // 셀 수정
    dlt_books_1.setCellData(1, "categoryLabel", "분류 변경");

    // 로우 삭제
    dlt_books_1.deleteRow(2);

    // 로우 추가
    dlt_books_1.insertRow(1);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 셀 단위로 상태를 표시하는 예제입니다.<br/>이 기능은 속성 \'cellStatusVisible\'을 true로 설정하여 사용할 수 있으며 아이콘의 표시 위치는 속성 \'cellStatusIconPosition\'에 지정할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'아래의 GridView들은 동일한 DataList \'dlt_books_1\'가 연결되어 있습니다.<br/>셀의 상태별 아이콘을 확인하기 위해 화면 로딩 후 스크립트(행 추가, 행 삭제, 값 변경)가 작성되었습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'exam_txt req_version',escape:'false',id:'',label:'속성 \'cellStatusVisible\'과 속성 \'cellStatusIconPosition\'은 아래의 엔진부터 제공됩니다.<br/>- RC: 5.0_5.4786B.20230106.154957<br/>- GA: 5.0_5.4877A.20230405.131227',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(기본 설정) 셀 단위 상태 미표시',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'260',class:'gvw',dataList:'data:dlt_books_1',defaultCellHeight:'26',id:'',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true',rowStatusVisible:'true',cellStatusVisible:'false',rowStatusWidth:'26',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'분류',width:'72'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'160'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',width:'72',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'160',value:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'셀 단위 상태를 우측 상단에 표시하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'260',cellStatusVisible:'true',class:'gvw',dataList:'data:dlt_books_1',defaultCellHeight:'26',id:'',keepDefaultColumnWidth:'true',rowStatusVisible:'true',rowStatusWidth:'26',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true',cellStatusIconPosition:'right'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'분류',width:'72'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'160'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',value:'',width:'72'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',value:'',width:'160'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'셀 단위 상태를 좌측 상단에 표시하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'260',cellStatusVisible:'true',class:'gvw',dataList:'data:dlt_books_1',defaultCellHeight:'26',id:'',keepDefaultColumnWidth:'true',rowStatusVisible:'true',rowStatusWidth:'26',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true',cellStatusIconPosition:'left'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'분류',width:'72'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'160'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',value:'',width:'72'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',value:'',width:'160'}}]}]}]}]}]}]}]}]}]}]})
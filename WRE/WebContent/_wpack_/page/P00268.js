/*amd /page/P00268.xml 11452 2d180e225c6dd47be2f45d96a1d3645f09bb0c2cab83a7b22b9895e8136bf0c4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books',repeatNode:'map',style:'',valueAttribute:'',saveRemovedData:'true',removedDataMatch:'true',removeDummyRowStatus:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'book_name',name:'도서명'}},{T:1,N:'w2:column',A:{id:'published_date',name:'출간일',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'신규 도서'}]},{T:1,N:'published_date',E:[{T:4,cdata:'99991231'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'사람일까 상황일까'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20190826'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'내가 틀릴 수도 있습니다'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20220418'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    // GridView 'grd_exam1'의 첫 번째 행, 첫 번째 열에 포커스를 지정합니다.
    grd_exam1.setFocusedCell(0, 0, false);
};

/**
 * 버튼 [DataList 초기화] 클릭 시
 */
scwin.btn_initData_onclick = function (e) {
    // 최초 설정한 데이터로 재할당 합니다.
    dlt_books.setJSON([
        { "book_name": "신규 도서", "published_date": "99991231" },
        { "book_name": "사람일까 상황일까", "published_date": "20190826" },
        { "book_name": "내가 틀릴 수도 있습니다", "published_date": "20220418" },
    ]);

    // GridView 'grd_exam1'의 첫 번째 행, 첫 번째 열에 포커스를 지정합니다.
    grd_exam1.setFocusedCell(0, 0, false);

    // DataList 'dlt_books'의 broadcast를 활성화 시킵니다.
    dlt_books.setBroadcast(true, true);
};

/**
 * 버튼 [Broadcast 비활성화하기] 클릭 시
 */
scwin.btn_exam1_onclick = function (e) {
    // DataList 'dlt_books'의 broadcast 기능을 비활성화합니다.
    dlt_books.setBroadcast(false);

    // 로그 출력
    let strLog = "# 'dlt_books'의 Broadcast 기능을 비활성화합니다.";
    $c.frame.printExampleLog(strLog, txa_log, false);
    $c.frame.printExampleLog("DataList와 연결된 컴포넌트의 데이터가 갱신되지 않습니다.", txa_log, false);
    console.log(strLog);
};

/**
 * 버튼 [데이터 수정 스크립트 실행하기] 클릭 시
 */
scwin.btn_exam2_onclick = function (e) {
    dlt_books.setCellData(0, "book_name", "수정");
    dlt_books.setCellData(0, "published_date", "19450815");

    // 로그 출력
    let strLog = "# 'dlt_books'의 0번째 행의 데이터를 수정합니다.";
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
};

/**
 * 버튼 [Broadcast 활성화하기] 클릭 시
 */
scwin.btn_exam3_onclick = function (e) {
    // DataList 'dlt_books'의 broadcast 기능을 활성화하고 연결된 컴포넌트들을 즉시 갱신합니다.
    dlt_books.setBroadcast(true, true);

    // 로그 출력
    let strLog = "# 'dlt_books'의 Broadcast 기능을 활성화합니다.";
    $c.frame.printExampleLog(strLog, txa_log, false);
    $c.frame.printExampleLog("DataList와 연결된 컴포넌트의 데이터가 갱신됩니다.", txa_log, false);
    console.log(strLog);
};

/**
 * 버튼 [Broadcast 상태 확인하기] 클릭 시
 */
scwin.btn_exam4_onclick = function (e) {
    // DataList 'dlt_books'의 broadcast 기능의 활성화 여부를 반환 받습니다.
    let blnResult = dlt_books.getBroadcast();

    // 로그 출력
    let strLog = "# 'dlt_books'의 Broadcast 기능의 활성화 여부 : ";
    $c.frame.printExampleLog(strLog + blnResult, txa_log, false);
    console.log(strLog, blnResult);

    if (blnResult) {
        strLog = "연결된 컴포넌트가 즉시 갱신됩니다.";
    } else {
        strLog = "연결된 컴포넌트가 갱신되지 않습니다.";
    }

    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'DataList의 함수 \'setBroadcast\'를 통해 Broadcast 기능을 비활성화했을 때의 동작을 확인할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'DataList의 Broadcast 기능은 DataList의 데이터가 변경 시, 연결된 컴포넌트에 데이터를 전파(반영)하는 기능입니다.<br/>기본 설정값은 true이며, 데이터 변경 시 DataList와 연결된 컴포넌트가 즉시 갱신됩니다.<br/>DataList의 함수 \'setBroadcast\'를 이용해 이 기능을 활성화 또는 비활성화할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'일반 적으로 DataList의 함수 \'setBroadcast\'는 DataList가 GridView와 연결되어 있으며, 스크립트로 대량의 데이터를 조작(추가, 수정, 삭제)할 때 사용합니다.<br/>특히 데이터의 추가, 삭제(remove)가 발생하는 경우 화면의 속도를 개선할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'사용 방식은 다음과 같습니다.<br/>1. Broadcast 기능을 비활성화합니다.<br/>2. 대량의 데이터를 조작하는 스크립트를 실행합니다. (스크립트 실행 중 오류 발생으로 Broadcast 기능을 활성화하지 못하는 것을 방지하기 위해 \'try/catch\'를 사용합니다.)<br/>3. Broadcast 기능을 활성화하여 컴포넌트를 갱신합니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style no_padding',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false',id:'btn_initData',style:'',type:'button','ev:onclick':'scwin.btn_initData_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DataList 초기화'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false','ev:onclick':'scwin.btn_exam2_onclick',id:'btn_exam2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'데이터 수정 스크립트 실행하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_exam4_onclick',id:'btn_exam4',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Broadcast 상태 확인하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_exam1_onclick',id:'btn_exam1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Broadcast 비활성화하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_exam3_onclick',id:'btn_exam3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Broadcast 활성화하기'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'280',class:'gvw mb10',dataList:'data:dlt_books',defaultCellHeight:'26',id:'grd_exam1',keepDefaultColumnWidth:'true',readOnly:'true',rowNumVisible:'true',rowNumWidth:'26',rowStatusVisible:'true',rowStatusWidth:'30',style:'height:100px;',visibleRowNum:'all',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'162'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'출간일',width:'83'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',value:'',width:'162'}},{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyy-MM-dd',displayMode:'label',id:'published_date',inputType:'text',width:'83'}}]}]}]},{T:1,N:'w2:textbox',A:{class:'com_example_heading mb10',id:'',label:'선택된 GridView의 행',style:''}},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'600',class:'w2tb tbl no_padding',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도서명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'',placeholder:'',ref:'data:dlt_books.book_name',style:'width:100%;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출간일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',footerDiv:'true',id:'',ref:'data:dlt_books.published_date',renderDiv:'true',renderType:'',rightAlign:'false',style:'width: 100px;'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})
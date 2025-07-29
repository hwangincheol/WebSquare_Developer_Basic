/*amd /page/P00267.xml 7741 c8895c99215f823e359474e833e31a1dc489ef5b47e67dc16d1d81ceb7b94bf8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books',repeatNode:'map',style:'',valueAttribute:'',saveRemovedData:'true',removedDataMatch:'true',removeDummyRowStatus:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'book_name',name:'도서명'}},{T:1,N:'w2:column',A:{id:'published_date',name:'출간일',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'사람일까 상황일까'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20190826'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'삭제 예정 도서'}]},{T:1,N:'published_date',E:[{T:4,cdata:'99991231'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'내가 틀릴 수도 있습니다'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20220418'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'공정하다는 착각'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20201201'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    // 예제 테스트를 위한 데이터 상태 변경 로직
    dlt_books.setCellData(2, "published_date", "99990101");
    dlt_books.deleteRow(1);
    dlt_books.insertJSON(0, [{ book_name: "신규 도서", published_date: "20230606" }]);
};

/**
 * 버튼 [Index 추출하기] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    // DataList 'dlt_books'의'rowStatus'의 값이 'R'인 Row Index를 배열로 추출합니다.
    let arrResult = dlt_books.getRowIndexByStatus("R");

    // 로그 출력
    $c.frame.printExampleLog("버튼 [Index 추출하기] 클릭", txa_log);
    $c.frame.printExampleLog("# 'rowStatus'의 값이 'R'인 Row Index - return 예시)", txa_log, false);
    $c.frame.printExampleLog(JSON.stringify(arrResult), txa_log, false);
    console.log("# 'rowStatus'의 값이 'R'인 Row Index - return 예시)", "\n", arrResult);
};

//
/**
 * 버튼 [JSON 형식으로 데이터 추출하기] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    // DataList 'dlt_books'의'rowStatus'의 값이 'R'인 Row Index를 배열로 추출합니다.
    let arrRowIndex = dlt_books.getRowIndexByStatus("R");

    // 변수 'arrRowIndex'의 길이를 추출합니다.
    let numArrRowIdxLen = arrRowIndex.length;

    // 결과를 담을 배열을 선언합니다.
    let arrResult = [];

    // 변수 'arrRowIndex'의 길이만큼 'for' 구문을 실행합니다.
    for (let i = 0; i < numArrRowIdxLen; i++) {
        let numRowIndex = arrRowIndex[i]; // 행의 Index
        let jsnRowData = dlt_books.getRowJSON(numRowIndex); // 행의 데이터를 JSON 형식으로 추출

        // 추출한 JSON 형식의 데이터를 배열에 추가
        arrResult.push(jsnRowData);
    }

    // 로그 출력
    $c.frame.printExampleLog("버튼 [JSON 형식으로 데이터 추출하기] 클릭", txa_log);
    $c.frame.printExampleLog("# 'rowStatus'의 값이 'R'인 행의 데이터를 JSON 형식으로 추출하기 - return 예시)", txa_log, false);
    $c.frame.printExampleLog(JSON.stringify(arrResult, "", "\t"), txa_log, false);
    console.log("# 'rowStatus'의 값이 'R'인 행의 데이터를 JSON 형식으로 추출하기 - return 예시)", "\n", arrResult);
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'DataList의 \'rowStatus\'(행 상태)의 값이 \'R\'인 데이터를 JSON 형식으로 추출하는 방법입니다.<br/>이 기능은 아래의 두 함수를 호출하여 구현할 수 있습니다.<br/>- getRowIndexByStatus : \'rowStatus\'(상태값)가 일치하는 행(Row)의 Index를 배열로 반환<br/>- getRowJSON : 행(Row)의 Index에 해당하는 데이터를 JSON객체로 반환<br/>',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'예제는 \'DataList\'의 데이터 상태 값 확인을 용이하게 하기 위해 \'GridView\'에 데이터를 출력하였습니다.<br/>화면 로딩 후 DataList의 삭제(D), 수정(U), 삽입(C) 상태를 변경하였습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'버튼을 클릭하고 \'로그 확인\' 영역 또는 브라우저 개발자도구의 콘솔에 로그를 확인합니다.',style:'',class:'ws_example_txt_desc_info'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style no_padding',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Index 추출하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'JSON 형식으로 데이터 추출하기'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'280',class:'gvw',dataList:'data:dlt_books',defaultCellHeight:'26',id:'grd_exam1',style:'height:100px;',visibleRowNum:'all',visibleRowNumFix:'true',rowNumVisible:'true',rowNumWidth:'26',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'30',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'162'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'출간일',width:'83'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',width:'162',value:''}},{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyy-MM-dd',displayMode:'label',id:'published_date',inputType:'text',width:'83'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})
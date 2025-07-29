/*amd /page/P00275.xml 9128 5cc1ce6bbfe9fe8e51d790089786dc0039609ca2284711abcdb32ba19046278b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'func_name',name:'함수명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [전체 데이터 설정하기 - JSON 형식] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // DataList 'dlt_books_1'의 전체 데이터를 JSON 형식으로 설정합니다.
    let data = [
        { "func_name": "setJSON", "label": "공정하다는 착각" },
        { "func_name": "setJSON", "label": "기분을 관리하면 인생이 관리된다" }
    ];

    dlt_books_1.setJSON(data);

    // 로그 출력
    let strLog = '# 전체 데이터 설정하기 - JSON 형식 | 함수 setJSON 실행 \n 데이터 예시';
    $c.frame.printExampleLog(strLog, txa_log, false);
    $c.frame.printExampleLog(JSON.stringify(data), txa_log, false);
    console.log(strLog);
    console.log(data)
};

/**
 * 버튼 [전체 데이터 설정하기 - 1차원 Array 형식 + 컬럼 정보] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // DataList 'dlt_books_1'의 전체 데이터를 '1차원 Array 형식 + 컬럼 정보'으로 설정합니다.
    // DataList의 컬럼 "func_name"와 "label"에 데이터를 설정합니다.
    let data = {
        "columnInfo": ["func_name", "label"],
        "data": ["setArray", "내가 틀릴 수도 있습니다", "setArray", "너무 잘하려고 애쓰지 마라"]
    };

    dlt_books_1.setArray(data);

    // 데이터 구조 예시) 
    // "columnInfo"에 정의된 컬럼의 순서에 맞춰 "data"에 데이터를 1차원 배열로 구성합니다.
    // {
    //     "columnInfo": ["column_1", "column_2"], // DataList의 컬럼 ID가 담긴 1차원 배열로 설정할 컬럼 ID를 작성.
    //     "data": ["column_1 row_1", "column_2 row_1", "column_1 row_2", "column_2 row_2"]  // 'columnInfo'에 정의한 컬럼의 순서대로 구성된 1차원 배열 데이터.
    // };

    // 로그 출력
    let strLog = '# 전체 데이터 설정하기 - 1차원 Array 형식 + 컬럼 정보 | 함수 setArray 실행 \n 데이터 예시';
    $c.frame.printExampleLog(strLog, txa_log, false);
    $c.frame.printExampleLog(JSON.stringify(data), txa_log, false);
    console.log(strLog);
    console.log(data)
};

/**
 * 버튼 [전체 데이터 설정하기 - 1차원 Array 형식] 클릭 시
 */
scwin.btn_exam1_3_onclick = function (e) {
    // DataList 'dlt_books_1'의 전체 데이터를 '1차원 Array 형식'으로 설정합니다.
    // 데이터의 순서는 DataList에 정의된 컬럼의 순서와 일치해야 합니다.
    let data = ["setData", "우리는 여전히 삶을 사랑하는가", "setData", "무엇이 옳은가"];

    dlt_books_1.setData(data);

    // 로그 출력
    let strLog = '# 전체 데이터 설정하기 - 1차원 Array 형식 | 함수 setData 실행 \n 데이터 예시';
    $c.frame.printExampleLog(strLog, txa_log, false);
    $c.frame.printExampleLog(JSON.stringify(data), txa_log, false);
    console.log(strLog);
    console.log(data)
};

/**
 * 버튼 [전체 데이터 설정하기 - XML 형식] 클릭 시
 */
scwin.btn_exam1_4_onclick = function (e) {
    // DataList 'dlt_books_1'의 전체 데이터를 XML 형식으로 설정합니다.
    let data = WebSquare.xml.parse("<list><map><func_name>setXML</func_name><label>작별인사</label></map><map><func_name>setXML</func_name><label>문명의 붕괴(Collapse)</label></map></list>");

    dlt_books_1.setXML(data);

    // 데이터 예시)
    // <list>
    //     <map>
    //         <func_name>setXML</func_name>
    //         <label>작별인사</label>
    //     </map>
    //     <map>
    //         <func_name>setXML</func_name>
    //         <label>문명의 붕괴(Collapse)</label>
    //     </map>
    // </list>

    // 로그 출력
    let strLog = '# 전체 데이터 설정하기 - XML 형식 | 함수 setXML 실행 \n 데이터 예시';
    $c.frame.printExampleLog(strLog, txa_log, false);
    $c.frame.printExampleLog(WebSquare.xml.serialize(data), txa_log, false);
    console.log(strLog);
    console.log(data)
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    //textarea value를 빈문자열로 할당.
    txa_log.setValue("");
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'DataList에 전체 데이터를 설정하는 함수 예시입니다.<br/>설정할 수 있는 데이터 유형은 4가지이며, 각 유형에 맞는 함수는 다음과 같습니다.<br/>- JSON 형식 : setJSON<br/>- 1차원 Array 형식 + 컬럼 정보 : setArray<br/>- 1차원 Array 형식 : setData<br/>- XML 형식 : setXML',style:''}},{T:1,N:'w2:textbox',A:{id:'',label:'버튼을 클릭하고 하단에 구성된 GridView를 통해 DataList에 할당된 데이터를 확인할 수 있습니다.',style:'',class:'ws_example_txt_desc_info'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style no_padding',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체 데이터 설정하기 - JSON 형식'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체 데이터 설정하기 - 1차원 Array 형식 + 컬럼 정보'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_3_onclick',id:'btn_exam1_3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체 데이터 설정하기 - 1차원 Array 형식'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_4_onclick',id:'btn_exam1_4',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체 데이터 설정하기 - XML 형식'}]}]}]},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'[ 결과 확인용 GridView ]',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',class:'gvw',dataList:'data:dlt_books_1',defaultCellHeight:'26',id:'',rowNumWidth:'26',style:'height:60px;',visibleRowNum:'all',noResultMessage:'할당된 데이터가 없습니다.',noResultMessageVisibleAlways:'true',visibleRowNumFix:'true',initFixedHeightByRowNum:'2',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',value:'func_name',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'label',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'func_name',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',width:'100',textAlign:'left'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'example_div_th_style'},E:[{T:1,N:'w2:span',A:{label:'로그 확인',style:'',id:'',class:'mr_def txt_blue'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})
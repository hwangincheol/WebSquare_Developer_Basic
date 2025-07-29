/*amd /page/P00274.xml 9206 1fa4ca39d5561e7b760ed58a229a6e08c1ee9fe1a896cf6925a210ad24f301f6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'price',name:'정가'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'공정하다는 착각'}]},{T:1,N:'price',E:[{T:4,cdata:'18000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'무엇이 옳은가'}]},{T:1,N:'price',E:[{T:4,cdata:'17800'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    
};

/**
 * 버튼 [전체 데이터 받기 - JSON 형식] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // DataList 'dlt_books_1'의 전체 데이터를 JSON 형식으로 반환받습니다.
    let result = dlt_books_1.getAllJSON();
    // return 예시) [{"label":"공정하다는 착각","price":"18000","rowStatus":"R"},{"label":"무엇이 옳은가","price":"17800","rowStatus":"R"}]

    // 로그 출력
    let strLog = '# 전체 데이터 받기 - JSON 형식 | 함수 getAllJSON 호출 값';
    $c.frame.printExampleLog(strLog, txa_log, false);
    $c.frame.printExampleLog(JSON.stringify(result), txa_log, false);
    console.log(strLog);
    console.log(result)
};

/**
 * 버튼 [전체 데이터 받기 - JSON 형식 - rowStatus 제외] 클릭 시
 */
scwin.btn_exam1_5_onclick = function (e) {
    // DataList 'dlt_books_1'의 전체 데이터를 'rowStatus'를 제외하고 JSON 형식으로 반환받습니다.
    let result = dlt_books_1.getAllJSON({ rowStatusData: false });
    // return 예시) [{"label":"공정하다는 착각","price":"18000"},{"label":"무엇이 옳은가","price":"17800"}]

    // 로그 출력
    let strLog = '# 전체 데이터 받기 - JSON 형식 - rowStatus 제외 | 함수 getAllJSON({ rowStatusData: false }) 호출 값';
    $c.frame.printExampleLog(strLog, txa_log, false);
    $c.frame.printExampleLog(JSON.stringify(result), txa_log, false);
    console.log(strLog);
    console.log(result)
};

/**
 * 버튼 [전체 데이터 받기 - 1차원 Array 형식 + 컬럼 정보] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // DataList 'dlt_books_1'의 전체 데이터를 '1차원 Array 형식 + 컬럼 정보'으로 반환받습니다.
    let result = dlt_books_1.getAllArray();
    // return 예시) {"columnInfo":["label","price"],"data":["공정하다는 착각","18000","무엇이 옳은가","17800"]}

    // 로그 출력
    let strLog = '# 전체 데이터 받기 - 1차원 Array 형식 + 컬럼 정보 | 함수 getAllArray 호출 값';
    $c.frame.printExampleLog(strLog, txa_log, false);
    $c.frame.printExampleLog(JSON.stringify(result), txa_log, false);
    console.log(strLog);
    console.log(result)
};

/**
 * 버튼 [전체 데이터 받기 - 1차원 Array 형식] 클릭 시
 */
scwin.btn_exam1_3_onclick = function (e) {
    // DataList 'dlt_books_1'의 전체 데이터를 '1차원 Array 형식'으로 반환받습니다.
    let result = dlt_books_1.getAllData();
    // return 예시) ["공정하다는 착각","18000","무엇이 옳은가","17800"]

    // 로그 출력
    let strLog = '# 전체 데이터 받기 - 1차원 Array 형식 | 함수 getAllData 호출 값';
    $c.frame.printExampleLog(strLog, txa_log, false);
    $c.frame.printExampleLog(JSON.stringify(result), txa_log, false);
    console.log(strLog);
    console.log(result)
};

/**
 * 버튼 [전체 데이터 받기 - XML 형식] 클릭 시
 */
scwin.btn_exam1_4_onclick = function (e) {
    // DataList 'dlt_books_1'의 전체 데이터를 XML 형식으로 반환받습니다.
    let result = dlt_books_1.getAllXML();
    // return 예시) <list id="dlt_books_1"><map index="0"><label>공정하다는 착각</label><price>18000</price><rowStatus statusValue="0">R</rowStatus></map><map index="1"><label>무엇이 옳은가</label><price>17800</price><rowStatus statusValue="0">R</rowStatus></map></list>

    // 로그 출력
    let strLog = '# 전체 데이터 받기 - XML 형식 | 함수 getAllXML 호출 값';
    $c.frame.printExampleLog(strLog, txa_log, false);
    $c.frame.printExampleLog(WebSquare.xml.serialize(result), txa_log, false);
    console.log(strLog);
    console.log(result)

};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    //textarea value를 빈문자열로 할당.
    txa_log.setValue("");
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'DataList의 전체 데이터를 받는 함수 예시입니다.<br/>반환되는 데이터 유형은 4가지이며, 각 유형에 맞는 함수는 다음과 같습니다.<br/>- JSON 형식 : getAllJSON<br/>- 1차원 Array 형식 + 컬럼 정보 : getAllArray<br/>- 1차원 Array 형식 : getAllData<br/>- XML 형식 : getAllXML',style:''}},{T:1,N:'w2:textbox',A:{id:'',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.',style:'',class:'ws_example_txt_desc_info'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style no_padding',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체 데이터 받기 - JSON 형식'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false',id:'btn_exam1_5',style:'',type:'button','ev:onclick':'scwin.btn_exam1_5_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체 데이터 받기 - JSON 형식 - rowStatus 제외'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체 데이터 받기 - 1차원 Array 형식 + 컬럼 정보'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_3_onclick',id:'btn_exam1_3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체 데이터 받기 - 1차원 Array 형식'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_4_onclick',id:'btn_exam1_4',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체 데이터 받기 - XML 형식'}]}]}]},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'아래의 GridView는 DataList의 데이터 구조를 확인하기 위해 구성되었습니다.',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',class:'gvw',dataList:'data:dlt_books_1',defaultCellHeight:'26',id:'',rowNumWidth:'26',style:'height:60px;',visibleRowNum:'all'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',value:'price',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'label',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'price',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',width:'100'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'example_div_th_style'},E:[{T:1,N:'w2:span',A:{label:'로그 확인',style:'',id:'',class:'mr_def txt_blue'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})
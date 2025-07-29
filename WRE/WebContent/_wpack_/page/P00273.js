/*amd /page/P00273.xml 8225 1a801a8ebaf88f04911341269360fd3c791b0ae8f7eb8c6accbacda9fb14be35 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_exam1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'국가코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'title_ko',name:'국가명 한글',dataType:'text'}},{T:1,N:'w2:column',A:{id:'title_en',name:'국가명 영문',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'AU'}]},{T:1,N:'title_ko',E:[{T:4,cdata:'호주'}]},{T:1,N:'title_en',E:[{T:4,cdata:'AUSTRALIA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'CA'}]},{T:1,N:'title_ko',E:[{T:4,cdata:'캐나다'}]},{T:1,N:'title_en',E:[{T:4,cdata:'CANADA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'CN'}]},{T:1,N:'title_ko',E:[{T:4,cdata:'중국'}]},{T:1,N:'title_en',E:[{T:4,cdata:'CHINA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'DE'}]},{T:1,N:'title_ko',E:[{T:4,cdata:'독일'}]},{T:1,N:'title_en',E:[{T:4,cdata:'GERMANY'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'GB'}]},{T:1,N:'title_ko',E:[{T:4,cdata:'영국'}]},{T:1,N:'title_en',E:[{T:4,cdata:'UNITED KINGDOM'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'ID'}]},{T:1,N:'title_ko',E:[{T:4,cdata:'인도네시아'}]},{T:1,N:'title_en',E:[{T:4,cdata:'INDONESIA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'IN'}]},{T:1,N:'title_ko',E:[{T:4,cdata:'인도'}]},{T:1,N:'title_en',E:[{T:4,cdata:'INDIA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'JP'}]},{T:1,N:'title_ko',E:[{T:4,cdata:'일본'}]},{T:1,N:'title_en',E:[{T:4,cdata:'JAPAN'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'KR'}]},{T:1,N:'title_ko',E:[{T:4,cdata:'대한민국'}]},{T:1,N:'title_en',E:[{T:4,cdata:'KOREA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'KP'}]},{T:1,N:'title_ko',E:[{T:4,cdata:'북한'}]},{T:1,N:'title_en',E:[{T:4,cdata:'NORTH KOREA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'US'}]},{T:1,N:'title_ko',E:[{T:4,cdata:'미국'}]},{T:1,N:'title_en',E:[{T:4,cdata:'UNITED STATES'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    // 화면에 구성된 AutoComplete의 초기 선택 값을 "KR"을 지정
    acb_exam1.setValue("KR");
    acb_exam2.setValue("KR");
};

/**
 * 버튼 [선택 항목의 정보 받기 - 기본형] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // AutoComplete "acb_exam1"의 선택된 항목의 정보를 반환받습니다.
    let jsnResult = acb_exam1.getSelectedRow();
    // return 예시) {"label":"대한민국","value":"KR"}

    // 로그 출력
    let strLog = '# AutoComplete - 기본형 | 함수 getSelectedRow 호출 값';
    $c.frame.printExampleLog(strLog, txa_log, false);
    $c.frame.printExampleLog(JSON.stringify(jsnResult), txa_log, false);
    console.log(strLog);
    console.log(jsnResult)
};

/**
 * 버튼 [선택 항목의 정보 받기 - gridViewItemset] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // AutoComplete "acb_exam2"의 선택된 항목의 정보를 반환받습니다.
    let jsnResult = acb_exam2.getSelectedRow();
    // return 예시) {"columnInfo":["code","title_ko","title_en"],"data":["KR","대한민국","KOREA"]}

    // 로그 출력
    let strLog = '# AutoComplete - gridViewItemset | 함수 getSelectedRow 호출 값';
    $c.frame.printExampleLog(strLog, txa_log, false);
    $c.frame.printExampleLog(JSON.stringify(jsnResult), txa_log, false);
    console.log(strLog);
    console.log(jsnResult)
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    //textarea value를 빈문자열로 할당.
    txa_log.setValue("");
};



}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'AutoComplete의 함수 \'getSelectedRow\'사용 예제입니다.<br/>함수 \'getSelectedRow\'는 선택된 항목(Item)의 정보를 JSON 형식으로 반환합니다.',style:''}},{T:1,N:'w2:textbox',A:{id:'',label:'목록 구성을 \'gridViewItemset\'으로 설정하면 반환되는 데이터 구조가 다르므로, 로직을 작성할 때 주의가 필요합니다.',style:''}},{T:1,N:'w2:textbox',A:{id:'',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.',style:'',class:'ws_example_txt_desc_info'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'AutoComplete - 기본형',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택 항목의 정보 받기 - 기본형'}]}]}]},{T:1,N:'w2:autoComplete',A:{style:'width: 150px;min-height:24px;',submenuSize:'auto',id:'acb_exam1',allOption:'',chooseOption:'',ref:'',emptyItem:'true',emptyIndex:'-1',search:'contain',searchTarget:'both',caseSensitive:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_exam1'},E:[{T:1,N:'w2:label',A:{ref:'title_ko'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'AutoComplete - gridViewItemset',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false',id:'btn_exam2_1',style:'',type:'button','ev:onclick':'scwin.btn_exam2_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택 항목의 정보 받기 - gridViewItemset'}]}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',emptyIndex:'-1',emptyItem:'true',id:'acb_exam2',ref:'',style:'width: 150px;min-height:24px;',submenuSize:'auto',search:'contain',searchTarget:'both',caseSensitive:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:gridViewItemset',A:{hideHeader:'',rowMouseOver:'',nodeset:'data:dlt_exam1',width:'260',selectedRowColor:'',label:'title_ko',visibleRowNum:'',autoFit:'lastColumn',value:'code',rowMouseOverColor:'',height:''},E:[{T:1,N:'w2:item',A:{ref:'code',hidden:'',header:'국가코드',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'title_ko',hidden:'',header:'한글',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'title_en',hidden:'',header:'영문',headerStyle:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'example_div_th_style'},E:[{T:1,N:'w2:span',A:{label:'로그 확인',style:'',id:'',class:'mr_def txt_blue'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})
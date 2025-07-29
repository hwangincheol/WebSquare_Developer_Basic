/*amd /page/P00346.xml 7739 3dd581cbff732baf980fa3a6fc15fb499ec719261c5548ca01dc5bde394e2733 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_member',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'EMP_CD',name:'사번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'EMP_NM',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'POSITION_CD',name:'직위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ROLE_CD',name:'역할',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'EMP_CD',E:[{T:4,cdata:'10001334'}]},{T:1,N:'EMP_NM',E:[{T:4,cdata:'전성은'}]},{T:1,N:'POSITION_CD',E:[{T:4,cdata:'차장'}]},{T:1,N:'ROLE_CD',E:[{T:4,cdata:'퍼블리싱'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'EMP_CD',E:[{T:4,cdata:'10001337'}]},{T:1,N:'EMP_NM',E:[{T:4,cdata:'구정연'}]},{T:1,N:'POSITION_CD',E:[{T:4,cdata:'사원'}]},{T:1,N:'ROLE_CD',E:[{T:4,cdata:'개발'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'EMP_CD',E:[{T:4,cdata:'10001335'}]},{T:1,N:'EMP_NM',E:[{T:4,cdata:'홍세희'}]},{T:1,N:'POSITION_CD',E:[{T:4,cdata:'부장'}]},{T:1,N:'ROLE_CD',E:[{T:4,cdata:'디자인'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 로그 출력용 Textrea의 Value 삭제하기
 */
scwin.btn_clearLog_onclick = function (e) {
    let strTargetId = this.getUserData("userData1");
    let cmpTarget;
    if (strTargetId) {
        cmpTarget = $p.getComponentById(strTargetId) || txa_log;
    } else {
        cmpTarget = txa_log;
    }
    //textarea value를 빈문자열로 할당.
    cmpTarget.setValue("");
};

/**
 * 버튼 [컬럼의 순서를 '성명', '사번', '역할', '직위'로 변경하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // GridView 'grd_exam1'의 컬럼 순서를 '성명', '사번', '역할', '직위' 순으로 변경합니다.
    grd_exam1.setColumnOrder(["EMP_NM", "EMP_CD", "ROLE_CD", "POSITION_CD"]);

    // GridView의 컬럼 순서를 Index로 지정하는 경우
    // grd_exam1.setColumnOrder([1,0,3,2]);

    // 로그 출력
    let strLog = '# 스크립트 실행\ngrd_exam1.setColumnOrder(["EMP_NM", "EMP_CD", "ROLE_CD", "POSITION_CD"]);';
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    console.log(strLog);
};

/**
 * 버튼 [컬럼의 순서를 ID로 반환받기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // GridView 'grd_exam1'의 컬럼 순서를 ID로 반환받습니다.
    let result = grd_exam1.getColumnOrder(true);

    // 반환 값 예시) ["EMP_NM","EMP_CD","ROLE_CD","POSITION_CD"]

    // 로그 출력
    let strLog = '# 스크립트 실행\ngrd_exam1.getColumnOrder(true);\n반환 값:\n';
    $c.frame.printExampleLog(strLog + JSON.stringify(result), txa_log_1, false);
    console.log(strLog, result);
};

/**
 * 버튼 [컬럼의 순서를 Index로 반환받기] 클릭 시
 */
scwin.btn_exam2_2_onclick = function (e) {
    // GridView 'grd_exam1'의 컬럼 순서를 Index로 반환받습니다.
    let result = grd_exam1.getColumnOrder();

    // 반환 값 예시) [1,0,3,2]

    // 로그 출력
    let strLog = '# 스크립트 실행\ngrd_exam1.getColumnOrder();\n반환 값:\n';
    $c.frame.printExampleLog(strLog + JSON.stringify(result), txa_log_1, false);
    console.log(strLog, result);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'함수 \'setColumnOrder\'와 함수 \'getColumnOrder\'의 사용 예제입니다.<br/>각 함수의 기능은 다음과 같습니다.<br/>- setColumnOrder : 컬럼의 순서를 Index 또는 ID로 설정합니다.<br/>- getColumnOrder : 컬럼의 순서를 Index 또는 ID로 반환합니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'이 기능은 GridView의 개인화 기능을 구현할 때 주로 사용됩니다. 여기서 \'개인화\'는 컬럼의 순서, 컬럼 숨김, 정렬 등을 사용자별로 제공하는 기능을 의미합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼의 순서를 \'성명\', \'사번\', \'역할\', \'직위\'로 변경하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false',id:'btn_exam2_1',style:'',type:'button','ev:onclick':'scwin.btn_exam2_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼의 순서를 ID로 반환받기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false',id:'btn_exam2_2',style:'',type:'button','ev:onclick':'scwin.btn_exam2_2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼의 순서를 Index로 반환받기'}]}]}]},{T:1,N:'w2:gridView',A:{class:'gvw',dataList:'data:dlt_member',id:'grd_exam1',style:'height: 100px;',defaultCellHeight:'26',visibleRowNum:'all',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column16',value:'사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',value:'성명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column12',value:'직위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column18',value:'역할',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'EMP_CD',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'EMP_NM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'POSITION_CD',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ROLE_CD',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',label:'로그 확인'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',title:'로그 삭제',type:'button',userData1:'txa_log_1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_1',spellcheck:'false',style:'width: 100%;height: 110px;'}}]}]}]}]}]}]}]})
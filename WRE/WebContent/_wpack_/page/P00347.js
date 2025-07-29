/*amd /page/P00347.xml 5930 ec0633ddeb4d917700a58b84562f39845b8f244d460a24243d1f2d1e0ebe399c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}},{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'categoryLabel',E:[{T:4,cdata:'인문'}]},{T:1,N:'label',E:[{T:4,cdata:'내가 틀릴 수도 있습니다'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'categoryLabel',E:[{T:4,cdata:'소설'}]},{T:1,N:'label',E:[{T:4,cdata:'저만치 혼자서'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
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
 * 버튼 [첫 번째 컬럼의 ID로 헤더 값 반환받기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // GridView 'grd_exam1'의 헤더 ID가 'h_categoryLabel'인 헤더 컬럼의 Value를 반환받습니다. 
    let result = grd_exam1.getHeaderValue("h_categoryLabel");

    // 반환 값 예시) '분류'

    // 로그 출력
    let strLog = '# 스크립트 실행\ngrd_exam1.getHeaderValue("h_categoryLabel");\n';
    $c.frame.printExampleLog(strLog + '반환 값)' + result, txa_log_1, false);
    console.log(strLog);
    console.log(result);
};

/**
 * 버튼 [두 번째 컬럼의 Index로 헤더 값 반환받기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // GridView 'grd_exam1'의 헤더 Index가 1인 헤더 컬럼의 Value를 반환받습니다. 
    let result = grd_exam1.getHeaderValue(grd_exam1.getHeaderID(1));

    // 반환 값 예시) '도서명'

    // 로그 출력
    let strLog = '# 스크립트 실행\ngrd_exam1.getHeaderValue(grd_exam1.getHeaderID(1));\n';
    $c.frame.printExampleLog(strLog + '반환 값)' + result, txa_log_1, false);
    console.log(strLog);
    console.log(result);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 헤더 값을 반환받는 함수 \'getHeaderValue\' 예시입니다.<br/>함수 \'getHeaderValue\'는 헤더의 ID를 인자로 받아 Value를 반환합니다.<br/>헤더의 Index로 헤더 값을 반환받고자 할 때는 함수 \'getHeaderID\'와 함께 사용하여 구현할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'첫 번째 컬럼의 ID로 헤더 값 반환받기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false',id:'btn_exam2_1',style:'',type:'button','ev:onclick':'scwin.btn_exam2_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'두 번째 컬럼의 Index로 헤더 값 반환받기'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'170',class:'gvw',dataList:'data:dlt_books',defaultCellHeight:'26',initFixedHeightByRowNum:'2',readOnly:'true',style:'height:60px;',tooltipDisplay:'true',visibleRowNum:'2',id:'grd_exam1'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'h_categoryLabel',inputType:'text',value:'분류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_label',inputType:'text',value:'도서명',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',label:'로그 확인'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',title:'로그 삭제',type:'button',userData1:'txa_log_1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_1',spellcheck:'false',style:'width: 100%;height: 110px;'}}]}]}]}]}]}]}]})
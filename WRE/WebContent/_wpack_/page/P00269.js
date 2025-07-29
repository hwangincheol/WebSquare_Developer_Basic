/*amd /page/P00269.xml 10418 11222922392ea277cc410bbae9fa547793baf1d77ab0c72776b4790efe0b1430 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'category1',name:'대분류'}},{T:1,N:'w2:column',A:{dataType:'text',id:'title',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'row3_1',name:'상반기'}},{T:1,N:'w2:column',A:{dataType:'text',id:'row3_2',name:'하반기'}}]},{T:1,N:'w2:data',A:{use:'true',xmlns:''},E:[{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'소설'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'300'}]},{T:1,N:'title',E:[{T:4,cdata:'칼의 노래'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'소설'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'200'}]},{T:1,N:'title',E:[{T:4,cdata:'태백산맥'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'소설'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'400'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'200'}]},{T:1,N:'title',E:[{T:4,cdata:'달과 6펜스'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'역사/문화'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'600'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'300'}]},{T:1,N:'title',E:[{T:4,cdata:'조선왕조실록'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'역사/문화'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'1200'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'900'}]},{T:1,N:'title',E:[{T:4,cdata:'난중일기'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {

};

/**
 * 버튼 [엑셀 다운로드 - 기본] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    var jsnOptions;

    jsnOptions = {
        fileName: "SP5_EXAMPLE_P00269_TYPE1.xlsx", // 엑셀의 파일명
        useSubTotal: "true", // subTotal 표시
        useSubTotalData: "false", // 기본 설정 값. subTotal에 적용된 표현식은 서버에서 계산한 후 엑셀에 출력. 사용자 정의 함수를 사용하면 브라우저에 표시된 값과 다르거나 오류가 발생할 수 있습니다.
        useXHR: "true", // 서버에서 엑셀 생성 중 오류가 발생하여 오류 코드를 전달한 경우 옵션 'onFailureCallback'에서 후처리를 위한 설정.
        onFailureCallback: scwin.avExcelDownload_error_callback // 서버에서 엑셀 생성 중 오류가 발생한 경우 후처리 함수. 옵션 'useXHR'이 true로 지정되어야 사용할 수 있습니다.
    };

    grd_exam1.advancedExcelDownload(jsnOptions);
};

/**
 * 버튼 [엑셀 다운로드 - subTotal의 값을 브라우저에 표시된 값으로 출력하기] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    var jsnOptions;

    jsnOptions = {
        fileName: "SP5_EXAMPLE_P00269_TYPE2.xlsx", // [필수] 엑셀의 파일명
        useSubTotal: "true", // [필수] subTotal 표시
        useSubTotalData: "true", // [필수] subTotal의 값을 브라우저에 표시된 값으로 출력하기
        useXHR: "true", // 서버에서 엑셀 생성 중 오류가 발생하여 오류 코드를 전달한 경우 옵션 'onFailureCallback'에서 후처리를 위한 설정.
        onFailureCallback: scwin.avExcelDownload_error_callback // 서버에서 엑셀 생성 중 오류가 발생한 경우 후처리 함수. 옵션 'useXHR'이 true로 지정되어야 사용할 수 있습니다.
    };

    // GridView "grd_exam1"의 엑셀 다운로드 실행
    grd_exam1.advancedExcelDownload(jsnOptions);
};

/**
 * SubTotal의 사용자 정의 함수 Expression 예시
 * GridView의 SubTotal 컬럼 'sub_col_2'에서 사용
 */
scwin.subTotal_userExpression = function (arg1) {
    // arg1에 "#,###" 포맷을 적용하고 "원"을 붙여서 반환
    return WebSquare.util.setNumber(arg1) + "원";
};

/**
 * GridView의 함수 'advancedExcelDownload' 호출 시 서버에서 오류가 발생하면 호출되는 함수
 * 함수 'advancedExcelDownload'의 첫 번째 인자의 'onFailureCallback' 속성에 지정.
 * @param {string} arg1 Request URL
 * @param {object} arg2 엑셀 생성 중 오류 정보가 담긴 JSON 객체.
 * @param {string} arg2.errorCode 오류 코드
 */
scwin.avExcelDownload_error_callback = function (arg1, arg2) {
    let strErrorCode = (arg2 && arg2.errorCode) || "";
    let srtErrorMsg = "";

    // arg1 값 예시) '/websquare/xmlToExcel2.wq'
    // arg2 값 예시) {errorCode: 'D301'}

    // 공통 함수를 통해 서버에서 전달된 에러 코드를 메시지와 함께 반환 받습니다.
    srtErrorMsg = $c.frame.getErrorMsg("advancedExcelDownload", strErrorCode, true);

    //로그 출력
    let strLog = "엑셀 다운로드 오류 발생 : " + srtErrorMsg;
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
    console.log(arg1, arg2);
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents'},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc'},E:[{T:1,N:'w2:textbox',A:{class:'',escape:'false',label:'GridView의 엑셀 다운로드(함수 \'advancedExcelDownload\')에서 첫 번째 인자 \'options\'의 \'useSubTotalData\' 옵션 설정 예제입니다. <br/>옵션 \'useSubTotalData\'은 엑셀에 \'subTotal\'(소계)의 데이터를 브라우저에 표시된 값으로 출력할지 여부를 결정합니다.<br/>\'useSubTotalData\'를 \'true\'로 설정하지 않고 \'subTotal\' 컬럼의 표현식(속성 \'expression\')에 사용자 정의 함수를 호출하면, 엑셀 생성 시 오류가 발생합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',label:'이 예제는 \'subTotal\' 컬럼의 표현식에 사용자 정의 함수를 호출하고 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'엑셀 다운로드 오류 발생 시 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',localeRef:'',style:'min-width: 30px; height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 다운로드 - 기본'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',localeRef:'',style:'min-width:30px;height:26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 다운로드 - subTotal의 값을 브라우저에 표시된 값으로 출력하기'}]}]}]},{T:1,N:'w2:gridView',A:{autoFitMinWidth:'266',baseNode:'',class:'gvw',dataList:'data:dlt_books',defaultCellHeight:'26',focusMode:'row',id:'grd_exam1',readOnly:'true',style:'height:200px;',visibleRowNum:'all',autoFit:'allColumn'},E:[{T:1,N:'w2:header',A:{id:'header5',style:''},E:[{T:1,N:'w2:row',A:{id:'row35',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',hidden:'false',id:'column572',inputType:'text',value:'분류',width:'68'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column575',inputType:'text',value:'도서명',width:'90'}},{T:1,N:'w2:column',A:{id:'column468',inputType:'text',value:'상반기',width:'54'}},{T:1,N:'w2:column',A:{id:'column467',inputType:'text',value:'하반기',width:'54'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody5',style:''},E:[{T:1,N:'w2:row',A:{id:'row37',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',colMerge:'true',displayMode:'label',hidden:'false',id:'category1',inputType:'text',width:'68'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'title',inputType:'text',textAlign:'left',width:'90'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',id:'row3_1',inputType:'text',textAlign:'right',width:'54'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',id:'row3_2',inputType:'text',textAlign:'right',width:'54'}}]}]},{T:1,N:'w2:subTotal',A:{id:'subTotal1',style:'',targetColumnID:'category1'},E:[{T:1,N:'w2:row',A:{id:'row42',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column577',inputType:'text',style:'height:30px;',value:'소계',width:'68'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',expression:'targetColValue() + \' - \' +count(\'row_total\') + \'건\'',id:'column596',inputType:'expression',style:'height:30px;',textAlign:'left',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',expression:'sum(\'row3_1\')',id:'sub_col_1',inputType:'expression',style:'height:30px;',textAlign:'right',width:'54',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'text',displayMode:'label',expression:'scwin.subTotal_userExpression(sum(\'row3_2\'))',id:'sub_col_2',inputType:'expression',style:'height:30px;',textAlign:'right',width:'54'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})
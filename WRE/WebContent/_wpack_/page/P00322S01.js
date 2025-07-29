/*amd /page/P00322S01.xml 2331 bb311b83ff0059057594e11ee89179a3cdc73aae7f344da89a301f84825fecda */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    // WidgetContainer의 함수 'addWidgets'의 첫 번째 인자의 위젯 옵션 'params'에 지정한 값 반환받기
    let jsnParam = $p.getParameter("params");

    // 반환 값 예시)
    // {
    //     "type": "exam",
    //     "widget_id": "wg_exam1"
    // }

    // 로그 출력
    let strLog = '# $p.getParameter("params"); 반환 값: \n';
    $c.frame.printExampleLog(strLog + JSON.stringify(jsnParam, null, "  "), txa_log_1, false);
    console.log(strLog, jsnParam);
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
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:'padding: 6px;'},E:[{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap nobottom',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'파일: P00322S01.xml',style:'',class:' txt_bold'}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def',label:'위젯 옵션 \'params\'에 지정한 값: '}}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_1',spellcheck:'false',style:'width: 100%;height: 90px;'}}]}]}]}]}]}]}]})
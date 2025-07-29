/*amd /page/P00300.xml 8131 074fcf17997d44e189266392328c8d3d312313e17fe6d10a59088efb591b9239 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection',E:[{T:1,N:'w2:workflow',A:{id:'workflow1',resolveCallback:'',rejectCallback:'',processMsg:'',description:''},E:[{T:1,N:'w2:step',A:{type:'submit',action:'sbm_1'}},{T:1,N:'w2:step',A:{type:'submitDone',action:'sbm_1'}},{T:1,N:'w2:step',A:{type:'submit',action:'sbm_2'}},{T:1,N:'w2:step',A:{type:'submitDone',action:'sbm_2'}},{T:1,N:'w2:step',A:{type:'submit',action:'sbm_3'}},{T:1,N:'w2:step',A:{type:'submitDone',action:'sbm_3'}}]},{T:1,N:'w2:workflow',A:{id:'workflow2',resolveCallback:'',rejectCallback:'',processMsg:'',description:''},E:[{T:1,N:'w2:step',A:{type:'submit',action:'sbm_3'}},{T:1,N:'w2:step',A:{type:'submit',action:'sbm_1'}},{T:1,N:'w2:step',A:{type:'submit',action:'sbm_2'}},{T:1,N:'w2:step',A:{type:'submitDone',action:'sbm_1'}},{T:1,N:'w2:step',A:{type:'submitDone',action:'sbm_2'}},{T:1,N:'w2:step',A:{type:'submitDone',action:'sbm_3'}}]}]},{T:1,N:'xf:submission',A:{id:'sbm_1',ref:'',target:'',action:'/data/sampleData/sampleData.xml',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_1_submit','ev:submitdone':'scwin.sbm_1_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_2',ref:'',target:'',action:'/data/sampleData/sampleData.xml',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_2_submit','ev:submitdone':'scwin.sbm_2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_3',ref:'',target:'',action:'/data/sampleData/sampleData.xml',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_3_submit','ev:submitdone':'scwin.sbm_3_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
};

/**
 * textarea의 로그 삭제
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
 * 버튼 [Workflow1 - 실행 순서 : 1 2 3] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // Workflow 실행
    $p.executeWorkflow("workflow1");

    // 로그 출력
    let strLog = "Workflow1 - 실행 순서 : 1 2 3";
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    console.log(strLog);

};

/**
 * 버튼 [Workflow2 - 실행 순서 : 3 1 2, callbakck  순서 : 1 2 3] 클릭 시
 */
scwin.brn_exam_2_onclick = function (e) {
    // Workflow 실행
    $p.executeWorkflow("workflow2");

    // 로그 출력
    let strLog = "Workflow2 - 실행 순서 : 3 1 2, callbakck  순서 : 1 2 3";
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    console.log(strLog);
};

/**
 * 버튼 [Submission - 실행 순서 : 1 2 3] 클릭 시
 */
scwin.btn_exam_3_onclick = function (e) {
    // 로그 출력
    let strLog = "Submission - 실행 순서 : 1 2 3";
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    console.log(strLog);

    // submission 실행
    $p.executeSubmission("sbm_1");
    $p.executeSubmission("sbm_2");
    $p.executeSubmission("sbm_3");
};


scwin.sbm_1_submitdone = function (e) {
    // 로그 출력
    let strLog = "sbm_1 완료 - submitdone 실행";
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    console.log(strLog);
};

scwin.sbm_2_submitdone = function (e) {
    // 로그 출력
    let strLog = "sbm_2 완료 - submitdone 실행";
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    console.log(strLog);
};

scwin.sbm_3_submitdone = function (e) {
    // 로그 출력
    let strLog = "sbm_3 완료 - submitdone 실행";
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    console.log(strLog);
};

scwin.sbm_1_submit = function (e) {
    // 로그 출력
    let strLog = "sbm_1 실행";
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    console.log(strLog);
};

scwin.sbm_2_submit = function (e) {
    // 로그 출력
    let strLog = "sbm_2 실행";
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    console.log(strLog);
};

scwin.sbm_3_submit = function (e) {
    // 로그 출력
    let strLog = "sbm_3 실행";
    $c.frame.printExampleLog(strLog, txa_log_1, false);
    console.log(strLog);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'Workflow를 이용한 다건 통신 예제입니다.<br/>Workflow는 직관적인 GUI를 통해 다수의 복잡한 비동기 통신을 쉽게 호출할 수 있는 기능입니다. <br/>사용자는 각 비동기 호출의 결과에 대한 처리 로직만 간단히 구현하면 됩니다.<br/>정의된 submission과 submission callback 함수의 실행 순서를 보장할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',id:'',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.<br/>로그를 통해 반환되는 데이터를 확인할 수 있습니다.',style:'',escape:'false'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Workflow 실행하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_exam1_1_onclick',style:'',id:'btn_exam1_1',type:'button',class:'btn_exam_exec btn_txt_of',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Workflow1 - 실행 순서 : 1 2 3'}]}]}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.brn_exam_2_onclick',style:'',id:'brn_exam_2',type:'button',class:'btn_exam_exec btn_txt_of',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Workflow2 - 실행 순서 : 3 1 2, callback &nbsp;순서 : 1 2 3'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false',id:'btn_exam_3',style:'',type:'button','ev:onclick':'scwin.btn_exam_3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Submission - 실행 순서 : 1 2 3 '}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'example_div_tb_style_wrap mb_def'},E:[{T:1,N:'xf:group',A:{id:'',class:'example_div_tr_style'},E:[{T:1,N:'xf:group',A:{id:'',class:'example_div_th_style'},E:[{T:1,N:'w2:span',A:{style:'',id:'',label:'로그 확인',class:'mr_def txt_bold'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_clearLog_onclick',style:'',id:'',userData1:'txa_log_1',title:'로그 삭제',type:'button',class:'com_example_btn_log_clear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'example_div_td_style'},E:[{T:1,N:'xf:textarea',A:{spellcheck:'false',style:'width: 100%;height: 150px;',id:'txa_log_1',class:'com_example_txa_log'}}]}]}]}]}]}]}]})
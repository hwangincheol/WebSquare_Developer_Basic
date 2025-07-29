/*amd /page/P00372.xml 3818 cd30fb351fd82ef213e729e7ad6e2470443e655cab6b034baba9400142fab753 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 ['readOnly' 설정하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // Input 'ibx_exam1'의 속성 'readOnly'의 설정 값을 true로 지정합니다. 'readOnly'가 활성화됩니다.
    ibx_exam1.setReadOnly(true);
};

/**
 * 버튼 ['readOnly' 해제하기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // Input 'ibx_exam1'의 속성 'readOnly'의 설정 값을 false로 지정합니다. 'readOnly'가 비활성화됩니다.
    ibx_exam1.setReadOnly(false);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'Input의 속성 \'readOnly\'와 함수 \'setReadOnly\' 예제입니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'속성 \'readOnly\'는 입력 필드를 읽기 전용으로 설정하는 기능을 제공합니다. \'readOnly\'가 true로 설정되면 사용자가 값을 수정할 수 없습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'함수 \'setReadOnly\'는 속성 \'readOnly\'의 값을 설정하는 기능을 제공합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'속성으로 \'readOnly\' 설정하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'ws_exam_txt_list',id:'',label:'(기본 설정) readOnly 미설정',style:'display: inline-block;width:170px;margin-right: 6px;'}},{T:1,N:'xf:input',A:{id:'',style:'width:110px;',readOnly:'false',initValue:'readOnly 미설정'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'ws_exam_txt_list',id:'',label:'readOnly 설정',style:'display: inline-block;width:170px;margin-right: 6px;'}},{T:1,N:'xf:input',A:{id:'',readOnly:'true',style:'width:110px;',initValue:'readOnly 설정'}}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'스크립트로 \'readOnly\' 설정하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'\'readOnly\' 설정하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'\'readOnly\' 해제하기'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ibx_exam1',initValue:'임시 값',style:'width:110px;'}}]}]}]}]}]}]}]}]})
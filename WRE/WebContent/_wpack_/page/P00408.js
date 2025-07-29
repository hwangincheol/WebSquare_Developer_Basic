/*amd /page/P00408.xml 2564 84c3e7e6c285a8bbac6eb5f5a406101e1334dc1d5750f00ca9483aac5d4898da */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 ['palceHolder' 문자열 변경하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // Textarea 'txa_exam1'의 속성 'placeholder' 설정 값을 변경합니다.
    txa_exam1.setPlaceholder("변경된 입력 힌트 예시입니다.\n개행 표시도 가능합니다.");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'속성 \'placeholder\'와 함수 \'setPlaceholder\' 예제입니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'속성 \'placeholder\'은 입력 필드에 사용자에게 입력해야 할 내용이나 형식을 알려주는 힌트 문자열을 출력하는 기능을 제공합니다.<br/>이 힌트는 입력 필드에 아무 내용도 입력하지 않은 경우에 표시되며, 사용자가 입력을 시작하면 문자열은 사라집니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'함수 \'setPlaceholder\'는 속성 \'placeholder\'의 값을 변경하는 기능을 제공합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'\'palceHolder\' 문자열 변경하기'}]}]}]},{T:1,N:'xf:textarea',A:{id:'txa_exam1',style:'width: 100%;height: 100px;',placeholder:'입력 힌트(placeholder) 예시입니다.'}}]}]}]}]}]}]}]})
/*amd /page/P00414.xml 2743 1db8ed6015210d9228a84a3995a1dabf3df6aea34d238f4383d44e05030700a6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [총 페이지 수를 '15'로 설정하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function(e) {
    // PageList 'pgc_exam1'의 총 페이지 수를 15로 설정합니다.
    pgl_exam1.setCount(15);
};

/**
 * 버튼 [총 페이지 수를 '5'로 설정하기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function(e) {
    // PageList 'pgc_exam1'의 총 페이지 수를 5로 설정합니다.
    pgl_exam1.setCount(5);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'총 페이지 수를 설정하는 예제입니다.<br/>이 기능은 함수 \'setCount\'로 지정할 수 있습니다. 함수가 호출되면 선택된 페이지는 \'1\'로 초기화됩니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'총 페이지 수 설정하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'총 페이지 수를 \'15\'로 설정하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'총 페이지 수를 \'5\'로 설정하기'}]}]}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:pageList',A:{pageSize:'10',displayButtonType:'display',id:'pgl_exam1',displayFormat:'#',style:'height: 26px;'}}]}]}]}]}]}]}]}]})
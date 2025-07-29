/*amd /page/P00410.xml 5158 30a0f6dec780462a748c01950c90e942ee510f3e56ba771b7e3e677cbacaf23b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [1.1 FloatingLayer 표시하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // FloatingLayer 'flt_exam1'의 위치를 조절합니다.
    flt_exam1.setPosition(grp_exam1.getPosition("left"), grp_exam1.getPosition("top"));
    
    // FloatingLayer 'flt_exam1'을 표시합니다.
    flt_exam1.show();
};

/**
 * 버튼 [2.1 FloatingLayer 표시하기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // FloatingLayer 'flt_exam2'의 위치를 조절합니다.
    flt_exam2.setPosition(grp_exam2.getPosition("left"), grp_exam2.getPosition("top"));
    
    // FloatingLayer 'flt_exam2'을 표시합니다.
    flt_exam2.show();
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'속성 \'fixed\'의 설정을 통해 \'FloatingLayer\'의 위치를 고정하는 예제입니다. (사용자가 타이틀 영역을 마우스로 드래그하여 팝업을 이동시킬 수 없습니다.)<br/>마우스로 드래그를 할 수 있는 영역은 \'FloatingLayer\'의 테두리 영역(상하좌우)으로 배경색이 설정되어 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'설정 값에 따른 동작은 다음과 같습니다.<br/>- "false" : [default] 위치를 고정하지 않습니다. 사용자가 마우스로 드래그하여 위치를 이동시킬 수 있습니다.<br/>- "true" : 위치를 고정합니다. 사용자가 마우스로 드래그하여 위치를 이동시킬 수 없습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'\'FloatingLayer\'의 위치는 절대 값으로(display:absolute) 콘텐츠의 길이에 따라 위치가 변경되지 않습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 마우스 사용이 가능한 환경에서 정상 동작합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(기본 설정) 위치 고정하지 않기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'FloatingLayer의 타이틀 영역을 마우스로 드래그합니다.<br/>FloatingLayer가 이동됩니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1.1 FloatingLayer 표시하기'}]}]}]},{T:1,N:'xf:group',A:{id:'grp_exam1',style:'height: 140px;position: relative;'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'위치 고정하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'FloatingLayer의 타이틀 영역을 마우스로 드래그합니다.<br/>FloatingLayer가 이동되지 않습니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2.1 FloatingLayer 표시하기'}]}]}]},{T:1,N:'xf:group',A:{id:'grp_exam2',style:'height: 140px;position: relative;'}}]}]}]}]},{T:1,N:'w2:floatingLayer',A:{fixed:'false',id:'flt_exam1',style:'position:absolute;width:240px;height:140px;left:22px;top:340px;display: none;',title:'마우스로 이동 가능'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'콘텐츠 영역입니다.',style:'padding: 12px 6px;'}}]},{T:1,N:'w2:floatingLayer',A:{fixed:'true',id:'flt_exam2',style:'position:absolute;width:240px;height:140px;left:21px;top:640px;display: none;',title:'마우스로 이동 불가'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'콘텐츠 영역입니다.',style:'padding: 12px 6px;'}}]}]}]}]})
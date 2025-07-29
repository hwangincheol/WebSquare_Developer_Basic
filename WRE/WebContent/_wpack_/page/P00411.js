/*amd /page/P00411.xml 4986 437937c05ca684a8484d9f8ac58c62c19beef530f8357dc8191cc0879ec015bc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [1.1 FloatingLayer 표시하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // FloatingLayer의 위치 조정
    flt_exam1.setPosition(grp_exam1.getPosition("left"), grp_exam1.getPosition("top"));
    
    // FloatingLayer 'flt_exam1'을 표시합니다.
    flt_exam1.show();
};

/**
 * 버튼 [2.1 FloatingLayer 표시하기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // FloatingLayer의 위치 조정
    flt_exam2.setPosition(grp_exam2.getPosition("left"), grp_exam2.getPosition("top"));

    // FloatingLayer 'flt_exam2'을 표시합니다.
    flt_exam2.show();
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'속성 \'dragResizable\'의 설정을 통해 \'FloatingLayer\'의 리사이즈 기능을 적용하는 예제입니다. (사용자가 \'FloatingLayer\'의 오른쪽 하단 영역을 마우스로 드래그하여 크기를 조절할 수 있습니다.)',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'설정 값에 따른 동작은 다음과 같습니다.<br/>- "false" : [default] 리사이즈 기능을 사용하지 않습니다.<br/>- "true" : 리사이즈 기능을 사용합니다. 사용자가 \'FloatingLayer\'의 오른쪽 하단 영역을 마우스로 드래그하여 크기를 조절할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'\'FloatingLayer\'의 위치는 절대 값으로(display:absolute) 콘텐츠의 길이에 따라 위치가 변경되지 않습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 마우스 사용이 가능한 환경에서 정상 동작합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(기본 설정) 리사이즈 기능 사용하지 않기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'FloatingLayer의 크기가 조절되지 않습니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1.1 FloatingLayer 표시하기'}]}]}]},{T:1,N:'xf:group',A:{id:'grp_exam1',style:'height: 140px;position: relative;'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'리사이즈 기능 사용하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'FloatingLayer의 오른쪽 하단을 마우스로 드래그하여 크기를 조절할 수 있습니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2.1 FloatingLayer 표시하기'}]}]}]},{T:1,N:'xf:group',A:{id:'grp_exam2',style:'height: 140px;position: relative;'}}]}]}]}]},{T:1,N:'w2:floatingLayer',A:{id:'flt_exam1',style:'position:absolute;width:240px;height:140px;left:22px;top:300px;display: none;',title:'리사이즈 불가',movable:'true',fixed:'true',dragResizable:'false'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'콘텐츠 영역입니다.',style:'padding: 12px 6px;'}}]},{T:1,N:'w2:floatingLayer',A:{fixed:'true',id:'flt_exam2',style:'position:absolute;width:240px;height:140px;left:22px;top:580px;display: none;',title:'리사이즈 가능',dragResizable:'true'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'콘텐츠 영역입니다.',style:'padding: 12px 6px;'}}]}]}]}]})
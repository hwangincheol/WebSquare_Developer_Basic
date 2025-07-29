/*amd /page/P00258.xml 9769 42a3890d6ca45fde7c363f6419f10d84098a92ab035046d2bcbd38b4ffd4428d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'City',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Country',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Type',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [ 선택 여부 판단하기 ] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    // SelectBox 'sbx_exam1'의 체크 여부를 검증합니다.
    let message = sbx_exam1.validate();
    alert(message);
};

/**
 * 버튼 [ 지정된 메시지 표시하기 ] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    // SelectBox 'sbx_exam2'의 체크 여부를 검증합니다.
    sbx_exam2.validate();
};

/**
 * 버튼 [ 사용자 설정 메시지 표시하기 ] 클릭 시
 */
scwin.btn_ex3_onclick = function (e) {
    // SelectBox 'sbx_exam3'의 체크 여부를 검증합니다.
    sbx_exam3.validate();
};

/**
 * 버튼 [ 사용자 지정 함수로 설정한 메시지 표시하기 ] 클릭 시
 */
scwin.btn_ex4_onclick = function (e) {
    sbx_exam4.validate();
};

/**
 * 영역 [ 사용자 지정 함수로 설정한 메시지 표시하기 ]의
 * SelectBox컴포넌트 [sbx_exam4]의 invalidMessageFunc함수
 */
scwin.fn_msg = function () {
    let invalidType = this.getType();  // invalid type
    switch (invalidType) {
        case "mandatory":
            msg = "Select your favorit city.";
            break;
        default:
            msg = "Enter again.";
            break;
    }
    alert(msg);
}

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'사용자가 SelectBox컴포넌트에서 선택한 데이터를 검증하는 것에 관한 예제입니다.<br/><br/>이 기능은 아래의 속성과 함수로 사용할 수 있습니다.<br/>- mandatory : (속성)mandatory="true"인 경우, validate(); 함수는 검증을 수행하여 결과를 true/false로 반환<br/>- displaymessage : (속성)검증 실패 시 Engine 내부에 정의된 메시지 표시<br/>- invalidMessage : (속성)검증 결과가 실패일 경우, 속성에 지정한 값을 메시지 표시<br/>- invalidMessageFunc : (속성)검증 결과가 실패일 경우, 사용자 지정 함수 반환<br/>- validate : (함수)컴포넌트의 유효성 관련 속성값을 통해 유효성 검사를 실행',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'선택 여부 판단하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'SelectBox컴포넌트의 목록이 선택된 것을 확인할 수 있습니다.',style:'',displayFormat:''}},{T:1,N:'xf:group',A:{id:'',style:'margin: 10px 0px 10px 0px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',localeRef:'',style:'min-width: 30px;height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택 여부 판단하기'}]}]}]},{T:1,N:'xf:select1',A:{id:'sbx_exam1',chooseOption:'true',style:'width: 148px;height: 21px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',mandatory:'true',chooseOptionLabel:'Select a city.'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Seoul'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'New York'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Paris'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'London'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'지정된 메시지 표시하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'SelectBox컴포넌트를 선택하지 않고 아래의 버튼을 클릭 시 지정된 메시지 \'필수 입력 항목입니다\'가 표시됩니다.',style:'',displayFormat:''}},{T:1,N:'xf:group',A:{id:'',style:'margin: 10px 0px 10px 0px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',localeRef:'',style:'min-width: 30px;height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지정된 메시지 표시하기'}]}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'Select a city.',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sbx_exam2',ref:'',style:'width: 148px;height: 21px;',submenuSize:'auto',displaymessage:'true',mandatory:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Seoul'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'New York'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Paris'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'London'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'사용자 설정 메시지 표시하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',displayFormat:'',escape:'false',id:'',label:'SelectBox컴포넌트를 선택하지 않고 아래의 버튼을 클릭 시 사용자가 설정한 메시지가 표시됩니다.',style:''}},{T:1,N:'xf:group',A:{id:'',style:'margin: 10px 0px 10px 0px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex3_onclick',id:'btn_ex3',localeRef:'',style:'min-width: 30px;height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용자 설정 메시지 표시하기'}]}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'Select a city.',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displaymessage:'true',id:'sbx_exam3',mandatory:'true',ref:'',style:'width: 148px;height: 21px;',submenuSize:'auto',invalidMessage:'사용자 설정 메시지'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Seoul'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'New York'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Paris'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'London'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'사용자 지정 함수로 설정한 메시지 표시하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',displayFormat:'',escape:'false',id:'',label:'SelectBox컴포넌트를 선택하지 않고 아래의 버튼을 클릭 시 사용자 지정 함수로 설정한 메시지가 표시됩니다.',style:''}},{T:1,N:'xf:group',A:{id:'',style:'margin: 10px 0px 10px 0px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex4_onclick',id:'btn_ex4',localeRef:'',style:'min-width: 30px;height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용자 지정 함수로 설정한 메시지 표시하기'}]}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'Select a city.',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displaymessage:'true',id:'sbx_exam4',mandatory:'true',ref:'',style:'width: 148px;height: 21px;',submenuSize:'auto',invalidMessageFunc:'scwin.fn_msg'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Seoul'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'New York'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Paris'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'London'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''}}]}]}]}]}]})
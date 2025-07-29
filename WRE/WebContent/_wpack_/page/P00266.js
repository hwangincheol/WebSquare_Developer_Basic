/*amd /page/P00266.xml 4278 975dbeacb3e500b4ed289fe3f99a79bf4155077bc097952e8dce38d5dcab9b12 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [패널 속성 반환하기] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    // InputBox 'ibx_exam1'에 입력된 값을 변수 'ibx1Val' 저장합니다.
    let ibx1Val = ibx_exam1.getValue();

    if (!ibx1Val) {
        // InputBox 'ibx_exam1'에 아무것도 입력되지 않았을 때 0을 세팅합니다.
        ibx1Val = 0;
    } else {
        // index는 0부터 시작이기 때문에 -1 합니다.
        ibx1Val = ibx1Val - 1;
    }

    // Accordion 'acd_exam1'에 변수 'ibx1Val'에 해당하는 패널의 속성을 변수 'openPanel'에 저장합니다.
    let openPanel = acd_exam1.getOpenPanelInfo(ibx1Val);
    let openPanelInfo = JSON.stringify(openPanel);
    alert(openPanelInfo);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'현재 열린 패널 중 첫 번째 혹은 지정한 인덱스에 해당하는 패널의 속성을 반환하는 예제입니다.<br/><br/>이 기능은 아래의 함수로 사용할 수 있습니다.<br/>- getOpenPanelInfo : 열린 패널 중에 index에 해당하는 패널 속성. parameter를 입력하지 않으면 제일 첫번째로 열린 패널 정보 반환.',style:'margin-bottom: 10px;'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'패널의 속성을 반환하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'패널1, 2, 3 중에서 속성을 반환하고 싶은 패널의 숫자를 입력 후 버튼을 클릭합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'txt_info_important',escape:'false',id:'',label:'※ Input컴포넌트에는 1~3 숫자만 입력 가능합니다.',style:''}},{T:1,N:'xf:group',A:{id:'',style:'margin: 10px 0px 10px 0px;'},E:[{T:1,N:'xf:input',A:{class:'',dataType:'text',displayFormatter:'scwin.toUpperCaseFormatter',id:'ibx_exam1',maxByteLength:'1',style:'width:40px;margin-right: 10px;',allowChar:'1-3'}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',localeRef:'',style:'min-width: 30px;height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'패널 속성 반환하기'}]}]}]},{T:1,N:'w2:accordion',A:{style:'',id:'acd_exam1',class:'acd',unCollapseAll:'true',independentPanel:'true'},E:[{T:1,N:'w2:panels',A:{style:'',id:'panel1',class:''},E:[{T:1,N:'w2:panelTitle',A:{style:'',id:'panelTitle1',label:'panel1'}},{T:1,N:'w2:panelContent',A:{style:'',id:'panelContent1'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'패널1 콘텐츠 영역입니다.',style:'',tagname:'span'}}]}]},{T:1,N:'w2:panels',A:{style:'',id:'panel2',class:''},E:[{T:1,N:'w2:panelTitle',A:{style:'',id:'panelTitle2',label:'panel2'}},{T:1,N:'w2:panelContent',A:{style:'',id:'panelContent2'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'패널2 콘텐츠 영역입니다.',style:'',tagname:'span'}}]}]},{T:1,N:'w2:panels',A:{style:'',id:'panel3',class:''},E:[{T:1,N:'w2:panelTitle',A:{style:'',id:'panelTitle3',label:'panel3'}},{T:1,N:'w2:panelContent',A:{style:'',id:'panelContent3'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'패널3 콘텐츠 영역입니다.',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})
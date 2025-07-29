/*amd /page/P00157.xml 3312 00f90ec99b11fb119028b994bca731718d0d380633a703030242881a92bab13b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    scwin.initPage();
};

/**
 * 화면 초기화
 */
scwin.initPage = function () {
    var jsnTabOpt = {
        "label": "P00157S01",
        "openAction": "select"
    };
    var jsnContOpt = {
        "src": "/page/P00157S01.xml",
        "wframe": true

    };

    tac_exam1.addTab("P00157S01", jsnTabOpt, jsnContOpt);
    tac_exam2.addTab("P00157S01", jsnTabOpt, jsnContOpt);

};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'TabControl의 속성 frameModal을 활성화하였을 때 팝업의 동작을 비교하는 예제입니다.<br/>frameModal을 활성화하면 팝업이 Window 내부에서만 이동이 가능하게 되며,<br/>팝업에서 팝업을 호출한 경우 상위 팝업을 닫으면 하위 팝업이 함께 닫힙니다.<br/>이 기능은 TabControl의 속성 frameMode가 "wframe" 또는 "wframePreload"로 설정된 경우만 동작합니다.',style:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:''}},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mw600',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(기본 설정) frameModal 비활성화',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbcbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tac_exam1',style:'position: relative;height: 300px;',tabScroll:'',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'frameModal 활성화',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbcbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'팝업이 탭 영역에서만 이동됩니다. 상위 팝업을 닫으면 하위 팝업이 닫힙니다.',style:''}},{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tac_exam2',style:'position: relative;height: 300px;',tabScroll:'',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true',frameModal:'true'}}]}]}]}]}]}]}]}]})
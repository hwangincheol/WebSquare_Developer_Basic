/*amd /page/P00045.xml 3377 6b2239fb61886e5b91ed2675fc068065620a656fa954a8719863c86a172b2b5c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * [실행1] 클릭 시
 * trigger 생성 및 출력
 */
scwin.btn_ex1_onclick = function (e) {
    var _comp;
    var strID;
    var objDate;

    //중복되지 않는 ID 생성을 위한 스크립트
    objDate = new Date();
    strID = "btn_ex_" + objDate.getDate() + "_" + objDate.getTime();

    //버튼(trigger) 생성 
    _comp = $p.dynamicCreate(
        strID,
        "trigger", //생성할 컴포넌트의 pluginName
        {
            style: ""
            , className: "btn_cm mr_def"
        },
        grp_target  //생성(추가)할 위치의 컴포넌트 객체
    );

    //생성된 trigger의 value 할당.
    _comp.setValue("버튼");

};

/**
 * [실행2] 클릭 시
 * input 생성 및 출력
 */
scwin.btn_ex2_onclick = function (e) {
    var _comp;
    var strID;
    var objDate;

    //중복되지 않는 ID 생성을 위한 스크립트
    objDate = new Date();
    strID = "ipt_ex_" + objDate.getDate() + "_" + objDate.getTime();

    //input 생성 
    _comp = $p.dynamicCreate(
        strID,
        "input", //생성할 컴포넌트의 pluginName
        {
            style: "min-width:80px; min-height:20px;",
            className: "mr_def",
            placeholder: "입력하세요.",
        },
        grp_target  //생성(추가)할 위치의 컴포넌트 객체
    );
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def minH',id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'com_example_heading_btn',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'com_example_heading',id:'',label:'버튼 생성하기',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행1'}]}]}]},{T:1,N:'xf:group',A:{class:'com_example_heading_btn',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'com_example_heading',id:'',label:'input 생성하기',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행2'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'minH'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'아래에 컴포넌트가 추가됩니다.',style:'background-color: #eee;padding:4px 4px;font-size: 11px;',class:''}},{T:1,N:'xf:group',A:{style:'padding: 6px 0px; line-height: 30px',id:'grp_target',class:'minH'}}]}]}]}]}]})
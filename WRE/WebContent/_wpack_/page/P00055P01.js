/*amd /page/P00055P01.xml 3685 5ed9680608ff678fd1862668c4a86a4943f44b288c4cd72c6ab233a1c7937a9d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [$p.isPopup() 실행] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    var ispopup;
    var strResult;

    ispopup = $p.isPopup(); //예상 결과 : true

    strResult = "$p.isPopup();\n";
    strResult += "예상 결과 : true\n";
    strResult += "실행 결과 : " + ispopup;

    alert(strResult);
};

/**
 * 버튼 [$p.isPopup(true) 실행] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    var ispopup;
    var strResult;

    ispopup = $p.isPopup(true); //예상 결과 : true

    strResult = "$p.isPopup(true);\n";
    strResult += "예상 결과 : true\n";
    strResult += "실행 결과 : " + ispopup;

    alert(strResult);
};

/**
 * 버튼 [$p.isWFramePopup() 실행] 클릭 시
 */
scwin.btn_ex3_onclick = function (e) {
    var isWFramePopup;
    var strResult;

    isWFramePopup = $p.isWFramePopup(); //예상 결과 : false

    strResult = "$p.isWFramePopup();\n";
    strResult += "예상 결과 : false\n";
    strResult += "실행 결과 : " + isWFramePopup;

    alert(strResult);
};

/**
 * 버튼 [$p.isWFramePopup(true) 실행] 클릭 시
 */
scwin.btn_ex4_onclick = function (e) {
    var isWFramePopup;
    var strResult;

    isWFramePopup = $p.isWFramePopup(true); //예상 결과 : false

    strResult = "$p.isWFramePopup(true);\n";
    strResult += "예상 결과 : false\n";
    strResult += "실행 결과 : " + isWFramePopup;

    alert(strResult);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Browser 팝업에서 API 실행',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.isPopup() 실행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.isPopup(true) 실행'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false',id:'btn_ex3',style:'',type:'button','ev:onclick':'scwin.btn_ex3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.isWFramePopup() 실행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false',id:'btn_ex4',style:'',type:'button','ev:onclick':'scwin.btn_ex4_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.isWFramePopup(true) 실행'}]}]}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'WFrame 안의 소스에서 API 실행',style:'',tagname:'h3'}}]},{T:1,N:'w2:wframe',A:{id:'',style:'min-height: 10px;',src:'/page/P00055S01.xml',class:'ws5_example_bg1 p10'}}]}]}]}]})
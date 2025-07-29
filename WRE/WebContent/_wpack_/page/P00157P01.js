/*amd /page/P00157P01.xml 1813 8f3de1ec8c9eea8843807923cab17b1f6c6e682c22a94eedea2f07374f4f4392 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [팝업 열기] 클릭시
 */
scwin.btn_ex1_onclick = function (e) {
    var jsnOptions;
    var strPopID = "popup_P00157P02";

    //중복 팝업 제어
    if ($p.getPopupWindow(strPopID)) {
        return;
    }

    jsnOptions = {
        id: strPopID,
        type: "wframePopup",
        modal: "modal",
        frameModal: "",
        width: "200px",
        height: "160px",
        popupName: "popup1-1",
        left: "60px",
        top: "60px"
    };

    //팝업 열기
    $p.openPopup("/page/P00157P02.xml", jsnOptions);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:'padding: 10px;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'팝업1 - P00157P01.xml',style:'color: DarkCyan;font-size: 1.5em;font-weight: bold;'}},{T:1,N:'xf:group',A:{id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',localeRef:'',style:'min-width: 30px; height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'팝업 열기'}]}]}]}]}]}]}]})
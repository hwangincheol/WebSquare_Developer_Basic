/*amd /page/P00404.xml 9506 3bfa59e486ada6a05a0f3422119ec0a1b378daad9957c7ee28f750a4df3575db */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [1.1 wframe 팝업 열기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // 동일한 팝업이 열려 있는 경우 안내 alert
    if ($p.getPopupWindow("popup_wframe1")) {
        alert("열려 있는 팝업이 있습니다.");
        return;
    }

    // 팝업 생성 옵션
    var jsnOptions = {
        id: "popup_wframe1",
        type: "wframePopup", // [필수 고정 값] 팝업 콘텐츠를 wframe으로 구성
        fixPosition: "false", // [필수 고정 값] 팝업의 위치를 고정하지 않음(이동 가능)
        width: "300px",
        height: "180px",
        popupName: "[이동 가능] wframePopup"
    };

    //모바일에서의 크기,위치 조절을 위해 공통 함수 사용하였습니다. 기본 옵션은 최초 선언된 jsnOptions를 참고하시기 바랍니다.
    jsnOptions = $c.frame.getPopupPosition(jsnOptions);

    // 예제 화면에서 팝업이 표시되도록 추가 설정. 기본 옵션은 최초 선언된 jsnOptions를 참고하시기 바랍니다.
    jsnOptions.frameModal = "parent"; // 팝업을 부모 frame영역을 기준으로 표시합니다.
    jsnOptions.left = "10px";
    jsnOptions.top = this.getPosition("top") + "px";

    $p.openPopup("/page/P00404P01.xml", jsnOptions);
};

/**
 * 버튼 [1.2 iframe 팝업 열기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // 동일한 팝업이 열려 있는 경우 안내 alert
    if ($p.getPopupWindow("popup_iframe1")) {
        alert("열려 있는 팝업이 있습니다.");
        return;
    }

    // 팝업 생성 옵션
    var jsnOptions = {
        id: "popup_iframe1",
        type: "iframePopup", // [필수 고정 값] 팝업 콘텐츠를 iframe으로 구성
        fixPosition: "false", // [필수 고정 값] 팝업의 위치를 고정하지 않음(이동 가능)
        width: "300px",
        height: "180px",
        popupName: "[이동 가능] iframePopup"
    };

    //모바일에서의 크기,위치 조절을 위해 공통 함수 사용하였습니다. 기본 옵션은 최초 선언된 jsnOptions를 참고하시기 바랍니다.
    jsnOptions = $c.frame.getPopupPosition(jsnOptions);

    // 예제 화면에서 팝업이 표시되도록 추가 설정. 기본 옵션은 최초 선언된 jsnOptions를 참고하시기 바랍니다.
    jsnOptions.frameModal = "parent"; // 팝업을 부모 frame영역을 기준으로 표시합니다.
    jsnOptions.left = "10px";
    jsnOptions.top = this.getPosition("top") + "px";

    $p.openPopup("/page/P00404P01.xml", jsnOptions);
};

/**
 * 버튼 [2.1 wframe 팝업 열기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // 동일한 팝업이 열려 있는 경우 안내 alert
    if ($p.getPopupWindow("popup_wframe2")) {
        alert("열려 있는 팝업이 있습니다.");
        return;
    }

    // 팝업 생성 옵션
    var jsnOptions = {
        id: "popup_wframe2",
        type: "wframePopup", // [필수 고정 값] 팝업 콘텐츠를 wframe으로 구성
        fixPosition: "true", // [필수 고정 값] 팝업의 위치를 고정
        width: "300px",
        height: "180px",
        popupName: "[이동 불가] wframePopup"
    };

    //모바일에서의 크기,위치 조절을 위해 공통 함수 사용하였습니다. 기본 옵션은 최초 선언된 jsnOptions를 참고하시기 바랍니다.
    jsnOptions = $c.frame.getPopupPosition(jsnOptions);

    // 예제 화면에서 팝업이 표시되도록 추가 설정. 기본 옵션은 최초 선언된 jsnOptions를 참고하시기 바랍니다.
    jsnOptions.frameModal = "parent"; // 팝업을 부모 frame영역을 기준으로 표시합니다.
    jsnOptions.left = "10px";
    jsnOptions.top = this.getPosition("top") + "px";

    $p.openPopup("/page/P00404P01.xml", jsnOptions);
};

/**
 * 버튼 [2.2 iframe 팝업 열기] 클릭 시
 */
scwin.btn_exam2_2_onclick = function (e) {
    // 동일한 팝업이 열려 있는 경우 안내 alert
    if ($p.getPopupWindow("popup_iframe2")) {
        alert("열려 있는 팝업이 있습니다.");
        return;
    }

    // 팝업 생성 옵션
    var jsnOptions = {
        id: "popup_iframe2",
        type: "iframePopup", // [필수 고정 값] 팝업 콘텐츠를 iframe으로 구성
        fixPosition: "true", // [필수 고정 값] 팝업의 위치를 고정
        width: "300px",
        height: "180px",
        popupName: "[이동 불가] iframePopup"
    };

    //모바일에서의 크기,위치 조절을 위해 공통 함수 사용하였습니다. 기본 옵션은 최초 선언된 jsnOptions를 참고하시기 바랍니다.
    jsnOptions = $c.frame.getPopupPosition(jsnOptions);

    // 예제 화면에서 팝업이 표시되도록 추가 설정. 기본 옵션은 최초 선언된 jsnOptions를 참고하시기 바랍니다.
    jsnOptions.frameModal = "parent"; // 팝업을 부모 frame영역을 기준으로 표시합니다.
    jsnOptions.left = "10px";
    jsnOptions.top = this.getPosition("top") + "px";

    $p.openPopup("/page/P00404P01.xml", jsnOptions);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'함수 \'$p.openPopup\'으로 생성된 팝업의 위치를 고정(팝업 이동 불가)하는 예제입니다.<br/>(사용자가 팝업의 타이틀 영역을 마우스로 드래그하여 팝업을 이동시킬 수 없습니다.)',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'이 기능은 함수 \'$p.openPopup\'의 두 번째 인자의 속성 \'fixPosition\'에 설정할 수 있습니다.<br/>속성 \'fixPosition\'은 두 번째 인자의 속성 \'type\'이 \'wframePopup\' 또는 \'iframePopup\'으로 설정되었을 때 제공됩니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'설정 값에 따른 동작은 다음과 같습니다.<br/>- "false" : [default] 팝업의 위치를 고정하지 않습니다.<br/>- "true" : 팝업의 위치를 고정합니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'함수 \'$p.openPopup\'의 의 두 번째 인자의 속성 \'fixPosition\'은 아래의 엔진부터 제공됩니다.<br/>- RC: 5.0_5.4811B.20230203.095105<br/>- GA: 5.0_5.4877A.20230405.131227',style:'',class:'exam_txt req_version'}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 마우스 사용이 가능한 환경에서 정상 동작합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(기본 설정) 팝업의 위치 고정하지 않기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'생성된 팝업의 타이틀을 마우스로 드래그합니다.<br/>팝업이 이동됩니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1.1 wframe 팝업 열기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1.2 iframe 팝업 열기'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'팝업의 위치 고정하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'생성된 팝업의 타이틀을 마우스로 드래그합니다.<br/>팝업이 이동되지 않습니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2.1 wframe 팝업 열기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam2_2_onclick',id:'btn_exam2_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2.2 iframe 팝업 열기'}]}]}]}]}]}]}]}]}]}]})
/*amd /page/P00295.xml 4049 6202e594444367242f69a41e231142c1ed1da6500a7569256830dadfcdd3edb3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    // 예제 테스트를 위해 탭 추가
    let strTabID = "tab_exam"; // Tab의 ID
    tac_exam1.addTab(
        strTabID,
        {
            "label": "TAB_EXAM",
            "openAction": "select",
            "tabWidth": 90
        },
        {
            "src": "/page/P00295S01.xml",
            "wframe": true,
            "dataObject": {
                "type": "json",
                "name": "tabParam",
                "data": { "tabID": strTabID }
            }
        }
    );
};

/**
 * 버튼 [탭의 ID가 'tabs1'인 탭의 Index 반환받기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // TabControl 'tac_exam1'의 탭 ID가 'tabs1'인 탭의 Index 반환받습니다.
    let result = tac_exam1.getTabIndex("tabs1");
    // 반환 값 예시) 0

    // 결과 값 출력
    alert("getTabIndex: " + result);
    console.log("getTabIndex: ", result);
};

/**
 * 버튼 [탭의 ID가 'tab_exam'인 탭의 Index 반환받기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // TabControl 'tac_exam1'의 탭 ID가 'tab_exam'인 탭의 Index 반환받습니다.
    let result = tac_exam1.getTabIndex("tab_exam");
    // 반환 값 예시) 1

    // 결과 값 출력
    alert("getTabIndex: " + result);
    console.log("getTabIndex: ", result);
};



}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'TabControl의 탭 ID로 탭의 Index를 반환받는 함수 \'getTabIndex\' 예시입니다.<br/>각 탭에 지정된 ID는 다음과 같습니다.<br/>- 탭 \'TAB1\'의 ID : tabs1<br/>- 탭 \'TAB_EXAM\'의 ID : tab_exam',style:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:''}},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mw600',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'탭의 ID가 \'tabs1\'인 탭의 Index 반환받기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'탭의 ID가 \'tab_exam\'인 탭의 Index 반환받기'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tac_exam1',style:'position: relative;height: 120px;',tabScroll:'',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'TAB1',style:'width:70px;height:30px;'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:'min-height:30px;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'TAB1 CONTENT',style:'font-size: 1.2em;padding: 6px;color: steelblue;font-weight: bold;'}},{T:1,N:'w2:textbox',A:{id:'',label:'Tab ID : tabs1',style:'padding: 0px 6px;;'}}]}]}]}]}]}]}]}]}]}]})
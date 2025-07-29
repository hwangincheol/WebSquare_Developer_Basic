/*amd /page/P00296.xml 6593 755de6c7b8ace63de7d8f34e04c0c4b8dbd934585c1fb5acb9b4227b42b338a9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    // 예제 테스트를 위해 탭 추가
    tac_exam1.addTab(
        "tab_exam_wframe",
        {
            "label": "TAB_WFrame",
            "openAction": "select",
            "tabWidth": 100
        },
        {
            "src": "/page/P00296S01.xml",
            "wframe": true
        }
    );
};

/**
 * 버튼 [탭 'TAB1'의 콘텐츠에 구성된 Input의 값 반환받기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // TabControl 'tac_exam1'의 탭 ID가 'tabs1'인 탭의 Index를 반환받습니다.
    let numTabIndex = tac_exam1.getTabIndex("tabs1");

    // 반환받은 탭의 Index로 탭의 레이블을 반환받습니다.
    let strTabLabel = tac_exam1.getLabelText(numTabIndex);

    // 반환받은 탭의 Index로 탭의 콘텐츠가 화면에 로딩 여부를 반환받습니다.
    let isLoaded = tac_exam1.isLoaded(numTabIndex);

    // 탭의 콘텐츠가 로딩되지 않은 경우 로직.
    if (!isLoaded) {
        alert("탭 '" + strTabLabel + "'이 그려지지 않은 상태입니다. 먼저, 탭을 선택(클릭)해주세요.");
        return;
    }

    // Input 'ibx_tabs1_tabID'의 값을 반환받습니다.
    let result = ibx_tabs1_tabID.getValue();

    // 결과 값 출력
    alert("탭 '" + strTabLabel + "'의 Input 값: " + result);
    console.log("탭 '" + strTabLabel + "'의 Input 값: ", result);
};

/**
 * 버튼 [탭의 ID가 'tab_exam_wframe'인 탭의 콘텐츠에 구성된 Input의 값 반환받기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // TabControl 'tac_exam1'의 탭 ID가 'tab_exam_wframe'인 탭의 Index를 반환받습니다.
    let numTabIndex = tac_exam1.getTabIndex("tab_exam_wframe");

    // 반환받은 탭의 Index로 탭의 레이블을 반환받습니다.
    let strTabLabel = tac_exam1.getLabelText(numTabIndex);

    // 반환받은 탭의 Index로 탭의 콘텐츠가 화면에 로딩 여부를 반환받습니다.
    let isLoaded = tac_exam1.isLoaded(numTabIndex);

    // 탭의 콘텐츠가 로딩되지 않은 경우 로직.
    if (!isLoaded) {
        alert("탭 '" + strTabLabel + "'이 그려지지 않은 상태입니다. 먼저, 탭을 선택(클릭)해주세요.");
        return;
    }

    // TabControl 'tac_exam1'의 탭 ID가 'tab_exam_wframe'인 탭의 콘텐츠 윈도우 객체를 반환받습니다.
    let winTabContent = tac_exam1.getWindow("tab_exam_wframe");

    // Input 'ibx_exam' 객체를 반환받습니다.
    let cmpInput = winTabContent.$p.getComponentById("ibx_exam");

    // Input 'ibx_exam'의 값을 반환받습니다.
    let result = cmpInput.getValue();

    // 결과 값 출력
    alert("탭 '" + strTabLabel + "'의 Input 값: " + result);
    console.log("탭 '" + strTabLabel + "'의 Input 값: ", result);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'탭의 콘텐츠에 구성된 컴포넌트의 함수를 호출하는 예제입니다.<br/>탭의 콘텐츠가 WFrame으로 구성된 경우에는 TabControl의 함수 \'getWindow\'를 통해 콘텐츠의 객체(컴포넌트 또는 $p 등)에 접근할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'각 탭의 콘텐츠 구성 방법은 다음과 같습니다.<br/>- 탭 \'TAB1\' : 화면에서 직접 구성.<br/>- 탭 \'TAB_WFrame\' : WFrame으로 파일 \'P00296S01.xml\'를 지정.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',id:'',label:'탭 \'TAB_WFrame\'의 속성 \'alwaysDraw\'의 값이 \'false\'로 지정되었습니다. 탭이 선택되지 않은 경우에는 콘텐츠 객체에 접근할 수 없습니다.',style:'',escape:'false'}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'탭의 콘텐츠가 그려지고 초기 로직을 수행해야 하는 경우에는, 콘텐츠 화면의 함수 \'scwin.onpageload\'에 구성하거나 TabControl의 이벤트 \'ondrawcomplete\'를 사용합니다.',style:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:''}},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mw600',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'탭 \'TAB1\'의 콘텐츠에 구성된 Input의 값 반환받기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'탭 \'TAB_WFrame\'의 콘텐츠에 구성된 Input의 값 반환받기'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tac_exam1',style:'position: relative;height: 120px;',tabScroll:'',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'TAB1',style:'width:70px;height:30px;'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:'min-height:30px;'},E:[{T:1,N:'xf:group',A:{id:'',style:'padding: 6px;'},E:[{T:1,N:'w2:textbox',A:{style:'font-size: 1.2em;color: steelblue;font-weight: bold;margin-bottom: 6px;',id:'',label:'TAB1 CONTENT'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'ibx_tabs1_tabID',style:'width: 130x;height: 24px;',initValue:'Inner Content'}}]}]}]}]}]}]}]}]}]}]}]})
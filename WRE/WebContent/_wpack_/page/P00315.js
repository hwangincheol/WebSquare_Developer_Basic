/*amd /page/P00315.xml 11025 9a42b01b91a24f63e2f6afe67a5cb5996223d4fd0673fcd79ea442afd437d342 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo'},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {

};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    let strTargetId = this.getUserData("userData1");
    let cmpTarget;
    if (strTargetId) {
        cmpTarget = $p.getComponentById(strTargetId) || txa_log;
    } else {
        cmpTarget = txa_log;
    }
    //textarea value를 빈문자열로 할당.
    cmpTarget.setValue("");
};

/**
 * 버튼 [1-1. 탭 추가 - 'alwaysDraw'를 true로 설정] 클릭 시
 */
scwin.btn_exam1_1_onclick = async function (e) {
    // TabControl 'tac_exam1'에 탭 추가하기 - "alwaysDraw": true
    let result = await tac_exam1.addTab(
        "tac_exam1_alwaysDraw_true",
        {
            "label": "alwaysDraw_true",
            "openAction": "select",
            "disabled": true
        },
        {
            "src": "/page/P00315S01.xml",
            "wframe": true,
            "alwaysDraw": true, // 필수
            "frameMode": "wframePreload" // 필수
        }
    );

    let strErrorLog = "# 탭 'alwaysDraw_true'가 추가되었습니다.";
    $c.frame.printExampleLog(strErrorLog, txa_log_1, false);
    console.log(strErrorLog);
};

/**
 * 버튼 [1-2. 탭 'alwaysDraw_true'의 InputBox 값 반환받기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // 탭 추가 여부 확인하기
    if (tac_exam1.getTabIndex("tac_exam1_alwaysDraw_true") == null) {
        alert("탭이 추가되지 않았습니다.");
        let strErrorLog = "# 탭이 추가되지 않았습니다.\n버튼 [1-1. 탭 추가 - 'alwaysDraw'를 true로 설정]을 클릭하여 탭을 추가해야합니다.";
        $c.frame.printExampleLog(strErrorLog, txa_log_1, false);
        console.log(strErrorLog);
        return;
    }

    // 탭 콘텐츠의 InputBox 'ibx_exam1'의 value 꺼내오기
    // 오류 발생 시 로그를 출력하기 위해 try/catch로 작성되었습니다.
    try {
        // 1. 탭 콘텐츠 객체 반환 받기
        let objContWindow = tac_exam1.getWindow("tac_exam1_alwaysDraw_true");

        // 2. 탭 콘텐츠의 InputBox 'ibx_exam1' 객체 반환 받기
        let cmpInput = objContWindow.$p.getComponentById("ibx_exam1");

        // 3. 탭 콘텐츠의 InputBox 'ibx_exam1'의 value 꺼내오기
        let strInputValue = cmpInput.getValue();

        // 로그 출력
        let strLog = "# 탭 'alwaysDraw_true'의 콘텐츠의 'ibx_exam1'의 value: \n";
        $c.frame.printExampleLog(strLog + strInputValue, txa_log_1, false);
        console.log(strLog, strInputValue);

    } catch (error) {
        let strErrorLog = "# 오류 발생 #\n탭 'alwaysDraw_true'의 콘텐츠 접근 중 오류 발생.\n";
        $c.frame.printExampleLog(strErrorLog + error.stack, txa_log_1, false);
        console.log(strErrorLog, error);
    }
};

/**
 * 버튼 [2-1. 탭 추가 - 'alwaysDraw'를 false로 설정] 클릭 시
 */
scwin.btn_exam2_1_onclick = async function (e) {
    // TabControl 'tac_exam1'에 탭 추가하기 - "alwaysDraw": false
    let result = await tac_exam1.addTab(
        "tac_exam1_alwaysDraw_false",
        {
            "label": "alwaysDraw_false",
            "openAction": "select",
            "disabled": true
        },
        {
            "src": "/page/P00315S01.xml",
            "wframe": true,
            "alwaysDraw": false // 필수
        }
    );

    let strErrorLog = "# 탭 'alwaysDraw_false'가 추가되었습니다.";
    $c.frame.printExampleLog(strErrorLog, txa_log_1, false);
    console.log(strErrorLog);
};

/**
 * 버튼 [2-2. 탭 'alwaysDraw_false'의 InputBox 값 반환받기] 클릭 시
 */
scwin.btn_exam2_2_onclick = function (e) {
    // 탭 추가 여부 확인하기
    if (tac_exam1.getTabIndex("tac_exam1_alwaysDraw_false") == null) {
        alert("탭이 추가되지 않았습니다.");
        let strErrorLog = "# 탭이 추가되지 않았습니다.\n버튼 [2-1. 탭 추가 - 'alwaysDraw'를 false로 설정]을 클릭하여 탭을 추가해야합니다.";
        $c.frame.printExampleLog(strErrorLog, txa_log_1, false);
        console.log(strErrorLog);
        return;
    }

    // 탭 콘텐츠의 InputBox 'ibx_exam1'의 value 꺼내오기
    // 오류 발생 시 로그를 출력하기 위해 try/catch로 작성되었습니다.
    // 아래의 스크립트는 오류가 발생하여 catch에 작성된 스크립트가 실행됩니다.
    try {
        // 1. 탭 콘텐츠 객체 반환 받기
        let objContWindow = tac_exam1.getWindow("tac_exam1_alwaysDraw_false");

        // 2. 탭 콘텐츠의 InputBox 'ibx_exam1' 객체 반환 받기
        let cmpInput = objContWindow.$p.getComponentById("ibx_exam1");

        // 3. 탭 콘텐츠의 InputBox 'ibx_exam1'의 value 꺼내오기
        let strInputValue = cmpInput.getValue();

        // 로그 출력
        let strLog = "# 탭 'alwaysDraw_false'의 콘텐츠의 'ibx_exam1'의 value: \n";
        $c.frame.printExampleLog(strLog + strInputValue, txa_log_1, false);
        console.log(strLog, strInputValue);

    } catch (error) {
        alert("스크립트 실행 중 오류가 발행하였습니다.");

        let strErrorLog = "# 오류 발생\n탭 'alwaysDraw_false'의 콘텐츠 접근 중 오류 발생.\n";
        $c.frame.printExampleLog(strErrorLog + error.message, txa_log_1, false);
        console.log(strErrorLog, error);
    }
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents'},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc'},E:[{T:1,N:'w2:textbox',A:{escape:'false',label:'TabControl의 함수 \'addTab\'의 세 번째 인자 JSON 객체의 \'alwaysDraw\' 설정 값 비교 예제입니다.<br/>세 번째 인자는 콘텐츠에 관련된 옵션들로 구성되어있습니다.<br/>\'alwaysDraw\'는 새로 추가될 탭의 콘텐츠가 화면에 보이지 않을 때, 해당 콘텐츠를 화면(브라우저)에 구성할지 여부를 지정할 수 있습니다.<br/>이 옵션을 true로 설정하고 콘텐츠 옵션 \'frameMode\'의 값을 \'wframePreload\'로 설정하면 함수 \'addTab\' 호출 후 탭 콘텐츠에 접근할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',label:'콘텐츠 옵션 \'alwaysDraw\'의 설정 값에 따른 동작 방식은 다음과 같습니다.<br/>- false : (기본 값) 콘텐츠가 보이지 않으면, 콘텐츠를 구성하지 않습니다. 콘텐츠가 보여질 때 구성합니다.<br/>- true : 콘텐츠를 구성합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'탭의 수가 많거나, 구성된 탭의 콘텐츠가 복잡하여 화면의 로딩 속도가 느리다면 \'alwaysDraw\'를 false로 설정하여 로딩 속도를 개선할 수 있습니다.<br/>false로 지정되면 콘텐츠가 구성되기 전까지 탭의 콘텐츠에 접근이 불가할 수 있으므로, 로직 구성 시 유의해야합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'\'alwaysDraw\'를 false로 지정하고 탭 콘텐츠에 접근해야 하는 경우에는, TabControl의 이벤트 \'ondrawcomplete\'를 사용합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap P00315'},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'탭을 추가하고 탭 콘텐츠의 컴포넌트에 접근하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style'},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'테스트를 위해 스크립트로 추가된 탭은 비활성화되어있습니다. &nbsp;추가된 탭에 구성된 화면은 탭 \'TAB\'과 동일합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1-1. 탭 추가 - \'alwaysDraw\'를 true로 설정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',type:'button',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1-2. 탭 \'alwaysDraw_true\'의 InputBox 값 반환받기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2-1. 탭 추가 - \'alwaysDraw\'를 false로 설정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam2_2_onclick',id:'btn_exam2_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2-2. 탭 \'alwaysDraw_false\'의 InputBox 값 반환받기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:tabControl',A:{confirmTrueAction:'exist',confirmFalseAction:'new',useTabKeyOnly:'true',useMoveNextTabFocus:'false',useConfirmMessage:'false',alwaysDraw:'false',style:'position: relative;height: 120px;',id:'tac_exam1',class:'',keepDisabledTab:'true',tabScroll:'true'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:44px;height:30px;',id:'tac_exam1_1',label:'TAB',tabType:'text'}},{T:1,N:'w2:content',A:{style:'min-height:30px',id:'content1_1',scope:'true',src:'/page/P00315S01.xml',frameMode:'wframe'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'TAB Content',style:'font-size: 1.2em;font-weight: bold;padding: 6px;'}}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',label:'로그 확인'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',title:'로그 삭제',type:'button',userData1:'txa_log_1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_1',spellcheck:'false',style:'width: 100%;height: 90px;'}}]}]}]}]}]}]}]})
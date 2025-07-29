/*amd /page/P00313.xml 17059 7e64fb5619d176416fe1a2e034d4e5f020763bba53807b11a4a6fde9e45bf831 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo'},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = async function () {
    // 예제 테스트를 위해 2번째 탭 선택
    await tac_exam2.setSelectedTabIndex(1);
    await tac_exam3.setSelectedTabIndex(1);
    await tac_exam4.setSelectedTabIndex(1);
    await tac_exam1.setSelectedTabIndex(1);
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
 * 버튼 [탭 'TAB1'과 동일한 ID로 탭을 추가하는 경우 1-1] 클릭 시
 */
scwin.btn_exam1_1_onclick = async function (e) {
    // TabControl 'tac_exam1'에 탭 추가하기 - "openAction": "select"
    // 탭 'TAB1'과 동일한 ID로 탭을 추가하는 예시
    let result = await tac_exam1.addTab(
        "tac_exam1_1",
        {
            "label": "TAB_addTab",
            "openAction": "select"
        },
        {
            "src": "/page/P00313S03.xml",
            "wframe": true
        }
    );

    // 로그 출력
    let strLog = "# TabControl 'tac_exam1'의 함수 'addTab'의 반환 값(탭의 ID): \n";
    $c.frame.printExampleLog(strLog + JSON.stringify(result, null, "  "), txa_log_1, false);
    console.log(strLog, result);
};

/**
 * 버튼 [탭 ID가 없는 경우  1-2] 클릭 시
 */
scwin.btn_exam1_2_onclick = async function (e) {
    // TabControl 'tac_exam1'에 탭 추가하기
    // 탭의 ID와 동일한 탭이 없는 예시
    let result = await tac_exam1.addTab(
        "tac_exam1_new",
        {
            "label": "TAB_NEW",
            "openAction": "select",
            "closable": "true"
        },
        {
            "src": "/page/P00313S04.xml",
            "wframe": true
        }
    );

    // 로그 출력
    let strLog = "# TabControl 'tac_exam1'의 함수 'addTab'의 반환 값(탭의 ID): \n";
    $c.frame.printExampleLog(strLog + JSON.stringify(result, null, "  "), txa_log_1, false);
    console.log(strLog);
    console.log(result);
};

/**
 * 버튼 [탭 'TAB1'과 동일한 ID로 탭을 추가하는 경우 2-1] 클릭 시
 */
scwin.btn_exam2_1_onclick = async function (e) {
    // TabControl 'tac_exam2'에 탭 추가하기 - "openAction": "exist"
    // 탭 'TAB1'과 동일한 ID로 탭을 추가하는 예시
    let result = await tac_exam2.addTab(
        "tac_exam2_1",
        {
            "label": "TAB_addTab",
            "openAction": "exist"
        },
        {
            "src": "/page/P00313S03.xml",
            "wframe": true
        }
    );

    // 로그 출력
    let strLog = "# TabControl 'tac_exam2'의 함수 'addTab'의 반환 값(탭의 ID): \n";
    $c.frame.printExampleLog(strLog + JSON.stringify(result, null, "  "), txa_log_2, false);
    console.log(strLog, result);
};

/**
 * 버튼 [탭 ID가 없는 경우  2-2] 클릭 시
 */
scwin.btn_exam2_2_onclick = async function (e) {
    // TabControl 'tac_exam2'에 탭 추가하기
    // 탭의 ID와 동일한 탭이 없는 예시
    let result = await tac_exam2.addTab(
        "tac_exam2_new",
        {
            "label": "TAB_NEW",
            "openAction": "exist",
            "closable": "true"
        },
        {
            "src": "/page/P00313S04.xml",
            "wframe": true
        }
    );

    // 로그 출력
    let strLog = "# TabControl 'tac_exam2'의 함수 'addTab'의 반환 값(탭의 ID): \n";
    $c.frame.printExampleLog(strLog + JSON.stringify(result, null, "  "), txa_log_2, false);
    console.log(strLog);
    console.log(result);
};

/**
 * 버튼 [탭 'TAB1'과 동일한 ID로 탭을 추가하는 경우 3-1] 클릭 시
 */
scwin.btn_exam3_1_onclick = async function (e) {
    // TabControl 'tac_exam3'에 탭 추가하기 - "openAction": "new"
    // 탭 'TAB1'과 동일한 ID로 탭을 추가하는 예시
    let result = await tac_exam3.addTab(
        "tac_exam3_1",
        {
            "label": "TAB_addTab",
            "openAction": "new"
        },
        {
            "src": "/page/P00313S03.xml",
            "wframe": true
        }
    );

    // 로그 출력
    let strLog = "# TabControl 'tac_exam3'의 함수 'addTab'의 반환 값(탭의 ID): \n";
    $c.frame.printExampleLog(strLog + JSON.stringify(result, null, "  "), txa_log_3, false);
    console.log(strLog, result);
};

/**
 * 버튼 [탭 ID가 없는 경우  3-2] 클릭 시
 */
scwin.btn_exam3_2_onclick = async function (e) {
    // TabControl 'tac_exam3'에 탭 추가하기
    // 탭의 ID와 동일한 탭이 없는 예시
    let result = await tac_exam3.addTab(
        "tac_exam3_new",
        {
            "label": "TAB_NEW",
            "openAction": "new",
            "closable": "true"
        },
        {
            "src": "/page/P00313S04.xml",
            "wframe": true
        }
    );

    // 로그 출력
    let strLog = "# TabControl 'tac_exam3'의 함수 'addTab'의 반환 값(탭의 ID): \n";
    $c.frame.printExampleLog(strLog + JSON.stringify(result, null, "  "), txa_log_3, false);
    console.log(strLog);
    console.log(result);
};

/**
 * 버튼 [탭 'TAB1'과 동일한 ID로 탭을 추가하는 경우 4-1] 클릭 시
 */
scwin.btn_exam4_1_onclick = async function (e) {
    // TabControl 'tac_exam4'에 탭 추가하기 - "openAction": "last"
    // 탭 'TAB1'과 동일한 ID로 탭을 추가하는 예시
    let result = await tac_exam4.addTab(
        "tac_exam4_1",
        {
            "label": "TAB_addTab",
            "openAction": "last"
        },
        {
            "src": "/page/P00313S03.xml",
            "wframe": true
        }
    );

    // 로그 출력
    let strLog = "# TabControl 'tac_exam4'의 함수 'addTab'의 반환 값(탭의 ID): \n";
    $c.frame.printExampleLog(strLog + JSON.stringify(result, null, "  "), txa_log_4, false);
    console.log(strLog, result);
};

/**
 * 버튼 [탭 ID가 없는 경우  4-2] 클릭 시
 */
scwin.btn_exam4_2_onclick = async function (e) {
    // TabControl 'tac_exam4'에 탭 추가하기
    // 탭의 ID와 동일한 탭이 없는 예시
    let result = await tac_exam4.addTab(
        "tac_exam4_new",
        {
            "label": "TAB_NEW",
            "openAction": "last",
            "closable": "true"
        },
        {
            "src": "/page/P00313S04.xml",
            "wframe": true
        }
    );

    // 로그 출력
    let strLog = "# TabControl 'tac_exam4'의 함수 'addTab'의 반환 값(탭의 ID): \n";
    $c.frame.printExampleLog(strLog + JSON.stringify(result, null, "  "), txa_log_4, false);
    console.log(strLog);
    console.log(result);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents'},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc'},E:[{T:1,N:'w2:textbox',A:{escape:'false',label:'TabControl의 함수 \'addTab\'의 두 번째 인자 JSON 객체의 \'openAction\' 설정 값 비교 예제입니다.<br/>두 번째 인자는 탭에 관련된 옵션들로 구성되어있습니다.<br/>옵션 \'openAction\'은 함수 \'addTab\'의 첫 번째 인자에 지정한 탭의 ID와 동일한 ID를 가진 탭이 존재하는 경우 탭의 추가 방식을 지정할 수 있습니다.<br/>동일한 ID가 없는 경우에는 탭이 추가됩니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',label:'\'openAction\'의 설정 값에 따른 동작 방식은 다음과 같습니다.<br/>- select : 동일한 ID의 탭을 선택.<br/>- exist : 탭 ID에 해당하는 탭의 src를 바꿔 로딩하고 해당 탭을 선택. (콘텐츠 영역을 \'wframe\' 또는 \'iframe\'으로 구성하지 않은 경우에는 오류가 발생합니다.)<br/>- new : 새로운 탭으로 생성. 동일한 ID가 있는 경우 ID가 변경되어 생성.<br/>- last : 동일한 ID의 탭을 마지막 탭으로 이동시키고 탭을 선택.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'버튼을 클릭하면 \'로그 확인\' 영역과 브라우저 개발자도구의 콘솔에 로그가 출력됩니다.<br/>함수 \'addTab\'의 반환 값을 확인할 수 있습니다.'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap'},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',label:'\'openAction\' 설정 값 : select'}},{T:1,N:'xf:group',A:{class:'example_div_td_style'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'탭 \'TAB1\'과 동일한 ID로 탭을 추가하는 경우 1-1'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_2_onclick',id:'btn_exam1_2',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동일한 ID의 탭이 없는 경우 1-2'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:tabControl',A:{confirmTrueAction:'exist',confirmFalseAction:'new',useTabKeyOnly:'true',useMoveNextTabFocus:'false',useConfirmMessage:'false',alwaysDraw:'false',style:'position: relative;height: 120px;',id:'tac_exam1',class:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:54px;height:30px',id:'tac_exam1_1',label:'TAB1'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:54px;height:30px',id:'tac_exam1_2',label:'TAB2'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'min-height:30px',id:'content1_1',src:'/page/P00313S01.xml',frameMode:'wframe',scope:'true'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'min-height:30px',id:'content1_2',src:'/page/P00313S02.xml',frameMode:'wframePreload',scope:'true'}}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',label:'로그 확인'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',title:'로그 삭제',type:'button',userData1:'txa_log_1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_1',spellcheck:'false',style:'width: 100%;height: 60px;'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',label:'\'openAction\' 설정 값 : exist'}},{T:1,N:'xf:group',A:{class:'example_div_td_style'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'탭 \'TAB1\'과 동일한 ID로 탭을 추가하는 경우 2-1'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam2_2_onclick',id:'btn_exam2_2',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동일한 ID의 탭이 없는 경우 2-2'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tac_exam2',style:'position: relative;height: 120px;',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:54px;height:30px',id:'tac_exam2_1',label:'TAB1'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:54px;height:30px',id:'tac_exam2_2',label:'TAB2'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'min-height:30px',id:'content2_1',src:'/page/P00313S01.xml',frameMode:'wframe',scope:'true'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'min-height:30px',id:'content2_2',src:'/page/P00313S02.xml',frameMode:'wframe',scope:'true'}}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',label:'로그 확인'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',title:'로그 삭제',type:'button',userData1:'txa_log_2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_2',spellcheck:'false',style:'width: 100%;height: 60px;'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',label:'\'openAction\' 설정 값 : new'}},{T:1,N:'xf:group',A:{class:'example_div_td_style'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam3_1_onclick',id:'btn_exam3_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'탭 \'TAB1\'과 동일한 ID로 탭을 추가하는 경우 3-1'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam3_2_onclick',id:'btn_exam3_2',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동일한 ID의 탭이 없는 경우 3-2'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tac_exam3',style:'position: relative;height: 120px;',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:54px;height:30px',id:'tac_exam3_1',label:'TAB1'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:54px;height:30px',id:'tac_exam3_2',label:'TAB2'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'min-height:30px',id:'content3_1',src:'/page/P00313S01.xml',frameMode:'wframe',scope:'true'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'min-height:30px',id:'content3_2',src:'/page/P00313S02.xml',frameMode:'wframe',scope:'true'}}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',label:'로그 확인'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',title:'로그 삭제',type:'button',userData1:'txa_log_3'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_3',spellcheck:'false',style:'width: 100%;height: 60px;'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',label:'\'openAction\' 설정 값 : last'}},{T:1,N:'xf:group',A:{class:'example_div_td_style'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam4_1_onclick',id:'btn_exam4_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'탭 \'TAB1\'과 동일한 ID로 탭을 추가하는 경우 4-1'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam4_2_onclick',id:'btn_exam4_2',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동일한 ID의 탭이 없는 경우 4-2'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tac_exam4',style:'position: relative;height: 120px;',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:54px;height:30px',id:'tac_exam4_1',label:'TAB1'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:54px;height:30px',id:'tac_exam4_2',label:'TAB2'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'min-height:30px',id:'content4_1',src:'/page/P00313S01.xml',frameMode:'wframe',scope:'true'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'min-height:30px',id:'content4_2',src:'/page/P00313S02.xml',frameMode:'wframe',scope:'true'}}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_bold',label:'로그 확인'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',title:'로그 삭제',type:'button',userData1:'txa_log_4'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log_4',spellcheck:'false',style:'width: 100%;height: 60px;'}}]}]}]}]}]}]}]})
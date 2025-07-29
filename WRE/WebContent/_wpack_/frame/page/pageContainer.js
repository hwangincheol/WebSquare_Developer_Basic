/*amd /frame/page/pageContainer.xml 14717 0279f8441f83a77519bcab1ae46969a75729bad2e1aeaeec1900c8d6351ffbd1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_viewSource_data',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:aliasDataList',A:{scope:'/dlt_cssFileList',id:'adl_cssFileList'}}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.gVar = {
    "tabParam": null,  //tabControl parameter
    "path_example": "",
    "jsnMenuData": null,    //menu data
    "_tbx_page_keyword_render": null
};

scwin.onpageload = function () {
    scwin.initPageContainer();
};

scwin.initPageContainer = function () {
    var jsnParam;
    var jsnMenuData;
    var strPath;
    var strExamplePath;
    var strExampleDocumentPath;

    scwin.gVar.tabParam = $p.getParameter("tabParam");

    jsnParam = $p.getParameter("tabParam");

    jsnMenuData = jsnParam["menuData"];

    tbx_pageTitle.setValue(jsnMenuData["TITLE"] || "예제 파일");

    scwin.dispBreadcrumb(jsnMenuData["MENU_BREADCRUMBS"]);

    //화면 요약 미출력
    //scwin.dispPageSummary(jsnMenuData["SUMMARY"]);

    //예제 화면 경로 설정
    strPath = $c.frame.getSrc(jsnMenuData["PATH"]);

    if (strPath.indexOf(".xml") > -1) {
        strExamplePath = strPath;
        udc_exampleViewer.init(jsnMenuData);
    } else {
        strExamplePath = strPath + ".xml";
        udc_exampleViewer.init(jsnMenuData);
    }

    scwin.dispPageKeyword(jsnMenuData["ALL_KEYWORD"], strExamplePath);

    scwin.gVar.path_example = strExamplePath;
    scwin.gVar.jsnMenuData = JSON.parse(JSON.stringify(jsnMenuData));

    strExampleDocumentPath = $c.frame.getExampleDocumentPath(jsnMenuData);

    if (strExampleDocumentPath) {
        let objIframe = document.getElementById(ifm_example_desc.getID());
        objIframe.onload = scwin.ifm_example_desc_onload_handler;

        ifm_example_desc.setSrc(strExampleDocumentPath);

        if (jsnParam && jsnParam.withDoc === "y") {
            cbx_dualView.setValue("Y");
        }
    } else {
        btn_example_tabbutton_desc.remove(true);
        ifm_example_desc.remove();
        cbx_dualView.remove(true);
        grp_etc_tabbutton.hide();
        grp_examplebox.addClass("single");
    }
};

/**
 * 설명부 iframe onload 이벤트 핸들러
*/
scwin.ifm_example_desc_onload = function (e) {
    window.setTimeout(scwin.ifm_example_desc_onload_handler, 100);
};

/**
 * 설명부 iframe onload 이벤트 핸들러
*/
scwin.ifm_example_desc_onload_handler = function (e) {
    var objWin;
    var eleContent;
    var strSrc;
    var i, i_max, item;
    var objLink;
    var strIframeHref;

    strSrc = ifm_example_desc.getSrc();

    //오프라인 가이드인 경우만 컨텐츠 제어.
    if (strSrc.indexOf(EXA_CONTEXT_PATH) != 0) {
        ifm_example_desc.setUserData("ex_recount", 0);
        return;
    }

    objWin = ifm_example_desc.getWindow();

    //2022.06.15 간헐적으로 html 컨텐츠가 표현되지 않는 현상이 발생. 관련 보완 로직.
    strIframeHref = objWin.location.href;
    if (strIframeHref == "about:blank" && ifm_example_desc.render.src != strIframeHref) {
        let num_ex_recount = +ifm_example_desc.getUserData("ex_recount") || 0;

        // console.log("==ifm_example_desc.render.src != objWin.location.href==>>>" + num_ex_recount);

        if (num_ex_recount < 5) {
            ifm_example_desc.setUserData("ex_recount", num_ex_recount++);
            ifm_example_desc.setSrc(strSrc);
        }

        return;
    } else {
        ifm_example_desc.setUserData("ex_recount", 0);
    }

    //css 추가
    objLink = document.createElement('link');
    objLink.rel = 'stylesheet';
    objLink.type = 'text/css';
    objLink.href = $c.frame.getSrc('/frame/css/ws5_example_doc.css') + "?" + EXA_VER_WS5_EXAMPLE_DOC_CSS;

    objWin.document.getElementsByTagName('head')[0].appendChild(objLink);

    eleContent = objWin.document.body.firstChild;

    if (!eleContent || !eleContent.classList) {
        // console.log("====(!eleContent || !eleContent.classList)=========================");
        // console.log(eleContent);
    } else {
        eleContent.classList.add('example_desc');

        // 2022.06.15 외부 링크 새창으로 열기. 3rabbitz에서 target 속성을 지원하지 않음.
        // 2023.09 css 직접 제어로 스크립트 제거
        let _flag_202309 = false;
        if (_flag_202309) {
            let arrAnchor = objWin.document.getElementsByTagName('a') || [];
            let regExp_class = new RegExp("link|reference");
            for (i = 0, i_max = arrAnchor.length; i < i_max; i++) {
                item = arrAnchor[i];
                let ele_className = item.className || "";
                if (regExp_class.test(ele_className)) {
                    item.target = "_blank";
                }
            }
        }

        // 2023.06.30 스크롤 문제로 임시 기능 삭제
        let _flag_20230630 = false;
        if (_flag_20230630) {
            //2022.06.15 컨텐츠 목차 추가
            let domDocContext = document.createElement("div");
            domDocContext.setAttribute("id", "ws_doc_context");
            domDocContext.setAttribute("class", "doc_context");
            domDocContext.innerHTML = scwin.getHTML_docContext(objWin.document.getElementsByTagName('h1'));
            objWin.document.body.insertBefore(domDocContext, objWin.document.body.firstChild);
        }
    }

    // 별도의 css 반영으로 인해 컨텐츠가 조정되는 것을 덜 노출 시키기 위한 처리
    $p.setTimeout(function () { ifm_example_desc.setStyle("visibility", "visible"); }, { delay: 100 });

};

scwin.getHTML_docContext = function (argArrElement) {
    var i, i_max, item;
    var rerunValue;
    var strPrefix, strPostfix;
    var strList = "";

    strPrefix = '<details><summary>목차</summary><ul>';
    strPostfix = '</ul></details>';

    for (i = 0, i_max = argArrElement.length; i < i_max; i++) {
        item = argArrElement[i];
        if (item.className.indexOf('chapter_title') > -1) {
            continue;
        }
        //strList += '<li class="doc_title">' + item.textContent + '</li>';
        strList += '<li class="doc_title"><a href="#' + item.id + '">' + item.getInnerHTML() + '</a></li>';
    }

    rerunValue = strPrefix + strList + strPostfix;

    return rerunValue;
};

//화면 요약 출력
scwin.dispPageSummary = function (argStr) {
    if (!argStr) {
        return;
    }
    tbx_page_summary.setValue(argStr);
    grp_page_summary.removeClass("hide");
};

//메뉴 키워드 출력
scwin.dispPageKeyword = function (argStr, argExamPath) {
    var strTagStart = '<span>';
    var strTagEnd = '</span>';
    var strKeyword;
    //tbx_page_keyword.setValue(strTagStart + argStr.replace(new RegExp("\|","g"), strTagEnd + strTagStart) + strTagEnd);

    if (!argStr) {
        strKeyword = "";
    } else {
        strKeyword = strTagStart + argStr.split("|").join(strTagEnd + strTagStart) + strTagEnd;
    }

    tbx_page_keyword.setValue(strTagStart + argExamPath.replace(EXA_CONTEXT_PATH, "") + strTagEnd + strKeyword);
    grp_page_keyword.removeClass("hide");
    scwin.gVar._tbx_page_keyword_render = tbx_page_keyword.render;
};

//메뉴 경로 출력
scwin.dispBreadcrumb = function (argStr) {
    var strTmp;
    var arrTmp;
    var i, i_max, i_item;
    var compGen, compTmp;

    arrTmp = argStr.split("%||%");

    //group class : home

    compGen = gen_breadcrumb;

    for (i = 0, i_max = arrTmp.length; i < i_max; i++) {
        i_item = arrTmp[i];

        compGen.insertChild(i);
        compTmp = compGen.getChild(i, "lbl_breadcrumb");

        compTmp.setValue(i_item);
    }

};

//예제 실행 파일 경로 반환
scwin.getExamplePath = function () {
    return scwin.gVar.path_example;
};

// 예제 실행 경로 반환 - MAIN 화면과 함께 실행
scwin.getExampleLink = function (argWithHost) {
    return $c.frame.getLinkURL(true, scwin.getExamplePath());
};

//[예제 바로 보기 링크 복사] 버튼 클릭 - 예제 바로 보기 링크 복사
scwin.btn_copyLink_example_onclick = function (e) {
    var strURL = scwin.getExampleLink(true);
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(strURL).then(() => {
            $c.frame.alert($p, "예제 파일 경로가 복사되었습니다.");
        });
    } else {
        let eleTmp = $("#hidden_clipboard_input:first")[0];

        eleTmp.value = strURL;
        eleTmp.focus();
        eleTmp.select();
        document.execCommand("copy");
        $c.frame.alert($p, "예제 파일 경로가 복사되었습니다.");
    }
};

//예제 파일 다운로드 버튼 클릭
scwin.btn_download_example_onclick = function (e) {
    $c.frame.downloadSource(scwin.getExamplePath(), true);
};

//화면 새로 고침
scwin.btn_reloadPageContainer_onclick = function (e) {
    $p.reinitialize();
};

//예제 설명 wframe 로딩 후
scwin.wfm_example_onwframeload = function () {
    //this.getWindow().scwin._descInit(scwin.getMenuData());
};

//메뉴 데이터 반환.
scwin.getMenuData = function () {
    return scwin.gVar.tabParam.menuData;
};

scwin.change_exampleTab = function () {
    var strTarget;
    var cmpParent;

    strTarget = this.getUserData("userData1");

    cmpParent = this.getParent();

    cmpParent.removeClass("exam");
    cmpParent.removeClass("desc");
    cmpParent.addClass(strTarget);
};

//[같이 보기]
scwin.cbx_dualView_onchange = function (info) {
    if (info.newValue == "Y") {
        grp_examplebox.addClass("dual_view");
        btn_example_tabbutton_exam.setDisabled(true);
        btn_example_tabbutton_desc.setDisabled(true);
    } else {
        grp_examplebox.removeClass("dual_view");
        btn_example_tabbutton_exam.setDisabled(false);
        btn_example_tabbutton_desc.setDisabled(false);
    }
};

scwin.btn_popup_example_onclick = function (e) {
    let strLink = $c.frame.getBasePageURL(true) + "#w2xPath=" + scwin.getExamplePath();
    window.open(strLink, "_blank");
};

btn_move_category_onclick = function () {
    var _tbx_page_keyword_render = scwin.gVar._tbx_page_keyword_render;

    if (!_tbx_page_keyword_render) { return; }

    switch (this.getUserData("userData1")) {
        case "left":
            _tbx_page_keyword_render.scrollBy({ left: -100, behavior: 'smooth' });
            break;
        case "right":
            _tbx_page_keyword_render.scrollBy({ left: 100, behavior: 'smooth' });
            break;
        default:
            break;
    }

};
}}}]},{T:1,N:'w2:require',A:{as:'udc_example_viewer',type:'page',variableClone:'true',src:'/frame/udc/example_viewer.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents exam_subbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_breadcrumb',id:'',style:''},E:[{T:1,N:'w2:generator',A:{class:'',id:'gen_breadcrumb',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'',id:'grp_breadcrumb',style:'',tagname:'li'},E:[{T:1,N:'w2:span',A:{id:'lbl_breadcrumb',label:'분류',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'pgtbox mb_def',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'tbx_pageTitle',label:'화면타이틀',style:'margin-right:24px',tagname:''}},{T:1,N:'xf:group',A:{id:'',style:'display: inline-block',class:'pgt_titbtn'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_reloadPageContainer_onclick',style:'',id:'btn_reloadPageContainer',type:'button',title:'화면 새로 고침',class:'btn_cm reload'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_popup_example_onclick',style:'',id:'btn_popup_example',type:'button',class:'btn_cm single'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예제 단독 실행'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_copyLink_example_onclick',style:'',id:'btn_copyLink_example',type:'button',class:'btn_cm copy'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예제 링크 복사'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'grp_page_keyword',class:'com_example_grp_page_keyword dbbox hide'},E:[{T:1,N:'w2:anchor',A:{class:'btn_move_left','ev:onclick':'btn_move_category_onclick',id:'',outerDiv:'false',userData1:'left',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'〈'}]}]},{T:1,N:'w2:textbox',A:{id:'tbx_page_keyword',label:'화면 요약',style:'',escape:'false',class:'com_example_grp_keyword'}},{T:1,N:'w2:anchor',A:{class:'btn_move_right','ev:onclick':'btn_move_category_onclick',id:'',outerDiv:'false',userData1:'right',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'〉'}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'grp_page_summary',class:'dfbox hide mt_def'},E:[{T:1,N:'w2:textbox',A:{id:'tbx_page_summary',label:'',style:''}}]},{T:1,N:'xf:group',A:{style:'',id:'grp_examplebox',class:'exam_examplebox dual_view'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tabbutton exam ofh mt_def'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'',id:'btn_example_tabbutton_exam',class:'exam_example_tabbutton exam fl',userData1:'exam','ev:onclick':'scwin.change_exampleTab',disabled:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행된 예제'}]}]},{T:1,N:'xf:trigger',A:{class:'exam_example_tabbutton desc fl',id:'btn_example_tabbutton_desc',style:'',type:'button',userData1:'desc','ev:onclick':'scwin.change_exampleTab',disabled:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예제 가이드'}]}]},{T:1,N:'xf:group',A:{id:'grp_etc_tabbutton',class:'fl etc_tabbutton'},E:[{T:1,N:'xf:select',A:{appearance:'full','ev:onchange':'scwin.cbx_dualView_onchange',id:'cbx_dualView',selectedindex:'0',renderType:'checkboxgroup'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예제와 가이드 함께 보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'exam_examplebox_contents'},E:[{T:1,N:'xf:group',A:{id:'',class:'frame_exam scrollbar'},E:[{T:1,N:'w2:udc_example_viewer',A:{style:'',id:'udc_exampleViewer',class:'udc_exampleViewer_wrap'}}]},{T:1,N:'w2:iframe',A:{src:'',style:'visibility: hidden;',id:'ifm_example_desc',class:'frame_desc',spa:'false'}}]}]}]}]}]}]})
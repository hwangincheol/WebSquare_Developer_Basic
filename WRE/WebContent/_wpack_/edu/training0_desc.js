/*amd /edu/training0_desc.xml 13567 6db7d884b4a8f7a588d3a4cfff5f2a354fb579dbb1cbbe0410310d4db38464a2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/edu/css/edu.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}},{T:1,N:'w2:history',A:{}},{T:1,N:'w2:history',A:{}},{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',A:{palette:'support'},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() { 
	
};
		

scwin.anc_icon1_onclick = function(e) {  
	 var rowJSON = {
		//"pdfNm": "/edu/docs/WebSquare5개발자교육커리큘럼.pdf#page=2",
		"pdfNm": "/edu/docs/WebSquare5_developer_curiculum.pdf#page=2",
		"title": "WebSquare5개발자교육커리큘럼",
		"label": "교육 상세 시간표" 
	};

	 scwin.openPopup(rowJSON, false, "wframePopup");
};

scwin.anc_icon2_onclick = function(e) {

	 var rowJSON = {
		//"pdfNm": "/edu/docs/WebSquare5개발자교육이론_SP5.pdf#page=1",
		"pdfNm": "/edu/docs/WebSquare5_developer_basic_SP5.pdf#page=1",
		"title": "WebSquare5개발자교육이론_SP5" ,
		"label": "웹스퀘어5 기본이론" 
	};

	 scwin.openPopup(rowJSON, false, "wframePopup");
};

scwin.anc_icon3_onclick = function(e) {

	 var rowJSON = {
		//"pdfNm": "/edu/docs/WebSquare5심화교육이론.pdf#page=1",
		"pdfNm": "/edu/docs/WebSquare5_developer_advanced.pdf#page=1",
		"title": "WebSquare5심화교육이론" ,
		"label": "웹스퀘어5 심화이론" 
	};

	 scwin.openPopup(rowJSON, false, "wframePopup");
};

scwin.openPopup = function(rowJSON, useIFrameMode, openType) {
    //dataObject{ dataType: ["xml","string","json","array"], data: "전달 데이터" , name :"변수명"}
    var _width = "850px";
    var _height = "850px";
    
    if(useIFrameMode == false){
        _width = "850px";
        _height = "850px";
    }
    
    var dataObj = {
        type : "json",
        data : rowJSON,
        name : "rowObj"
    };

    var options = {
        id : "popup1",
        //popupUrl : "popup.html",
        type : openType,

        width : _width,
        height : _height,

        top : 130,
        left : 250,

        popupName : rowJSON.title,
        modal : true,
        useIFrame : useIFrameMode,

        resizable : true,
        status : true,
        menubar : false,
        scrollbars : false,
        title : false,

        dataObject : dataObj
    };

    //모바일에서의 크기,위치 조절을 위해 공통 함수 사용하였습니다. 기본 옵션은 최초 선언된 options를 참고하시기 바랍니다.
    options.left = "auto";
    options = $c.frame.getPopupPosition(options); 

    $p.openPopup("/edu/training0_pdf.xml", options);
};

scwin.txt_desc_onclick = function(e) {

	
	 var _page ="";
	 var _label = "";

	_page = this.getUserData("userData1"); 
	_label = this.getUserData("userData2"); 

	 var rowJSON = {
		//"pdfNm": "/edu/docs/WebSquare5개발자교육이론_SP5.pdf#page="+ _page,
		"pdfNm": "/edu/docs/WebSquare5_developer_basic_SP5.pdf#page="+ _page,
		"title": "WebSquare5개발자교육이론" ,
		"label": _label  
	};

	 scwin.openPopup(rowJSON, false, "wframePopup");
};
 
 
 
scwin.txt_link_onclick = function(e) {

	var _url = "";
	var _path= "";  
	_path = this.getUserData("userData1"); 
    _url =  $c.frame.getBasePageURL(true)+"#w2xPath="+_path; 
	window.open(_url, "_blank");
};
  

scwin.textbox_link_onclick = function(e) {
 
	var strPage;
    var jsnMenu;
    var _main;
 
	strPage = this.getUserData("userData1"); 
 
	 
    _main = $p.main();   
	switch (typeof _main.scwin.menu) { 
		case "object": 
			
			jsnMenu = _main.scwin.menu.getMenuByPage(strPage);
			if (jsnMenu && jsnMenu.ID) {
				_main.scwin.dispPage(jsnMenu, true);
			}

			break;
		default:
			var _url = ""; 
			_url =  $c.frame.getBasePageURL(true)+"#w2xPath="+strPage; 
			
			window.open(_url, "_blank");
			break;

	} 
}; 

scwin.btn_play1_onclick = function (e) {
	// 1교시 동영상 
	window.open("https://www.youtube.com/watch?v=KEPuK3erXWM&list=PL7a9HhkvOVb09T_2Xdxs4sPgyDjkGlT9G&index=1");
};

scwin.btn_play2_onclick = function (e) {
	// 2교시 동영상 
	window.open("https://www.youtube.com/watch?v=BIgFry-z39Y&list=PL7a9HhkvOVb09T_2Xdxs4sPgyDjkGlT9G&index=2");
};

scwin.btn_play3_onclick = function (e) {
	// 3교시 동영상 
	window.open("https://www.youtube.com/watch?v=1hK9ZEUCp-Q&list=PL7a9HhkvOVb09T_2Xdxs4sPgyDjkGlT9G&index=3");
};

scwin.btn_play4_onclick = function (e) {
	// 4교시 동영상 
	window.open("https://www.youtube.com/watch?v=pkAo2GguTlQ&list=PL7a9HhkvOVb09T_2Xdxs4sPgyDjkGlT9G&index=4");
};

scwin.btn_play5_onclick = function (e) {
	// 5교시 동영상 
	window.open("https://www.youtube.com/watch?v=NT7g9qWaHG0&list=PL7a9HhkvOVb09T_2Xdxs4sPgyDjkGlT9G&index=5&t=1361s");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'padding: 10px;',id:'',class:''}},{T:1,N:'xf:group',A:{class:'intro',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'int_top',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'bg_wrap',id:''},E:[{T:1,N:'w2:textbox',A:{class:'txt_big',escape:'false',id:'',label:'WebSquare5 개발자 교육',style:''}},{T:1,N:'w2:textbox',A:{class:'txt_small server',escape:'false',id:'',label:'HTML, CSS, JavaScript 등 기본적인 웹 지식을 가지고 있으며 <br/>다만 WebSquare5 제품을 처음 접하는 개발자 대상의 커리큘럼',style:''}},{T:1,N:'xf:group',A:{class:'ban_box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'anc_banner ico3',id:'anc_icon1',style:'',tagname:'a','ev:onclick':'scwin.anc_icon1_onclick'},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'개발자 교육 <br/> &nbsp; 커리큘럼',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'바로열기',style:'',tagname:'span',userData1:''}}]},{T:1,N:'xf:group',A:{class:'anc_banner ico2',id:'anc_icon2',style:'',tagname:'a','ev:onclick':'scwin.anc_icon2_onclick'},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'개발자 교육<br/> &nbsp;이론문서',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'바로열기',style:'',tagname:'span',userData1:''}}]},{T:1,N:'xf:group',A:{class:'anc_banner ico2',id:'anc_icon3',style:'',tagname:'a','ev:onclick':'scwin.anc_icon3_onclick'},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'개발자 교육<br/>심화문서',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'바로열기',style:'',tagname:'span',userData1:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'int_mid',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ins_box',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt_ins_big tac',id:'',label:'커리큘럼',style:''}}]},{T:1,N:'xf:group',A:{class:'prj_list',id:'',style:'',tagname:'ol'},E:[{T:1,N:'xf:group',A:{id:'',style:'overflow: hidden;',tagname:'li'},E:[{T:1,N:'xf:group',A:{id:'',class:'txt_content',style:'float:left;clear:none;'},E:[{T:1,N:'w2:textbox',A:{'ev:onclick':'scwin.txt_desc_onclick',style:'cursor: pointer;',id:'txt_desc1',label:'교육자료 소개, WebSquare5 소개',class:'txt_prj_big',userData1:'5',userData2:'WebSquare5 소개'}},{T:1,N:'w2:textbox',A:{'ev:onclick':'scwin.txt_desc_onclick',style:'cursor: pointer;',id:'txt_desc2',label:'WebSquare5 Studio 설명',class:'txt_prj_big',userData1:'27',userData2:'WebSquare5 Studio 설명'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'width:30px;height: 30px;float:left;clear:none;margin-left: 10px;'},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false',id:'btn_play1',style:'',class:'edu_video','ev:onclick':'scwin.btn_play1_onclick'},E:[{T:1,N:'xf:label'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'overflow: hidden;',tagname:'li'},E:[{T:1,N:'xf:group',A:{id:'',class:'txt_content',style:'float:left;clear:none;'},E:[{T:1,N:'w2:textbox',A:{'ev:onclick':'scwin.txt_desc_onclick',style:'cursor: pointer;',id:'txt_desc3',label:'컴포넌트 기본 사용방법',class:'txt_prj_big',userData2:'컴포넌트 기본 사용방법',userData1:'40'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'width:30px;height: 30px;float:left;clear:none;margin-left: 10px;'},E:[{T:1,N:'w2:anchor',A:{class:'edu_video','ev:onclick':'scwin.btn_play2_onclick',id:'btn_play2',outerDiv:'false',style:''},E:[{T:1,N:'xf:label'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'overflow: hidden;',tagname:'li'},E:[{T:1,N:'xf:group',A:{id:'',class:'txt_content',style:'float:left;clear:none;'},E:[{T:1,N:'w2:textbox',A:{class:'txt_prj_big','ev:onclick':'scwin.txt_desc_onclick',id:'textbox13',label:'CSS 적용방법',style:'cursor: pointer;',userData1:'44',userData2:'컴포넌트 기본 사용방법'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'width:30px;height: 30px;float:left;clear:none;margin-left: 10px;'},E:[{T:1,N:'w2:anchor',A:{class:'edu_video','ev:onclick':'scwin.btn_play3_onclick',id:'btn_play3',outerDiv:'false',style:''},E:[{T:1,N:'xf:label'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'overflow: hidden;',tagname:'li'},E:[{T:1,N:'xf:group',A:{id:'',class:'txt_content',style:'float:left;clear:none;'},E:[{T:1,N:'w2:textbox',A:{'ev:onclick':'scwin.txt_link_onclick',style:'cursor: pointer;',id:'txt_desc7',label:'[시연] 목록성 컴포넌트 사용 방법',class:'txt_prj_big',userData1:'/edu/training1_dataMap.xml'}},{T:1,N:'w2:textbox',A:{'ev:onclick':'scwin.txt_desc_onclick',style:'cursor: pointer;',id:'txt_desc8',label:'[실습] DataCollection 과 Submission 처리 방법',class:'txt_prj_big',userData1:'74',userData2:'디버깅 방법'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'width:30px;height: 30px;float:left;clear:none;margin-left: 10px;'},E:[{T:1,N:'w2:anchor',A:{class:'edu_video','ev:onclick':'scwin.btn_play4_onclick',id:'btn_play4',outerDiv:'false',style:''},E:[{T:1,N:'xf:label'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'overflow: hidden;',tagname:'li'},E:[{T:1,N:'xf:group',A:{id:'',class:'txt_content',style:'float:left;clear:none;'},E:[{T:1,N:'w2:textbox',A:{'ev:onclick':'scwin.txt_link_onclick',style:'cursor: pointer;',id:'txt_desc9',label:'[시연] DataCollection 과 gridView 연동',class:'txt_prj_big',userData1:'/edu/training1_gridView.xml'}},{T:1,N:'w2:textbox',A:{'ev:onclick':'scwin.txt_desc_onclick',style:'cursor: pointer;',id:'txt_desc10',label:'(gridView편집,속성,이벤트,API)',class:'txt_prj_big',userData1:'67',userData2:'DataCollection 과 gridView 연동'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'width:30px;height: 30px;float:left;clear:none;margin-left: 10px;'},E:[{T:1,N:'w2:anchor',A:{class:'edu_video','ev:onclick':'scwin.btn_play5_onclick',id:'btn_play5',outerDiv:'false',style:''},E:[{T:1,N:'xf:label'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'xf:group',A:{id:'',class:'txt_content'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'details'},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'자주 묻는 질문',style:'cursor: pointer;',tagname:'summary',class:'txt_prj_big'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'textbox_link1',label:'1. JSON 관련 기본 API',style:'cursor: pointer;',userData1:'/page/P00036.xml','ev:onclick':'scwin.textbox_link_onclick'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'textbox_link2',label:'2. [GridView] 관련',style:''}},{T:1,N:'w2:textbox',A:{class:'',escape:'false','ev:onclick':'scwin.textbox_link_onclick',id:'textbox3',label:'2-1. 컨텍스트 메뉴 사용 설정하기',style:'cursor: pointer;',userData1:'/page/P00169.xml'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false','ev:onclick':'scwin.textbox_link_onclick',id:'textbox7',label:'2-2. Groupby 기능 적용하기',style:'cursor: pointer;',userData1:'/page/P00194.xml'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false','ev:onclick':'scwin.textbox_link_onclick',id:'textbox8',label:'2-3. scrollEnd 기능을 사용한 데이터 추가하기',style:'cursor: pointer;',userData1:'/page/P00054.xml'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false','ev:onclick':'scwin.textbox_link_onclick',id:'textbox12',label:'2-4.GridView Style 개인화 하기',style:'cursor: pointer;',userData1:'/page/P00198.xml'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false','ev:onclick':'scwin.textbox_link_onclick',id:'textbox6',label:'2-5.컬럼 동적 변경',style:'cursor: pointer;',userData1:'/page/P00014.xml'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false','ev:onclick':'scwin.textbox_link_onclick',id:'textbox4',label:'3.특이기능',style:''}},{T:1,N:'w2:textbox',A:{class:'',escape:'false','ev:onclick':'scwin.textbox_link_onclick',id:'textbox5',label:'3-1.Pivot',style:'cursor: pointer;',userData1:'/page/P00139.xml'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false','ev:onclick':'scwin.textbox_link_onclick',id:'textbox10',label:'3-2.Fusion 차트',style:'cursor: pointer;',userData1:'/page/P00017.xml'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false','ev:onclick':'scwin.textbox_link_onclick',id:'textbox11',label:'3-3.위젯 컨테이너',style:'cursor: pointer;',userData1:'/page/P00007.xml'}}]},{T:1,N:'w2:textbox',A:{style:'cursor: pointer;',id:'txt_desc12',label:'Q&A',class:'txt_prj_big'}}]}]}]}]}]}]}]}]})
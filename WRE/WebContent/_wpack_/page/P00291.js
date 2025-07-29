/*amd /page/P00291.xml 2752 fe06e2d928d2336d681c304886c1c3f815e24529a7fbd72710c5942c271069e6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}},{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    // PageControl 'pgc_exam'의 선택 값을 3으로 지정합니다.
    pgc_exam.setSelectedIndex(3);
};

/**
 * 버튼 [총 페이지 수를 8로 설정하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // PageControl 'pgc_exam'의 총 페이지 수를 8로 설정합니다.
    pgc_exam.setCount(8);
};

/**
 * 버튼 [총 페이지 수를 5로 설정하기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // PageControl 'pgc_exam'의 총 페이지 수를 5로 설정합니다.
    pgc_exam.setCount(5);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'PageControl의 총 페이지수를 설정하는 함수 \'setCount\'의 예시입니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{id:'btn_exam1_1',style:'',type:'button',class:'btn_exam_exec','ev:onclick':'scwin.btn_exam1_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'총 페이지 수를 8로 설정하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',id:'btn_exam1_2',style:'',type:'button','ev:onclick':'scwin.btn_exam1_2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'총 페이지 수를 5로 설정하기'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'',style:''},E:[{T:1,N:'w2:pageControl',A:{style:'width: 150px;height: 30px;',id:'pgc_exam'}}]}]}]}]}]}]}]}]})
/*amd /page/P00200.xml 6662 566de3083355ac81747c0348bb2d288d1bc635ca806ed084557983f00a0a8aa0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    scwin.setDataList();
};

/**
 * DataList에 데이터 할당
 */
scwin.setDataList = function () {
    var arrData = [
        { "label": "공정하다는 착각", "categoryLabel": "인문" },
        { "label": "기분을 관리하면 인생이 관리된다", "categoryLabel": "시/에세이" },
        { "label": "내가 틀릴 수도 있습니다", "categoryLabel": "인문" },
        { "label": "너무 잘하려고 애쓰지 마라", "categoryLabel": "시/에세이" },
        { "label": "모든 사람에게 좋은 사람일 필요는 없어", "categoryLabel": "시/에세이" },
        { "label": "무엇이 옳은가", "categoryLabel": "인문" },
        { "label": "문명의 붕괴(Collapse)", "categoryLabel": "역사/문화" },
        { "label": "미움받을 용기", "categoryLabel": "인문" },
        { "label": "불편한 편의점", "categoryLabel": "소설" },
        { "label": "선을 넘지 않는 사람이 성공한다", "categoryLabel": "자기계발" },
        { "label": "우리는 여전히 삶을 사랑하는가", "categoryLabel": "인문" },
        { "label": "작별인사", "categoryLabel": "소설" },
        { "label": "잘했고 잘하고 있고 잘 될 것이다", "categoryLabel": "시/에세이" },
        { "label": "저만치 혼자서", "categoryLabel": "소설" },
        { "label": "책들의 부엌", "categoryLabel": "소설" }
    ];

    dlt_books.setJSON(arrData);
};

/**
 * 버튼 [상단 1번째 행까지 고정하기] 클릭 시
 */
scwin.btn_ex1_1_onclick = function (e) {
    //GridView 'grd_exam2'의 상단 1번째 행까지 고정하기
    grd_exam2.setFixedRow(1);
};

/**
 * 버튼 [행 고정 모두 해제하기] 클릭 시
 */
scwin.btn_ex1_2_onclick = function (e) {
    //GridView 'grd_exam2'의 행 고정 해제하기
    grd_exam2.setFixedRow(0);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 행 고정 기능 예제입니다.<br/>이 기능은 아래의 속성과 함수로 사용할 수 있습니다.<br/>- fixedRow : (속성) 행 고정<br/>- setFixedRow : (함수) 행 고정',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'행 고정 적용 - 속성',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'상단 2번째 행이 고정되어 있습니다.',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'250',class:'gvw',dataList:'data:dlt_books',defaultCellHeight:'26',id:'',rowNumVisible:'true',rowNumWidth:'26',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true',fixedRow:'2'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'분류',width:'64'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',sortable:'true',value:'도서명',width:'180'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',value:'',width:'64'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'180'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'행 고정 적용 - 스크립트',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'아래의 버튼을 클릭하여 고정된 행을 확인합니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_1_onclick',id:'btn_ex1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상단 1번째 행까지 고정하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_2_onclick',id:'btn_ex1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행 고정 모두 해제하기'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'250',class:'gvw',dataList:'data:dlt_books',defaultCellHeight:'26',id:'grd_exam2',rowNumVisible:'true',rowNumWidth:'26',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'분류',width:'64'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',sortable:'true',value:'도서명',width:'180'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',value:'',width:'64'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'180'}}]}]}]}]}]}]}]}]}]}]})
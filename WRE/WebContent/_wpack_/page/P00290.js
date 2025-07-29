/*amd /page/P00290.xml 5527 8a275e434cfb5e15cc2174ac92ae89368fb3718431cff7e53a6a1529eb3e610e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}},{T:1,N:'w2:column',A:{id:'price',name:'정가',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    // DataList 'dlt_books_1'에 데이터 할당하기
    let data = [
        { "label": "공정하다는 착각", "price": "18000" },
        { "label": "기분을 관리하면 인생이 관리된다", "price": "17600" },
        { "label": "내가 틀릴 수도 있습니다", "price": "16000" },
        { "label": "우리는 여전히 삶을 사랑하는가", "price": "15800" },
        { "label": "저만치 혼자서", "price": "15000" },
        { "label": "무엇이 옳은가", "price": "17800" },
        { "label": "불편한 편의점", "price": "14000" },
        { "label": "잘했고 잘하고 있고 잘 될 것이다", "price": "15000" },
        { "label": "책들의 부엌", "price": "14500" }
    ];
    dlt_books_1.setJSON(data);
};

/**
 * 버튼 [GridView에 출력된 데이터 반환받기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // GridView 'grd_exam'에 출력된 컬럼 '정가'의 2번째 행의 데이터를 반환받습니다.
    let result = grd_exam.getCellDisplayData(1, "price");

    alert("getCellDisplayData : " + result);
    console.log("getCellDisplayData : ", result);
};

/**
 * 버튼 [GridView와 연결된 DataList의 데이터 반환받기] 클릭 시
 */
scwin.btn_exam1_2_onclick = function (e) {
    // 예시 1) GridView에 연결된 DataList의 Id를 알고 있는 경우
    // let result = dlt_books_1.getCellData(1, "price");

    // 예시 2) GridView에 연결된 DataList를 알수 없는 경우
    // GridView 'grd_exam'에 연결된 DataList 객체를 반환받습니다.
    let _dataList = $p.getComponentById(grd_exam.getDataList());

    // GridView와 연결된 DataList의 컬럼 '정가'의 2번째 행의 데이터를 반환받습니다.
    let result = _dataList.getCellData(1, "price");

    alert("getCellData : " + result);
    console.log("getCellData : ", result);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 셀의 데이터를 반환받는 예제입니다.<br/>이 예제는 GridView의 함수 \'getCellDisplayData\'와 DataList의 함수 \'getCellData\'를 사용하였습니다.<br/>각 함수의 기능은 다음과 같습니다.<br/>- [GridView] getCellDisplayData: GridView에 출력된 데이터를 반환합니다.<br/>- [DataList] getCellData: DataList에 할당된 데이터를 반환합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'컬럼 \'정가\'의 2번째 행의 데이터 반환받기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{id:'btn_exam1_1',style:'',type:'button',class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'GridView에 출력된 데이터 반환받기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',id:'btn_exam1_2',style:'',type:'button','ev:onclick':'scwin.btn_exam1_2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'GridView와 연결된 DataList의 데이터 반환받기'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'mb_def_box nobottom',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'170',class:'gvw',dataList:'data:dlt_books_1',defaultCellHeight:'26',id:'grd_exam',initFixedHeightByRowNum:'4',readOnly:'true',rowNumWidth:'26',style:'height:60px;',tooltipDisplay:'true',visibleRowNum:'4',rowNumVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'정가',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'price',inputType:'text',width:'70',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'100'}}]}]}]}]}]}]}]}]}]}]}]})
/*amd /page/P00350.xml 10386 4e028f3babdcc8eb5cff9933a0f9278afee6015345caf90f56da777eca936bfb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}},{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_exam1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col_a',name:'A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col_b',name:'B',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col_c',name:'C',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col_d',name:'D',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col_e',name:'E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col_f',name:'F',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col_a',E:[{T:4,cdata:'0,0'}]},{T:1,N:'col_b',E:[{T:4,cdata:'0,1'}]},{T:1,N:'col_c',E:[{T:4,cdata:'0,2'}]},{T:1,N:'col_d',E:[{T:4,cdata:'0,3'}]},{T:1,N:'col_e',E:[{T:4,cdata:'0,4'}]},{T:1,N:'col_f',E:[{T:4,cdata:'0,5'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col_a',E:[{T:4,cdata:'1,0'}]},{T:1,N:'col_b',E:[{T:4,cdata:'1,1'}]},{T:1,N:'col_c',E:[{T:4,cdata:'1,2'}]},{T:1,N:'col_d',E:[{T:4,cdata:'1,3'}]},{T:1,N:'col_e',E:[{T:4,cdata:'1,4'}]},{T:1,N:'col_f',E:[{T:4,cdata:'1,5'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col_a',E:[{T:4,cdata:'2,0'}]},{T:1,N:'col_b',E:[{T:4,cdata:'2,1'}]},{T:1,N:'col_c',E:[{T:4,cdata:'2,2'}]},{T:1,N:'col_d',E:[{T:4,cdata:'2,3'}]},{T:1,N:'col_e',E:[{T:4,cdata:'2,4'}]},{T:1,N:'col_f',E:[{T:4,cdata:'2,5'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col_a',E:[{T:4,cdata:'3,0'}]},{T:1,N:'col_b',E:[{T:4,cdata:'3,1'}]},{T:1,N:'col_c',E:[{T:4,cdata:'3,2'}]},{T:1,N:'col_d',E:[{T:4,cdata:'3,3'}]},{T:1,N:'col_e',E:[{T:4,cdata:'3,4'}]},{T:1,N:'col_f',E:[{T:4,cdata:'3,5'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    // 예제 테스트를 위해 병합할 셀의 배경색 설정
    grd_exam1.setCellBackgroundColor(0, 0, "mistyrose");
    grd_exam1.setCellBackgroundColor(0, 1, "mistyrose");
    grd_exam1.setCellBackgroundColor(1, 0, "mistyrose");
    grd_exam1.setCellBackgroundColor(1, 1, "mistyrose");

    grd_exam1.setCellBackgroundColor(1, 2, "lemonchiffon");
    grd_exam1.setCellBackgroundColor(2, 2, "lemonchiffon");
    grd_exam1.setCellBackgroundColor(3, 2, "lemonchiffon");

    grd_exam1.setCellBackgroundColor(2, 3, "powderblue");
    grd_exam1.setCellBackgroundColor(2, 4, "powderblue");
    grd_exam1.setCellBackgroundColor(2, 5, "powderblue");

    grd_exam2.setCellBackgroundColor(0, 0, "mistyrose");
    grd_exam2.setCellBackgroundColor(0, 1, "mistyrose");
    grd_exam2.setCellBackgroundColor(1, 0, "mistyrose");
    grd_exam2.setCellBackgroundColor(1, 1, "mistyrose");

    grd_exam2.setCellBackgroundColor(1, 2, "lemonchiffon");
    grd_exam2.setCellBackgroundColor(2, 2, "lemonchiffon");
    grd_exam2.setCellBackgroundColor(3, 2, "lemonchiffon");

    grd_exam2.setCellBackgroundColor(2, 3, "powderblue");
    grd_exam2.setCellBackgroundColor(2, 4, "powderblue");
    grd_exam2.setCellBackgroundColor(2, 5, "powderblue");
};

/**
 * 버튼 [화면 새로고침] 클릭 시
 */
scwin.btn_reset_onclick = function (e) {
    // 예제 화면을 새로고침합니다.
    $p.reinitialize()
};

/**
 * 버튼 [셀 (0,0) ~ (1,1) 병합] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // GridView 'grd_exam1'의 셀을 병합합니다.
    // Row Index가 0이고 Column Index가 0인 셀을 기준으로 아래 셀 1개와 오른쪽 셀 1개, 오른쪽 셀의 아래 셀 1개가 병합됩니다. 총 4개의 셀이 병합됩니다.
    grd_exam1.mergeCell({ "rowIndex": 0, "colIndex": 0, "colSpan": 2, "rowSpan": 2 });
};

/**
 * 버튼 [셀 (1,2) ~ (3,2) 병합] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // GridView 'grd_exam1'의 셀을 병합합니다.
    // Row Index가 0이고 Column Index가 0인 셀을 기준으로 아래 셀 2개가 병합됩니다. 총 3개의 셀이 병합됩니다.
    grd_exam1.mergeCell({ "rowIndex": 1, "colIndex": 2, "rowSpan": 3 });
};

/**
 * 버튼 [셀 (2,3) ~ (2,5) 병합] 클릭 시
 */
scwin.btn_exam3_1_onclick = function (e) {
    // GridView 'grd_exam1'의 셀을 병합합니다.
    // Row Index가 0이고 Column Index가 0인 셀을 기준으로 오른쪽 셀 2개가 병합됩니다. 총 3개의 셀이 병합됩니다.
    grd_exam1.mergeCell({ "rowIndex": 2, "colIndex": 3, "colSpan": 3 });
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 함수 \'mergeCell\' 예제입니다.<br/>이 함수는 셀의 데이터와 상관없이 셀을 병합하는 기능을 제공합니다.<br/>병합된 셀의 값은 첫 번째(기준) 셀의 값으로 변경됩니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'GridView와 연결된 DataList의 데이터는 \'Row Index,Column Index\'로 구성되어 있습니다. 예를 들어 셀 데이터 \'1,3\'은 Row Index가 1, Column Index가 3입니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'병합할 셀의 배경색이 설정되어 있습니다. 각 버튼을 클릭하여 병합된 셀의 모양과 셀의 데이터를 확인합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',escape:'false','ev:onclick':'scwin.btn_reset_onclick',id:'btn_reset',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화면 새로고침'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'셀 (0,0) ~ (1,1) 병합'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'셀 (1,2) ~ (3,2) 병합'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam3_1_onclick',id:'btn_exam3_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'셀 (2,3) ~ (2,5) 병합'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'252',class:'gvw',dataList:'data:dlt_exam1',defaultCellHeight:'26',id:'grd_exam1',readOnly:'true',style:'height: 100px;',visibleRowNum:'all',focusMode:'none'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column6',inputType:'text',value:'0',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'1',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',value:'2',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'3',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'4',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'5',width:'40'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'col_a',inputType:'text',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col_b',inputType:'text',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col_c',inputType:'text',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col_d',inputType:'text',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col_e',inputType:'text',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col_f',inputType:'text',width:'40'}}]}]}]},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',label:'아래의 GridView를 통해 DataList의 데이터를 확인합니다.',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'252',class:'gvw',dataList:'data:dlt_exam1',defaultCellHeight:'26',id:'grd_exam2',readOnly:'true',style:'height: 100px;',visibleRowNum:'all',rowMouseOver:'false',focusMode:'none'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column6',inputType:'text',value:'0',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'1',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',value:'2',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'3',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'4',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'5',width:'40'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'col_a',inputType:'text',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col_b',inputType:'text',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col_c',inputType:'text',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col_d',inputType:'text',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col_e',inputType:'text',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col_f',inputType:'text',width:'40'}}]}]}]}]}]}]}]}]}]}]})
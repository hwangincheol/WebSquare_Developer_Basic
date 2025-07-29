/*amd /page/P00284.xml 3932 6e84869b98e583a4d1e97a1ff9870aceab52e59a1946f9d3069205fa585c3bf9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_chartData_1',repeatNode:'data',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'type',name:'type'}},{T:1,N:'w2:column',A:{dataType:'text',id:'value',name:'value'}}]},{T:1,N:'w2:data',A:{use:'true',xmlns:''},E:[{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'TYPE 1'}]},{T:1,N:'value',E:[{T:4,cdata:'17600'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'TYPE 2'}]},{T:1,N:'value',E:[{T:4,cdata:'28110'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'TYPE 3'}]},{T:1,N:'value',E:[{T:4,cdata:'29800'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'TYPE 4'}]},{T:1,N:'value',E:[{T:4,cdata:'21500'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'TYPE 5'}]},{T:1,N:'value',E:[{T:4,cdata:'15300'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [차트 속성 변경하고 브라우저에 그리기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    let options = {};
    options.caption = "- caption -"; // 캡션 표시
    options.subCaption = "- subcaption -"; // 보조 캡션 표시
    options.xAxisName = "- xAxisName -"; // x축 명칭 표시
    options.yAxisName = "- yAxisName -"; // y축 명칭 표시
    options.showBorder = 0; // 외각 선 미표시
    options.showValues = 1; // data plot에 value를 표시
    options.rotateValues = 1; // data plot에 value를 세로로 표시

    // Fusionchart 'cht_exam1'의 속성을 설정합니다.
    cht_exam1.setChartAttribute(options);

    // Fusionchart 'cht_exam1'를 브라우저에 그립니다.
    cht_exam1.draw();
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'FusionChart의 속성을 스크립트로 적용하는 예제입니다.<br/>이 예제는 FusionChart의 함수 \'setChartAttribute\'를 사용하는 기본 구문을 안내하고자 작성되어 있습니다.<br/>주로 사용되는 영역별(툴팁, 트렌드라인 등) 속성 적용 방법은 별도의 예제로 제공됩니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'FusionChart의 모든 속성 : <a href="https://www.fusioncharts.com/dev/chart-attributes/" target="_blank">https://www.fusioncharts.com/dev/chart-attributes/</a>',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차트 속성 변경하고 브라우저에 그리기'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'mb_def_box nobottom'},E:[{T:1,N:'w2:fusionchart',A:{labelNode:'type',ref:'data:dlt_chartData_1',seriesColumns:'[[\'value\']]',chartType:'Column2D',drawType:'javascript',style:'height: 300px;min-width:200px;',id:'cht_exam1'}}]}]}]}]}]}]}]}]})
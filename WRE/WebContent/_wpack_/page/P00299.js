/*amd /page/P00299.xml 8040 c36e9308ef39295c6d031f212327227e12f05441ab096dbefe394f6fe8208493 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_chartData_1',repeatNode:'data',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'type',name:'type'}},{T:1,N:'w2:column',A:{dataType:'text',id:'value',name:'value'}}]},{T:1,N:'w2:data',A:{use:'true',xmlns:''},E:[{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'TYPE 1'}]},{T:1,N:'value',E:[{T:4,cdata:'17600'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'TYPE 2'}]},{T:1,N:'value',E:[{T:4,cdata:'28110'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'TYPE 3'}]},{T:1,N:'value',E:[{T:4,cdata:'29800'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'TYPE 4'}]},{T:1,N:'value',E:[{T:4,cdata:'7500'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'TYPE 5'}]},{T:1,N:'value',E:[{T:4,cdata:'15300'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_chartType',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chart_name',name:'chart_name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chart_value',name:'chart_value',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Column 2D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'column2d'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Column 3D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'column3d'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Line 2D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'line'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Area 2D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'area2d'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Bar 2D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'bar2d'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Bar 3D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'bar3d'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Pie 2D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'pie2d'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Pie 3D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'pie3d'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Doughnut 2D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'doughnut2d'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Doughnut 3D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'doughnut3d'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Pareto 2D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'pareto2d'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Pareto 3D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'pareto3d'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    // Fusionchart 'cht_exam1'의 초기 속성을 설정합니다.
    cht_exam1.setChartAttribute({
        "caption": rad_chartType1.getText(), // radio에 선택된 text를 차트의 caption으로 지정.
        "canvasTopPadding": 6,
        "canvasRightMargin": 10,
        "canvasLeftPadding": 6,
        "canvasRightPadding": 6,
        "chartBottomMargin": 16
    });

    // 지정한 속성을 바탕으로 브라우저에 그립니다.
    cht_exam1.draw();
};

/**
 * 차트 타입이 구성된 Radio 'rad_chartType1'의 이벤트 'onviewchange' 핸들러
 */
scwin.rad_chartType1_onviewchange = function (info) {
    // Fusionchart 'cht_exam1'의 속성을 설정합니다.
    // radio에 선택된 text를 차트의 caption으로 지정.
    cht_exam1.setChartAttribute({
        "caption": this.getText()
    });

    // Fusionchart 'cht_exam1'의 Plot의 배경색을 지정합니다.
    cht_exam1.setPlotColor(["#2ec6c8", "#b5a1dd", "#5ab0ee", "#f4984e", "#d77a80", "#90bddc", "#fe5d55", "#b5dc59", "#9ea7b3", "#00ba84", "#878bb6", "#757a85"]);

    // Fusionchart 'cht_exam1'의 차트 타입을 변경합니다.
    cht_exam1.changeType(info.value);

    // 'Single Series' 타입 변경 예시
    // Fucionchart의 속성 'seriesColumns' 예시) [['value']]

    // Fusionchart 'cht_exam1'의 차트 타입을 'Column 2D'으로 변경합니다.
    // cht_exam1.changeType('column2d');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Column 3D'으로 변경합니다.
    // cht_exam1.changeType('column3d');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Line 2D'으로 변경합니다.
    // cht_exam1.changeType('line');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Area 2D'으로 변경합니다.
    // cht_exam1.changeType('area2d');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Bar 2D'으로 변경합니다.
    // cht_exam1.changeType('bar2d');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Bar 3D'으로 변경합니다.
    // cht_exam1.changeType('bar3d');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Pie 2D'으로 변경합니다.
    // cht_exam1.changeType('pie2d');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Pie 3D'으로 변경합니다.
    // cht_exam1.changeType('pie3d');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Doughnut 2D'으로 변경합니다.
    // cht_exam1.changeType('doughnut2d');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Doughnut 3D'으로 변경합니다.
    // cht_exam1.changeType('doughnut3d');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Pareto 2D'으로 변경합니다.
    // cht_exam1.changeType('pareto2d');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Pareto 3D'으로 변경합니다.
    // cht_exam1.changeType('pareto3d');
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'Fusionchart의 \'Single Series\' 타입을 확인할 수 있는 예제입니다.<br/>화면에 구성된 항목를 선택하여 차트의 타입을 변경할 수 있습니다.<br/>동일한 시리즈의 차트 타입은 함수 \'changeType\'으로 변경할 수 있습니다..',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제의 Fusion Chart 버전은 3.19입니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'FusionChart의 타입 목록 : <a href="https://www.fusioncharts.com/dev/chart-guide/list-of-charts/" target="_blank">https://www.fusioncharts.com/dev/chart-guide/list-of-charts/</a>',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Single Series Charts',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:select1',A:{id:'rad_chartType1',selectedIndex:'0',appearance:'full',style:'min-height: 26px;',rows:'',ref:'','ev:onviewchange':'scwin.rad_chartType1_onviewchange',renderType:'radiogroup',class:'w_per_50',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_chartType'},E:[{T:1,N:'xf:label',A:{ref:'chart_name'}},{T:1,N:'xf:value',A:{ref:'chart_value'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'mb_def_box nobottom'},E:[{T:1,N:'w2:fusionchart',A:{labelNode:'type',ref:'data:dlt_chartData_1',seriesColumns:'[[\'value\']]',chartType:'Column2D',drawType:'javascript',style:'height: 300px;min-width:200px;',id:'cht_exam1'}}]}]}]}]}]}]}]}]})
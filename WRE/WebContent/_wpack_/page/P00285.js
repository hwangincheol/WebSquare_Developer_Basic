/*amd /page/P00285.xml 10703 a102a53bfb4c9c04e173da6fe4afa51bf3148caa1aaf0166a35773d73e80d155 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_chartData_1',repeatNode:'data',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'type',name:'type'}},{T:1,N:'w2:column',A:{dataType:'text',id:'value',name:'value'}}]},{T:1,N:'w2:data',A:{use:'true',xmlns:''},E:[{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'TYPE 1'}]},{T:1,N:'value',E:[{T:4,cdata:'17600'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'TYPE 2'}]},{T:1,N:'value',E:[{T:4,cdata:'28110'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'TYPE 3'}]},{T:1,N:'value',E:[{T:4,cdata:'29800'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'TYPE 4'}]},{T:1,N:'value',E:[{T:4,cdata:'21500'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'TYPE 5'}]},{T:1,N:'value',E:[{T:4,cdata:'15300'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [선 형식 트렌드라인 추가하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // 적용된 트렌드라인이 있으면 return
    if (cht_exam1.getJSONData().trendlines) { return; }

    // 트렌드라인 속성
    let options = {};
    options.startValue = 19000; // [필수] 시작 값.
    options.displayValue = "19,000"; // 트렌드 라인에 좌측 또는 우측에 표시할 레이블.
    options.color = "#DC143C"; // 색.
    options.alpha = 60; // [0-100]투명도. 속성 'displayValue'도 함께 적용.
    options.showOnTop = 1; // [default:0, 1] 데이터 플롯 위로 표시할 지의 여부.
    options.thickness = 4; // 선 굵기로 px 단위로 적용. 속성 'isTrendZone'이 적용된 경우 무시.
    options.toolText = "부가 정보를 표시합니다."; // 트렌드 라인의 툴팁.

    // Fusionchart 'cht_exam1'의 트렌드라인을 추가합니다.
    cht_exam1.addTrendLine(options);

    // Fusionchart 'cht_exam1'를 브라우저에 그립니다.
    cht_exam1.draw();
};

/**
 * 버튼 [박스 형식 트렌드라인 추가하기] 클릭 시
 */
scwin.btn_exam2_1_onclick = function (e) {
    // 적용된 트렌드라인이 있으면 return
    if (cht_exam2.getJSONData().trendlines) { return; }

    // 트렌드라인 속성
    let options = {};
    options.startValue = 20000; // [필수] 시작 값.
    options.endValue = 25000; // 종료 값.
    options.displayValue = "표준<br/>영역"; // 트렌드 라인에 좌측 또는 우측에 표시할 레이블.
    options.color = "#FFD700"; // 색.
    options.alpha = 40; // [0-100]투명도. 속성 'displayValue'도 함께 적용.
    options.showOnTop = 1; // [default:0, 1] 데이터 플롯 위로 표시할 지의 여부.
    options.valueOnRight = 1; // [default:0, 1] 속성 'displayValue'의 값을 우측에 표시할지의 여부.
    options.isTrendZone = 1; // [default:0, 1] 속성 'endValue'가 지정된 경우 트렌드 라인을 박스형태로 표시할지의 여부.

    // Fusionchart 'cht_exam2'의 트렌드라인을 추가합니다.
    cht_exam2.addTrendLine(options);

    // 속성 'displayValue'의 추가 속성
    let attOptions = {};
    attOptions.trendValueAlpha = 100; // [0-100] 속성 'displayValue'의 투명도.
    attOptions.trendValueFontSize = 13; // 속성 'displayValue'의 글자 크기.
    attOptions.trendValueFontBold = 1; // 속성 'displayValue'의 글자 굵게 적용 여부.
    // attOptions.trendValueFont = <String>; // 속성 'displayValue'의 글자체.
    // attOptions.trendValueFontItalic = 1; // 속성 'displayValue'의 글자 기울기 적용 여부.

    // attOptions.trendValueBgColor = "#000000"; // 속성 'displayValue'의 배경색.
    // attOptions.trendValueBgAlpha = 80; // [0-100] 속성 'displayValue'의 배경색 투명도.

    // attOptions.trendValueBorderAlpha = 100; // [0-100] 속성 'displayValue'의 테두리 투명도.
    // attOptions.trendValueBorderColor = "#33333"; // [0-100] 속성 'displayValue'의 테두리 색.
    // attOptions.trendValueBorderPadding = 4; // [0-100] 속성 'displayValue'의 테두리 여백.
    // attOptions.trendValueBorderRadius = 3; // [px 단위] 속성 'displayValue'의 테두리의 모서리 반경.
    // attOptions.trendValueBorderThickness = 0; // [px 단위] 속성 'displayValue'의 테두리의 굵기.

    // Fusionchart 'cht_exam2'의 속성을 설정합니다.
    cht_exam2.setChartAttribute(attOptions);

    // Fusionchart 'cht_exam2'를 브라우저에 그립니다.
    cht_exam2.draw();
};

/**
 * 버튼 [다중 트렌드라인 추가하기] 클릭 시
 */
scwin.btn_exam3_1_onclick = function (e) {
    // 적용된 트렌드라인이 있으면 return
    if (cht_exam3.getJSONData().trendlines) { return; }

    // 선 형식 트렌드라인 속성
    let trnOptions1 = {};
    trnOptions1.startValue = 25000; // [필수] 시작 값.
    trnOptions1.displayValue = "목표"; // 트렌드 라인에 좌측 또는 우측에 표시할 레이블.
    trnOptions1.color = "#DC143C"; // 색.
    trnOptions1.alpha = 60; // [1-100]투명도. 속성 'displayValue'도 함께 적용.
    trnOptions1.showOnTop = 0; // [default:0, 1] 데이터 플롯 위로 표시할 지의 여부.
    trnOptions1.thickness = 2; // 선 굵기로 px 단위로 적용. 속성 'isTrendZone'이 적용된 경우 무시.
    trnOptions1.valueOnRight = 1; // [default:0, 1] 속성 'displayValue'의 값을 우측에 표시할지의 여부.

    // Fusionchart 'cht_exam3'의 트렌드라인을 추가합니다.
    cht_exam3.addTrendLine(trnOptions1);

    // 박스 형식 트렌드라인 속성
    let trnOptions2 = {};
    trnOptions2.startValue = 15000; // [필수] 시작 값.
    trnOptions2.endValue = 20000; // 종료 값.
    trnOptions2.displayValue = "전월<br/>최대<br/>최소"; // 트렌드 라인에 좌측 또는 우측에 표시할 레이블.
    trnOptions2.color = "#1E90FF"; // 색.
    trnOptions2.alpha = 40; // [1-100]투명도. 속성 'displayValue'도 함께 적용.
    trnOptions2.showOnTop = 0; // [default:0, 1] 데이터 플롯 위로 표시할 지의 여부.
    trnOptions2.valueOnRight = 1; // [default:0, 1] 속성 'displayValue'의 값을 우측에 표시할지의 여부.
    trnOptions2.isTrendZone = 1; // [default:0, 1] 속성 'endValue'가 지정된 경우 트렌드 라인을 박스형태로 표시할지의 여부.

    // Fusionchart 'cht_exam3'의 트렌드라인을 추가합니다.
    cht_exam3.addTrendLine(trnOptions2);

    // 속성 'displayValue'의 추가 속성
    let attOptions = {};
    attOptions.trendValueAlpha = 100; // [0-100] 속성 'displayValue'의 투명도.

    // Fusionchart 'cht_exam3'의 속성을 설정합니다.
    cht_exam3.setChartAttribute(attOptions);

    // Fusionchart 'cht_exam3'를 브라우저에 그립니다.
    cht_exam3.draw();
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'FusionChart의 트렌드라인을 스크립트로 추가하는 예제입니다.<br/>FusionChart의 함수 \'addTrendLine\'으로 구현할 수 있으며, 트렌드라인의 주요 속성을 중심으로 작성되었습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'FusionChart의 모든 속성 : <a href="https://www.fusioncharts.com/dev/chart-attributes/" target="_blank">https://www.fusioncharts.com/dev/chart-attributes/</a>',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'선 형식 트렌드라인',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선 형식 트렌드라인 추가하기'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'mb_def_box nobottom'},E:[{T:1,N:'w2:fusionchart',A:{labelNode:'type',ref:'data:dlt_chartData_1',seriesColumns:'[[\'value\']]',chartType:'Column2D',drawType:'javascript',style:'height: 300px;min-width:200px;',id:'cht_exam1'}}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'박스 형식 트렌드라인',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam2_1_onclick',id:'btn_exam2_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'박스 형식 트렌드라인 추가하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:''},E:[{T:1,N:'w2:fusionchart',A:{chartType:'Column2D',drawType:'javascript',id:'cht_exam2',labelNode:'type',ref:'data:dlt_chartData_1',seriesColumns:'[[\'value\']]',style:'height: 300px;min-width:200px;'}}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'다중 트렌드라인',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_exam3_1_onclick',id:'btn_exam3_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다중 트렌드라인 추가하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:''},E:[{T:1,N:'w2:fusionchart',A:{chartType:'Column2D',drawType:'javascript',id:'cht_exam3',labelNode:'type',ref:'data:dlt_chartData_1',seriesColumns:'[[\'value\']]',style:'height: 300px;min-width:200px;'}}]}]}]}]}]}]}]}]})
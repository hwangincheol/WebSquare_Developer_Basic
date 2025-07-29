/*amd /publishing/xml/mapChart.xml 6105 254f94c6cff6bb44e7b5b105134902d29d534fa460f42436f37477eb551a0206 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'value',name:'value',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json',action:'/publishing/xml/mapData1.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'submission2',ref:'',target:'data:json',action:'/publishing/xml/mapData2.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'submission3',ref:'',target:'data:json',action:'/publishing/xml/mapData3.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	$p.executeSubmission( "submission1");
};

scwin.colorScale1 = d3.scale.linear()
.range(["red", "yellow", "green", "turquoise", "blue"])
.domain([0, 0.25, 0.5, 0.75, 1]);


scwin.mapchart1_onbeforemapchange = function ( info ) {
    if(info.newMapCode.length >= 2) {
        return false; // 지도 확장기능 사용하지 않음 
    }
};

scwin.mapchart1_onmapdatachange = function(dataListId) {
    var dataList = WebSquare.util.getComponentById(dataListId);
    switch(dataListId) {
    case "dataList1" : 
        var data = dataList.getAllJSON();
        for(var i = 0; i < data.length; i++) {
            var municipality = d3.select("#" + this.id + "_map").select(".municipality.c" + data[i].code);
            municipality.style("fill", scwin.colorScale1(data[i].value));
        }
        break;
    }                
};

scwin.trigger1_onclick = function(e) {
    $p.executeSubmission(selectbox1.getValue());
};

scwin.aa = function(str, str1){
    if(str == "경기도"){
        return "test";
    }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',adaptiveThreshold:'',class:'sub_contents'},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'',label:'Publishing Template - MapChart',style:''}}]},{T:1,N:'xf:group',A:{id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'D3을 이용해 우리나라 전국 지도에 입력받은 데이터를 다양한 형태로 시각화하여 표현하는 컴포넌트입니다. <br/>확대 및 축소비율을 설정할 수 있으며 드래그 앤 드롭, 사용자 정의 마킹 등 기능을 제공합니다.',class:''}}]},{T:1,N:'xf:group',A:{style:'border:1px dashed #ccc;',id:'',class:'msgbox'},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:30.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70.00%',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n	    					Mapchart DataList 동적 연동 Sample (submission 이용)\n	    					'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan'},{T:1,N:'w2:rowspan'}]},{T:1,N:'w2:textbox',A:{class:'formguide',for:'basicip',id:'',label:'입력란',style:'',tagname:'label'}},{T:1,N:'xf:select1',A:{id:'selectbox1',disabledClass:'w2selectbox_disabled',appearance:'minimal',style:'position: relative;height:30px;width:150px;',direction:'auto',chooseOption:'',allOption:'',displayMode:'label',optionOrder:'false',submenuSize:'auto',disabled:'false'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'submission1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'submission1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'submission2'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'submission2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'submission3'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'submission3'}]}]}]}]},{T:1,N:'xf:trigger',A:{id:'trigger1',style:'position: relative;height:30px;width:150px;','ev:onclick':'scwin.trigger1_onclick',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'change data'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan'},{T:1,N:'w2:rowspan'}]},{T:1,N:'w2:textbox',A:{class:'formguide',for:'basicip',id:'',label:'Chart 확인',style:'',tagname:'label'}},{T:1,N:'w2:mapchart',A:{event_drilldown:'ondblclick',event_select:'onclick',event_tooltipon:'onmouseover',setTooltipStrFunc:'scwin.aa',event_tooltipoff:'onmouseout',zoomMax:'1',id:'mapchart1',event_drillup:'oncontextmenu',dataLists:'dataList1',style:'position: relative;width:100%;height:500px;',event_deselect:'onmouseout',dataMapRatio_level0:'simp01','ev:onbeforemapchange':'scwin.mapchart1_onbeforemapchange','ev:onmapdatachange':'scwin.mapchart1_onmapdatachange',zoomMin:'1'}}]}]}]}]}]}]}]}]})
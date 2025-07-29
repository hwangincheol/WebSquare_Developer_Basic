/*amd /page/P00257.xml 5037 cb0234ebf892a4e515fc0ea4a34cecadb3efe1f45132ca26fb21417e416e4854 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'City',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Country',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Type',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    let jsonData = [
        { "Code": "SEL", "City": "Seoul, the largest city in Korea", "Country": "Korea", "Type": "Domestic" },
        { "Code": "BSN", "City": "Busan, the second largest city in Korea", "Country": "Korea", "Type": "Domestic" },
        { "Code": "ICN", "City": "Incheon, the gateway to Korea", "Country": "Korea", "Type": "Domestic" },
        { "Code": "DJN", "City": "Daejeon, the government city of Korea", "Country": "Korea", "Type": "Domestic" },
        { "Code": "DGU", "City": "Jeju, the largest island in Korea", "Country": "Korea", "Type": "Domestic" },
        { "Code": "OTW", "City": "Ottawa in Canada", "Country": "Canada", "Type": "Overseas" },
        { "Code": "LDN", "City": "Toronto in Canada", "Country": "Canada", "Type": "Overseas" },
        { "Code": "BRN", "City": "Berlin in Germany", "Country": "Germany", "Type": "Overseas" },
        { "Code": "BJG", "City": "Beijing in China", "Country": "China", "Type": "Overseas" },
        { "Code": "LDN", "City": "London in GB", "Country": "UK", "Type": "Overseas" },
    ];
    // DataList 'dlt_dataList1'에 json데이터 'jsonData'를 set합니다.
    dlt_dataList1.setJSON(jsonData);

    // SelectBox 'sbx_exam1'에 DataList 'dlt_dataList1'을 설정합니다.
    sbx_exam1.setNodeSet("data:dlt_dataList1", "City", "Code");

    // SelectBox 'sbx_exam2'에 DataList 'dlt_dataList1'을 설정합니다.
    sbx_exam2.setNodeSet("data:dlt_dataList1", "City", "Code");
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'SelectBox 컴포넌트의 선택 목록 위에서 마우스 스크롤링 시 선택 목록 이 스크롤되는 것을 방지하는 예제입니다.<br/><br/>이 기능은 아래의 속성으로 사용할 수 있습니다.<br/>- tooltipDisplay : 사용자가 선택한 값에 대한 툴팁 표시 여부.<br/>- itemTooltipDisplay : 아이템 목록에 대한 툴팁 표시 여부.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'선택 항목 툴팁 표시하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'SelectBox컴포넌트의 선택 항목 위에 툴팁이 표시된 것을 확인합니다.',style:'',displayFormat:''}},{T:1,N:'xf:select1',A:{id:'sbx_exam1',chooseOption:'',style:'width: 148px;height: 21px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',tooltipDisplay:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_dataList1'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'목록 위에 툴팁이 표시하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'SelectBox컴포넌트의 목록 위에 툴팁이 표시된 것을 확인합니다.',style:'',displayFormat:''}},{T:1,N:'xf:select1',A:{id:'sbx_exam2',chooseOption:'',style:'width: 148px;height: 21px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',itemTooltipDisplay:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_dataList1'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''}}]}]}]}]}]})
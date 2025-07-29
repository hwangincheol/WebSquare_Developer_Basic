/*amd /page/P00256.xml 4932 b407e2b8e8be72e782695a99761406ead128b974e4717e01181b1c3de39021d8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'City',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Country',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Type',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    let jsonData = [
        { "Code": "SEL", "City": "Seoul", "Country": "Korea", "Type": "Domestic" },
        { "Code": "BSN", "City": "Busan", "Country": "Korea", "Type": "Domestic" },
        { "Code": "ICN", "City": "Incheon", "Country": "Korea", "Type": "Domestic" },
        { "Code": "DJN", "City": "Daejeon", "Country": "Korea", "Type": "Domestic" },
        { "Code": "DGU", "City": "Daegu", "Country": "Korea", "Type": "Domestic" },
        { "Code": "OTW", "City": "Ottawa", "Country": "Canada", "Type": "Overseas" },
        { "Code": "LDN", "City": "Toronto", "Country": "Canada", "Type": "Overseas" },
        { "Code": "BRN", "City": "Berlin", "Country": "Germany", "Type": "Overseas" },
        { "Code": "BJG", "City": "Beijing", "Country": "China", "Type": "Overseas" },
        { "Code": "LDN", "City": "London", "Country": "UK", "Type": "Overseas" },
    ];

    // DataList 'dlt_dataList1'에 json데이터 'jsonData'를 set합니다.
    dlt_dataList1.setJSON(jsonData);

    // SelectBox 'sbx_exam1'에 DataList 'dlt_dataList1'을 바인딩합니다.
    sbx_exam1.setNodeSet("data:dlt_dataList1", "City", "Code");

    // SelectBox 'sbx_exam2'에 DataList 'dlt_dataList1'을 바인딩합니다.
    sbx_exam2.setNodeSet("data:dlt_dataList1", "City", "Code");
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'enableColum 및 enableColumnFalseValue 속성을 사용하여 선택 목록의 특정 항목을 비활성화하는 예제입니다.<br/><br/>이 기능은 아래의 속성으로 사용할 수 있습니다.<br/>- enableColumn : 선택 항목 목록에서 특정 항목을 disable 처리하는 기능.<br/>- enableColumnFalseValue : enableColumn 사용 시 목록에서 특정 항목을 감추기 위한 조건에 해당하는 값.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'특정 항목 비활성화 적용 전',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'SelectBox컴포넌트에 선택 목록이 비활성화 없이 표시된 것을 확인한다.',style:'',displayFormat:''}},{T:1,N:'xf:select1',A:{id:'sbx_exam1',chooseOption:'',style:'width: 148px;height: 21px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_dataList1'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'특정 항목 비활성화 적용 후',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'SelectBox컴포넌트에 선택 목록이 비활성화 없이 표시된 것을 확인한다.',style:'',displayFormat:''}},{T:1,N:'xf:select1',A:{id:'sbx_exam2',chooseOption:'',style:'width: 148px;height: 21px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',enableColumn:'Type',enableColumnFalseValue:'Domestic'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_dataList1'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''}}]}]}]}]}]})
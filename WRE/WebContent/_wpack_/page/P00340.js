/*amd /page/P00340.xml 4298 a4b98a9e9a0d8289299e3b1225953625f4d134e5bbd8908f7b861c67fc49b419 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_date',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'date',name:'날짜',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'20170204'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'20200816'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'20020330'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'19920205'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'19880713'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};
/**
 * 날짜 컬럼 displayFormatter
 */
scwin.displayFormatter = function (data) {

    var dd = data.substr(6, 2);
    var MM = data.substr(4, 2);
    var yy = data.substr(0, 4);

    if (MM == "01") {
        MM = "January";
    } else if (MM == "02") {
        MM = "February";
    } else if (MM == "03") {
        MM = "March";
    } else if (MM == "04") {
        MM = "April";
    } else if (MM == "05") {
        MM = "May";
    } else if (MM == "06") {
        MM = "June";
    } else if (MM == "07") {
        MM = "July";
    } else if (MM == "08") {
        MM = "August";
    } else if (MM == "09") {
        MM = "September";
    } else if (MM == "10") {
        MM = "October";
    } else if (MM == "11") {
        MM = "November";
    } else if (MM == "12") {
        MM = "December";
    }

    var result = MM + " " + dd + ". " + yy;
    return result;
}
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView 컬럼의 속성 displayFormatter에 관한 예제입니다.<br/>displayFormatter는 화면에 보여지는 데이터의 형태를 변환해 주는 속성으로 함수를 지정합니다.<br/>함수를 직접 작성해 문자열을 처리하기 떄문에 좀 더 복잡하고 다양한 방식으 포맷을 적용할 수 있습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'displayFormatter 적용하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',id:'',label:'아래 예제는 날짜 형식의 데이터를 displayFormatter를 구현해 처리한 예제입니다.<br/>cell을 더블 클릭하면 원본 데이터를 확인할 수 있습니다.',style:'',escape:'false'}},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'160',class:'gvw',dataList:'data:dlt_date',defaultCellHeight:'26',disabledBackgroundColor:'#eee',disabledFontColor:'#bbb',id:'grd_exam1',rowNumVisible:'true',rowNumWidth:'10',style:'height:100px;',visibleRowNum:'5',visibleRowNumFix:'true',useFilterList:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'날짜',width:'70',hideCustomFilter:'false',useFilter:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'date',inputType:'text',textAlign:'right',width:'70',displayFormatter:'scwin.displayFormatter',hideCustomFilter:'false'}}]}]}]}]}]}]}]}]}]}]})
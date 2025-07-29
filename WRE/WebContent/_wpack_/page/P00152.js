/*amd /page/P00152.xml 2875 0156acd8b1af2531e018344bb9c3b39762aeb485c5cea91dedbf15f74e52e55e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    //화면 초기화
    scwin.initPage();
};

/**
 * 화면 초기화
 */
scwin.initPage = function () {
    var strDate;

    strDate = $p.getCurrentServerDate("yyyy"); //서버에서 올해 문자열 반환받기

    spi_exam1.setValue("0");
    spi_exam2.setValue(strDate + "1130"); //올해 11월 30일 할당
    spi_exam3.setValue("1159"); //11시 59분 할당
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'컴포넌트의 속성 dataType의 설정 값에 따른 비교 예제입니다.<br/>컴포넌트 우측에 구성된 버튼을 클릭하여 데이터 증감을 확인합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(기본) dataType="number"',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:spinner',A:{skin:'type1',buttonSize:'30',inputReadOnly:'false',id:'spi_exam1',style:'position: relative;width:130px;min-height:24px;'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'dataType="date"',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:spinner',A:{buttonSize:'30',id:'spi_exam2',inputReadOnly:'false',skin:'type1',style:'position: relative;width:130px;min-height:24px;',dataType:'date'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'dateType="time"',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:spinner',A:{buttonSize:'30',id:'spi_exam3',inputReadOnly:'false',skin:'type1',style:'position: relative;width:130px;min-height:24px;',dataType:'time',dateIncrementType:'minute'}}]}]}]}]}]}]}]})
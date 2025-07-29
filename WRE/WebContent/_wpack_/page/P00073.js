/*amd /page/P00073.xml 2490 cc15c0108d9cddba3737ba922153908fe0e5e7a9cab7a581e4ce831279b39a65 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    //매년 1월 1일, 3월 1일, 5월 5일, 6월 6일, 8월 15일, 10월 3일, 10월 9일, 12월 25일을 휴일로 지정
    cal_exam2.setHoliday("*0101,*0301,*0505,*0606,*0815,*1003,*1009,*1225");
};


/**
 * 버튼 [지정된 휴일을 제거하고 매년 5월 5일을 휴일로 지정하기]의 onclick 핸들러
 */
scwin.btn_exam1_onclick = function (e) {
    //기존 설정을 제거하고, 매년 5월 5일을 휴일로 지정하기
    cal_exam2.setHoliday("*0505", true);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Calendar - 기본',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:calendar',A:{id:'cal_exam1',style:'min-width: 200px;min-height: 200px;'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Calendar - 휴일 지정<br/>(매년 1월 1일, 3월 1일, 5월 5일, 6월 6일, 8월 15일, 10월 3일, 10월 9일, 12월 25일)',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:calendar',A:{id:'cal_exam2',style:'min-width: 200px;min-height: 200px;'}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of mt_def',id:'btn_exam1',localeRef:'',style:'',type:'',useDefaultLabel:'true','ev:onclick':'scwin.btn_exam1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지정된 휴일을 제거하고 매년 5월 5일을 휴일로 지정하기'}]}]}]}]}]}]}]}]}]})
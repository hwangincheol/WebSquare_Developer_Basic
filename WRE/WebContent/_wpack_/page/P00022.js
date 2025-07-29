/*amd /page/P00022.xml 5057 fd4ffc76a34def6ddce6a3674168ed182028e61821a4fe84bd668a3298b310e5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * [컴포넌트 ID 문자열로 컴포넌트 객체를 받아 value 할당하기] 버튼 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    var strCmpID;
    var objCmp;

    //컴포넌트 ID 받아오기 - input에 입력된 값.
    strCmpID = ibx_comp_id.getValue();

    //문자열 좌우 공백 제거.
    strCmpID = strCmpID.trim();

    //ID로 컴포넌트 반환받기.- 반환된 객체가 없는 경우 undefined 이 반환됩니다.
    objCmp = $p.getComponentById(strCmpID);

    //반환된 객체가 없는 경우. - 메시지 처리 및 로직 중단.
    if (!objCmp) {
        alert("[" + strCmpID + "]로 정의된 컴포넌트를 찾을 수 없습니다.");
        return;
    }

    //[컴포넌트 Value]영역에 할당된 문자열 셋팅
    objCmp.setValue(ibx_comp_value.getValue());

};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예제 테스트를 위한 입력값',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'tblbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width:100%;',id:'',class:'w2tb tbl',adaptive:'layout',adaptiveThreshold:'800'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\r\n							컴포넌트&nbsp;ID\r\n							'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'width:148px;',id:'ibx_comp_id',placeholder:'',class:'mr_def',initValue:'ibx_ex1'}},{T:1,N:'w2:span',A:{style:'',label:'ibx_ex1 또는 ibx_ex2를 입력하세요.',id:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\r\n							컴포넌트&nbsp;Value\r\n							'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'width:148px;',id:'ibx_comp_value',placeholder:'',class:'mr_def',initValue:'WebSquare'}},{T:1,N:'w2:span',A:{style:'',id:'',label:'input에 출력할 value를 입력하세요.'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false',id:'btn_ex1',style:'',type:'button','ev:onclick':'scwin.btn_ex1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컴포넌트 ID 문자열로 컴포넌트의 value 할당하기'}]}]}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실행 결과 확인',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'tblbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width:100%;',id:'',class:'w2tb tbl',adaptive:'layout',adaptiveThreshold:'800'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\r\n							ID&nbsp;:&nbsp;ibx_ex1\r\n							'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'width:148px;',id:'ibx_ex1',placeholder:'',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\r\n							ID&nbsp;:&nbsp;ibx_ex2\r\n							'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'width:148px;',id:'ibx_ex2',placeholder:'',class:''}}]}]}]}]}]}]}]}]})
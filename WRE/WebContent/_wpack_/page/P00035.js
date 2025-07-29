/*amd /page/P00035.xml 6817 39323d4610a4f9b4dcd827da2a349e39b21cb319a66bdbdbe3030d53cc8f5acd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}},{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    // 1개의 아이템을 추가하는 함수를 호출합니다.
    scwin.generator_insertChild(1);
};

/**
 * 버튼 [insertChild] click 시 발생.
*/
scwin.btn_insertChild_onclick = function (e) {
    // 1개의 아이템을 추가하는 함수를 호출합니다.
    scwin.generator_insertChild(1);
};

/**
 * Generator 컴포넌트에 자식 추가.
 * argNumLoop 만큼 자식 컴포넌트를 추가합니다.
*/
scwin.generator_insertChild = function (argNumLoop) {
    argNumLoop = argNumLoop || 1; // 최소 값을 할당합니다.

    // Generator 'gen_exam'의 항목 수를 반환받습니다.
    let numLastIndex = gen_exam.getLength();

    // Generator 'gen_exam'의 userData에 아이템을 추가했던 횟수를 가져옵니다.
    let numItemIndex = gen_exam.getUserData("exam_itemIndex") || 1;

    for (let i = 0; i < argNumLoop; i++) {
        // Generator 'gen_exam'에 자식 컴포넌트들(TR 영역)을 추가합니다.
        gen_exam.insertChild();

        let cmpTmp; // 추가된 컴포넌트의 임시 할당 변수

        // TH 영역의 TextBox 'tbx_gen_label' 제어
        cmpTmp = gen_exam.getChild(numLastIndex, "tbx_gen_label");
        cmpTmp.setValue("항목 " + numItemIndex); // Label의 값을 할당합니다.

        // TD 영역의 InputBox 'ibx_gen_exam' 제어
        cmpTmp = gen_exam.getChild(numLastIndex, "ibx_gen_exam");
        cmpTmp.setValue("초기 값: " + numItemIndex); // 값을 할당합니다.

        numLastIndex++;
        numItemIndex++;
    }

    // Generator 'gen_exam'의 userData에 아이템을 추가했던 횟수를 할당합니다.
    gen_exam.setUserData("exam_itemIndex", numItemIndex);
};

/**
 * 버튼 [getValue] click 시 발생.
 * inputbox의 value를 alert합니다.
*/
scwin.btn_gen_exam_onclick = function (e) {
    // 반복된 행의 컴포넌트 'ibx_gen_exam'를 반환받습니다.
    var cmpInput = this.getGeneratedComponent("ibx_gen_exam");
    alert(cmpInput.getValue());
};

/**
 * 버튼 [removeAll] click 시 발생.
 * 반복된 자식 컴포넌트 전체를 삭제.
 */
scwin.btn_removeAll_onclick = function (e) {
    // 반복된 자식 컴포넌트 전체를 삭제합니다.
    gen_exam.removeAll();
};

/**
 * 버튼 [remove] click 시 발생
 * 내 행의 아이템 삭제하기.
*/
scwin.btn_gen_remove_onclick = function (e) {
    // Generator 컴포넌트를 반환합니다. Generator의 ID를 알고 있는 경우 직접 접근할 수 있습니다. - gen_exam
    let cmpGenerator = this.getGenerator();

    // 자신의 반복부 index를 반환합니다.
    let numIndex = this.getGeneratedIndex();

    // index에 해당하는 반복부 아이템을 삭제합니다.
    cmpGenerator.removeChild(numIndex);
};

/**
 * 버튼 [getIndex] 클릭 시
 * 반복된 Index 반환받기.
 */
scwin.btn_gen_index_onclick = function (e) {
    // 반복된 Index 반환받기
    let numIndex = this.getGeneratedIndex();

    alert("index: " + numIndex);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents P00035',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'Generator의 기본 기능 사용법 예제입니다.<br/>TableLayout을 사용하여 \'Table\'의 \'tr\'이 반복되도록 구성되었습니다.<br/>다음은 구현된 기능에 사용된 주요 함수입니다.<br/>- 아이템 추가하기 : insertChild<br/>- 아이템 전체 삭제하기 : removeAll<br/>- 형제 컴포넌트 제어하기 : getGeneratedComponent<br/>- 인덱스로 아이템 삭제하기 : removeChild<br/>- 인덱스 반환받기 : getGeneratedIndex',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_insertChild_onclick',id:'btn_insertChild',style:'',type:'button',class:'btn_exam_exec'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아이템 추가하기'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_removeAll_onclick',id:'btn_removeAll',style:'',type:'button',class:'btn_exam_exec'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체 아이템 삭제하기'}]}]}]},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'아래의 영역에 아이템이 추가(생성)됩니다.',style:''}},{T:1,N:'xf:group',A:{id:'',class:'mb_def_box nobottom',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'width: 100%;background-color: #fff;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:66px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'w2:generator',A:{id:'gen_exam',style:'',tagname:'tbody'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_gen_label',label:'label',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'ibx_gen_exam',style:'width: 90px;margin-right: 5px;display: block;'}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec','ev:onclick':'scwin.btn_gen_exam_onclick',id:'btn_gen_exam',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Input 값 반환'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec','ev:onclick':'scwin.btn_gen_index_onclick',id:'btn_gen_index',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인덱스 반환'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec','ev:onclick':'scwin.btn_gen_remove_onclick',id:'btn_gen_remove',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아이템 삭제'}]}]}]}]}]}]}]}]}]}]}]}]}]}]})
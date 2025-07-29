/*amd /publishing/xml/widgetContainer.xml 13516 1a99687dcf6b767da92ef512a5358110d54ec1df736be56217f743f6294667b3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	// Widget Call
	widgetContainer1.addWidgets({
            id : "widget0",
            title : "Widget01",
            src : "",
            scope : true,
            x : 0,
            y : 0,
            unitWidth : 1,
            unitHeight : 1
        });

        widgetContainer1.addWidgets({
            id : "widget1",
            title : "Widget02",
            src : "",
            scope : true,
            x : 1,
            y : 0,
            unitWidth : 1,
            unitHeight : 1
        });

        widgetContainer1.addWidgets({
            id : "widget2",
            title : "Widget03",
             src : "",
            scope : true,
            x : 2,
            y : 0,
            unitWidth : 1,
            unitHeight : 1
        });
        
        widgetContainer1.addWidgets({
            id : "widget3",
            title : "Widget04",
             src : "",
            scope : true,
            x : 0,
            y : 1,
            unitWidth : 1,
            unitHeight : 1
        });
        
        widgetContainer1.addWidgets({
            id : "widget4",
            title : "Widget05",
             src : "",
            scope : true,
            x : 1,
            y : 1,
            unitWidth : 1,
            unitHeight : 1
        });
        
        widgetContainer1.addWidgets({
            id : "widget5",
            title : "Widget06",
             src : "",
            scope : true,
            x : 2,
            y : 1,
            unitWidth : 1,
            unitHeight : 1
        });
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'',label:'Publishing Template - WidgetContainer',style:''}}]},{T:1,N:'xf:group',A:{id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'widgetContainer는 그 내부에 widget들을 포함하고 있으며 widget들의 상호작용을 관리한다.<br/>widgetContainer는 내부적으로 이차원 격자로 이루어져있다. 단위 길이는 cols만큼 windowContainer의 가로 길이를 나눈 값이고, 단위 높이는 unitHeightPixel이다.<br/>widgetContainer를 사용하면 해당 이차원 격자 구조 내에서 widget들을 옮기거나 크기를 바꿀 수 있다.<br/>또한, widgetContainer는 내부의 widget들의 정보를 JSON을 통해 추출하고 원복할 수 있는 기능을 제공함으로써 특정 화면 설정을 저장할 수 있게 해준다.',class:'txt_guide'}}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'01. Sample',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false',name:'',style:'',href:'/ws/download/widgetContainer.zip',id:'',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Download'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'height:640px;',class:'msgbox'},E:[{T:1,N:'w2:widgetContainer',A:{widgetMove:'',minUnitWidth:'',cols:'3',horizontalMargin:'10',verticalMargin:'10',params:'false',widgetResize:'',mode:'switch',threshold:'null',id:'widgetContainer1',style:'width: 100%;height: 100%;',minUnitHeight:'',unitHeightPixel:'320'}}]},{T:1,N:'xf:group',A:{id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'02. Property',class:''}}]},{T:1,N:'xf:group',A:{id:'',class:'tblbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'wq_tb w2tb tbl'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:20%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'Property'}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'Description'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'cols'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\r\n    						widgetContainer의&nbsp;열의&nbsp;갯수.&nbsp;widgetContainer은&nbsp;자신의&nbsp;가로&nbsp;길이를&nbsp;cols의&nbsp;갯수만큼&nbsp;나누어&nbsp;단위&nbsp;길이를&nbsp;결정한다.\r\n    					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'horizontalMargin'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'widget간의&nbsp;수평&nbsp;마진의&nbsp;픽셀값.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'id'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\r\n    						컴포넌트의&nbsp;ID로&nbsp;전역객체로&nbsp;할당되며&nbsp;script에서&nbsp;본&nbsp;id로&nbsp;컴포넌트에&nbsp;접근이&nbsp;가능하다.\r\n    					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'maxUnitHeight'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'widget의&nbsp;최대&nbsp;단위&nbsp;높이.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'maxUnitHeight'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'widget의&nbsp;최대&nbsp;단위&nbsp;높이.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'maxUnitWidth'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'widget의&nbsp;최대&nbsp;단위&nbsp;길이.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'minUnitHeight'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'widget의&nbsp;최소&nbsp;단위&nbsp;높이.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						minUnitWidth\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						widget의&nbsp;최소&nbsp;단위&nbsp;길이.\r\n    						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						mode\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						widget간의&nbsp;충돌에&nbsp;대한&nbsp;widgetContainer의&nbsp;기본동작을&nbsp;설정한다.\r\n    						'},{T:1,N:'br'},{T:3,text:'\r\n    						pushpull&nbsp;:&nbsp;가능한&nbsp;모든&nbsp;widget을&nbsp;위로&nbsp;끌어&nbsp;올리며,&nbsp;충돌이&nbsp;일어나는&nbsp;경우&nbsp;충돌이&nbsp;일어난&nbsp;widget들을&nbsp;아래로&nbsp;밀어&nbsp;내린다.\r\n    						'},{T:1,N:'br'},{T:3,text:'\r\n    						switch&nbsp;:&nbsp;충돌이&nbsp;일어날&nbsp;시&nbsp;충돌이&nbsp;발생한&nbsp;widget과&nbsp;위치전환을&nbsp;시도한다.&nbsp;단,&nbsp;자신보다&nbsp;작은&nbsp;widget과만&nbsp;위치전환이&nbsp;가능하다.\r\n    						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						params\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						widget&nbsp;객체가&nbsp;저장하고&nbsp;있는&nbsp;사용자&nbsp;정의&nbsp;데이터.\r\n    						'},{T:1,N:'br'},{T:3,text:'\r\n    						런타임&nbsp;도중에&nbsp;setParams를&nbsp;통해&nbsp;재정의&nbsp;될&nbsp;수&nbsp;있고,&nbsp;getParams를&nbsp;통해&nbsp;가져올&nbsp;수&nbsp;있다.\r\n    						'},{T:1,N:'br'},{T:3,text:'\r\n    						또한,&nbsp;이&nbsp;값은&nbsp;getWidgetInfo나&nbsp;exportWidgets&nbsp;시&nbsp;\'params\'라는&nbsp;속성으로&nbsp;추출된다.\r\n    						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						threshold\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						widgetContainer의&nbsp;가로&nbsp;사이즈가&nbsp;threshold보다&nbsp;작아지면,&nbsp;하나의&nbsp;칼럼에&nbsp;위젯들을&nbsp;나열한다.\r\n    						'},{T:1,N:'br'},{T:3,text:'\r\n    						또한,&nbsp;threshold를&nbsp;넘었을&nbsp;경우&nbsp;move와&nbsp;resize가&nbsp;불가능해진다.\r\n    						'},{T:1,N:'br'},{T:3,text:'\r\n    						모바일&nbsp;편의성을&nbsp;위한&nbsp;옵션으로,&nbsp;설정하지&nbsp;않았을&nbsp;경우&nbsp;widgetContainer의&nbsp;사이즈가&nbsp;작아져도&nbsp;위젯들은&nbsp;원래의&nbsp;위치에&nbsp;렌더된다\r\n    						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						unitHeightPixel\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						widgetContainer의&nbsp;단위&nbsp;높이의&nbsp;픽셀값.&nbsp;unitHeightPixel은&nbsp;height&nbsp;===&nbsp;1&nbsp;인&nbsp;widget의&nbsp;실제&nbsp;높이가&nbsp;된다.\r\n    						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						verticalMargin\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						widget간의&nbsp;수직&nbsp;마진의&nbsp;픽셀값.\r\n    						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						widgetMove\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						widget들의&nbsp;이동&nbsp;가능&nbsp;여부.\r\n    						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						widgetResize\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						widget들의&nbsp;리사이징&nbsp;가능&nbsp;여부.\r\n    						'},{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'03. CSS Overriding',class:''}}]},{T:1,N:'xf:group',A:{id:'',class:'tblbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'wq_tb w2tb tbl'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:20%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'Class'}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'Description'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'w2widget'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'widget&nbsp;아이템을&nbsp;감싸는&nbsp;영역'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						w2widget_title\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						widget&nbsp;title영역\r\n    						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						w2widget_content\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						widget&nbsp;contents영역\r\n    						'},{T:1,N:'w2:attributes'}]}]}]}]}]}]}]}]})
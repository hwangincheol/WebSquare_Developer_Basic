# WebSquare_Developer_Basic
웹스퀘어 개발자 과정  - 기본 온라인 과정

인스웨이브 공식 홈페이지에서 웹스퀘어 개발자 과정(기본 온라인 과정)을 교육 신청하여 교육을 수료함.
  
- 인스웨이브 공식 홈페이지 웹스퀘어 교육 신청 : https://wtech.inswave.kr/websquare/websquare.html?w2xPath=/cm/xml/index.xml&inPath=/ui/edu/eduList.xml
- 개발자 과정 유튜브 교육 녹화본 : https://www.youtube.com/playlist?list=PL7a9HhkvOVb09T_2Xdxs4sPgyDjkGlT9G
  
## 학습 내용
- WebSquare Studio를 사용하여 예제 학습
- 기본과정 교재 : WebSquare_Developer_Basic/WRE/WebContent/edu/docs/WebSquare5_developer_basic_SP5.pdf

<br>

- 예제 : WebSquare_Developer_Basic/WRE/WebContent/edu/training1_gridView.xml

![1](https://github.com/user-attachments/assets/be4ff109-137a-4178-abcc-8511fa7b297c)

![2](https://github.com/user-attachments/assets/895dfbeb-9879-4ecb-b44c-b410d10d0bc8)
조회 버튼을 누를시에 연결된 데이터를 불러옴.

![4](https://github.com/user-attachments/assets/a7724657-ea4a-46b5-a79b-43bafca443c4)
![3](https://github.com/user-attachments/assets/4deda87a-2e67-41c0-975f-fdb18a8da114)
1. 그리드 뷰에서 각각의 row를 선택할 때 마다 아래쪽에 마스터-디테일 구조가 나타남. <br>
1-2. 웹스퀘어의 그리드 뷰가 각각의 row 인덱스를 클릭할때마다 해당하는 단건의 데이터를 가상으로 만들고, 가상의 데이터와 테이블을 연결해주는 기능이 있음. (DataList를 드래그해서 바인딩해주면 됨)
2. Property 속성 > rowStatusVisible 값을 true로 설정하여 수정되었을 경우 표시를 남김 (rowStatusHeaderValue로 상태 이름 지정)
3. 열을 추가해서 해당 열 헤더, 바디에 inputType을 checkbox로 바꾼다음, 연결되는 DataList에 CHK라는 행 추가해서 해당 바디에 id값을 CHK로 선택. <br>
3-2. 내가 만든 데이터 컬럼의 값이 바뀔때 상태값을 건드리지 않으려면 Outline > Header > 신규로 만든 데이터 컬럼을 선택 > Property 속성 > ignoreStatus 값을 true로 설정. (체크 용도로 사용하는 컬럼은 꼭 설정 해야함)
4. Property 속성 > customFormatter 값을 함수 형태로 성별에 따라 사번 색상이 다르게 코드 작성. 해당 기능은 값을 체크해서 스타일을 변경할 때 자주 사용함(데이터 값을 절대 변경하지 말것)
5. Property 이벤트 > onafteredit 값을 스크립트 눌러서 코드를 작성. 이름이 편집모드에 들어갔을때만 색상을 파란색으로 변경.
6. 그리드 뷰의 컬럼은 inputType 기본값이 text라서 지금과 같은 코드성 데이터를 사용할때에는 select나 radio, combo같이 필요에따라 수정. (select처럼 선택해서 사용할 시 더블 클릭해서 설정 > 데이터객체 연결) <br>
6-2. viewType을 icon으로 바꿔주면서 선택이 가능한걸 화면을 통해 보여줌.
7. 마찬가지로 inputType 값을 calendar로 수정. viewType도 icon으로 수정.

<br>
(추가 그리드 속성 설정) 
- 그리드 공간 안남게 채워주는 역할 : autoFit 값을 allColumn 통해 균등하게 분배
- 웹 크기를 줄였을 때 특정 사이즈 부터 적용 하지 않을 때 : autoFitMinWidth 기본값은 400px, 넉넉하게 900px으로 설정 (autoFit 사용 시 autoFitMinWidth도 같이 적용하는게 좋음)
- 컬럼을 움직이게 할때 : columnMove 값을 true로 하여 드래그로 컬럼을 움직이게 할 수 있음.
- 그리드의 헤더를 더블 클릭해서 정렬 : sortable 값을 true (컨트롤키를 눌러 멀티sort 가능, sort 설정 시 개별 헤더에 설정 가능)
- 그리드 뷰의 순번을 적용하고자 할때 : rowNumVisible 값을 true로 설정하면 순번에 해당하는 항목이 자동 생성 (rowNumHeaderValue로 순번 이름 지정)
- 이름 컬럼 헤더에 필터 적용 : 헤더에 useFilter 값을 true, 그리드에서 useFilterList 값을 true
- 클릭해서 데이터 수정 : editModeEvent 기본값은 더블클릭. 편의상 원클릭으로 수정.
- 탭 키를 사용하여 편집모드로 적용 : keyMoveEditMode 값을 true
- 마지막 컬럼에서 아랫줄로 제어 하고 싶을 때 : focusFlow 값을 linear
- 화면에 보여주는 행 수 조절 : visibleRowNum 값을 원하는 값으로 (보통은 10 ~ 15개 사용, all로 설정 X)
- 우편 번호 컬럼에 포멧 설정 : displayFormat 값을 ###-###으로 설정. (displayFormat 말고 displayFormatter 값을 통해 함수의 형태로 설정이 가능함)

<br>
(추가 그리드 이벤트 설정) 
- 사번 컬럼을 더블클릭 했을때 alert창 띄우기 : oncelldbclick 값을 스크립트 눌러서 alert 띄우는 함수 작성.
- outline > Head > DataColeection > DataList(내가 설정한 데이터) 클릭 후 Property 이벤트 > ondataload, oninsertrow, onremoverow 값을 함수를 통해 총 건수 구하는 스크립트 작성
- 마찬가지로 행추가, 행삭제, 다중삭제, 초기화 등 버튼 클릭하고 우클릭 > 이벤트 설정을 통해 스크립트 작성후 동작 설정. (delete와 달리 remove는 진짜로 지워버림. CRUD를 보통 한꺼번에 처리해서 delete를 많이 씀)
- 다운로드는 스크립트 .advancedExcelDownload([]); 에서 [] 처럼 빈상태면 그리드 보이는 화면 그대로 다운로드 됨.
- 업로드는 엑셀에서 라벨로 나오기때문에 엉뚱하게 올라감. 그래서 option객체를 만들고 헤더가 있으니 option.headerExist = "1"; option.type = "1"; .advancedExcelUpload(option); 처럼 설정.
- 그리드 뷰 선택 > 도움말(Help) > API > 밑으로 내리다보면 advancedExcelDownload( options, infoArr ) 부분이 있는데 참고하면 좋음.

<br>



[Certification.pdf](https://github.com/user-attachments/files/21490839/Certification.pdf)





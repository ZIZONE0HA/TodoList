
# 👽Alien TodoList  


> 지구를 침략하기 위해 우주에서 내려온 왹져.👾   
> 차근차근 계획을 세워 지구를 내 손바닥 위에...!🫱🌏🫲

 <br/><br/>  
   
📅 작업 기간 : 2024.10.23 ~ 2024.10.25 (총 3 일)  
🔠 사용언어 및 기 : Html, Css, Javascript, React, Vercel  
🔥 목표 : 리액트 공부 및 TodoList 페이지 구현. 그리고 최대한 귀엽게 만들기.  

<br/>


## 구현 동작

**[기본화면]**   
- 저장된 일정 데이터가 하나도 없을 때 보여지는 기본화면입니다.   
- 상단에서 오늘의 날짜를 확인 할 수 있고 투두 리스트 부분에 "👾 Try adding a new Todo!" 라는 문구가 보입니다.

![image](https://github.com/user-attachments/assets/41135800-a650-40fb-be56-a26b9781fae7)

<br/>

**[일정 추가]**   
- 아무것도 입력하지 않은 채로 Add 버튼을 누르면 입력되지 않고, input 요소에 focus됩니다.   
- Enter 키를 눌러서 입력 가능합니다.   
- 투두 리스트에 "👾 Try adding a new Todo!" 라는 문구가 사라지고 일정이 추가된 시간과 함께 일정이 추가됩니다.   
- 동시에 할 일 갯수를 표시한 To do의 숫자가 올라갑니다.

![일정등록](https://github.com/user-attachments/assets/adac5e5a-14e1-4a1e-98ca-0d71235bb3e6)

<br/>

**[스크롤]**   
- 일정 갯수 이상의 일정이 추가되면 스크롤 바가 활성화 됩니다.

![스크롤](https://github.com/user-attachments/assets/5b870304-72b9-42c0-be55-8cd75fa3cfee)

<br/>

**[일정 체크 및 보기설정]**    
- 완료한 일정의 checkbox에 체크를 하면, 가운데 선이 그어집니다.
- 전체 일정 / 완료 일정 / 남은 일정을 필터링하여 확인 할 수 있습니다.
  
![일정체크필터링](https://github.com/user-attachments/assets/77edaf30-9272-4f09-8495-bc78450bcb59)

<br/>

**[검색]**   
- 대소문자 구분 없이 검색이 가능합니다.
- 전체 일정 / 완료 일정 / 남은 일정 각각의 상태에서 검색이 가능합니다.
- 검색한 일정이 없을 경우 일정 리스트에 "👻 There is no search result"라는 문구가 나타납니다.

![검색](https://github.com/user-attachments/assets/34a21b5e-707d-48aa-a0c4-314ff2b2f866)

<br/>

**[일정 삭제]**    
- x버튼을 눌러 일정을 삭제할 수 있습니다.

![삭제](https://github.com/user-attachments/assets/5a6dbdf2-e536-4884-89f6-2aab92c466f5)

<br/>

**[일정 전체 삭제]** 
- Delete All 버튼을 누르면 정말 삭제를 원하는지 재확인을 위한 창을 띄운 후 수락하면 모든 일정이 삭제됩니다.   
![전체삭제](https://github.com/user-attachments/assets/e04327fd-885c-48d7-9ced-f30a6e355269)

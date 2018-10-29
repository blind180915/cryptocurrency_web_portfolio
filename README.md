# cryptocurrency_web_portfolio
암호화폐 웹 포트폴리오

## 개발환경

* front
  * HTML, CSS, JavaScript, TypeScript
  * Angular
  * Bootstrap
  * Chart.js
* back
  * MySQL
  * JDBC, MyBatis
  * Spring(java)
* tool
  * eclipse
  * visual studio code
  
## 프로젝트 계획

* 각 거래소 API 연동 및 데이터 저장 (Bithumb, Upbit)
* 회원 가입, 로그인, 관심 종목, 게시판
* 현재 시세
* 상세 보기 Chart.js를 사용하여 그래프 나타 내기
* 게시판 크롤링을 통해 다른 사이트 정보 모아오기

## 설명

### 로그인 화면
<img width="1280" alt="2018-10-29 1 56 57" src="https://user-images.githubusercontent.com/43274580/47630172-b002b900-db82-11e8-988c-a81233a7bcc6.png">

* 이메일과 비밀번호를 통해 로그인을 할 수 있는 화면입니다.
* 이메일과 비밀번호가 일치하지 않으면 경고창이 나타납니다.

### 회원 가입 화면
<img width="1280" alt="2018-10-29 1 57 16" src="https://user-images.githubusercontent.com/43274580/47630188-c4df4c80-db82-11e8-9b85-42fa019bbd35.png">

* 이름, 이메일, 비밀번호, 비밀번호 확인을 입력하면 회원가입을 할 수 있는 화면입니다.
* 유효성 검사를 통해 입력 되지 않았거나 틀린 정보가 있다면 경고창이 나타납니다.

### 현재 시세 화면
<img width="1280" alt="2018-10-29 1 57 25" src="https://user-images.githubusercontent.com/43274580/47630197-ce68b480-db82-11e8-962b-dcf2785c0b46.png">

* Bithumb, Upbit API를 통해 제공해주는 암호화폐 시세 정보를 보여주고 상승률을 표시한 화면입니다.
* 시세가 상승한 정보는 파란색 시세가 하락한 정보는 빨간색으로 표시합니다. 
* 실시간으로 데이터를 수집하여 가장 최신 정보를 보여 줍니다.

### 정보 게시판 화면
<img width="1280" alt="2018-10-29 1 57 28" src="https://user-images.githubusercontent.com/43274580/47630245-07088e00-db83-11e8-9499-78c5710054d2.png">

* http://cointalk.co.kr/bbs/board.php?bo_table=beginner 커뮤니티에 있는 데이터 정보를 크롤링하여 정보 게시판에 추가하였고, 사용자도 직접 적을 수 있도록 만든 정보 게시판 화면입니다. 

### 내 관심 종목 화면
<img width="1280" alt="2018-10-29 1 57 36" src="https://user-images.githubusercontent.com/43274580/47630256-14257d00-db83-11e8-979e-bb6b60df9bea.png">

<img width="1280" alt="2018-10-29 1 57 39" src="https://user-images.githubusercontent.com/43274580/47630265-1daee500-db83-11e8-87a6-a410061fd6e8.png">

* Chart.js를 사용하여 관심 종목으로 설정한 암호화폐 시세를 그래프로 보여주고 각 거래소 별로 저렴한 시세에 사용자가 거래를 할 수 있도록 만든 화면입니다.


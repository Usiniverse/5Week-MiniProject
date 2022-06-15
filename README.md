# 🎋 항대숲(항해 대나무 숲) - 1조 미니프로젝트

## 1. 역할 배분
 #### 기준 : 기능 별 역할 배분
* 이진희 : 유저 관련 기능(회원가입, 로그인, 좋아요 기능, 게시글 검색 기능, 서버 배포)
* 강유신 : 게시글 관련 기능(게시글 작성/조회/수정/삭제)
* 이재근 : 댓글 관련 기능(댓글 작성/조회/수정/삭제)

-------------------

## 2. MVC 모델
![2022-06-16 01;39;44](https://user-images.githubusercontent.com/96379177/173880550-3afdabf6-384f-44c9-a444-6e4ff2b77e50.PNG)


* M : model로 데이터를 처리한다. 우리는 이 것을 스키마로 배웠고 Model안에 데이터 처리 기준인 Schema를 작성하였다.
Schema에는 String일지, Number일지, 자료형 또한 정해야한다.

* V : view에서 우리에게 보여지는 곳을 처리한다.
주로 jsp파일로 이루어져서 app.js 혹은 랜더링 라우터를 활용하여 서버와 연결한다.
이번 미니프로젝트는 view는 작성하지 않았다.

* C : Controller는 중간에서 제어하는 역할을 한다.
API의 기능을 여기서 구현하였으며 유저 관련 기능, 게시물 기능, 댓글 기능, 좋아요 기능을 나누어 컨트롤러로 나누어 구현했다.

* 장점 : 분업 용이 / 기능에 따른 분리로 인해 유지보수가 편리함 / 프레임워크, DB 등의 확장성이 뛰어남
* 단점 : 구조가 복잡하여 초기 진입 어려움 / 개발 시간의 증가로 비용이 상승

------------------

## 3. 파일 분리
![KakaoTalk_20220616_020000537](https://user-images.githubusercontent.com/96379177/173884108-df213501-3545-4622-860d-0e7d00752f4a.jpg)


------------------
## 4. 기능 구현
* 브라우저에서 유저가 API 호출을 하면 router를 통해 controller에서 실행된다.
* model 내 스키마 및 DB와의 연동을 통해 데이터를 조회하고 수정하게 된다. 
* 필요에 따라 request를 parmas로 받을지, query로 받을지, schema를 통한 body로 받을지 정했다.
* view는 프론트와 res, req ID값을 맞추어 데이터를 주고 받게끔 했다.
* 인증미들웨어(usercontroller > checkMe, authMiddleware)의 역할을 이해하였고, 로컬 스토래지 안에 어떤 정보를 담아서 전달해야하는지 확인하고 이에 따라 발생하는 에러 또한 수정하였다.
* bcrypt를 활용하여 패스워드를 암호화했다.
* Joi를 활용하여 회원가입에서 필요한 아이디, 패스워드의 형식을 설정했다.
* moment를 활용하여 GMT 시간을 한국 시간으로 출력했다.
* 기능에 따라 파일을 분류한 만큼 각각 export, router로 연결하여 가독성을 높였다.

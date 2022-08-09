// DOM 요소 접근
const inputForm = document.querySelector("#inputForm"); // form요소
const inputTitle = document.querySelector("#inputForm #title"); // input title
console.log(inputTitle);
const inputContent = document.getElementById("#inputForm textarea");
console.log(inputContent);
// submit 기본기능 제어 + 사용자 입력값 출력
inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const PostTitle = inputTitle.value;
  console.log(PostTitle);
  const PostContent = inputContent.value;
  console.log(PostContent);
});

// 제목 본문 입력값 받아서 객체로 저장하기
// 게시글 객체 형식
// 객체 하나 추가할 때 id값 +1해주기  삭제할 때 id값 -1 해주기
const EachPost = {
  id: 1,
  title: "",
  content: "",
  comment: [],
  commentCount: 0,
  like: Boolean,
  saved: Boolean,
  userName: "",
};

// 게시글 한개인 객체하나를 게시글 데이터베이스에 저장하기

// h1 요소  title 데이터 가져와서 렌더링하기
const majorString = window.localStorage.getItem("major");

// 가져온 JSON 문자열을 객체로 변환
const majorList = JSON.parse(majorString);
console.log(majorList.engineering);

const h1Title = document.querySelector("#majorTitle");
console.log(h1Title);
h1Title.innerText = majorList.engineering[0];

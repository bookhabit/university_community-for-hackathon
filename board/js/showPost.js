// getItem localStoarge에 저장한 데이터를 가져오기
const PostListString = window.localStorage.getItem("postList");

// 가져온 JSON 문자열을 객체로 변환
const PostList = JSON.parse(PostListString);
// console.log(PostList);
// console.log(PostList[0].comment.length);

// 클릭된 게시글의 index 가져와서 데이터배열의 index에넣어주기
// location.href  에서 URL과 함께 보낸 데이터 받기
// 정규식 표현을 이용한 함수
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results == null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var POSTINDEX = getParameterByName("type"); // 1060192
console.log("POSTINDEX = " + POSTINDEX);

// 제목, 본문, 댓글에  객체형식으로 innerText로 넣어보기
const title = document.querySelector(".BoardDetail .title");
const content = document.querySelector(".BoardDetail .content");
const replComment = document.querySelector(".replDiv .comment");

title.innerHTML = PostList[POSTINDEX].title; // 제목
content.innerHTML = PostList[POSTINDEX].content; // 본문

// 부모요소 만들기   - 저장되어 있는 데이터로 DOM요소에 추가해서 화면에 출력

// 댓글만 새로 생성하는 식으로 하면 됨
// 여기서 0은 클릭된 게시글의 객체하나만 보여주기 때문에 PostList의 인덱스값이 정해져있다
if (PostList[POSTINDEX].comment.length > 0) {
  // 댓글이 1개라도 있다면 출력
  for (var i = 0; i < PostList[POSTINDEX].comment.length; i++) {
    const p = document.createElement("p");
    const pText = document.createTextNode(PostList[POSTINDEX].comment[i].text);
    p.appendChild(pText);
    replComment.appendChild(p);
  }
}

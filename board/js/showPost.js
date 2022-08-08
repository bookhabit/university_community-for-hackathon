// getItem localStoarge에 저장한 데이터를 가져오기
const PostListString = window.localStorage.getItem("postList");

// 가져온 JSON 문자열을 객체로 변환
const PostList = JSON.parse(PostListString);
console.log(PostList);
console.log(PostList[0].comment.length);

// 클릭된 게시글의 index를 가져오는 방법 필요

// 제목, 본문, 댓글에  객체형식으로 innerText로 넣어보기
const title = document.querySelector(".BoardDetail .title");
const content = document.querySelector(".BoardDetail .content");
const replComment = document.querySelector(".replDiv .comment");

title.innerHTML = PostList[0].title; // 제목
content.innerHTML = PostList[0].content; // 본문

// 부모요소 만들기   - 저장되어 있는 데이터로 DOM요소에 추가해서 화면에 출력

// 댓글만 새로 생성하는 식으로 하면 됨
// 여기서 0은 클릭된 게시글의 객체하나만 보여주기 때문에 PostList의 인덱스값이 정해져있다
if (PostList[0].comment.length > 0) {
  for (var i = 0; i < PostList[0].comment.length; i++) {
    const p = document.createElement("p");
    const pText = document.createTextNode(PostList[0].comment[i].text);
    p.appendChild(pText);
    replComment.appendChild(p);
  }
}

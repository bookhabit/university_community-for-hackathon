// getItem localStoarge에 저장한 데이터를 가져오기
const PostListString = window.localStorage.getItem("postList");

// 가져온 JSON 문자열을 객체로 변환
const PostList = JSON.parse(PostListString);
console.log(PostList);

// 제목, 본문, 댓글에  객체형식으로 innerText로 넣어보기
const title = document.querySelector(".BoardDetail .title");
const content = document.querySelector(".BoardDetail .content");
const repl = document.querySelector(".replDiv .repl");
console.log(title, content, repl);

title.innerHTML = PostList[0].title;
content.innerHTML = PostList[0].content;
repl.innerHTML = PostList[0].comment[0].text;

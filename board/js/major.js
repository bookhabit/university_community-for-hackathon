// 페이지 이동
function goShowPost() {
  location.href = "ShowPost.html";
}
function goWritePost() {
  location.href = "WritePost.html";
}
// localStorage에 저장되어있는 게시글 배열가져와서 게시글 목록 렌더링
// getItem localStoarge에 저장한 데이터를 가져오기
const PostListString = window.localStorage.getItem("postList");

// 가져온 JSON 문자열을 객체로 변환
const PostList = JSON.parse(PostListString);
// console.log(PostList);

// 제목, 본문, 댓글에  객체형식으로 innerText로 넣어보기
const post1 = document.querySelector("#post1");
const post2 = document.querySelector("#post2");
const post3 = document.querySelector("#post3");

post1.innerHTML = PostList[0].title;
post2.innerHTML = PostList[1].title;
post3.innerHTML = PostList[2].title;

// navigate(`${"/post/" + postID}`);

// pagination

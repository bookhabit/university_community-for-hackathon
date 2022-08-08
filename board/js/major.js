// 페이지 이동
function goWritePost() {
  location.href = "WritePost.html";
}

// li onclick으로 이벤트 객체 받은 문자열앞자리로 index를 넘겨주기
const showPost = (e) => {
  // console.log(e.target.innerText[0]);
  const POSTINDEX = e.target.innerText[0] - 1; //[0] 인덱스는 첫번째 문자를 뜻하고 화면에 출력할 때 +1을 해줬기 떄문에 실제데이터에 접근할 때는 -1을 해줘야함
  console.log(POSTINDEX);
  location.href = "showPost.html?type=" + POSTINDEX;
};

// localStorage에 저장되어있는 게시글 배열가져와서 게시글 목록 렌더링
// getItem localStoarge에 저장한 데이터를 가져오기
const PostListString = window.localStorage.getItem("postList");

// 가져온 JSON 문자열을 객체로 변환
const PostList = JSON.parse(PostListString);
// console.log(PostList);

// li에 PostList의 title을 가져와서 각각 배치시키기
// const post1 = document.querySelector("#post1");
// const post2 = document.querySelector("#post2");
// const post3 = document.querySelector("#post3");

// post1.innerHTML = PostList[0].title;
// post2.innerHTML = PostList[1].title;
// post3.innerHTML = PostList[2].title;

// li요소와  textnode 속성값 만들고 PostList의 title을 넣어서 DOM요소에 추가하기
var ul = document.querySelector("#ul"); // 게시글 목록 ul 요소에 접근 (부모요소될것)
console.log(ul);

// 텍스트 노드와 li를 PostList에 있는 만큼 생성
for (var i = 0; i < PostList.length; i++) {
  var li = document.createElement("li");
  li.addEventListener("click", showPost);
  var newPostTitle = document.createTextNode(`${i + 1}. ${PostList[i].title}`);
  li.appendChild(newPostTitle);
  ul.appendChild(li);
}

console.log(PostList.length);
// pagination

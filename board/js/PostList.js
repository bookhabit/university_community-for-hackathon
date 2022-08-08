// 임시로 만든 게시글들  (localStorage에 저장할 객체)
const tempPostList = [
  {
    id: 1,
    title: "해커톤 준비하기",
    content: "게시판 만들기 너무 어렵다",
    comment: [
      { text: "자바스크립트", userName: "이현진4" },
      { text: "리액트와 타입스크립트", userName: "이현진3" },
      { text: "html과 css", userName: "이현진2" },
    ],
    commentCount: 0,
    like: Boolean,
    saved: Boolean,
    userName: "이현진",
  },
  {
    id: 2,
    title: "수강신청 날짜 아시는 분?",
    content: "8월 9일부터 11일까지 입니다.",
    comment: [{ text: "이틀 뒤입니다....", userName: "이현진4" }],
    commentCount: 0,
    like: Boolean,
    saved: Boolean,
    userName: "이현진2",
  },
  {
    id: 3,
    title: "다들 개강 언제인가요?",
    content: "전 한달도 안남았어요ㅠㅠ",
    comment: [
      { text: "이틀 뒤입니다....", userName: "이현진3" },
      { text: "우영우 보니까 방학 끝났네", userName: "이현진7" },
    ],
    commentCount: 0,
    like: Boolean,
    saved: Boolean,
    userName: "이현진3",
  },
  {
    id: 2,
    title: "멋쟁이사자 해커톤 2주 남았다",
    content: "abcdefu~~",
    comment: [{ text: "레전드", userName: "이현진2" }],
    commentCount: 0,
    like: Boolean,
    saved: Boolean,
    userName: "이현진4",
  },
  {
    id: 2,
    title: "수강신청 날짜 아시는 분?",
    content: "8월 9일부터 11일까지 입니다.",
    comment: [{ text: "이틀 뒤입니다....", userName: "이현진4" }],
    commentCount: 0,
    like: Boolean,
    saved: Boolean,
    userName: "이현진5",
  },
];

// 객체를 JSON문자열로 변환
const PostListStrings = JSON.stringify(tempPostList);

// setItem   (key, value)
window.localStorage.setItem("postList", PostListStrings);

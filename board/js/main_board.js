// 전체게시판 더보기 버튼 > 전체게시판 게시글로 이동
const detailBtn = document.querySelector("#detailBtn");
console.log(detailBtn);

function goAllBoard() {
  location.href = "All_board.html";
}
detailBtn.addEventListener("click", goAllBoard);

// 학과 자격증 취업 > 각각 게시판페이지로 이동
const majorBtn = document.querySelector("#major");

const certificateBtn = document.querySelector("#certificate");

const employmentBtn = document.querySelector("#employment");

majorBtn.addEventListener("click", () => {
  location.href = "major.html";
});

certificateBtn.addEventListener("click", () => {
  location.href = "certification.html";
});

employmentBtn.addEventListener("click", () => {
  location.href = "employment.html";
});

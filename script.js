const questions = document.querySelectorAll(".questions");
const answers = document.querySelectorAll(".answers");

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    answers.forEach((answer, i) => {
      if (i === index) {
        if (answer.style.display === "block") {
          answer.style.display = "none";
        } else {
          answer.style.display = "block";
        }
      } else {
        answer.style.display = "none";
      }
    });
  });
});

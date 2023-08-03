const data = [
    {
      id: 1,
      question: "Which of these fish is actually a fish?",
      answers: [
        { answer: "swordfish", isCorrect: true },
        { answer: "jellyfish", isCorrect: false },
        { answer: "starfish", isCorrect: false },
        { answer: "crayfish", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "A flutter is a group of:",
      answers: [
        { answer: "bees", isCorrect: false },
        { answer: "penguins", isCorrect: false },
        { answer: "butterflies", isCorrect: true },
        { answer: "camels", isCorrect: false },
      ],
    },
    {
      id: 1,
      question: "A group of which animals is referred to as a wake?",
      answers: [
        { answer: "bats", isCorrect: false },
        { answer: "vultures", isCorrect: true },
        { answer: "ants", isCorrect: false },
      ],
    },
  ];

  const gameScreen = document.querySelector(".game")
  const resultScreen = document.querySelector(".result")
  const question = document.querySelector(".question")
  const answerContainer = document.querySelector(".answers")
  const submit = document.querySelector(".submit")
  const play = document.querySelector(".play")

  let qIndex = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let total = 0;
  let selectedAnswer = 0;

  // reset after click play again button
  const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion(qIndex); //or use [0] is also fine
  };

  play.addEventListener("click", ()=> {
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain();
  });

  //score management
  const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";

    resultScreen.querySelector(".correct").textContent = 
    `Correct Answer: ${correctCount}`

    resultScreen.querySelector(".wrong").textContent = 
    `Wrong Answer: ${wrongCount}`

    resultScreen.querySelector(".score").textContent = 
    `Your score: ${(correctCount - wrongCount) * 10}`
  }


  //question management
  const showQuestion = (qNumber) => {
    if(qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question
    answerContainer.innerHTML = data[qNumber].answers.map((item, index) => 
        `
        <div class="answer" >
            <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
            <label for="1">${item.answer}</label>
        </div>

        `
    ).join("");

    selectAnswer()
  };

  //answer management
  const selectAnswer = () => {
    answerContainer.querySelectorAll("input").forEach(el=>{
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        });
    });
  };

  const submitAnswer = () => {
    submit.addEventListener("click", ()=> {
        if(selectedAnswer !== null) {
            selectedAnswer === "true" ? correctCount++ : wrongCount++;
            qIndex++
            showQuestion(qIndex)
        } else alert("Please select an answer")
        
    });
  };

  showQuestion(qIndex);
  submitAnswer();
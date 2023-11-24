const quizData = [
    {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
    },
    {
      question: "What is used to add interactivity to a website?",
      a: "HTML",
      b: "CSS",
      c: "JavaScript",
      d: "XML",
      correct: "c",
    },
    {
      question: "Which object is the main entry point to all client-side JavaScript features and APIs?",
      a: "Document",
      b: "Window",
      c: "Element",
      d: "Response",
      correct: "b",
    },
    {
      question: "Which method is used to write a message to the console for debugging purposes?",
      a: "console.write()",
      b: "console.log()",
      c: "console.output()",
      d: "console.debug()",
      correct: "b",
    },
    {
      question: "Which of the following is a looping structure in JavaScript?",
      a: "if",
      b: "while",
      c: "forEach",
      d: "all of the above",
      correct: "d",
    },
    {
      question: "How do you declare a JavaScript variable?",
      a: "var myVariable;",
      b: "variable myVariable;",
      c: "v myVariable;",
      d: "let myVariable;",
      correct: "a",
    },
    {
      question: "Which symbol is used to denote an array in JavaScript?",
      a: "{}",
      b: "()",
      c: "||",
      d: "[]",
      correct: "d",
    },
    {
      question: "How do you create a function in JavaScript?",
      a: "function:myFunction()",
      b: "function myFunction()",
      c: "function = myFunction()",
      d: "function => myFunction()",
      correct: "b",
    },
    {
      question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
      a: "<script href='xxx.js'>",
      b: "<script name='xxx.js'>",
      c: "<script src='xxx.js'>",
      d: "<script file='xxx.js'>",
      correct: "c",
    }
  ];
  
  const quiz = document.getElementById('quiz');
  const answerEls = document.querySelectorAll('.answer');
  const questionEl = document.getElementById('question');
  const a_text = document.getElementById('a_text');
  const b_text = document.getElementById('b_text');
  const c_text = document.getElementById('c_text');
  const d_text = document.getElementById('d_text');
  const submitBtn = document.getElementById('submit');
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  
  function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  function deselectAnswers() {
    answerEls.forEach((answerEl) => {
      answerEl.checked = false;
    });
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `
              <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
              <button onclick="location.reload()">Reload</button>
            `;
      }
    }
  });
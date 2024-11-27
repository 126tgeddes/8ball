document.getElementById('ask-button').addEventListener('click',ask);


function ask() {
    const answerDiv = document.getElementById("answer");
    document.getElementById("ask-button").classList.add('shake');
    const randomIndex = Math.floor(Math.random() * responses.length);
    setTimeout(showAnswer,2000)
  }


  function showAnswer(){
    const randomIndex = Math.floor(Math.random() * responses.length);
    let answerDiv=document.getElementById('answer');
    answerDiv.textContent = responses[randomIndex];
    document.getElementById("ask-button").classList.remove('shake');

  }

const responses = [
    "Yes, definitely",
    "It is certain",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  
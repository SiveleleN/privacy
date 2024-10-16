// Function to display the next question
function nextQuestion(nextId) {
    // Hide all questions
    const allQuestions = document.querySelectorAll('.question');
    allQuestions.forEach(question => {
        question.style.display = 'none';
    });

    // Show the next question
    const nextQuestion = document.getElementById('question' + nextId);
    if (nextQuestion) {
        nextQuestion.style.display = 'block';
    }
}

// Function to download the answers as a text file
function downloadAnswers(answers) {
    const blob = new Blob([answers], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Boyfriend_Answers.txt"; // Filename
    link.click();
}

// Function to save answers to local storage
function saveToLocalStorage() {
    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    const q3 = document.getElementById('q3').value;
    const q4 = document.getElementById('q4').value;
    const q5 = document.getElementById('q5').value;
    const q6 = document.getElementById('q6').value;
    const q7 = document.getElementById('q7').value;

    localStorage.setItem('q1', q1);
    localStorage.setItem('q2', q2);
    localStorage.setItem('q3', q3);
    localStorage.setItem('q4', q4);
    localStorage.setItem('q5', q5);
    localStorage.setItem('q6', q6);
    localStorage.setItem('q7', q7);
}

// Load answers from local storage
function loadFromLocalStorage() {
    const q1 = localStorage.getItem('q1');
    const q2 = localStorage.getItem('q2');
    const q3 = localStorage.getItem('q3');
    const q4 = localStorage.getItem('q4');
    const q5 = localStorage.getItem('q5');
    const q6 = localStorage.getItem('q6');
    const q7 = localStorage.getItem('q7');

    if (q1) document.getElementById('q1').value = q1;
    if (q2) document.getElementById('q2').value = q2;
    if (q3) document.getElementById('q3').value = q3;
    if (q4) document.getElementById('q4').value = q4;
    if (q5) document.getElementById('q5').value = q5;
    if (q6) document.getElementById('q6').value = q6;
    if (q7) document.getElementById('q7').value = q7;
}

// Load answers when the page loads
window.onload = loadFromLocalStorage;

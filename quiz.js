// Pathophysiology Quiz Questions
const quizQuestions = [
    {
        question: "What is the primary pathophysiological mechanism of type 1 diabetes mellitus?",
        answers: [
            "Insulin resistance in peripheral tissues",
            "Autoimmune destruction of pancreatic beta cells",
            "Decreased insulin receptor sensitivity",
            "Excessive glucagon secretion"
        ],
        correctAnswer: 1,
        explanation: "Type 1 diabetes is caused by autoimmune destruction of pancreatic beta cells, leading to absolute insulin deficiency. This differs from type 2 diabetes, which involves insulin resistance."
    },
    {
        question: "Which mechanism best explains the development of atherosclerosis?",
        answers: [
            "Viral infection of endothelial cells",
            "Accumulation of lipids and inflammatory response in arterial walls",
            "Genetic mutation causing vessel wall weakness",
            "Decreased blood viscosity"
        ],
        correctAnswer: 1,
        explanation: "Atherosclerosis develops through accumulation of lipids (especially LDL cholesterol) in arterial walls, triggering an inflammatory response that leads to plaque formation."
    },
    {
        question: "What is the underlying pathophysiology of chronic obstructive pulmonary disease (COPD)?",
        answers: [
            "Acute bronchial constriction",
            "Alveolar hypoventilation only",
            "Chronic inflammation leading to airflow limitation and tissue destruction",
            "Pulmonary embolism"
        ],
        correctAnswer: 2,
        explanation: "COPD is characterized by chronic inflammation of the airways and lung parenchyma, leading to irreversible airflow limitation, emphysema (alveolar destruction), and chronic bronchitis."
    },
    {
        question: "In acute kidney injury, what is the most common cause of prerenal azotemia?",
        answers: [
            "Glomerulonephritis",
            "Urinary tract obstruction",
            "Decreased renal perfusion due to hypovolemia",
            "Nephrotoxic drugs"
        ],
        correctAnswer: 2,
        explanation: "Prerenal azotemia results from decreased renal perfusion, most commonly due to hypovolemia (from dehydration, hemorrhage, or heart failure), which reduces glomerular filtration rate."
    },
    {
        question: "What is the pathophysiological basis of rheumatoid arthritis?",
        answers: [
            "Bacterial infection of joints",
            "Autoimmune inflammation of synovial joints",
            "Degenerative cartilage disease",
            "Crystal deposition in joints"
        ],
        correctAnswer: 1,
        explanation: "Rheumatoid arthritis is an autoimmune disease where the immune system attacks synovial joints, causing chronic inflammation, synovial proliferation, and eventual joint destruction."
    },
    {
        question: "Which pathophysiological change occurs in hypertension that leads to left ventricular hypertrophy?",
        answers: [
            "Decreased cardiac output",
            "Increased afterload requiring greater contractile force",
            "Reduced preload",
            "Decreased systemic vascular resistance"
        ],
        correctAnswer: 1,
        explanation: "Chronic hypertension increases afterload (the resistance the left ventricle must overcome to eject blood), leading to compensatory left ventricular hypertrophy as the heart muscle thickens to generate more force."
    },
    {
        question: "What is the primary mechanism of neuronal damage in ischemic stroke?",
        answers: [
            "Hemorrhage into brain tissue",
            "Excitotoxicity and energy failure due to reduced blood flow",
            "Autoimmune attack on neurons",
            "Demyelination of nerve fibers"
        ],
        correctAnswer: 1,
        explanation: "Ischemic stroke causes neuronal damage primarily through excitotoxicity (excessive glutamate release) and energy failure (ATP depletion) due to inadequate blood supply and oxygen deprivation."
    },
    {
        question: "In cirrhosis, what pathophysiological mechanism leads to portal hypertension?",
        answers: [
            "Decreased blood volume",
            "Increased hepatic blood flow",
            "Fibrosis causing increased resistance to blood flow through the liver",
            "Cardiac dysfunction"
        ],
        correctAnswer: 2,
        explanation: "Cirrhosis causes hepatic fibrosis and architectural distortion, which increases resistance to blood flow through the liver, leading to elevated portal venous pressure (portal hypertension)."
    },
    {
        question: "What is the underlying pathophysiology of asthma exacerbations?",
        answers: [
            "Chronic infection",
            "Airway inflammation and bronchial hyperresponsiveness",
            "Alveolar destruction",
            "Pulmonary fibrosis"
        ],
        correctAnswer: 1,
        explanation: "Asthma involves chronic airway inflammation and bronchial hyperresponsiveness. During exacerbations, triggers cause bronchospasm, increased mucus production, and airway edema, leading to airflow obstruction."
    },
    {
        question: "Which pathophysiological mechanism best explains the anemia seen in chronic kidney disease?",
        answers: [
            "Increased red blood cell destruction",
            "Iron deficiency alone",
            "Decreased erythropoietin production by the kidneys",
            "Bone marrow suppression from infection"
        ],
        correctAnswer: 2,
        explanation: "The kidneys produce erythropoietin (EPO), which stimulates red blood cell production. In chronic kidney disease, decreased EPO production leads to reduced erythropoiesis and anemia."
    }
];

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let selectedAnswer = null;

// DOM Elements
const quizContainer = document.getElementById('quizContainer');
const resultsContainer = document.getElementById('resultsContainer');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const feedback = document.getElementById('feedback');
const nextButton = document.getElementById('nextButton');
const retryButton = document.getElementById('retryButton');
const currentQuestionElement = document.getElementById('currentQuestion');
const totalQuestionsElement = document.getElementById('totalQuestions');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('finalScore');
const finalTotalElement = document.getElementById('finalTotal');
const resultsMessageElement = document.getElementById('resultsMessage');
const resultsPercentageElement = document.getElementById('resultsPercentage');
const backButton = document.getElementById('backButton');

// Initialize Quiz
function initQuiz() {
    // Shuffle questions for randomization
    questions = shuffleArray([...quizQuestions]);
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    
    // Update UI
    totalQuestionsElement.textContent = questions.length;
    scoreElement.textContent = score;
    
    // Show quiz container, hide results
    quizContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    
    // Load first question
    loadQuestion();
}

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Load Question
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    selectedAnswer = null;
    
    // Update question number
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    
    // Set question text
    questionText.textContent = question.question;
    
    // Clear previous answers and feedback
    answersContainer.innerHTML = '';
    feedback.classList.add('hidden');
    nextButton.style.display = 'none';
    backButton.style.display = 'inline-block';
    
    // Create answer options
    question.answers.forEach((answer, index) => {
        const answerButton = document.createElement('button');
        answerButton.className = 'answer-option';
        answerButton.textContent = answer;
        answerButton.onclick = () => selectAnswer(index);
        answersContainer.appendChild(answerButton);
    });
}

// Select Answer
function selectAnswer(answerIndex) {
    if (selectedAnswer !== null) return; // Already answered
    
    selectedAnswer = answerIndex;
    const question = questions[currentQuestionIndex];
    const isCorrect = answerIndex === question.correctAnswer;
    
    // Update score
    if (isCorrect) {
        score++;
        scoreElement.textContent = score;
    }
    
    // Disable all answer buttons and mark selected
    const answerButtons = answersContainer.querySelectorAll('.answer-option');
    answerButtons.forEach((button, index) => {
        button.classList.add('disabled');
        if (index === answerIndex) {
            button.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
        if (index === question.correctAnswer) {
            button.classList.add('correct');
        }
    });
    
    // Show feedback
    showFeedback(isCorrect, question.explanation);
    
    // Show next button
    nextButton.style.display = 'inline-block';
    backButton.style.display = 'none';
}

// Show Feedback
function showFeedback(isCorrect, explanation) {
    feedback.classList.remove('hidden', 'correct', 'incorrect');
    feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
    
    const feedbackTitle = document.createElement('h3');
    feedbackTitle.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect';
    
    const feedbackText = document.createElement('p');
    feedbackText.textContent = explanation;
    
    feedback.innerHTML = '';
    feedback.appendChild(feedbackTitle);
    feedback.appendChild(feedbackText);
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Show Results
function showResults() {
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    const percentage = Math.round((score / questions.length) * 100);
    
    finalScoreElement.textContent = score;
    finalTotalElement.textContent = questions.length;
    resultsPercentageElement.textContent = `${percentage}%`;
    
    // Set message based on score
    let message = '';
    if (percentage >= 90) {
        message = 'Outstanding! 🌟 You have excellent knowledge of pathophysiology!';
    } else if (percentage >= 80) {
        message = 'Great job! 👏 You have a strong understanding of the material!';
    } else if (percentage >= 70) {
        message = 'Good work! 👍 Keep studying to improve further!';
    } else if (percentage >= 60) {
        message = 'Not bad! 📚 Review the material to strengthen your knowledge!';
    } else {
        message = 'Keep learning! 💪 Review the concepts and try again!';
    }
    
    resultsMessageElement.textContent = message;
}

// Restart Quiz
function restartQuiz() {
    initQuiz();
}

// Event Listeners
nextButton.addEventListener('click', nextQuestion);
if (retryButton) {
    retryButton.addEventListener('click', restartQuiz);
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', initQuiz);

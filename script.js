// --- Contenido de las Preguntas y Respuestas ---
const questions = [
    {
        question: 'Según diversos estudios, ¿cuál es la principal causa de la escasez hídrica en Chile, más allá de la sequía?',
        answers: [
            { text: 'La mala gestión del recurso, el aumento de la demanda y el sobreotorgamiento de derechos de agua.', correct: true },
            { text: 'Exclusivamente el fenómeno de El Niño y La Niña.', correct: false },
            { text: 'La evaporación natural de los embalses y lagos.', correct: false },
            { text: 'El bajo costo del agua para consumo doméstico.', correct: false }
        ]
    },
    {
        question: '¿Qué sector productivo consume la mayor cantidad de agua en Chile, representando más del 70% del total?',
        answers: [
            { text: 'La minería', correct: false },
            { text: 'La agricultura', correct: true },
            { text: 'El consumo doméstico en las ciudades', correct: false },
            { text: 'La industria manufacturera', correct: false }
        ]
    },
    {
        question: '¿A partir de qué año se intensificó la crisis hídrica en la zona central de Chile debido a la denominada "Megasequía"?',
        answers: [
            { text: '1990', correct: false },
            { text: '2000', correct: false },
            { text: '2010', correct: true },
            { text: '2020', correct: false }
        ]
    },
    {
        question: 'La disminución de los niveles de agua subterránea en Chile central se correlaciona más fuertemente con:',
        answers: [
            { text: 'El aumento del bombeo y la extracción de agua.', correct: true },
            { text: 'La disminución de las lluvias (la sequía).', correct: false },
            { text: 'El derretimiento de los glaciares.', correct: false },
            { text: 'La construcción de nuevas ciudades.', correct: false }
        ]
    },
    {
        question: 'Según la "Radiografía del Agua", ¿qué cuencas presentan una "Brecha Hídrica" extremadamente alta, donde el consumo supera la oferta disponible?',
        answers: [
            { text: 'Las cuencas de los ríos Baker y Pascua en la Patagonia.', correct: false },
            { text: 'La cuenca del río Biobío.', correct: false },
            { text: 'Las cuencas de los ríos La Ligua y Los Choros.', correct: true },
            { text: 'La cuenca del Lago Llanquihue.', correct: false }
        ]
    },
    {
        question: '¿Cuál es la diferencia principal entre "sequía" y "escasez hídrica" en el contexto chileno?',
        answers: [
            { text: 'Son sinónimos y se usan indistintamente.', correct: false },
            { text: 'La sequía es un fenómeno climático (falta de lluvia), mientras que la escasez se relaciona con una mala gestión del recurso.', correct: true },
            { text: 'La sequía afecta solo al norte y la escasez al sur.', correct: false },
            { text: 'La escasez es temporal y la sequía es permanente.', correct: false }
        ]
    },
    {
        question: '¿Desde qué década se observa una disminución sostenida en los niveles de agua subterránea en la zona central de Chile?',
        answers: [
            { text: 'La década de 1960', correct: false },
            { text: 'La década de 2000', correct: false },
            { text: 'A partir de 2015', correct: false },
            { text: 'Finales de la década de 1980', correct: true }
        ]
    },
    {
        question: 'A nivel mundial, ¿cómo se posiciona Chile en términos de riesgo hídrico según proyecciones del World Resources Institute (WRI)?',
        answers: [
            { text: 'Es considerado un país con bajo riesgo hídrico.', correct: false },
            { text: 'Se encuentra entre los 30 países con mayor riesgo hídrico.', correct: true },
            { text: 'Es el país con la mayor reserva de agua dulce del mundo.', correct: false },
            { text: 'No figura en las listas de riesgo hídrico.', correct: false }
        ]
    },
    {
        question: 'Un problema clave en la gestión del agua en Chile es el "sobreotorgamiento de Derechos de Aprovechamiento de Aguas (DAA)". ¿Qué significa esto?',
        answers: [
            { text: 'Que los derechos de agua son muy caros.', correct: false },
            { text: 'Que la cantidad de agua asignada legalmente supera la cantidad de agua realmente disponible.', correct: true },
            { text: 'Que solo el Estado puede tener derechos de agua.', correct: false },
            { text: 'Que los derechos de agua caducan cada año.', correct: false }
        ]
    },
    {
        question: '¿Qué porcentaje de la superficie de Chile está afectada por sequía, desertificación y suelo degradado?',
        answers: [
            { text: '10%', correct: false },
            { text: '25%', correct: false },
            { text: '50%', correct: false },
            { text: '76%', correct: true }
        ]
    }
];

// --- Lógica del Cuestionario ---

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Siguiente";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `¡Tu puntaje es ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Jugar de Nuevo";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
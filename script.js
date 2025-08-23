{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww26820\viewh16280\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // --- Contenido de las Preguntas y Respuestas ---\
const questions = [\
    \{\
        question: 'Seg\'fan diversos estudios, \'bfcu\'e1l es la principal causa de la escasez h\'eddrica en Chile, m\'e1s all\'e1 de la sequ\'eda?',\
        answers: [\
            \{ text: 'La mala gesti\'f3n del recurso, el aumento de la demanda y el sobreotorgamiento de derechos de agua.', correct: true \},\
            \{ text: 'Exclusivamente el fen\'f3meno de El Ni\'f1o y La Ni\'f1a.', correct: false \},\
            \{ text: 'La evaporaci\'f3n natural de los embalses y lagos.', correct: false \},\
            \{ text: 'El bajo costo del agua para consumo dom\'e9stico.', correct: false \}\
        ]\
    \},\
    \{\
        question: '\'bfQu\'e9 sector productivo consume la mayor cantidad de agua en Chile, representando m\'e1s del 70% del total?',\
        answers: [\
            \{ text: 'La miner\'eda', correct: false \},\
            \{ text: 'La agricultura', correct: true \},\
            \{ text: 'El consumo dom\'e9stico en las ciudades', correct: false \},\
            \{ text: 'La industria manufacturera', correct: false \}\
        ]\
    \},\
    \{\
        question: '\'bfA partir de qu\'e9 a\'f1o se intensific\'f3 la crisis h\'eddrica en la zona central de Chile debido a la denominada "Megasequ\'eda"?',\
        answers: [\
            \{ text: '1990', correct: false \},\
            \{ text: '2000', correct: false \},\
            \{ text: '2010', correct: true \},\
            \{ text: '2020', correct: false \}\
        ]\
    \},\
    \{\
        question: 'La disminuci\'f3n de los niveles de agua subterr\'e1nea en Chile central se correlaciona m\'e1s fuertemente con:',\
        answers: [\
            \{ text: 'El aumento del bombeo y la extracci\'f3n de agua.', correct: true \},\
            \{ text: 'La disminuci\'f3n de las lluvias (la sequ\'eda).', correct: false \},\
            \{ text: 'El derretimiento de los glaciares.', correct: false \},\
            \{ text: 'La construcci\'f3n de nuevas ciudades.', correct: false \}\
        ]\
    \},\
    \{\
        question: 'Seg\'fan la "Radiograf\'eda del Agua", \'bfqu\'e9 cuencas presentan una "Brecha H\'eddrica" extremadamente alta, donde el consumo supera la oferta disponible?',\
        answers: [\
            \{ text: 'Las cuencas de los r\'edos Baker y Pascua en la Patagonia.', correct: false \},\
            \{ text: 'La cuenca del r\'edo Biob\'edo.', correct: false \},\
            \{ text: 'Las cuencas de los r\'edos La Ligua y Los Choros.', correct: true \},\
            \{ text: 'La cuenca del Lago Llanquihue.', correct: false \}\
        ]\
    \},\
    \{\
        question: '\'bfCu\'e1l es la diferencia principal entre "sequ\'eda" y "escasez h\'eddrica" en el contexto chileno?',\
        answers: [\
            \{ text: 'Son sin\'f3nimos y se usan indistintamente.', correct: false \},\
            \{ text: 'La sequ\'eda es un fen\'f3meno clim\'e1tico (falta de lluvia), mientras que la escasez se relaciona con una mala gesti\'f3n del recurso.', correct: true \},\
            \{ text: 'La sequ\'eda afecta solo al norte y la escasez al sur.', correct: false \},\
            \{ text: 'La escasez es temporal y la sequ\'eda es permanente.', correct: false \}\
        ]\
    \},\
    \{\
        question: '\'bfDesde qu\'e9 d\'e9cada se observa una disminuci\'f3n sostenida en los niveles de agua subterr\'e1nea en la zona central de Chile?',\
        answers: [\
            \{ text: 'La d\'e9cada de 1960', correct: false \},\
            \{ text: 'La d\'e9cada de 2000', correct: false \},\
            \{ text: 'A partir de 2015', correct: false \},\
            \{ text: 'Finales de la d\'e9cada de 1980', correct: true \}\
        ]\
    \},\
    \{\
        question: 'A nivel mundial, \'bfc\'f3mo se posiciona Chile en t\'e9rminos de riesgo h\'eddrico seg\'fan proyecciones del World Resources Institute (WRI)?',\
        answers: [\
            \{ text: 'Es considerado un pa\'eds con bajo riesgo h\'eddrico.', correct: false \},\
            \{ text: 'Se encuentra entre los 30 pa\'edses con mayor riesgo h\'eddrico.', correct: true \},\
            \{ text: 'Es el pa\'eds con la mayor reserva de agua dulce del mundo.', correct: false \},\
            \{ text: 'No figura en las listas de riesgo h\'eddrico.', correct: false \}\
        ]\
    \},\
    \{\
        question: 'Un problema clave en la gesti\'f3n del agua en Chile es el "sobreotorgamiento de Derechos de Aprovechamiento de Aguas (DAA)". \'bfQu\'e9 significa esto?',\
        answers: [\
            \{ text: 'Que los derechos de agua son muy caros.', correct: false \},\
            \{ text: 'Que la cantidad de agua asignada legalmente supera la cantidad de agua realmente disponible.', correct: true \},\
            \{ text: 'Que solo el Estado puede tener derechos de agua.', correct: false \},\
            \{ text: 'Que los derechos de agua caducan cada a\'f1o.', correct: false \}\
        ]\
    \},\
    \{\
        question: '\'bfQu\'e9 porcentaje de la superficie de Chile est\'e1 afectada por sequ\'eda, desertificaci\'f3n y suelo degradado?',\
        answers: [\
            \{ text: '10%', correct: false \},\
            \{ text: '25%', correct: false \},\
            \{ text: '50%', correct: false \},\
            \{ text: '76%', correct: true \}\
        ]\
    \}\
];\
\
// --- L\'f3gica del Cuestionario ---\
\
const questionElement = document.getElementById("question");\
const answerButtons = document.getElementById("answer-buttons");\
const nextButton = document.getElementById("next-btn");\
\
let currentQuestionIndex = 0;\
let score = 0;\
\
function startQuiz() \{\
    currentQuestionIndex = 0;\
    score = 0;\
    nextButton.innerHTML = "Siguiente";\
    showQuestion();\
\}\
\
function showQuestion() \{\
    resetState();\
    let currentQuestion = questions[currentQuestionIndex];\
    let questionNo = currentQuestionIndex + 1;\
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;\
\
    currentQuestion.answers.forEach(answer => \{\
        const button = document.createElement("button");\
        button.innerHTML = answer.text;\
        button.classList.add("btn");\
        answerButtons.appendChild(button);\
        if (answer.correct) \{\
            button.dataset.correct = answer.correct;\
        \}\
        button.addEventListener("click", selectAnswer);\
    \});\
\}\
\
function resetState() \{\
    nextButton.style.display = "none";\
    while (answerButtons.firstChild) \{\
        answerButtons.removeChild(answerButtons.firstChild);\
    \}\
\}\
\
function selectAnswer(e) \{\
    const selectedBtn = e.target;\
    const isCorrect = selectedBtn.dataset.correct === "true";\
\
    if (isCorrect) \{\
        selectedBtn.classList.add("correct");\
        score++;\
    \} else \{\
        selectedBtn.classList.add("incorrect");\
    \}\
\
    Array.from(answerButtons.children).forEach(button => \{\
        if (button.dataset.correct === "true") \{\
            button.classList.add("correct");\
        \}\
        button.disabled = true;\
    \});\
    nextButton.style.display = "block";\
\}\
\
function showScore() \{\
    resetState();\
    questionElement.innerHTML = `\'a1Tu puntaje es $\{score\} de $\{questions.length\}!`;\
    nextButton.innerHTML = "Jugar de Nuevo";\
    nextButton.style.display = "block";\
\}\
\
function handleNextButton() \{\
    currentQuestionIndex++;\
    if (currentQuestionIndex < questions.length) \{\
        showQuestion();\
    \} else \{\
        showScore();\
    \}\
\}\
\
nextButton.addEventListener("click", () => \{\
    if (currentQuestionIndex < questions.length) \{\
        handleNextButton();\
    \} else \{\
        startQuiz();\
    \}\
\});\
\
startQuiz();}
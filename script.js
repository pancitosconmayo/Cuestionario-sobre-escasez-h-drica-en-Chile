{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById('submitBtn').addEventListener('click', function() \{\
    const correctAnswers = \{\
        q1: 'agricultura',\
        q2: 'gestion',\
        q3: 'falso',\
        q4: 'importacion',\
        q5: 'ods6',\
        q6: 'tecnificacion'\
    \};\
\
    const feedbackText = \{\
        q1: \{\
            [cite_start]correct: "\'a1Correcto! Contrario a la creencia popular, la agricultura es el mayor consumidor de agua, utilizando entre un 70% y 88% del total nacional. [cite: 7745, 6188]",\
            incorrect: "Incorrecto. [cite_start]Aunque la miner\'eda es un usuario importante, la agricultura consume la mayor parte del agua en Chile, entre un 70% y 88% del total. [cite: 7745, 6188]"\
        \},\
        q2: \{\
            correct: "\'a1Exacto! [cite_start]Aunque la sequ\'eda es un factor importante, los estudios indican que el 44-60% de la escasez h\'eddrica en Chile se debe a una deficiente gesti\'f3n, gobernanza y sobreotorgamiento de derechos de agua. [cite: 580, 7685]",\
            incorrect: "Incorrecto. [cite_start]La principal causa identificada por los expertos es la mala gesti\'f3n y gobernanza del recurso, que representa entre el 44% y 60% del problema. [cite: 580, 7685]"\
        \},\
        q3: \{\
            correct: "\'a1Correcto, es falso! [cite_start]La sobreexplotaci\'f3n de los acu\'edferos es un problema de larga data que comenz\'f3 a ser sostenido a fines de la d\'e9cada de 1980. La megasequ\'eda ha exacerbado un desequilibrio que ya exist\'eda. [cite: 4511, 4097]",\
            incorrect: "Incorrecto. [cite_start]La sobreexplotaci\'f3n y el agotamiento de acu\'edferos es un problema que comenz\'f3 a fines de los a\'f1os 80. La megasequ\'eda agrav\'f3 una situaci\'f3n ya cr\'edtica. [cite: 4511, 4097]"\
        \},\
        q4: \{\
            correct: "\'a1Muy bien! Importar agua embotellada no es una soluci\'f3n estrat\'e9gica a gran escala. [cite_start]Los 4 ejes son: 1) Gesti\'f3n e Institucionalidad, 2) Conservaci\'f3n de Ecosistemas, 3) Eficiencia y Uso Estrat\'e9gico, y 4) Migraci\'f3n e Incorporaci\'f3n de Nuevas Fuentes de Agua. [cite: 2863, 2864, 2865]",\
            incorrect: "Incorrecto. Esa opci\'f3n s\'ed es uno de los ejes. [cite_start]La que no corresponde es la importaci\'f3n de agua embotellada. [cite: 2863, 2864, 2865]"\
        \},\
        q5: \{\
            correct: "\'a1As\'ed es! [cite_start]El ODS 6 se dedica espec\'edficamente a garantizar 'Agua Limpia y Saneamiento' para todos, un pilar fundamental para el desarrollo sostenible. [cite: 7909, 7941]",\
            incorrect: "Respuesta incorrecta. [cite_start]El objetivo espec\'edfico para el agua es el ODS 6 'Agua Limpia y Saneamiento'. [cite: 7909, 7941]"\
        \},\
        q6: \{\
            correct: "\'a1Excelente! La tecnificaci\'f3n y optimizaci\'f3n del riego son claves, ya que el sector agr\'edcola consume la mayor parte del agua. [cite_start]Mejorar la eficiencia tiene un impacto enorme en la reducci\'f3n de la brecha h\'eddrica. [cite: 3037, 2280]",\
            incorrect: "Incorrecto. La soluci\'f3n m\'e1s efectiva es mejorar la eficiencia. [cite_start]La tecnificaci\'f3n del riego permite producir lo mismo (o m\'e1s) con menos agua. [cite: 3037, 2280]"\
        \}\
    \};\
\
    let score = 0;\
    const totalQuestions = Object.keys(correctAnswers).length;\
\
    for (const question in correctAnswers) \{\
        const selectedOption = document.querySelector(`input[name="$\{question\}"]:checked`);\
        const feedbackEl = document.getElementById(`feedback-$\{question\}`);\
        \
        if (selectedOption) \{\
            if (selectedOption.value === correctAnswers[question]) \{\
                score++;\
                feedbackEl.textContent = feedbackText[question].correct;\
                feedbackEl.className = 'feedback correct';\
            \} else \{\
                feedbackEl.textContent = feedbackText[question].incorrect;\
                feedbackEl.className = 'feedback incorrect';\
            \}\
        \} else \{\
            feedbackEl.textContent = "No has seleccionado una respuesta.";\
            feedbackEl.className = 'feedback incorrect';\
        \}\
    \}\
\
    const resultContainer = document.getElementById('resultado');\
    const scoreEl = document.getElementById('score');\
    \
    scoreEl.textContent = `Obtuviste $\{score\} de $\{totalQuestions\} respuestas correctas.`;\
    resultContainer.classList.remove('hidden');\
    \
    // Mover la vista hacia los resultados\
    resultContainer.scrollIntoView(\{ behavior: 'smooth' \});\
\});}
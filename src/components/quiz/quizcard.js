import React from "react";
import { IonButton } from "@ionic/react";

export default function QuizCards({
    quizData,
    questionId,
    handleAnswer,
    quizLength,
}) {
    return (
        <section aria-label="Quiz" class="quiz-card">
            <h2>
                Question {questionId + 1}/{quizLength}
            </h2>
            <h3>{quizData[questionId].question}</h3>
            <ul>
                {quizData[questionId].options.map((element, id) => {
                    return (
                        <IonButton
                            class="quiz-answers"
                            color="quiz-answers"
                            expand="block"
                            key={"option-" + id}
                            onClick={() => handleAnswer(element.isCorrect)}
                        >
                            {element.answer}
                        </IonButton>
                    );
                })}
            </ul>
        </section>
    );
}

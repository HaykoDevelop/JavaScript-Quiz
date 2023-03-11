import React from "react";
import { IonButton } from "@ionic/react";
import "../../assets/style.css";

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
                            color="quiz-answers"
                            expand="block"
                            size="large"
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

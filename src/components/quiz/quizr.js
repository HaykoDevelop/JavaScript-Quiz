import React from "react";
import { IonButton } from "@ionic/react";

export function QuizResults({ quizLength, score, handleReset }) {
    return (
        <>
            <section class="quiz-results">
                <h2>Quiz Result</h2>
                <p>
                    You scored {score} out of {quizLength}
                </p>
                <IonButton
                    class="reset-button"
                    color="quiz-answers"
                    shape="round"
                    onClick={handleReset}
                >
                    Reset
                </IonButton>
            </section>
        </>
    );
}

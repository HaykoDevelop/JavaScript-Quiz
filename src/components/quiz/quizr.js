import React from "react";
import { IonButton } from "@ionic/react";
import { Link } from "react-router-dom";

export function QuizResults({ quizLength, score, handleReset }) {
    return (
        <>
            <section class="quiz-results">
                <h2>Quiz Result</h2>
                <h3>
                    You scored {score} out of {quizLength}
                </h3>
                <IonButton
                    class="btn"
                    color="quiz-answers"
                    expand="block"
                    onClick={handleReset}
                >
                    Reset
                </IonButton>
                <Link to="/">
                    <IonButton
                        class="btn"
                        color="quiz-answers"
                        expand="block"
                        to="/"
                    >
                        Go Back
                    </IonButton>
                </Link>
            </section>
        </>
    );
}

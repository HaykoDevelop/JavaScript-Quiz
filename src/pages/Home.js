import "./Home.css";
import { Link } from "react-router-dom";
import "../assets/style.css";
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
} from "@ionic/react";
const Home = () => {
    return (
        <>
            <section className="home">
                <h1>Let's Play a Quiz</h1>
                <Link to="/quiz">
                    <IonCard color="quiz-answers">
                        <IonCardHeader>
                            <IonCardTitle>
                                A quiz about JavaScript.
                            </IonCardTitle>
                            <IonCardSubtitle>
                                With this quiz you can test your javascript
                                knowledge.
                            </IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>
                </Link>
            </section>
        </>
    );
};

export default Home;

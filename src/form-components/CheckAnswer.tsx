import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    const isAnswerCorrect = userAnswer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={handleAnswerChange}
            />
            {isAnswerCorrect ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}

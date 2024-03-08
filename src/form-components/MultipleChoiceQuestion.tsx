import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handleAnswerChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedAnswer(event.target.value);
    };

    const isCorrectAnswer = selectedAnswer === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={selectedAnswer} onChange={handleAnswerChange}>
                <option value="">Select an answer</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {isCorrectAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}

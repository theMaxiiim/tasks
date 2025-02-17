import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    const changeType = () => {
        setType((prevType) =>
            prevType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };

    return (
        <div>
            <p>
                Question Type:{" "}
                {type === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}
            </p>
            <Button onClick={changeType}>Change Type</Button>
        </div>
    );
}

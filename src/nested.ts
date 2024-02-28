import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion, duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((question) => question.published);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty".
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (question) =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length > 0
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    return questions.find((question) => question.id === id) || null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((question) => question.id !== id);
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((question) => question.name);
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce((total, question) => total + question.points, 0);
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return questions
        .filter((question) => question.published)
        .reduce((total, question) => total + question.points, 0);
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 */
export function toCSV(questions: Question[]): string {
    const headers = "id,name,options,points,published";
    const lines = questions.map(
        (question) =>
            `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
    );
    return [headers, ...lines].join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map((question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false
    }));
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map((question) => ({ ...question, published: true }));
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) return true;
    const firstType = questions[0].type;
    return questions.every((question) => question.type === firstType);
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    return questions.map((question) =>
        question.id === targetId ? { ...question, name: newName } : question
    );
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    return questions.map((question) => {
        if (question.id === targetId) {
            return {
                ...question,
                type: newQuestionType,
                options:
                    newQuestionType !== "multiple_choice_question"
                        ? []
                        : question.options
            };
        }
        return question;
    });
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    return questions.map((question) => {
        if (question.id === targetId) {
            const newOptions = [...question.options];
            if (targetOptionIndex === -1) {
                newOptions.push(newOption);
            } else {
                newOptions[targetOptionIndex] = newOption;
            }
            return { ...question, options: newOptions };
        }
        return question;
    });
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const index = questions.findIndex((question) => question.id === targetId);
    if (index === -1) return questions;
    const newQuestion = duplicateQuestion(newId, questions[index]);
    return [
        ...questions.slice(0, index + 1),
        newQuestion,
        ...questions.slice(index + 1)
    ];
}

import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const handleUseAttempt = () => {
        setAttemptsLeft((prevAttempts) => prevAttempts - 1);
    };

    const handleGainAttempts = () => {
        if (requestedAttempts !== "") {
            setAttemptsLeft(
                (prevAttempts) => prevAttempts + parseInt(requestedAttempts, 10)
            );
            setRequestedAttempts("");
        }
    };

    const handleRequestedAttemptsChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRequestedAttempts(event.target.value);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleRequestedAttemptsChange}
            />
            <button onClick={handleUseAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={handleGainAttempts}>Gain</button>
        </div>
    );
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🦃" | "🎄" | "🎆" | "🐰";

const holidaysAlphabetical: Record<Holiday, Holiday> = {
    "🎃": "🐰",
    "🐰": "🎄",
    "🎄": "🎆",
    "🎆": "🦃",
    "🦃": "🎃"
};

const holidaysByYear: Record<Holiday, Holiday> = {
    "🎆": "🐰",
    "🐰": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🎆"
};

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("🎃");

    const advanceAlphabetically = () => {
        setCurrentHoliday(holidaysAlphabetical[currentHoliday]);
    };

    const advanceByYear = () => {
        setCurrentHoliday(holidaysByYear[currentHoliday]);
    };

    return (
        <div>
            <p>Holiday: {currentHoliday}</p>
            <Button
                className="btn btn-primary"
                type="button"
                onClick={advanceAlphabetically}
            >
                Advance by Alphabet
            </Button>
            <Button
                className="btn btn-primary"
                type="button"
                onClick={advanceByYear}
            >
                Advance by Year
            </Button>
        </div>
    );
}

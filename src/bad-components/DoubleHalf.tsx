import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    function Doubler(): JSX.Element {
        return (
            <Button onClick={() => setDhValue((prevValue) => prevValue * 2)}>
                Double
            </Button>
        );
    }

    function Halver(): JSX.Element {
        return (
            <Button onClick={() => setDhValue((prevValue) => prevValue / 2)}>
                Halve
            </Button>
        );
    }

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is:{" "}
                <span data-testid="dhValue">{dhValue}</span>
            </div>
            <Doubler />
            <Halver />
        </div>
    );
}

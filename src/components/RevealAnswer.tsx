import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisibility] = useState<boolean>(false);

    function toggleVisibility(): void {
        setVisibility((prevVisibility) => !prevVisibility);
    }

    return (
        <div>
            <Button
                className="btn btn-primary"
                type="button"
                onClick={toggleVisibility}
            >
                Reveal Answer
            </Button>
            {visible && <div>42</div>}
        </div>
    );
}

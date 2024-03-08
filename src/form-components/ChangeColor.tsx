import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "teal"
    ];

    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <Form.Check
                    key={color}
                    type="radio"
                    id={color}
                    label={color}
                    value={color}
                    checked={selectedColor === color}
                    onChange={handleColorChange}
                    inline
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    padding: "10px",
                    marginTop: "10px"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}

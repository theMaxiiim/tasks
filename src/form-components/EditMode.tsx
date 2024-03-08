import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const handleEditModeChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setEditMode(event.target.checked);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleIsStudentChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setIsStudent(event.target.checked);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={handleEditModeChange}
            />
            {editMode ? (
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <Form.Check
                        type="checkbox"
                        id="is-student-checkbox"
                        label="Student"
                        checked={isStudent}
                        onChange={handleIsStudentChange}
                    />
                </div>
            ) : (
                <p>
                    {name} is {isStudent ? "a" : "not a"} student
                </p>
            )}
        </div>
    );
}

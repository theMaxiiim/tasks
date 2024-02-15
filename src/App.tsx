import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "#a515cd" }}
            >
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Max De Jesus :: Hello World!</h1>
            <img
                src="https://picsum.photos/200"
                alt="A picture of my dog Ada"
            />
            <ol>
                <li>Egg</li>
                <li>Meat</li>
                <li>Water</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        <div className="red-rectangle"></div>
                        First Part
                    </Col>
                    <Col>
                        <div className="red-rectangle"></div>
                        Second Part
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

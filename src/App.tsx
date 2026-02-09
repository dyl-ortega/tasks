import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import image from '../src/meekmill.jpg'


function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Dylan Ortega UD CISC275 with React Hooks and TypeScript
            </header>
            <Container>
                <Row>
                    <Col
                        style={{
                            backgroundColor: "red",
                            margin: "15",
                            height: "10",
                            width: "10",
                        }}
                    >
                        First column.
                    </Col>
                    <Col
                        style={{
                            backgroundColor: "red",
                            margin: "15",
                            height: "10",
                            width: "10",
                        }}
                    >
                        Second column. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        image?
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <div>
                <h1>This is a header</h1>
                <img src={image} alt="I used to pray for times like this" />
            </div>
            <div>
               
                <ul>
                    <li>Apples</li>
                    <li>Oranges</li>
                    <li>Pears</li>
                </ul>
            </div>
            <div style={{ border: "1px solid blue", padding: "4px" }}>
                this will be surrounded by a border and padding.
            </div>
            <div>
                This is <span style={{ color: "red" }}>colored text</span>.
            </div>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
        </div>
    );
}

export default App;

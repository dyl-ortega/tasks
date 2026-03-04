import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Dylan Ortega UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div><Counter/></div>
            <div><RevealAnswer/></div>
            <div><ChangeType/></div>
            <div><StartAttempt/></div>
            <div><TwoDice/></div>
            <div><CycleHoliday/></div>
        </div>
    );
}

export default App;

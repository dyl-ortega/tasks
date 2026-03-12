import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestAttempts, setRequestAttempts] = useState<string>("");

    function useAttempts(): void {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }

    function gainAttempts(): void {
        const totalAttempts = parseInt(requestAttempts);
        if (!isNaN(totalAttempts)) {
            setAttempts(attempts + totalAttempts);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Remaining: {attempts}</div>
            <input 
            type="number" 
            value={requestAttempts} 
            onChange={(e) => {setRequestAttempts(e.target.value)}}>
            </input>
            <button onClick={useAttempts} disabled={attempts === 0}>use</button>
            <button onClick={gainAttempts}>gain</button>
        </div>
    );
}

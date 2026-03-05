import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const startingLeft: number = 5;
    let startingRight: number = 6;

    const [leftDie, setLeftDie] = useState<number>(startingLeft);
    const [rightDie, setRightDie] = useState<number>(startingRight);

    function rollLeft(): void {
        setLeftDie(d6());
    }

    function rollRight(): void {
        setRightDie(d6());
    }

    let message: string = "Roll dice";
    if (leftDie === rightDie) {
        if (leftDie === 1) {
            message = "Lose";
        } else {
            message = "Win";
        }
    }

        return (
            <div>
                <div>
                    <span data-testid="left-die">{leftDie}</span>{" "}
                    <Button onClick={rollLeft}>Roll Left</Button>
                </div>
                <div>
                    <span data-testid="right-die">{rightDie}</span>{" "}
                    <Button onClick={rollRight}>Roll Right</Button>
                </div>
                {message && <div>{message}</div>}
            </div>
        );
}


import React, { useState } from "react";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "black",
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(DEFAULT_COLOR);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>

            {COLORS.map((color) => (
                <label key={color} style={{ marginRight: "8px" }}>
                    <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={selectedColor === color}
                        onChange={updateColor}
                        style={{ marginRight: "4px" }}
                    />
                    <span
                        style={{
                            backgroundColor: color,
                            padding: "2px 6px",
                            borderRadius: "2px",
                        }}
                    >
                        {color}
                    </span>
                </label>
            ))}

            <div
                data-testid="colored-box"
                style={{
                    marginTop: "10px",
                    padding: "10px",
                    backgroundColor: selectedColor,
                    display: "inline-block",
                }}
            >
                You have chosen {selectedColor}.
            </div>
        </div>
    );
}

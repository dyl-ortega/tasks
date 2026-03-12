import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
      const [choice, setChoice] = useState<string>(options[0]);

      function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
          setChoice(event.target.value);
      }

      return (
          <div>
              <h3>Multiple Choice Question</h3>

              <select value={choice} onChange={handleChange}>
                  {options.map((option: string) => (
                      <option key={option} value={option}>
                          {option}
                      </option>
                  ))}
              </select>

              <span>
                  {choice === expectedAnswer ? "✔️" : "❌"}
              </span>
          </div>
      );
}

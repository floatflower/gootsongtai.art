"use client";

import { useState } from "react";
import { StepSlider } from "./step-slider";

const STEPS = 5;

/** 每一題是一組相對的感受，滑桿左端是 min、右端是 max */
const QUESTIONS = [
  { id: "temperature", min: "Cold", max: "Hot" },
  { id: "humidity", min: "Dry", max: "Humid" },
  { id: "wind", min: "Still", max: "Windy" },
  { id: "space", min: "Enclosed", max: "Open" },
  { id: "stability", min: "Stable", max: "Changeable" },
] as const;

type QuestionId = (typeof QUESTIONS)[number]["id"];

/** 預設停在正中間（0-based，5 格的中間是 2） */
const DEFAULT_VALUE = Math.floor((STEPS - 1) / 2);

export function Questionnaire() {
  const [answers, setAnswers] = useState<Record<QuestionId, number>>(
    () =>
      Object.fromEntries(QUESTIONS.map((q) => [q.id, DEFAULT_VALUE])) as Record<
        QuestionId,
        number
      >,
  );

  return (
    <div className="flex h-full w-full items-center justify-center px-6 text-[#3c3c3c]">
      <div className="w-full max-w-3xl">
        <h2 className="mb-10 text-center text-2xl font-bold tracking-[0.3em] sm:mb-14 sm:text-2xl">
          Think of a place that has shaped how you listen. <br />
          <br />
          What is this environment sounds like?
        </h2>

        <ul className="flex flex-col gap-7 sm:gap-9">
          {QUESTIONS.map((q) => (
            <li
              key={q.id}
              className="grid grid-cols-2 items-center gap-x-6 gap-y-3 text-sm font-semibold tracking-widest sm:grid-cols-[7.5rem_1fr_7.5rem] sm:text-base"
            >
              <span className="sm:text-right">{q.min}</span>
              <span className="text-right sm:order-3 sm:text-left">
                {q.max}
              </span>
              <div className="col-span-2 sm:order-2 sm:col-span-1">
                <StepSlider
                  value={answers[q.id]}
                  onChange={(value) =>
                    setAnswers((prev) => ({ ...prev, [q.id]: value }))
                  }
                  steps={STEPS}
                  label={`${q.min} — ${q.max}`}
                  minLabel={q.min}
                  maxLabel={q.max}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

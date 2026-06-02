"use client";
import { useState } from "react";

export default function FeedbackWidget() {
  const [state, setState] = useState<"idle" | "thanks" | "form">("idle");
  const [choice, setChoice] = useState<"yes" | "no" | null>(null);

  const handleClick = (val: "yes" | "no") => {
    setChoice(val);
    if (val === "yes") {
      setState("thanks");
    } else {
      setState("form");
    }
  };

  const handleSubmit = () => {
    setState("thanks");
  };

  return (
    <div className="feedback-widget">
      {state === "idle" && (
        <>
          <span className="feedback-question">このページの情報は役に立ちましたか？</span>
          <div className="feedback-buttons">
            <button className="feedback-btn feedback-yes" onClick={() => handleClick("yes")}>
              役に立った
            </button>
            <button className="feedback-btn feedback-no" onClick={() => handleClick("no")}>
              役に立たなかった
            </button>
          </div>
        </>
      )}
      {state === "form" && (
        <>
          <span className="feedback-question">改善点をお聞かせください（任意）</span>
          <div className="feedback-reasons">
            {["情報が古い・間違っている", "知りたい情報が見つからない", "内容がわかりにくい", "その他"].map((r) => (
              <label key={r} className="feedback-reason-label">
                <input type="radio" name="reason" value={r} /> {r}
              </label>
            ))}
          </div>
          <button className="feedback-submit" onClick={handleSubmit}>送信</button>
        </>
      )}
      {state === "thanks" && (
        <span className="feedback-thanks">
          ご意見をお寄せいただきありがとうございました。
        </span>
      )}
    </div>
  );
}

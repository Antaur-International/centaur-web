import React from "react";
import { useNavigate } from "react-router";

export default function Popup({
  textColor,
  text,
  setIsOpen,
  children,
  called,
}) {
  const Navigate = useNavigate();

  const handleClick = () => {
    if (called === "header") {
      sessionStorage.removeItem("user");
      Navigate("/login");
    }

    setIsOpen(false);
  };

  return (
    <section className="wrapper_popup_bg">
      <div className="wrapper_popup_center">
        <div className="popup_center_content">
          <div className="center_content_header">
            <h1>{text}</h1>
          </div>
          <div className="center_content_actions">
            <button
              onClick={() => setIsOpen(false)}
              className="content_action_negativeBtn btn"
            >
              No
            </button>
            <button
              onClick={handleClick}
              className="content_action_positiveBtn btn"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

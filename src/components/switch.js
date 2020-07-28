import React, { useRef } from "react";
import "./css/switch.css";

function Switch() {
  const ref = useRef(null);
  function handleChange() {
    // una manera para detectar si esta checkeado ya que con this no acepta
    // console.log(event.target.checked);
    console.log(ref.current.checked);
    if (ref.current.checked) {
      document.body.classList.remove("is-light-mode");
      document.body.classList.add("is-dark-mode");
    } else {
      document.body.classList.remove("is-dark-mode");
      document.body.classList.add("is-light-mode");
    }
  }
  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input
        ref={ref}
        onClick={handleChange}
        type="checkbox"
        className="checkbox"
        id="checkbox"
      />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
}

export default Switch;

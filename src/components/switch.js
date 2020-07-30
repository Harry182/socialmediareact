import React, { useRef } from "react";
import "./css/switch.css";

function Switch({ setDarkMode, checked, setChecked }) {
  // [valor, metodo];
  // const [checked, setChecked] = useState(defaultChecked);
  const ref = useRef(null);
  function handleChange() {
    setChecked(ref.current.checked);
    setDarkMode(ref.current.checked);
  }

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input
        ref={ref}
        onChange={handleChange}
        type="checkbox"
        checked={checked}
        className="checkbox"
        id="checkbox"
      />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
}

export default Switch;

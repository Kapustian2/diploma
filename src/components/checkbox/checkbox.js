import { useState } from "react";
import styled from "styled-components";

const CheckBoxContainer = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  );
};

export const CheckBox = styled(CheckBoxContainer)``;

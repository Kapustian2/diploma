import styled from "styled-components";

const CheckBoxContainer = ({ checked, onChange }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
      </label>
    </div>
  );
};

export const CheckBox = styled(CheckBoxContainer)``;

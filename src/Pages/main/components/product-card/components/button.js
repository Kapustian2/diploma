import { styled } from "styled-components";

const ButtonContainer = ({ children, className, width, ...props }) => {
  return (
    <button className={className} {...props}>
      <span className="text">{children}</span>
    </button>
  );
};

export const Button = styled(ButtonContainer)`
  width: 197px;
  height: 39px;
  align-items: center;
  border-radius: 10px;
  background: #005bff;
  border: none;

  .text {
    color: #f2f5f7;
    font-family: Inter;
    font-size: 16px;
  }

  &:hover {
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  }
`;

import { styled } from "styled-components";

const ButtonContainer = ({ children, className, width, ...props }) => {
  return (
    <button className={className} {...props}>
      <span className="text">{children}</span>
    </button>
  );
};

export const Button = styled(ButtonContainer)`
  display: flex;
  padding: 10px 25px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #005bff;
  outline: none;
  border: none;

  .text {
    color: #f2f5f7;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &:hover {
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  }
`;

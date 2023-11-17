import { styled } from "styled-components";

const ButtonContainer = ({
  children,
  className,
  width,
  height,
  fontSize,
  background,
  borderRadius,
  ...props
}) => {
  return (
    <button className={className} {...props}>
      <span>{children}</span>
    </button>
  );
};

export const Button = styled(ButtonContainer)`
  width: ${({ width = "100%" }) => width};
  height: ${({ height = "100%" }) => height};
  display: flex;
  padding: 10px 25px;
  justify-content: center;
  align-items: center;
  color: #f2f5f7;
  font-family: Inter;
  font-size: ${({ fontSize = "16px" }) => fontSize};

  gap: 10px;
  border-radius: ${({ borderRadius = "10px" }) => borderRadius};
  background: ${({ background = "#005bff" }) => background};
  outline: none;
  border: none;
  .text {
  }

  &:hover {
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  }
`;

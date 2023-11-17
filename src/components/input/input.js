import { forwardRef } from "react";
import { styled } from "styled-components";

const InputContainer = forwardRef(
  ({ className, width, height, borderRadius, ...props }, ref) => {
    return (
      <>
        <input className={className} {...props} ref={ref} />
      </>
    );
  }
);

export const Input = styled(InputContainer)`
  color: rgba(0, 26, 52, 0.5);

  font-family: Inter;
  font-size: 16px;
  line-height: 19.2px;
  letter-spacing: 0.96px;
  display: flex;
  width: ${({ width = "100%" }) => width};
  height: ${({ height = "100%" }) => height};
  flex-direction: column;
  align-items: center;
  border-radius: ${({ borderRadius = "4px" }) => borderRadius};
  border: 1px;
  box-sizing: border-box;
`;

import { forwardRef } from "react";
import { styled } from "styled-components";

const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
  return (
    <>
      <input className={className} {...props} ref={ref} />
    </>
  );
});

export const Input = styled(InputContainer)`
  color: rgba(0, 26, 52, 0.5);

  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 19.2px;
  letter-spacing: 0.96px;
  display: flex;
  width: 100%;
  height: 48px;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  border: 1px solid black;
  box-sizing: border-box;
`;

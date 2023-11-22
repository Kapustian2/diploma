import { forwardRef, useId } from "react";
import { styled } from "styled-components";
import { Input } from "../input/input";

const FormFieldContainer = forwardRef(
  ({ className, label, errorMessage, ...props }, ref) => {
    const id = useId();
    return (
      <div className={className}>
        <label htmlFor={id}>{label}</label>
        <Input
          className={`input ${errorMessage ? "input-error" : ""}`}
          {...props}
          ref={ref}
          id={id}
          height="48px"
        />
        <span className={`error-message ${errorMessage ? "show" : ""}`}>
          {errorMessage}
        </span>
      </div>
    );
  }
);

export const FormField = styled(FormFieldContainer)`
  .input {
    width: 100%;
    border: 1px solid black;
  }

  .input-error,
  .input-error > * {
    transition-property: color, border-color;
    transition-duration: 0.3s;
    transition-timing-function: linear;
  }

  .input-error {
    border-color: red;
    color: red;
    &::placeholder {
      color: red;
    }
  }

  .error-message {
    display: block;
    height: 16px;
    margin-top: 2px;
    font-family: Inter;
    color: red;
    font-size: 12px;
    text-wrap: wrap;
    padding-top: 4px;
    padding-inline: 16px;
    opacity: 0;
  }

  .show {
    opacity: 1;
    transition: opacity 0.3s linear;
  }
`;

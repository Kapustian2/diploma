import { styled } from "styled-components";
import { Button } from "../../../../../components/button/button";
import { useEffect, useState } from "react";

const CounterToCartContainer = ({ className, onCounterEmpty }) => {
  const [count, setCount] = useState(1);
  const [countIsNull, setCountIsNull] = useState(false);

  const handleClickMinus = () => {
    if (count === 1) {
      setCount(0);
      setCountIsNull(true);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleClickPlus = () => {
    if (count < 99) {
      setCount((prevCount) => prevCount + 1);
      setCountIsNull(false);
    }
  };

  useEffect(() => {
    if (countIsNull && onCounterEmpty) {
      onCounterEmpty();
    }
  }, [countIsNull, onCounterEmpty]);

  return (
    <div className={className}>
      <Button
        width="30px"
        height="30px"
        fontSize="16px"
        onClick={handleClickMinus}
      >
        -
      </Button>
      <div className="counter">{count}</div>
      <Button
        width="30px"
        height="30px"
        fontSize="16px"
        onClick={handleClickPlus}
      >
        +
      </Button>
    </div>
  );
};

export const CounterToCart = styled(CounterToCartContainer)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 161px;
  height: 44px;
  border-radius: 15px;
  border: 1px solid #005bff;

  .counter {
    color: #001a34;
    font-family: Inter;
    font-size: 24px;
    font-weight: 800;
    line-height: 120%;
    letter-spacing: 1.44px;
  }

  &:hover {
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  }
`;

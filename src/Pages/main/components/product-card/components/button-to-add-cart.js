import { styled } from "styled-components";
import { Button } from "../../../../../components/button/button";

const ButtonToAddCartContainer = ({}) => {
  return (
    <Button width="217px" height="39px" fontSize="16px">
      <div className="text">Добавить в корзину</div>
    </Button>
  );
};

export const ButtonToAddCart = styled(ButtonToAddCartContainer)`
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

import { styled } from "styled-components";
import { Button } from "../../../../../components/button/button";

const ButtonToAddCartContainer = ({ ...props }) => {
  return (
    <Button width="217px" height="44px" fontSize="16px" {...props}>
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

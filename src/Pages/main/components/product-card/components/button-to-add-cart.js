import { styled } from "styled-components";
import { Button } from "../../../../../components/button/button";
import { useSelector } from "react-redux";
import { selectUserId } from "../../../../../selectors";
import { request } from "../../../../../utils";

const ButtonToAddCartContainer = ({
  children,
  fontSize,
  productId,
  ...props
}) => {
  const userId = useSelector(selectUserId);

  const handleClick = () => {
    const data = {
      userId,
      productId,
    };

    request("/addtocart", "POST", data).then((response) => {
      const { error } = response;
      if (error) {
        console.error("Error:", error);
        return;
      }
    });
  };

  return (
    <Button
      width="217px"
      height="44px"
      fontSize={fontSize}
      onClick={handleClick}
      {...props}
    >
      <div className="text">{children}</div>
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

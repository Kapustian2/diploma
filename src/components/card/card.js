import styled from "styled-components";

const CardContainer = ({ className, ...props }) => {
  return <div className={className} {...props}></div>;
};

export const Card = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  width: 586px;
  height: 543px;
  overflow: hidden;
  border-radius: 20px;
  background: #fff;
  box-shadow: -4px 13px 30px 0px rgba(0, 0, 0, 0.1),
    -17px 53px 55px 0px rgba(0, 0, 0, 0.09),
    -37px 119px 75px 0px rgba(0, 0, 0, 0.05),
    -66px 211px 88px 0px rgba(0, 0, 0, 0.01),
    -104px 330px 97px 0px rgba(0, 0, 0, 0);
`;

import styled from "styled-components";

const CardFooterContainer = ({ className, ...props }) => {
  return <div className={className} {...props}></div>;
};

export const CardFooter = styled(CardFooterContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
`;

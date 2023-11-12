import styled from "styled-components";

const CardHeaderContainer = ({ className, ...props }) => {
  return <div className={className} {...props}></div>;
};

export const CardHeader = styled(CardHeaderContainer)`
  padding-top: 20px;
`;

import styled from "styled-components";

const CardContentContainer = ({ className, ...props }) => {
  return <div className={className} {...props}></div>;
};

export const CardContent = styled(CardContentContainer)`
  flex-grow: 1;
  width: 100%;
`;

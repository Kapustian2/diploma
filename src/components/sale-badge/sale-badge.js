import React from "react";
import styled from "styled-components";

const SaleBadgeContainer = ({ className, children, width, height }) => {
  return <div className={className}>{children}</div>;
};

export const SaleBadge = styled(SaleBadgeContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width = "100%" }) => width};
  height: ${({ height = "100%" }) => height};
  border-radius: 20px;
  background: #f91155;

  color: #f2f5f7;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

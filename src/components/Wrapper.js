import React from "react";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

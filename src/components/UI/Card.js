import React from "react";
import styled from "@emotion/styled";
const StyledCard = styled.div`
  border-radius: 10px;
  background-color: ${({ color }) => color};
  min-width: 500px;
  margin: 5px auto;
  display: flex;
  flex-wrap: ${({ wrap }) => wrap};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap + "px"};
  padding: ${({ padding }) => padding};
`;

export const Card = ({
  as,
  color = "rgb(100, 109, 147)",
  direction = "row",
  justify = "center",
  align = "center",
  gap = "0",
  wrap = "no-wrap",
  padding = "30px 20px",
  children,
  onSubmit,
}) => {
  return (
    <StyledCard
      as={as}
      color={color}
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
      wrap={wrap}
      onSubmit={onSubmit}
      padding={padding}
    >
      {children}
    </StyledCard>
  );
};

import styled from "styled-components";

export const Viewer = styled.div<GlobalThemePropType>`
  min-width: 600px;
  border: 1px solid #ccc;
  border-radius: 2px;
  background-color: ${({themeVal}) => themeVal.bgColor};
  position: relative;
`;
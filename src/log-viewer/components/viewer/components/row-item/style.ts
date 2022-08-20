import styled from "styled-components";

export const Row = styled.div<{ height: number }>`
  max-height: ${(props) => props.height}px;
  font-size: 12px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  span {
    line-height: 16px;
    height: 16px;
  }
`;

export const RowTime = styled.span<GlobalThemePropType>`
  color: ${(props) => props.themeVal.rowItem.time};
  margin-right: 4px;
`;
export const RowMessage = styled.span<GlobalThemePropType>`
  color: ${(props) => props.themeVal.rowItem.message};
`;

interface RowTypeStyleProps {
  themeVal: GlobalThemePropType["themeVal"];
  type: LogJsonItemType;
}

export const RowType = styled.span<RowTypeStyleProps>`
  color: ${(props) => props.themeVal.rowItem.type.color};
  background-color: ${(props) => props.themeVal.rowItem.type.bgColor[props.type]};
  display: inline-block;
  width: 72px;
  text-align: center;
  margin: 0 8px;
  border-radius: 2px;
  font-weight: 500;
  box-shadow: 0px 0px 1px 1px #ccc;
`;


export const RowIp = styled.span<GlobalThemePropType>`
  color: ${(props) => props.themeVal.rowItem.ip};
  margin-left: 6px;
`;
export const RowPort = styled.span<GlobalThemePropType>`
  color: ${(props) => props.themeVal.rowItem.port};
  margin-right: 8px;
`;
export const RowServiceName = styled.span<GlobalThemePropType>`
  color: ${(props) => props.themeVal.rowItem.serviceName};
  margin: 0 8px;
`;
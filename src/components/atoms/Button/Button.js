import styled from "styled-components";

export const Button = styled.button`
  background-color: ${props => props.theme.colors.yellow};
  overflow: hidden;
  border-radius: 8px;
  padding: 10px 14px;
  box-shadow: 4px 4px 0 0
    ${props => props.theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme.colors.black};
  cursor: pointer;
`;
export const Label = styled.p`
  color: ${props => props.theme.colors.black};
  text-align: center;
  font-family: ${props =>
    props.theme.fonts.helvetica24Regular.family};
  font-size: ${props =>
    props.theme.fonts.helvetica24Regular.size};
  font-weight: ${props =>
    props.theme.fonts.helvetica24Regular.weight};
  line-height: ${props =>
    props.theme.fonts.helvetica24Regular.lineHeight};
`;

import styled from "styled-components";

export const Header = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 20px 5px;
  display: flex;
  align-items: flex-start;
`;
export const Ellipse1 = styled.div`
  width: 19px;
  height: 17px;
  background-color: ${(props) => props.theme.colors.lightSkyBlue};
  border-radius: 50%;
`;
export const We = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.mulish18Bold.family};
  font-size: ${(props) => props.theme.fonts.mulish18Bold.size};
  font-weight: ${(props) => props.theme.fonts.mulish18Bold.weight};
  line-height: ${(props) => props.theme.fonts.mulish18Bold.lineHeight};
`;
export const Navigation = styled.div`
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 831px;
`;
export const NavListsOfItmes = styled.div`
  margin-right: 30px;
  padding: 20px;
  display: flex;
  align-items: center;
  width: 62px;
  height: 23px;
`;
export const Item = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-family: ${(props) => props.theme.fonts.mulish18Bold.family};
  font-size: ${(props) => props.theme.fonts.mulish18Bold.size};
  font-weight: ${(props) => props.theme.fonts.mulish18Bold.weight};
  line-height: ${(props) => props.theme.fonts.mulish18Bold.lineHeight};
`;
export const NavListsOfItmesTwo = styled.div`
  margin-right: 30px;
  padding: 20px 0 20px 20px;
  display: flex;
  align-items: center;
  width: 116px;
  height: 23px;
`;
export const NavListsOfItmesThree = styled.div`
  margin-right: 30px;
  padding: 20px;
  display: flex;
  align-items: center;
  width: 72px;
  height: 23px;
`;
export const NavListsOfItmesFour = styled.div`
  margin-right: 30px;
  padding: 20px;
  display: flex;
  align-items: center;
  width: 96px;
  height: 23px;
`;
export const PimaryButton = styled.div`
  background-color: ${(props) => props.theme.colors.lightSkyBlue3};
  border-radius: 4px;
  padding: 20px 5px;
  display: flex;
  align-items: center;
`;
export const Label = styled.p`
  color: ${(props) => props.theme.colors.transparentWhite};
  font-family: ${(props) => props.theme.fonts.mulish18Bold.family};
  font-size: ${(props) => props.theme.fonts.mulish18Bold.size};
  font-weight: ${(props) => props.theme.fonts.mulish18Bold.weight};
  line-height: ${(props) => props.theme.fonts.mulish18Bold.lineHeight};
`;

import styled from "styled-components";
import {Link} from "gatsby";
import Theme from "../../styles/theme";

export const Main = styled.article`
  text-align: center;
  max-width: 80%;
  position: relative;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.h1`
  text-align: center;
  max-width: 100%;
  position: relative;
  font-size: 45px;
`;

export const MainDescription = styled.article`
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0px;
  padding: 0px;
`;

export const Grid = styled.article`
  margin-bottom: 10px;
  margin-top: 10%;
  margin-bottom: 5%;
  padding: 0px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const GridImg = styled.article`
  width: 300px;
  max-width:300px;
  height: 270px;
  max-height: 270px;
  display: inline-block;
  position: relative;
  margin: 10px;
  margin-bottom: 0%;
  padding: 0px;
  overflow: hidden;
`;

export const GridImgImage = styled.article`
  border-top-left-radius: 80%;
  border-top-right-radius: 80%;
  border-bottom-right-radius: 80%;
  border-bottom-left-radius: 80%;
  padding: 5%;
`;

export const Map = styled.article`
background: #fff;
margin-bottom: 10px;
max-width: 100%;
margin-left: auto;
margin-right: auto;
`;

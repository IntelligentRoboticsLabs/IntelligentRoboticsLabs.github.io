import styled from "styled-components";

export const Main = styled.article`
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
    background: rgb(200,200,200);
    width: 100%;
    height: 350px;
    position: relative;
`;

export const PanelsContainer = styled.article`
    position: relative;
    margin-left: 10%;
    margin-right: 10%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
`;

export const PanelContainer = styled.article`
    position: relative;
    width: 20%;
    margin-top: 20px;
    text-align: center;
    flex: 0 0 25%;
    padding-right: 2%;
    padding-left: 2%;
`;

export const Icon = styled.article`
    position: relative;
    height: 180px;
`;

export const ContainerTittle = styled.h2`
    position: relative;
    padding: 0%;
`;

export const ContainerDescr = styled.body`
    position: relative;
    color: #6c757d;
    font-size: 1rem;
`;
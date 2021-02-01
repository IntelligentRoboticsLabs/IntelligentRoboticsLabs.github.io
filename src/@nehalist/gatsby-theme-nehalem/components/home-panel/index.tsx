import React, {CSSProperties, FunctionComponent, ReactNode} from "react";
import {Main, PanelsContainer, PanelContainer, ContainerTittle, Icon, 
    ContainerDescr} from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUsersCog,
    faEye,
    faRobot,
    faBezierCurve,
  } from '@fortawesome/free-solid-svg-icons'

export const HomePanel = () => (
    <Main>
        <PanelsContainer>

            <PanelContainer>
                <Icon>
                    <FontAwesomeIcon icon={faUsersCog} size="5x" color={`red`} />
                    <ContainerTittle>
                        Social Robotics
                    </ContainerTittle>
                </Icon>
                <hr />
                <ContainerDescr>
                    Proxemics<br />
                    People Mood Perception<br />
                    Social Navigation
                </ContainerDescr>
            </PanelContainer>

            <PanelContainer>
                <Icon>
                    <FontAwesomeIcon icon={faEye} size="5x" color={`red`} />
                    <ContainerTittle>
                        Perception
                    </ContainerTittle>
                </Icon>
                <hr />
                <ContainerDescr>
                    3D Objects and People<br />
                    Detection<br />
                    Probabilistic Mapping<br/>
                    Visual Attention
                </ContainerDescr>
            </PanelContainer>

            <PanelContainer>
                <Icon>
                    <FontAwesomeIcon icon={faRobot} size="5x" color={`red`} />
                    <ContainerTittle>
                        Human-robot Interaction
                    </ContainerTittle>
                </Icon>
                <hr />
                <ContainerDescr>
                Multi-modal communication<br />
                Communication
                </ContainerDescr>
            </PanelContainer>

            <PanelContainer>
                <Icon>
                    <FontAwesomeIcon icon={faBezierCurve} size="5x" color={`red`} />
                    <ContainerTittle>
                        Cognitive Architecture
                    </ContainerTittle>
                </Icon>
                <hr />
                <ContainerDescr>
                Behaviour Generation<br />
                BICA<br />
                PDDL Planning<br />
                PlanSys2
                </ContainerDescr>
            </PanelContainer>

        </PanelsContainer>
    </Main>
);
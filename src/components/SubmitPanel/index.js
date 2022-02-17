import React from "react";
import styled from 'styled-components';
import db from '../../../db.json';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css'

import SideBar from "../SideBar";
import Input from "../Input";
import ButtonOutlinedMedium from "../Buttons/ButtonOutlinedMedium";
import ButtonContainedMedium from "../Buttons/ButtonContainedMedium";

const Submit = styled.section`
    padding-top: 56px;
    display: flex;
    flex-direction: row;
    position: static;
    width: 100%;
    height: calc(100vh - 56px);
    background-color: ${({theme}) => theme.colors.colorBackgroundDark};

    @media screen and (max-width: 1024px) {
        height: auto;
    }
`;

Submit.Content = styled.div`
    margin: 30px;
    display: flex;
    justify-content: center;
    margin: 30px;
    max-width: 100%;
    width: 100%;
    flex-direction: row;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`;

Submit.ViewerContainer = styled.div`
    width: calc(100% - 330px - 20px);
    display: flex;
    flex-direction: column;
    min-width: 350px;
    height: 100%;
    border-radius: ${({theme}) => theme.borderRadius};
    border: 1px solid #eee;
    background-color: ${({theme}) => theme.colors.colorBackgroundMain};

    @media screen and (max-width: 1024px) {
        width: 100%;
        margin-bottom: 20px;
        height: 500px;
    }
`;

Submit.Form = styled.div`
    width: 330px;
    height: 100%;
    margin-left: 20px;
    min-width: 240px;
    overflow-x: hidden;

    @media screen and (max-width: 1024px) {
        width: auto;
        margin: 0;
        height: auto;
        overflow: unset;
    }
`;

Submit.ContainerButton = styled.div`
    width: auto;
    height: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border: 1px solid #eee;
    border-radius: ${({theme}) => theme.borderRadius};
    background-color: ${({theme}) => theme.colors.colorBackgroundMain};

    p {
        margin: 20px 0 0;
        font-size: 12px;
        font-weight: 500;
        text-align: center;
        color: ${({theme}) => theme.textColor.textGrayMain};
    }
`;

const SubmitPanel = () => {

    return (
        <Submit>
            <Submit.Content>

                <Submit.ViewerContainer>

                </Submit.ViewerContainer>
                <Submit.Form>
                    <form>
                        <SideBar title = "Anexar arquivo de impressão">
                            <ButtonOutlinedMedium type="file"><i class="ri-attachment-2"></i>Anexar arquivo</ButtonOutlinedMedium>
                            <p>
                            Envie o arquivo no formato .stl ou .3dm para impressão. É permitido que o objeto tenha dimensão máxima de 20 centímetros cúbicos.
                            </p>

                        </SideBar>
                    
                        <SideBar title = "Predefinições">

                            <Input
                            label = "Layer Height"
                            type="number"
                            name="layerHeight"
                            />

                            <Input
                            label = "Wall"
                            type="number"
                            name="wall"
                            />

                            <Input
                            label = "Infill Density"
                            type="number"
                            name="infill"
                            />

                            <Input
                            label = "Speed"
                            type="number"
                            name="speed"
                            />
                        
                        </SideBar>

                        <SideBar title = "Dimensões">
                            <Input
                                label = "Eixo X"
                                type="number"
                                name="speed"
                            />

                            <Input
                                label = "Eixo Y"
                                type="number"
                                name="speed"
                            />

                            <Input
                                label = "Eixo Z"
                                type="number"
                                name="speed"
                            />
                        </SideBar>

                        <SideBar title = "Observações">
                            <Input
                                type="text"
                                name="speed"
                            />
                        </SideBar>
                        
                       <Submit.ContainerButton>
                           <ButtonContainedMedium>Enviar para impressão</ButtonContainedMedium>

                           <p>Você será notificado sobre o início da impressão e receberá um link da transmissão ao vivo. </p>
                       </Submit.ContainerButton>
                    </form>
                </Submit.Form>
            </Submit.Content>
        </Submit>
    );
}

export default SubmitPanel;
import styled from 'styled-components';
import db from '../../../db.json';
import Link from 'next/link';
import Image from 'next/image';

const QuemSomos = styled.section`
    min-height: 100vh;
    height: 100vh;
    position: relative;
    width: 100%;
    background-image: url(/images/hubmaker_quemsomo_background.png);
    background-size: auto 100%;
    background-position: right;
    background-repeat: no-repeat;

    @media (max-width: 1024px) {
        background-image: none;
    }
`;

QuemSomos.Content = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    display: flex;

    @media (min-width: 1024px) {
        width: calc(100% - 184px);
        max-width: 1366px;
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 768px) {
        width: calc(100% - 64px);
        max-width: 1366px;
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 1366px) {
        width: calc(100% - 288px);
        max-width: 1366px;
        margin-left: auto;
        margin-right: auto;
    }
`;

QuemSomos.HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 12px 0;

    @media (min-width: 1024px) {
        width: 50%;
        max-width: 50%;
    }
`;

QuemSomos.Title = styled.h1`
    color: #000;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.3;
    text-align: left;

    @media (min-width: 768px) {
    font-size: 52px;
    text-align: center;
    }

    @media (min-width: 1024px) {
    text-align: left;
    }

`;

QuemSomos.Text = styled.p`
    text-align: left;
        margin: 24px 0 24px ;
        line-height: 24px;
        font-size: 16px;
        font-weight: 600;
        color: ${({theme}) => theme.textColor.textGrayMain};

        @media (min-width: 768px) {
            font-size: 18px;
            text-align: center;
        }

        @media (min-width: 1024px) {
        text-align: left;
        }
`;

QuemSomos.LogoGroup = styled.div`
    width: 100%;
    margin: 82px 0;
    height: 100px;
    background-color: #F2F2F2;
    padding: 10px 0;
    overflow:hidden;
`;

QuemSomos.LogoGroupContent = styled.div`
    height: 100%;
    width: 1000%;
    background: url(/images/logos_parceiros.png) repeat-x;
    background-size: auto 50%;
    background-position: center;
    animation: bg-slidetwo 200s linear infinite;

    @keyframes bg-slidetwo {
    0% { transform: translateX(0); }
    50% { transform: translateX(-45%);}
    100% { transform: translateX(0);}
    }
`;

//parte 2

const QuemSomosSectionTwo = styled.section`
    min-height: 100vh;
    height: 100vh;
    position: relative;
    width: 100%;
`;

QuemSomosSectionTwo.Title = styled.h1`
    color: #000;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.3;
    text-align: center;

    @media (min-width: 768px) {
    font-size: 52px;
    text-align: center;
    }

    @media (min-width: 1024px) {
    text-align: center;
    }

`;

const AboutUs = props => {

    return(
        <>
        <QuemSomos>
            <QuemSomos.Content>
                <QuemSomos.HomeContent>
                <QuemSomos.Title>Ei, ainda estamos em construção. Logo funcionaremos : )</QuemSomos.Title>
                <QuemSomos.Text>Aproveite para criar uma conta e receber notificações no email</QuemSomos.Text>
                </QuemSomos.HomeContent>
            </QuemSomos.Content>
        </QuemSomos>

        <QuemSomos.LogoGroup>
            <QuemSomos.LogoGroupContent/>
        </QuemSomos.LogoGroup>

        <QuemSomosSectionTwo>
            <QuemSomosSectionTwo.Title>Conheça os colaboradores</QuemSomosSectionTwo.Title>
        </QuemSomosSectionTwo>

        </>
    );
}

export default AboutUs;
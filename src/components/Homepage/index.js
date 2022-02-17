import styled from 'styled-components';
import db from '../../../db.json';
import Link from 'next/link';

import ButtonContainedMedium from '../Buttons/ButtonContainedMedium';
import ButtonOutlinedMedium from '../Buttons/ButtonOutlinedMedium';

const Content = styled.section`
    min-height: 100vh;
    height: 100vh;
    position: relative;
    width: 100%;
`;

Content.BackgroundAnimation = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    z-index: -999;
    top: 0;
    left: 0;
    overflow:hidden;
    opacity: 60%;
`;

Content.BackgroundAnimationScrollOne = styled.div`
    height: 50%;
    position: relative;
    width: 1000%;
    background: url(/images/hubmaker1.webp) repeat-x;
    background-size: auto 95%;
    background-position: center;
    animation: bg-slideone 100s linear infinite;

    @keyframes bg-slideone {
    0% { transform: translateX(0); }
    50% { transform: translateX(45%);}
    100% { transform: translateX(0);}
    }
`;

Content.BackgroundAnimationScrollTwo = styled.div`
    height: 50%;
    position: relative;
    width: 1000%;
    background: url(/images/hubmaker2.webp) repeat-x;
    background-size: auto 95%;
    background-position: center;
    animation: bg-slidetwo 100s linear infinite;

    @keyframes bg-slidetwo {
    0% { transform: translateX(0); }
    50% { transform: translateX(-45%);}
    100% { transform: translateX(0);}
    }
`;

Content.Content = styled.div`
    width: calc(100% - 40px);
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    height: 100%;

    @media (min-width: 768px) {
        width: calc(100% - 64px);
    }
    @media (min-width: 1024px){
        width: calc(100% - 184px);
    }
    @media (min-width: 1366px) {
        width: calc(100% - 288px);
    }
`;

Content.ContentText = styled.div`
    max-width: 100%;
    width: 100%;
    padding: 0 auto;


    @media (min-width: 1366px) {
        width: 80%;
    }

    p {
        text-align: center;
        margin: 24px 0 24px ;
        line-height: 24px;
        font-size: 16px;
        font-weight: 600;
        color: ${({theme}) => theme.textColor.textGrayMain};

        @media (min-width: 768px) {
            font-size: 18px;
        }
    }
`;
Content.Buttons = styled.div`
    z-index: 5;
    width: 100%;
    max-width: 100%;
    padding: 4px;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

Content.ButtonsPadding = styled.div`
    padding: 4px;
`;

const Homepage = props => {
    return (
        <Content>

        <Content.BackgroundAnimation>
            <Content.BackgroundAnimationScrollOne/>
            <Content.BackgroundAnimationScrollTwo/>
        </Content.BackgroundAnimation>

            <Content.Content>
                <Content.ContentText>
                    <h1>Aprenda fabricação digital e crie suas próprias impressões 3D</h1>
                    <p>Tire sua ideia do papel e desenvolva novos projetos com toda a estrutura do laboratório Hub Maker Bahia.</p>
                </Content.ContentText>

                <Content.Buttons>
                    <Content.ButtonsPadding><Link href=""><ButtonContainedMedium>Explorar</ButtonContainedMedium></Link></Content.ButtonsPadding>
                    <Content.ButtonsPadding><Link href="/quemsomos"><ButtonOutlinedMedium>Quem somos</ButtonOutlinedMedium></Link></Content.ButtonsPadding>
                </Content.Buttons>
            </Content.Content>
        </Content>
    );
}

export default Homepage
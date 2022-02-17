import React from "react";
import styled from 'styled-components/';
import db from '../../../db.json';

const Background = styled.div`
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

    @media (max-width: 509px) {
        display: none;
    }
`;

Background.BackgroundAnimationScrollOne = styled.div`
    height: 50%;
    position: relative;
    width: 1000%;
    background: url(/images/hubmaker3.png) repeat-x;
    background-size: auto 95%;
    background-position: center;
    animation: bg-slideone 100s linear infinite;

    @keyframes bg-slideone {
    0% { transform: translateX(0); }
    50% { transform: translateX(45%);}
    100% { transform: translateX(0);}
    }
`;

Background.BackgroundAnimationScrollTwo = styled.div`
    height: 50%;
    position: relative;
    width: 1000%;
    background: url(/images/hubmaker4.png) repeat-x;
    background-size: auto 95%;
    background-position: center;
    animation: bg-slidetwo 100s linear infinite;

    @keyframes bg-slidetwo {
    0% { transform: translateX(0); }
    50% { transform: translateX(-45%);}
    100% { transform: translateX(0);}
    }
`;

Background.canvasBackgroundColor = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    background-color: ${({theme}) => theme.colors.colorWhite};

    @media screen and (min-width: 510px) {
    background-color: rgba(0,0,0,.6);
    }
`;

const BackgroundAnimation = ({BackgroundColor, BackgroundImageTop, BackgroundImageBottom}) => {
    return (
        <Background style={{ backgroundColor: `${BackgroundColor}` }}>
            <Background.BackgroundAnimationScrollOne style={{ backgroundImage: `url(${BackgroundImageTop})` }}/>
            <Background.BackgroundAnimationScrollTwo style={{ backgroundImage: `url(${BackgroundImageBottom})` }}/>
            <Background.canvasBackgroundColor/>
        </Background>
    );
}

export default BackgroundAnimation;
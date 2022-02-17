import React from "react";
import styled from 'styled-components';
import db from '../../../db.json';
import Link from 'next/link';

import ButtonContainedMedium from "../Buttons/ButtonContainedMedium";

const BannerContent = styled.section`
    padding: 24px 0;
    width: 100%;
    position: relative;
`;

BannerContent.Content = styled.section`
    min-height: 300px;
    height: 300px;
    width: 100%;
    background-color: ${({theme}) => theme.colors.colorBackgroundDark};
    position: relative;
    border-radius: ${({theme}) => theme.borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-size: 100% ;

    @media screen and (min-width: 1600px) {
        height: 400px;
    }

    h3 {
        color: #FFFFFF;
        font-size: 32px;
        font-weight: 500;
        margin-bottom: 30px;
    }
`;

const Banner = ({BackgroundImageBanner}) => {

    return (
        <BannerContent>
            <BannerContent.Content style={{ backgroundImage: `url(${BackgroundImageBanner})` }}>
                <h3>Para começar, envie-nos o arquivo no tormato .stl</h3>
                <Link href="/submit"><ButtonContainedMedium>Submeter arquivo</ButtonContainedMedium></Link>
            </BannerContent.Content>
        </BannerContent>
    );
}

export default Banner;
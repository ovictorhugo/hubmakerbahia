import React from "react";
import styled from 'styled-components/';
import db from '../../../db.json';
import Image from 'next/image';
import Logo from '../../../public/images/logoComplete.svg';
import Link from "next/link";

const CanvasLayout = styled.section`
    display: grid;
    position: relative;
    min-height: 100vh;
    visibility: visible !important;
    grid-template-rows: 60px min-content minmax(min-content,1fr) minmax(35px,min-content);
    height: 100vh;

    @media screen and (min-width: 510px) {
        grid-template-columns: 1fr minmax(min-content,1280px) 1fr;
    }

    @media screen and (max-width: 509px) {
        height: 100%;
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

CanvasLayout.grid = styled.div`
    display: grid;
    width: auto;
    grid-row: 1/5;
    grid-column: 1/4;
    position: relative;
    height: 100%;
    grid-template-columns: repeat(1,1fr);

    @media screen and (min-width: 1280px) {
        grid-template-rows: 1fr;
        grid-template-columns: repeat(12,1fr);
        grid-gap: 0 32px;
        gap: 0 32px;
        display: grid;
    }

    @media screen and (max-width: 509px) {
        height: 100%;
        padding: 0 24px;
        background: #fff;
        justify-content: center;
    }

    @media screen and (min-width: 510px) {
        grid-column: 2/3;
        align-items: center;
        background: rgba(0,0,0,0);
        margin: 0 auto;
        padding-left: 0;
        padding-right: 0;
    }

`;

CanvasLayout.Panel = styled.section`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    grid-row: 1;
    width: 100%;
    grid-column: 1/13;
    justify-content: center;

    @media screen and (max-width: 509px) {
        height: 100%;

    }

    @media screen and (min-width: 1280px) {
        grid-column: 7/12;
    }

    @media screen and (min-width: 510px) {
        height: 100%;
        width: 510px;
    }
`;

CanvasLayout.PanelContent = styled.section`
    background: #fff;
    border-radius: 4px;
    border: 1px solid hsla(0,0%,100%,0);
    flex-direction: column;
    display: flex;
    position: relative;
    border-radius: ${({theme}) => theme.borderRadius};

    @media screen and (max-width: 509px) {
        width: 100%;
    }


    @media screen and (min-width: 510px) {
        box-sizing: border-box;
        min-height: 630px;
        padding: 24px 56px 40px;
    }

    @media screen and (min-width: 1024px) {
        padding: 40px 46px;
    }
`;

CanvasLayout.LinkSignUp = styled.div`
    display: flex;
    flex-direction: row;
    margin: 8px 0 32px;

    p {
        font-size: 15px;
        font-weight: 600;
        line-height: 27px; 
        margin-right: 5px;
        color: ${({theme}) => theme.textColor.textGrayDark};
    }

    .link {
        color: ${({theme}) => theme.colors.colorPrimaryMain};
        cursor: pointer;
    }
`;

CanvasLayout.LogoPanel = styled.div`
    display: flex;
    margin-top: 10px;
    align-items: center;
    margin-bottom: 8px;
    width: 70px;

    @media screen and (min-width: 1280px) {
        display: none;
    }
`;

CanvasLayout.Logo = styled.div`
    display: none;
    grid-row: 1;
    grid-column: 2/6;

    @media screen and (min-width: 1280px) {
        display: block;
    }
`;

CanvasLayout.LogoContext = styled.div`
    display: none;
    grid-row: 1;
    grid-column: 2/6;

    @media screen and (min-width: 1024px) and (min-height: 780px){
        position: fixed;
    }

    @media screen and (min-width: 1280px) {
        display: flex;
        height: 100%;
        align-items: center;
        position: relative;
        bottom: 0;
        width: 130px;
    }

    @media screen and (min-width: 1024px) {
        width: 150px;
    }
`;

const AuthWrapper = ({headline, paragraph, link, route, children}) => {

    return (
        <CanvasLayout>

            <CanvasLayout.grid>
                <CanvasLayout.Logo>
                    <CanvasLayout.LogoContext style={{ cursor: `pointer` }}>
                        <Link href='/'><Image src={Logo} unresized></Image></Link>
                    </CanvasLayout.LogoContext>
                </CanvasLayout.Logo>

                <CanvasLayout.Panel>
                    <CanvasLayout.PanelContent>
                        <CanvasLayout.LogoPanel style={{ cursor: `pointer` }}><Link href='/'><Image src={Logo} unresized></Image></Link></CanvasLayout.LogoPanel>
                        {headline && <h2>{headline}</h2>}

                        <CanvasLayout.LinkSignUp>
                            {paragraph && <p>{paragraph}</p>}
                            <Link href={route}>{link && <p className="link">{link}</p>}</Link>
                        </CanvasLayout.LinkSignUp>

                        {children && children}
                    </CanvasLayout.PanelContent>
                </CanvasLayout.Panel>
            </CanvasLayout.grid>
        </CanvasLayout>
    );

}

export default AuthWrapper;

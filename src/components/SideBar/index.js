import React from "react";
import styled from 'styled-components';
import db from '../../../db.json';
import Link from 'next/link';

const SideBarSection = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-flow: row wrap;
    border-radius: ${({theme}) => theme.borderRadius};
    border: 1px solid #eee;
    margin-bottom: 20px;
    background-color: ${({theme}) => theme.colors.colorBackgroundMain};

    @media screen and (max-width: 509px) {
        width: 100%;
    }
`;

SideBarSection.Header = styled.section`
    width: 100%;
    height: 40px;
    padding: 0 20px;
    padding-top: 7px;
    border-bottom: 1px solid #eee;
    border-radius: ${({theme}) => theme.borderRadius}  ${({theme}) => theme.borderRadius} 0 0;
    align-items: center;
    background: rgba(0,87,255,0.6);
    display: flex;

    p {
        font-size: 13px;
        font-weight: 700;
        color: #ffffff;
    }
`;

SideBarSection.Body = styled.section`
    width: 100%;
    height: auto;
    padding: 20px 20px 0;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 ${({theme}) => theme.borderRadius}  ${({theme}) => theme.borderRadius};
    background-color: ${({theme}) => theme.colors.colorBackgroundMain};

    p {
        margin: 20px 0;
        font-size: 12px;
        font-weight: 500;
        text-align: center;
        color: ${({theme}) => theme.textColor.textGrayMain};
    }
`;

export default function SideBar({children, title, ...otherProps}) {
    return (
        <SideBarSection {...otherProps}>
            <SideBarSection.Header>
                {title && <p>{title}</p>}
            </SideBarSection.Header>

            <SideBarSection.Body>
                {children}
            </SideBarSection.Body>
        </SideBarSection>
    );
}
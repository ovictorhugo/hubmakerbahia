import styled from 'styled-components';
import db from '../../../db.json';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './../../../public/images/logoCompact.svg'
import ImgMenu from './../../../public/images/imgMenu.png'
import Modal from 'react-modal';
import React from 'react';
import ReactDOM from 'react-dom';

import ButtonOutlinedSmall from '../Buttons/ButtonOutlinedSmall';
import ButtonContainedSmall from '../Buttons/ButtonContainedSmall';
import ButtonTextSmall from '../Buttons/ButtonTextSmall'


const Navbar = styled.nav`
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 300px;
    z-index: 999;
`;

Navbar.Content = styled.div `
    display: flex;
    flex-direction: column;
    height: calc(100vh - 40px);
    padding: 20px;
    background-color: #ffffff;
    justify-content: space-between;
`

Navbar.BackgroundBlur = styled.div `
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.6);
    z-index: 9999;
    transition: opacity 150ms linear;
`

Navbar.Logo = styled.a `
    width: 100px;
    display: flex;
    height: 42px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0 12px;
`

Navbar.ContentLogoClose = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: auto;
    margin: 0 0 16px;
`

Navbar.Line = styled.div `
    height: 1px;
    width: 100%;
    background-color: ${({theme}) => theme.colors.colorSecondaryDarker};
    margin: 12px 0;
`

Navbar.PrimaryNavCoreNavigation = styled.ul `
    margin-right: auto;
    width: 100%;
    height: auto;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
`

Navbar.PrimaryNavCoreNavigationItem = styled.li `
    margin: 16px 0 0;
    position: relative;
    height: 22px;
    list-style: none;
    align-items: center;
    display: flex;
    cursor: pointer;
    color: ${({theme}) => theme.textColor.textGrayDark};
    font-size: 13.5px;
    font-weight: 500;
    padding: 5px 12px;
    height: 32px;
    border-radius: ${({theme}) => theme.borderRadius};

    &:hover {
        transition: 500ms;
        background-color: ${({theme}) => theme.colors.colorSecondaryDark};
    }

    &:active {
        transition: 500ms;
        background-color: ${({theme}) => theme.colors.colorSecondaryDarker};
    }
`

Navbar.PrimaryNavButtons = styled.ul `
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

Navbar.PrimaryNavButtonsItem = styled.li `
    margin: 4px;
    position: relative;
    height: 100%;
    list-style: none;
    align-items: center;
    justify-content: center;
    display: flex;
`

Navbar.Ilustration = styled.div `
    display: flex;
    width: 100%;
    margin-bottom: 20px;
`
export default function HeaderDrop() {

    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

    return (
            <Navbar.BackgroundBlur onClick={closeModal}>
            <Navbar>
                <Navbar.Content>
                    <div>
                    <Navbar.ContentLogoClose>
                        <Link href="/"><Navbar.Logo>
                            <Image src={Logo} alt="Logo Hub Maker" unsized/> 
                        </Navbar.Logo></Link>

                        <ButtonTextSmall onClick={closeModal}>teste</ButtonTextSmall>
                    </Navbar.ContentLogoClose>
                    
                    <Navbar.Line/>

                    <Navbar.PrimaryNavCoreNavigation>
                        <Link href="/"><Navbar.PrimaryNavCoreNavigationItem>Página inicial</Navbar.PrimaryNavCoreNavigationItem></Link>

                        <Link href="/"><Navbar.PrimaryNavCoreNavigationItem>Quem somos</Navbar.PrimaryNavCoreNavigationItem></Link>

                        <Link href="/"><Navbar.PrimaryNavCoreNavigationItem>Comunidade</Navbar.PrimaryNavCoreNavigationItem></Link>
                    </Navbar.PrimaryNavCoreNavigation>
                    </div>

                    <div>
                    <Navbar.Ilustration>
                    <Image src={ImgMenu} alt="Logo Hub Maker" unsized/> 
                    </Navbar.Ilustration>
                    <Navbar.PrimaryNavButtons>
                        <Navbar.PrimaryNavButtonsItem><Link href="/login"><ButtonOutlinedSmall>Iniciar sessão</ButtonOutlinedSmall></Link></Navbar.PrimaryNavButtonsItem>
                        <Navbar.PrimaryNavButtonsItem><Link href="/registration"><ButtonContainedSmall>Inscreva-se</ButtonContainedSmall></Link></Navbar.PrimaryNavButtonsItem>
                    </Navbar.PrimaryNavButtons>
                    </div>
                </Navbar.Content>
            </Navbar>
        </Navbar.BackgroundBlur>

    );
};


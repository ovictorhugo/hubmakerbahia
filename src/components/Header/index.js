import styled from 'styled-components';
import db from '../../../db.json';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './../../../public/images/logoCompact.svg'
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ImgMenu from './../../../public/images/imgMenu.png'

import ButtonOutlinedSmall from '../Buttons/ButtonOutlinedSmall';
import ButtonContainedSmall from '../Buttons/ButtonContainedSmall';
import HeaderDrop from '../HeaderDrop';
import ButtonTextSmall from '../Buttons/ButtonTextSmall'


const Navbar = styled.nav`
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background-color: #ffffff;
`;

Navbar.Content = styled.div `
    display: flex;
    height: 54px;
    padding: 0 24px;
    align-items: center;
    border-bottom: solid  2px;
    border-color: ${({theme}) => theme.colors.colorSecondaryDark};
`

Navbar.ContentLogoClose = styled.div `
    display: flex;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`

Navbar.Logo = styled.a `
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
Navbar.Line = styled.div `
    height: 34px;
    width: 1px;
    background-color: ${({theme}) => theme.colors.colorSecondaryDarker};
    margin-left: 24px;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

Navbar.PrimaryNavCoreNavigation = styled.ul `
    margin-right: auto;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
`

Navbar.PrimaryNavCoreNavigationItem = styled.li `
    margin-left: 24px;
    position: relative;
    height: 100%;
    list-style: none;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    color: ${({theme}) => theme.textColor.textGrayMain};
    font-size: 13.5px;
    font-weight: 500;
    border-top: solid  2px transparent;
    border-bottom: solid  2px transparent;

    &:hover {
        transition: 500ms;
        color: ${({theme}) => theme.textColor.textGrayDarker};
        border-color: ${({theme}) => theme.textColor.textGrayDarker};
    }

    &:active {
        transition: 500ms;
        color: ${({theme}) => theme.textColor.textGrayDarker};
        border-color: ${({theme}) => theme.textColor.textGrayDarker};
    }

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

Navbar.PrimaryNavButtons = styled.ul `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    box-sizing: border-box;
`

Navbar.PrimaryNavButtonsItem = styled.li `
    margin-left: 8px;
    position: relative;
    height: 100%;
    list-style: none;
    align-items: center;
    justify-content: center;
    display: flex;
`
//modal 

const customStyles = {
    content: {
        width: '100%',
        height: '100vh',
        backgroundColor:' transparent',
        margin: '0',
        padding: '0',
        transition: 'opacity 150ms linear',
        border: 'none',
        top:'0',
        left: '0',
    },
  };

  const ModalHeader = styled.nav`
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  z-index: 999;
`;

ModalHeader.Content = styled.div `
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
  padding: 20px;
  background-color: #ffffff;
  justify-content: space-between;
  transition: 'opacity 150ms linear',
`

ModalHeader.BackgroundBlur = styled.div `
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.6);
  z-index: 9999;
  transition: opacity 150ms linear;
`

ModalHeader.Logo = styled.a `
  width: 100px;
  display: flex;
  height: 42px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 12px;
`

ModalHeader.ContentLogoClose = styled.div `
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  margin: 0 0 16px;
`

ModalHeader.Line = styled.div `
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.colorSecondaryDarker};
  margin: 12px 0;
`

ModalHeader.PrimaryNavCoreNavigation = styled.ul `
  margin-right: auto;
  width: 100%;
  height: auto;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`

ModalHeader.PrimaryNavCoreNavigationItem = styled.li `
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

ModalHeader.PrimaryNavButtons = styled.ul `
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`

ModalHeader.PrimaryNavButtonsItem = styled.li `
  margin: 4px;
  position: relative;
  height: 100%;
  list-style: none;
  align-items: center;
  justify-content: center;
  display: flex;
`

ModalHeader.Ilustration = styled.div `
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

const Header = props => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

    return (
        <>
            <Navbar>
                <Navbar.Content>

                    <Navbar.ContentLogoClose><ButtonTextSmall onClick={openModal}></ButtonTextSmall></Navbar.ContentLogoClose>

                    <Link href="/"><Navbar.Logo>
                        <Image src={Logo} alt="Logo Hub Maker" unsized/> 
                    </Navbar.Logo></Link>

                    <Navbar.Line/>

                    <Navbar.PrimaryNavCoreNavigation>

                        <Link href="/"><Navbar.PrimaryNavCoreNavigationItem>Página inicial</Navbar.PrimaryNavCoreNavigationItem></Link>

                        <Link href="/quemsomos"><Navbar.PrimaryNavCoreNavigationItem>Quem somos</Navbar.PrimaryNavCoreNavigationItem></Link>

                        <Link href="/comunidade"><Navbar.PrimaryNavCoreNavigationItem>Comunidade</Navbar.PrimaryNavCoreNavigationItem></Link>

                    </Navbar.PrimaryNavCoreNavigation>

                    <Navbar.PrimaryNavButtons>
                        <Navbar.PrimaryNavButtonsItem><Link href="/login"><ButtonOutlinedSmall>Iniciar sessão</ButtonOutlinedSmall></Link></Navbar.PrimaryNavButtonsItem>
                        <Navbar.PrimaryNavButtonsItem><Link href="/registration"><ButtonContainedSmall>Inscreva-se</ButtonContainedSmall></Link></Navbar.PrimaryNavButtonsItem>
                    </Navbar.PrimaryNavButtons>

                </Navbar.Content>
            </Navbar>

            <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            >
                <ModalHeader.BackgroundBlur onClick={closeModal}>
                    <ModalHeader>
                        <ModalHeader.Content>
                            <div>
                            <ModalHeader.ContentLogoClose>
                                <Link href="/"><ModalHeader.Logo>
                                    <Image src={Logo} alt="Logo Hub Maker" unsized/> 
                                </ModalHeader.Logo></Link>

                                <ButtonTextSmall onClick={closeModal}>teste</ButtonTextSmall>
                            </ModalHeader.ContentLogoClose>
                            
                            <ModalHeader.Line/>

                            <ModalHeader.PrimaryNavCoreNavigation>
                                <Link href="/"><ModalHeader.PrimaryNavCoreNavigationItem>Página inicial</ModalHeader.PrimaryNavCoreNavigationItem></Link>

                                <Link href="/"><ModalHeader.PrimaryNavCoreNavigationItem>Quem somos</ModalHeader.PrimaryNavCoreNavigationItem></Link>

                                <Link href="/"><ModalHeader.PrimaryNavCoreNavigationItem>Comunidade</ModalHeader.PrimaryNavCoreNavigationItem></Link>
                            </ModalHeader.PrimaryNavCoreNavigation>
                            </div>

                            <div>
                            <ModalHeader.Ilustration>
                            <Image src={ImgMenu} alt="Logo Hub Maker" unsized/> 
                            </ModalHeader.Ilustration>
                            <ModalHeader.PrimaryNavButtons>
                                <ModalHeader.PrimaryNavButtonsItem><Link href="/login"><ButtonOutlinedSmall>Iniciar sessão</ButtonOutlinedSmall></Link></ModalHeader.PrimaryNavButtonsItem>
                                <ModalHeader.PrimaryNavButtonsItem><Link href="/registration"><ButtonContainedSmall>Inscreva-se</ButtonContainedSmall></Link></ModalHeader.PrimaryNavButtonsItem>
                            </ModalHeader.PrimaryNavButtons>
                            </div>
                        </ModalHeader.Content>
                    </ModalHeader>
                </ModalHeader.BackgroundBlur>
            </Modal>
        </>
    );
};

export default Header;

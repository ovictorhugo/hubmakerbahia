import React, { useState } from 'react';
import styled from 'styled-components';
import db from '../../../db.json';
import Link from 'next/link';

import BackgroundAnimation from "../BackgroundAnimation";
import AuthWrapper from "../AuthWrapper";
import Input from "../Input";
import ButtonContainedSmall from "../Buttons/ButtonContainedSmall";
import ButtonOutlinedLargeIcon from "../Buttons/ButtonOutlinedLarge";

import { useUserAuth } from '../../context/UserAuthContext';
import { useRouter } from 'next/router';

const Form = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;

    p {
        text-align: left;
        line-height: 18px;
        font-size: 14px;
        font-weight: 600; 
        color: #E51F40;
        margin-right: auto;
    }
`;

Form.Separator = styled.section`
    margin-top: 24px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({theme}) => theme.textColor.textGrayMain};
    font-size: 17px;
    font-weight: 300;
    line-height: 23px;

    ::before {
        flex: 1;
        border-bottom: 1px solid ${({theme}) => theme.colors.colorSecondaryDarker};
        margin-right: 0.5em;
        content: "";
        -webkit-box-flex: 1;
    }

    ::after {
        flex: 1;
        border-bottom: 1px solid ${({theme}) => theme.colors.colorSecondaryDarker};
        margin-left: 0.5em;
        content: "";
        -webkit-box-flex: 1;
    }
`;

Form.Background = styled.section`

`;

const SignIn = () => {

    const configAuthWrapper = {
        headline: 'print("Bem-vindo")',
        paragraph: 'Novo usuário?',
        link: 'Crie uma conta',
        route: '/registration',
    };

    const BackgroundConfig = {
        BackgroundColor:'#283C8E',
        BackgroundImageTop: '/images/hubmaker3.webp',
        BackgroundImageBottom: '/images/hubmaker4.webp'
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            router.push('/dashboard')
        } catch (err) {
            setError(err.message)
        }
    }

    const handleGoogleSign = async (e) => {
        e.preventDefault();

        try {
            await googleSignIn();
            router.push('/dashboard')
        } catch(err) {
            setError(err.message);
        }
    };

    return (

        <Form.Background>

        <BackgroundAnimation {...BackgroundConfig}></BackgroundAnimation>

            <AuthWrapper {...configAuthWrapper}>
                
                <form onSubmit={handleSubmit}>
                <Input
                    type={'email'}
                    label = "Endereço de email"
                    onChange= {(e) => setEmail(e.target.value)}
                />

                <Input
                    type={'password'}
                    label = "Senha"
                    onChange = {(e) => setPassword(e.target.value)}
                />

                <Form>
                    {error && <p>{ error }</p>}
                    <ButtonContainedSmall>Continuar</ButtonContainedSmall>
                </Form>

                <Form.Separator>Ou</Form.Separator>

                </form>

                <ButtonOutlinedLargeIcon onClick= { handleGoogleSign }><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>Continue com o Google</ButtonOutlinedLargeIcon>
            </AuthWrapper>
        </Form.Background>
    );
}

export default SignIn;
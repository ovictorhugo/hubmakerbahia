import styled from 'styled-components';
import db from '../../../db.json';
import Link from 'next/link';



import BackgroundAnimation from "../BackgroundAnimation";
import AuthWrapper from "../AuthWrapper";
import Input from "../Input";
import ButtonContainedSmall from "../Buttons/ButtonContainedSmall";

import { useState } from 'react';
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

Form.PasswordContent = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 509px) {
        justify-content: center;
        flex-direction: column;
    }

    Input {
        width: calc(100% - 8px);
    }
`;

export default function SignUp() {


    const configAuthWrapper = {
        headline: 'print("Junte-se à comunidade!")',
        paragraph: 'Já tem uma conta?',
        link: 'Fazer login',
        route: '/login'
    };

    const BackgroundConfig = {
        BackgroundColor:'#12B0E5',
        BackgroundImageTop: '/images/hubmaker5.webp',
        BackgroundImageBottom: '/images/hubmaker6.webp'
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            router.push('/login')
        } catch (err) {
            setError(err.message)
        }
    }

    return (

        <Form.Background>
            <BackgroundAnimation {...BackgroundConfig}></BackgroundAnimation>

            <AuthWrapper {...configAuthWrapper}>
                <form onSubmit={handleSubmit}>
                
                <Input
                    type="text"
                    name="displayName"
                    
                    
                    label = "Nome"
                />

                <Input
                    type="email"
                    name="email"
                    
                    onChange = {(e) => setEmail(e.target.value)}
                    label = "Endereço de email"
                />
                
                <Form.PasswordContent>
                    <Input
                        type="password"
                        name="password"
                        
                        onChange = {(e) => setPassword(e.target.value)}
                        label = "Senha"
                    />

                    <Input
                        type="password"
                        name="confirmPassword"
                        
                        
                        label = "Confirmar senha"
                    />

                </Form.PasswordContent>

                <Form>
                    {error && <p>{ error }</p>}
                    <ButtonContainedSmall>Continuar</ButtonContainedSmall>
                </Form>

            
                </form>
            </AuthWrapper>
        </Form.Background>
    );
}
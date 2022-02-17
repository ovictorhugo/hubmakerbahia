import React from "react";
import Header from "../components/Header";
import styled from 'styled-components';

const Main = styled.div`
    width: 100%;
    height: 100%;
`;

const AuthLayout = props => {
    return (
        <Main className="page">
            {props.children}
        </Main>
    );
}

export default AuthLayout
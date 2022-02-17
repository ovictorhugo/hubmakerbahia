import React from "react";
import Header from "../components/Header";
import styled from 'styled-components';

const Main = styled.div`
    width: 100%;
    height: 100%;
`;

const MainLayout = props => {
    return (
        <Main className="page">
            <Header/>
            {props.children}
        </Main>
    );
}

export default MainLayout
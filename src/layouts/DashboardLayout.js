import React from "react";
import Header from "../components/Header";
import styled from 'styled-components';

const Main = styled.div`
    width: 100%;
    height: 100%;
`;

Main.Content = styled.div`
    padding: 0 24px;
    margin-top: 56px;
    min-height: 100vh;
`;

const DashboardLayout = props => {
    return (
        <Main className="page">
            <Header/>

            <Main.Content>
                {props.children}
            </Main.Content>
        </Main>
    );
}
export default DashboardLayout
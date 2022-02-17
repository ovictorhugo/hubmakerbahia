import styled from 'styled-components'
import db from '../../../../db.json'

const Button = styled.button`
    background-color: ${({theme}) => theme.colors.colorPrimaryMain};
    border-color: ${({theme}) => theme.colors.colorPrimaryMain};
    border-radius: ${({theme}) => theme.borderRadius};
    border-width: 1px;
    border-style: solid;
    color: #ffffff;

    min-height: 32px;
    height: auto;
    min-width: 72px;
    width: auto;
    padding: 4px 14px;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;

    &:hover {
        transition: 500ms;
        background-color: ${({theme}) => theme.colors.colorPrimaryDark};
        border-color: ${({theme}) => theme.colors.colorPrimaryDark};
    }

    &:active {
        transition: 500ms;
        background-color: ${({theme}) => theme.colors.colorPrimaryDarker};
        border-color: ${({theme}) => theme.colors.colorPrimaryDarker};
    }
`;

export default function ButtonContainedSmall({children, ...otherProps}) {
    return (
        <Button {...otherProps}>{children}</Button>
    );
}
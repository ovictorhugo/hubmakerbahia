import styled from 'styled-components'
import db from '../../../../db.json'

const Button = styled.button`
    background-color: ${({theme}) => theme.colors.colorPrimaryMain};
    border-color: transparent;
    border-radius: ${({theme}) => theme.borderRadius};
    border-width: 1px;
    border-style: solid;
    color: #ffffff;

    min-width: 72px;
    width: auto;
    padding: 15px;
    min-height: 56px;
    height: auto;
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
    }

    &:active {
        transition: 500ms;
        background-color: ${({theme}) => theme.colors.colorPrimaryDarker};
    }

    i, svg {
        display: inline-block;
        vertical-align: top;
        height: 18px;
        width: 18px;
        margin-right: 12px;
    }
`;

export default function ButtonContainedLarge({children, ...otherProps}) {
    return (
        <Button {...otherProps}>{children}</Button>
    );
}
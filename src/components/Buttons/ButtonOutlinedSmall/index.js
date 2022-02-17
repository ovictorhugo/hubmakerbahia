import styled from 'styled-components'
import db from '../../../../db.json'

const Button = styled.button`
    background-color: #ffffff;
    border-color: ${({theme}) => theme.colors.colorSecondaryDarker};
    border-radius: ${({theme}) => theme.borderRadius};
    border-width: 1px;
    border-style: solid;
    color: ${({theme}) => theme.textColor.textGrayDark};

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
        background-color: ${({theme}) => theme.colors.colorSecondaryDark};
    }

    &:active {
        transition: 500ms;
        background-color: ${({theme}) => theme.colors.colorSecondaryDarker};
    }
`;

export default function ButtonOutlinedSmall({children, ...otherProps}) {
    return (
        <Button {...otherProps}>{children}</Button>
    );
}
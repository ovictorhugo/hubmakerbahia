import styled from 'styled-components'
import db from '../../../db.json'

const Content = styled.div`
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;

    label {
        color: ${({theme}) => theme.textColor.textGrayMain};
        font-weight: 400;
        font-size: 12px;
        line-height: 1.3;
        text-align: left;
        padding: 4px 0 5px
    }

    input {
        height: 28px;
        font-size: 16px;
        line-height: 1.15;
        width: 100%;
        background-color: transparent;
        color:  ${({theme}) => theme.textColor.textGrayDark};
        border-radius: 0;
        border-width: 0 0 1px;
        resize: none;
        overflow-y: hidden;
        min-width: 48px;
        border-color: ${({theme}) => theme.colors.colorSecondaryDarker};
        display: flex;
        outline: 0;
        list-style: none;
        padding: 0px;
        margin-bottom: 20px;

        &:focus {   
            transition: 500ms ;
            border-color: ${({theme}) => theme.colors.colorPrimaryMain};
            box-shadow: 0 1px 0 ${({theme}) => theme.colors.colorPrimaryMain};
        }

        @media screen and (max-width: 768px) {
        font-size: 19px;
        }
    }
`;

export default function Input ({handleChange, label, ...otherProps}) {
    return (
        <Content>
            {label && (<label>{label}</label>)}
            
            <input onChange={handleChange} {...otherProps}></input>
        </Content>
    )
}
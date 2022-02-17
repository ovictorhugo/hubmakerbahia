import styled from 'styled-components'
import db from '../../../../db.json'

const FontH1 = styled.h1`
    color: #323232;
    font-size: 62px;
    font-weight: 700;
    line-height: 1.3;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 42px;
    }

`;

export default function fontH1({children, ...otherProps}) {
    return (
        <FontH {...otherProps}>{children}</FontH>
    );
}
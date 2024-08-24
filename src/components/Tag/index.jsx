import styled from "styled-components";
import colors from "../../utils/styles";

const TagP = styled.p`
    min-width: 115px;
    width: fit-content;
    text-align: center;
    padding: 10px;
    padding-bottom: 5px;
    padding-top: 5px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    color: white;
    background-color: ${colors.error}
`

function Tag({ tagName }) {
    return (
        <TagP>{tagName}</TagP>
    )
}

export default Tag
import styled from "styled-components";

const Card = styled.div`

    padding: 30px;
    text-align: center;
    margin: 0 20px;
    border: ${(props) => props.theme === 'light' ? '1px solid rgba(0,0,0,.125)' : 'none'};
    border-radius: 0.25rem;
    word-wrap: break-word;
    display: flex;
    flex-direction: column;
    background-clip: border-box;
    color: ${(props) => props.theme === 'light' ? 'black' : 'white'};
    background-color: #ffffffab;
    /* transform: scale(0.95); */
    /* box-shadow: 0 0 10px 0px #ffffffab; */

    img{
        width: 40%;
        border-radius: 100px;
        margin: 10px auto;
    }

    .text{
        margin: 10px;
        align-self: center;
    }

    h3{
        overflow: hidden;
        white-space: nowrap;
    }
    
`

export default Card
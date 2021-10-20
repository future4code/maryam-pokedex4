import styled from "styled-components";

export const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100%;
height: 10%;
min-height: 80px;
border: 1px solid black;
background-color: #FF0000;
button{
    cursor: pointer;
    height: 60%;
    width: 10%;
    :hover{
    /* color: white; */
    }
}
h1{
    position: absolute;
    right: 50%;
    /* width: 70%; */
    text-align: center;
}
`
import styled from "styled-components";

export const Return = styled.div`
    border-radius: 4px;
    z-index: 2;
    cursor: pointer;
    height: 50%;
    width: 15%;
    background-color: #202124;
    color: #DCDCDC;
    border: none;
    align-items: center;
    text-align: center;
    margin: 0;
    p{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: auto;
    }
    :hover{
    transform: translateY(-0.25em);
    }
`
export const GoHomeButton = styled.div`
    border-radius: 4px;
    z-index: 2;
    cursor: pointer;
    height: 50%;
    width: 20%;
    background-color: #d62b2b;
    color: white;
    border: none;
    align-items: center;
    text-align: center;
    margin: 0;
    p{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: auto;
    }
    :hover{
    transform: translateY(-0.25em);
    }
`

export const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
height: 10%;
min-height: 80px;
padding: 0 20px;
border: 1px solid black;
background-color: #d62b2b;
button{
    border-radius: 4px;
    z-index: 2;
    cursor: pointer;
    height: 50%;
    width: 15%;
    background-color: white;
    color: #d62b2b;
    border: none;
    :hover{
    transform: translateY(-0.25em);
    }
}
h1{
    z-index: 1;
    position: absolute;
    margin-right: auto;
    margin-left: auto;
    left: 0;
    right: 0;
    /* width: 70%; */
    text-align: center;
    color: black;
}
`
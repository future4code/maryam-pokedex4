import styled from "styled-components"

export const CardHomeContainer = styled.div`
width: 100%;
border: 1px solid black;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content:space-around;
background-color: orange;
padding: 2px;
`

export const ContainerNamePicture = styled.div`
display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: flex-start;
 height: 80%;
 div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;
 }
 div > img{
     min-height: 50%;
     min-width: 50%;
 }
 h5{
     height: 20%;
     width: 100%;
     margin: 0;
     text-align: center;
 }
`
export const HomeButtons = styled.div`
 padding: 5px 0;
 height: 6vh;
 display: flex;
 justify-content: space-around;
 background-color: white;
 border-radius: 10px;
`
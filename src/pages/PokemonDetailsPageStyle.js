import styled from 'styled-components'

export const Header = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100%;
height: 7%;
min-height: 80px;
button{
    cursor: pointer;
    height: 60%;
    width: 10%;
    :hover{
}
}
`
export const ElementContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100%;
margin-top: 20px;
div{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    width: 90%;
}
`
export const MoveContainerStyle = styled.div`
display: flex;
flex-direction: column;
div{
    flex-direction: row !important;
    border: none !important;
    width: 100%;
    padding: 0 !important;
}
div> p{
    width: 10%;
    :nth-child(1){
        font-weight: 800;
    }
    :nth-child(2){
        width: 90%;
    }
}
div > h5{
    width: 10%;
    :nth-child(2){
        width: 90%;
    }
}
`

export const FirstContainer = styled.div`
display: flex;
flex-direction: column !important;
justify-content: space-around;
align-items: center !important;
width: 30% !important;
height: 80%;
img{
    height: 40%;
    width: 40%;
    :nth-child(1){
    margin-bottom: 36px;
    }
}
`

export const SecondContainer = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column !important;
justify-content: space-around;
align-items: center;
width: 15% !important;
height: 80%;
padding: 20px;
border: 1px solid black;
text-align: center;
h3{
    width: 100%;
    text-align: center;
}
p{
    box-sizing: border-box;
    width: 100%;
}
`

export const ThirdContainer = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column !important;
justify-content: space-around;
align-items: center;
width: 30% !important;
height: 80%;
div{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid black;
    height: 90% !important;
    text-align: center;
    padding: 20px;
    :nth-child(1){
        padding: 0;
    }
}
p{
    width: 100%;
    text-align: center;
}
h5{
    width: 100%;
    margin: 0;
    text-align: center;
}
div:nth-child(1){
        height: 10% !important;
        flex-direction: row;
        margin-bottom: 12px;
    }
`
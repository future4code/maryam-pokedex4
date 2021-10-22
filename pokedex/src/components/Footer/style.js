import styled from "styled-components";

export const Pagination = styled.div`
  /* position: absolute;
  bottom: 0; */
  box-sizing: border-box;
  display: flex;
  height: 8vh;
  width: 100vw;
  background-color: #d62b2b;
  display: flex;
  justify-content: center;
  div {
    display: flex;
    justify-content: center;
    width: 30%;
  }
  div > p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
  }
`;
export const PaginationButton = styled.div`
  display: flex;
  justify-content: center;
  width: 70% !important;
  p {
    width: fit-content;
    height: auto;
    cursor: pointer;
    margin: 0;
    padding: 0;
    :hover {
      color: wheat;
    }
  }
`;
export const PaginationItem = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 10px;
  width: 30%;
`;

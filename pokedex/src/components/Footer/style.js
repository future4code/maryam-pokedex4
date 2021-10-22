import styled from "styled-components";

export const Pagination = styled.div`
position: absolute;
bottom: 0;
z-index: 1;
 height: 8vh;
 background-color: aqua;
 display: flex;
 justify-content: space-between;

  min-height: 100%;
  margin-bottom: -8vh; 
}
:after {
  content: "";
  display: block;
}
.site-footer, :after {
  height: 142px; 
}
`
export const PaginationButton = styled.div`
display:flex;
`
export const PaginationItem = styled.div`
 margin: 0 10px;
`
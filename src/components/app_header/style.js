import styled from "styled-components";

export const HeaderWrapper = styled.div`
&.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.content {
  border-bottom: 1px solid ${props => props.theme.isAlpha ? "rgba(255, 255, 255, 0)" : "rgba(233, 233, 233, 1)"};
  background-color: ${props => props.theme.isAlpha ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 1)"};
  transition: all 250ms ease;
  .top {
    display: flex;
    align-items: center;
    height: 80px;
  }
}
.cover {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: -1;
}
`

export const SearchAreaWrapper = styled.div`
height: ${props => props.isSearch ? '100px' : '0px'};
transition: height 250ms ease;
`
import styled from "styled-components";

const SearchTabsWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
color: ${props => props.theme.isAlpha ? '#fff' : '#222'};
.item {
  position: relative;
  margin: 0px 16px;
  cursor: pointer;
  &.active .bottom {
    position: absolute;
    bottom: -10px;
    left: 0;
    display: inline-block;
    width: 64px;
    height: 2px;
    background-color: ${props => props.theme.isAlpha ? '#fff' : '#222'};
}
}

`

export default SearchTabsWrapper
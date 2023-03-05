import styled from "styled-components";

const EntireFilterWrapper = styled.div`
position: fixed;
top: 80px;
left: 0;
right: 0;
padding: 10px 0 10px 15px;
border-bottom: 1px solid rgb(233, 233, 233);
background-color: #fff;
z-index: 99;
.list {
  display: flex;
  .item {
    padding: 6px 10px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 5px;
    margin-right: 10px;
    font-size: 15px;
    color: #808080;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}
  }
  .active {
    background-color: var(--secondary-color);
    color: #fff;
  }
}
`

export default EntireFilterWrapper
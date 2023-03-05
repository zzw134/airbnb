import styled from "styled-components";

const TabNamesWrapper = styled.div`
margin-bottom: 10px;
.city {
  flex-shrink: 0;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  padding: 0 15px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin-right: 10px;
  color: var(--primary-font-color);
  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 4px 1px rgba(0, 0, 0, .2);
  }
}
.active {
  background-color: var(--secondary-color);
  color: #fff;
}
`

export default TabNamesWrapper
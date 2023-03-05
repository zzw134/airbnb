import styled from "styled-components";

const SearchSectionsWrapper = styled.div`
display: flex;
width: 850px;
height: 66px;
background-color: #fff;
border-radius: 33px;
box-sizing: border-box;
border: 1px solid #cdcdcd;
.item {
  flex: 1;
  display: flex;
  align-items: center;
  .info {
    flex: 1;
    padding: 0 30px;
    .title {
      font-size: 12px;
      color: #222;
      font-weight: 600;
    }
    .desc {
      font-size: 14px;
      color: #666;
    }
  }
  .divider {
    height: 32px;
    width: 2px;
    background-color: #cdcdcd;
  }
}
`
export default SearchSectionsWrapper
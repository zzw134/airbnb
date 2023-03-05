import styled from "styled-components";

const AppFooterWrapper = styled.div`
border-top: 1px solid #cdcdcd;
padding-top: 40px;
margin-top: 50px;
.info {
  max-width: 1080px;
  margin: 0 auto;
  .info-list {
    display: flex;
    font-size: 15px;
    .list-item {
      flex: 1;
      .title {
        font-weight: 600;
        color: var(--primary-font-color);
        margin-bottom: 15px;
      }
      .sub-info {
        color: #828080;
        margin-bottom: 5px;
      }
    }
  }
}
.copy-right {
  border-top: 1px solid #cdcdcd;
  padding-top: 30px;
  margin: 40px 0 100px 0;
  text-align: center;
  color: #828080;
  font-size: 14px;
}
`

export default AppFooterWrapper
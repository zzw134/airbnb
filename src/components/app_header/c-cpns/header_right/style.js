import styled from "styled-components";

export const RightWrapper = styled.div`
display: flex;
justify-content: flex-end;
flex: 1;
.btns {
  display: flex;
  align-items: center;
  margin-right: 5px;
  .btn {
    border-radius: 22px;
    padding: 12px 15px;
    color: ${props => props.theme.isAlpha ? '#fff' : props.theme.textColor.primaryColor};
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    margin-left: -5px;
    &:hover {
      background-color: ${props => props.theme.isAlpha ? 'rgba(255, 255, 255, 0.5)' : '#f7f7f7'};
    }
  }
}
.profile {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  padding: 5px 5px 5px 12px;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 22px;
  margin-right: 24px;
  background-color: #fff;
  z-index: 99;
  cursor: pointer;
  .avatar {
    height: 30px;
    width: 30px;
    color: #717171;
  }
  ${props => props.theme.mixin.boxShadow}
  .panel {
    position: absolute;
    top: 50px;
    right: 0;
    width: 240px;
    background-color: #fff;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 15px;
    .item {
      height: 40px;
      line-height: 40px;
      padding-left: 15px;
      color: var(--font-color);
      &:hover {
        background-color: #f7f7f7;
      }
    }
    .panel-top,
    .panel-bottom {
      padding: 10px 0;
    }
    .panel-top {
      border-bottom: 1px solid ${props => props.theme.borderColor};
    }
    .register {
      font-weight: 600;
    }
  }
}
`
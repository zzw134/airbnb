import styled from "styled-components";

export const CenterWrapper = styled.div`
position: relative;
display: flex;
justify-content: center;
height: 48px;
.search-bar {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 48px;
  padding: 0 10px 0 20px;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 25px;
  background-color: #fff;
  font-size: 14px;
  color: var(--font-color);
  font-weight: 600;
  ${props => props.theme.mixin.boxShadow}
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 32px;
      color: #fff;
      background-color: #ff385c;
    }
  }

.search-detail {
  position: relative;
  transform-origin: 50% 0;
  .infos {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.bar-enter {
  transform: scale(2.85714, 1.375) translateY(58px);
  opacity: 0;
}

.bar-enter-active {
  transform: scale(1) translateY(0);
  opacity: 1;
  transition: all 250ms ease;
}

.bar-exit {
  opacity: 0;
}

.detail-enter {
  opacity: 0;
  transform: scale(0.35, 0.727273) translateY(-58px);
}

.detail-enter-active {
  opacity: 1;
  transform: scale(1) translateY(0);
  transition: all 250ms ease;
}

.detail-exit {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.detail-exit-active {
  opacity: 0;
  transform: scale(0.35, 0.727273) translateY(-58px);
  transition: all 250ms ease;
}
`
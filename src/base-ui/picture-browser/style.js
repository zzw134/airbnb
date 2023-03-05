import styled from "styled-components";

const PictureBrowserWrapper = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: #333;
z-index: 999;
display: flex;
flex-direction: column;
.top {
  position: relative;
  height: 80px;
  z-index: 1;
  .btn-close {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 14px;
    cursor: pointer;
  }
}
.slider {
  position: relative;
  display: flex;
  justify-content: center;
  flex: 1;
  .control {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
  }
  .btn {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
  }
  .pic-enter {
    opacity: 0;
    transform: translateX(${props => props.isNext ? '100%' : '-100%'});
  }
  .pic-enter-active {
    opacity: 1;
    transform: translateX(0%);
  }
  .pic-exit {
    opacity: 1;
  }
  .pic-exit-active {
    opacity: 0;
  }
  .pic-enter-active,
  .pi-exit-active {
    transition: all 200ms ease;
  }
  .picture {
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 105vh;
    overflow: hidden;
    user-select: none;
    img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 100%;
      margin: 0 auto;
    }
  }
}
.preview {
  flex-shrink: 0;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  .info {
    width: 105vh;
    color: #fff;
    .desc {
      display: flex;
      justify-content: space-between;
      user-select: none;
      margin-bottom: 3px;
      .toggle {
        cursor: pointer;
      }
    }
  }
  .list {
    overflow: hidden;
    height: ${props => props.isShowPreview ? '67px' : '0px'};
    margin-bottom: 3px;
    transition: height 500ms ease;
    .pic {
      margin-right: 15px;
      user-select: none;
      img {
        height: 67px;
        opacity: .5;
      }

      &.active {
        img {
          opacity: 1;
        }
      }
    }
  }
}
`

export default PictureBrowserWrapper
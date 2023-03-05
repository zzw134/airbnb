import styled from "styled-components";

const RoomItemWrapper = styled.div`
flex-shrink: 0;
width: ${props => props.width};
/* padding: 0 1% 20px 1%; */
padding-bottom: 20px;
padding-right: ${props => {
  if (props.nowrap) {
    const remainder = 100 % +props.width.slice(0, -1)
    return `calc(${remainder}% / 4)`
  } else {
    return 'unset'
  }
}};
.inner {
  position: relative;
  width: 100%;
  .cover {
    position: relative;
    padding: 60% 0 0;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      object-fit: cover;
    }
  }
  .slide {
    position: relative;
    &:hover {
      .control {
        visibility: visible;
      }
    }
    .control {
      visibility: hidden;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 1;
      display: flex;
      justify-content: space-between;
       color: #fff;
    }
    .btn {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background: linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, .1));
    }
    .right {
        background: linear-gradient(to left, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, .1));
    }

    .indicator {
      position: absolute;
      width: 30%;
      bottom: 10px;
      z-index: 9;
      left: 0;
      right: 0;
      margin: 0 auto;
      .dot-items {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 14.28%;
        .dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #fff;
        }
        .active {
          background-color: #5a5757;
          width: 8px;
          height: 8px;
        }
      }
    }
  }
  .desc {
    font-size: 12px;
    color: ${props => props.verifyTextColor};
    margin-top: 8px;
  }
  .name {
    font-size: 16px;
    color: var(--secondary-font-color);
    font-weight: 600;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-top: 10px;
  }
  .price {
    margin-top: 10px;
    font-size: 14px;
    color: var(--secondary-font-color);
  }
  .bottom {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 12px;
    .MuiRating-icon {
      margin-right: -2px;
    }
    .count {
      margin: 0 4px 0 5px;
    }
  }
}
`

export default RoomItemWrapper
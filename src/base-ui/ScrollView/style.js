import styled from "styled-components";

const ScrollViewWrapper = styled.div`
position: relative;
button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #d4d4d4;
  border-radius: 50%;
  z-index: 1;
  color: #222;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, .5);
  
}
.left-btn {
  left: -12px;
  background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, .5))
}
.right-btn {
  right: -12px;
  background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, .5))
}
.content-wrapper {
  overflow: hidden;
}
.scroll-content {
  display: flex;
  transition: transform 300ms ease;
}
`

export default ScrollViewWrapper
import styled from "styled-components";

const LongForItemWrapper = styled.div`
position: relative;
width: 19%;
flex-shrink: 0;
margin-right: calc(5% / 4);
border-radius: 5px;
overflow: hidden;
img {
  width: 100%;
}
.city-name, .price {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 25%;
  color: #fff;
  font-weight: bold;
}
.price {
  bottom: 15%;
  font-size: 14px;
  font-weight: unset;
}
.cover {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to bottom, transparent, #000);
}
`

export default LongForItemWrapper
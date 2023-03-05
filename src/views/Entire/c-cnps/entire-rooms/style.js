import styled from "styled-components";

const EntireRoomsWrapper = styled.div`
position: relative;
margin-top: 150px;
padding: 0 20px;
.title {
  font-weight: 700;
  font-size: 20px;
  color: #222;
  margin-bottom: 15px;
}
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, .8);
  z-index: 99;
}
`

export default EntireRoomsWrapper
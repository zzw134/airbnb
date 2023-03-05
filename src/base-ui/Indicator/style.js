import styled from "styled-components";

const IndicatorWrapper = styled.div`
overflow: hidden;
.content {
  display: flex;
  flex-wrap: nowrap;
  transition: transform 200ms ease;
  & > * {
    flex-shrink: 0;
  }
}
`

export default IndicatorWrapper
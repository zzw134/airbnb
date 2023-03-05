import styled from "styled-components";

export const LeftWrapper = styled.div`
display: flex;
align-items: center;
flex: 1;
color: ${props => props.theme.isAlpha ? '#fff' : props.theme.color.primaryColor};

.logo {
  cursor: pointer;
  margin-left: 24px;
}
`
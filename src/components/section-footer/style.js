import styled from "styled-components";

const SectionFooterWrapper = styled.div`
display: flex;
align-items: center;
font-size: 16px;
color: ${props => props.color};
font-weight: 600;
cursor: pointer;
&:hover {
  text-decoration: underline;
}
`

export default SectionFooterWrapper
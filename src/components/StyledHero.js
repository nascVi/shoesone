import styled from "styled-components";
import defaultImg from "../images/requinsonshore.jpeg";
const StyledHero = styled.header`
  min-height: 60vh;
  /* background: url(${defaultImg}); */
  background: url(${props => (props.img ? props.img : defaultImg)}) center no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;

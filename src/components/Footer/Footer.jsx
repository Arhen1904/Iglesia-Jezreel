import styled from "styled-components";
import FooterBackground from "../../assets/fondo-footer.jpg";
import { StyledH2, StyledH4 } from "../Ministers/Ministers";

const StyledSection = styled.section`
  background-image: url(${FooterBackground});
  background-size: cover;
  background-position: top;
  height: 70vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding-bottom: 4vh;
`;

const TextWrapper = styled.div`
  width: 40%;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledSection>
      <TextWrapper>
        <StyledH2>Horario de reuniones:</StyledH2>
        <StyledH4>Miércoles - 7:00 p.m.</StyledH4>
        <StyledH4>Viernes - 7:00 p.m.</StyledH4>
        <StyledH4>Domingo - 7:30 a.m.</StyledH4>
      </TextWrapper>
      <TextWrapper>
        <StyledH2>Contáctenos:</StyledH2>
        <StyledH4>
          Dirección: Iglesia Ministerio Jezreel, Panamá, Juan Díaz El Sitio,
          Diagonal a la Pascual. <br /> Tel: 394 - 5900 <br /> E-mail:
          ministeriojezreel@hotmail.com
        </StyledH4>
      </TextWrapper>
    </StyledSection>
  );
};

export default Footer;

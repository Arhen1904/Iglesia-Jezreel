import styled from "styled-components";
import BethelBackground from "../../assets/fondo-bethel.jpg";
import { StyledH2, StyledH4 } from "../Ministers/Ministers";

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${BethelBackground});
  background-size: cover;
  background-position: right top;
  text-align: end;
  display: flex;
  justify-content: end;
  border-top: 5px solid #b2783a;
  border-bottom: 5px solid #b2783a;
`;

const BethelContainer = styled.div`
  position: relative;
  top: 220px;
  right: 60px;
  width: 370px;
`;

const ExtendedStyledH4 = styled(StyledH4)`
  padding-inline: 0;
  width: 100%;
`;

const Bethel = () => {
  return (
    <StyledSection>
      <BethelContainer>
        <StyledH2>Llamados para llevar muchos frutos</StyledH2>
        <ExtendedStyledH4>
          Por tanto, id, y haced discípulos a todas las naciones, bautizándolos
          en el nombre del Padre, y del Hijo, y del Espíritu Santo; enseñándoles
          que guarden todas las cosas que os he mandado; y he aquí yo estoy con
          vosotros todos los días, hasta el fin del mundo. Amén. <br />
          <br />
          Mateo 28: 19-20
        </ExtendedStyledH4>
      </BethelContainer>
    </StyledSection>
  );
};

export default Bethel;

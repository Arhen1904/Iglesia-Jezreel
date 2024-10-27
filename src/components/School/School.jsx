import styled from "styled-components";
import SchoolBackground from "../../assets/fondo-escuela.jpg";

const StyledSection = styled.section`
  width: 100%;
  height: 110vh;
  background-image: url(${SchoolBackground});
  background-size: cover;
  background-position: bottom;
  text-align: center;
  padding: 100px 0;
  align-content: center;
`;

const StyledH1 = styled.h1`
  font-family: "Teko", sans-serif;
  font-size: 6vw;
  color: #c69d35;
  text-shadow: black 0 0 15px;
  margin-inline: 7vw;
`;

const School = () => {
  return (
    <StyledSection>
      <StyledH1>
        Aprende más de la Biblia y la misión que tiene Dios para tu vida
      </StyledH1>
    </StyledSection>
  );
};

export default School;

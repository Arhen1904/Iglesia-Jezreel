import PresentationImage from "../../assets/PASTORES-IMJ.jpg";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: 5%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  gap: 2%;
  height: 100vh;
`;

const StyledPresentation = styled.div`
  height: 100%;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  padding: 3%;
  border-radius: 10px;
  box-shadow: #0000004b 5px 5px 10px, inset #ffffffb9 -20px -20px 50px,
    #ffffffb8 -5px -5px 15px, inset #00000035 10px 10px 50px;
`;

const StyledImg = styled.img`
  border-radius: 10px;
  height: 100%;
  max-width: 50%;
  box-shadow: #0000004b 5px 5px 10px, inset #ffffffb9 -20px -20px 50px,
    #ffffffb8 -5px -5px 15px, inset #0000004b 10px 10px 50px;
`;

const StyledH2 = styled.h2`
  color: #234684;
`;

const Presentation = () => {
  return (
    <StyledSection>
      <StyledPresentation>
        <StyledH2>Pastores</StyledH2>
        <StyledH2>Emilio y Micaela Mendoza</StyledH2>
        <h4>
          La iglesia Ministerio Jezreel empezó con un grupo de aproximadamente
          de 20 o 30 jóvenes, que se reunían en diferentes casas para compartir
          la palabra de Dios y orar por las necesidades de los asistentes.
          <br />
          <br />
          Como estas reuniones fueron incrementando el número de asistentes,
          este grupo le solicitó al Concilio De Las Asambleas de Dios, un líder
          que les pudiera guiar como pastor consejero, escogiendo así el 10 de
          junio de 1985, al Pastor Arístides Enrique Leong Almanza como pastor
          de esta pequeña iglesia. Desde entonces y hasta el año 2010, ha estado
          pastoreando la iglesia “MINISTERIO JEZREEL” que significa DIOS
          SIEMBRA. Actualmente está a cargo el Pastor Emilio Mendoza.
        </h4>
      </StyledPresentation>
      <StyledImg src={PresentationImage} alt="" />
    </StyledSection>
  );
};

export default Presentation;

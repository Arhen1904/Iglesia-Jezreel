import styled from "styled-components";
import MinistersBackground from "../..//assets/fondo-pastores.jpg";
import Card from "../Card/Card";
import AngelPhoto from "../../assets/pastor-angel-card.jpg";
import NenePhoto from "../../assets/pastor-nene-card.jpg";
import NunezPhoto from "../../assets/pastor-nunez-card.jpg";
import TovarPhoto from "../../assets/pastor-tovar-card.jpg";

const cardData = [
  {
    photo: AngelPhoto,
    name: "Angel y Noris de López",
    ministery: "Territorio A",
  },
  {
    photo: NunezPhoto,
    name: "Jorge y Carmen de Nuñez",
    ministery: "Territorio B",
  },
  {
    photo: TovarPhoto,
    name: "Rafael y Yazmeira de Tovar",
    ministery: "Territorio C",
  },
  {
    photo: NenePhoto,
    name: "Carlos y Yahaira de López",
    ministery: "Territorio D",
  },
];

const StyledSection = styled.section`
  padding: 20px 0;
  width: 100%;
  background-image: url(${MinistersBackground});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const StyledH2 = styled.h2`
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  margin-bottom: 30px;
  color: #ffb86d;
`;

export const StyledH4 = styled.h4`
  font-size: 20px;
  color: #ffe0b6;
  padding-inline: 15%;
`;

const SectionCards = styled.div`
  display: flex;
  margin: 0 1% 1% 1%;
  gap: 80px;
  flex-flow: row wrap;
  justify-content: center;
`;

const Ministers = () => {
  return (
    <StyledSection>
      <div>
        <StyledH2>Pastores por territorios</StyledH2>
        <StyledH4>
          Estamos convencidos de que el trabajo de reuniones familiares, junto
          al modelo de discipulados 12, son parte de la visión de Dios para el
          crecimiento de su iglesia.
        </StyledH4>
      </div>
      <SectionCards>
        {cardData.map((card, index) => (
          <Card
            key={index}
            photo={card.photo}
            name={card.name}
            ministery={card.ministery}
          />
        ))}
      </SectionCards>
    </StyledSection>
  );
};

export default Ministers;

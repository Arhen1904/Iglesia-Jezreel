import styled from "styled-components";

const SectionContainer = styled.section`
  width: 70vw;
  margin: auto;
  padding: 40px 0;
  text-align: left;
`;

const SectionWrapper = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  color: #834913;
  margin-bottom: 15px;
`;

const SectionParagraph = styled.div`
  font-size: 1.1em;
  color: #333;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const MissionVisionContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const SectionContent = ({ title, content }) => (
  <SectionWrapper>
    <SectionTitle>{title}</SectionTitle>
    <SectionParagraph dangerouslySetInnerHTML={{ __html: content }} />
  </SectionWrapper>
);

const rootsContent = `
  La iglesia Ministerio Jezreel empezó con un grupo de aproximadamente 20 a 30 jóvenes, que se reunían en diferentes casas para compartir la palabra de Dios y orar por las necesidades de los asistentes.<br /><br />
  Como estas reuniones fueron incrementando el número de asistentes, este grupo le solicitó al Concilio De Las Asambleas de Dios un líder que les pudiera guiar como pastor consejero, escogiendo así el 10 de junio de 1985, al Pastor Arístides Enrique Leong Almanza como pastor de esta pequeña iglesia. Desde entonces y hasta el año 2010, ha estado pastoreando la iglesia “MINISTERIO JEZREEL” que significa DIOS SIEMBRA. Actualmente está a cargo el Pastor Emilio Mendoza.<br /><br />
  El propósito de la iglesia desde sus orígenes era el de establecer y mantener un lugar para la adoración y exaltación de Dios, además de proporcionar un lugar de comunión Cristiana para cada persona de la comunidad.<br /><br />
  La iglesia se caracteriza por ser una iglesia de crecimiento y de mucha visión. Su primer lugar de reunión fue en el portal de una casa ubicada en Campo Limberg, con una capacidad de 15 a 20 personas. Con mucho amor se predicó aquí la palabra de Dios durante cinco meses. Luego de estar en Campo Limberg, se realizaron varias reuniones en el salón de actividades del Hipódromo Presidente Remón. Fueron pocas las reuniones que se realizaron en este lugar. Y por último, la tercera sede fue en las instalaciones de una empresa de gas. Todo el edificio estaba alquilado, este fue el lugar de reuniones por aproximadamente un año hasta el día de hoy.
`;

const missionContent = `
  Somos un ministerio establecido por Dios, para ganar a Panamá y las Naciones para Cristo. Con la unción del Espíritu Santo, llevaremos este evangelio de la gracia de Dios por toda la nación, alcanzando las almas que serán discipuladas para que sigan extendiendo el reino de los cielos hasta lo último de la tierra. En esta visión perseveramos unidos, con la esperanza de alcanzar una gran cosecha.<br /><br />
  “Juntos lo lograremos”.
`;

const visionContent = `
  Somos un ministerio establecido por Dios, para ganar a Panamá y las Naciones para Cristo. Con la unción del Espíritu Santo, llevaremos este evangelio de la gracia de Dios por toda la nación, alcanzando las almas que serán discipuladas para que sigan extendiendo el reino de los cielos hasta lo último de la tierra. En esta visión perseveramos unidos, con la esperanza de alcanzar una gran cosecha.<br /><br />
  “Juntos lo lograremos”.
`;

const valuesContent = `
  ORACIÓN . OBEDIENCIA . SANTIDAD . AMOR . UNIDAD . EXCELENCIA . FIDELIDAD . COMPROMISO . SERVICIO . INTEGRIDAD
`;

const History = () => {
  return (
    <SectionContainer>
      <SectionContent title="Historia" content={rootsContent} />
      <MissionVisionContainer>
        <SectionContent title="Misión" content={missionContent} />
        <SectionContent title="Visión" content={visionContent} />
      </MissionVisionContainer>
      <SectionContent title="Valores" content={valuesContent} />
    </SectionContainer>
  );
};

export default History;

import styled from "styled-components";
import Presentation from "../components/Presentation/Presentation";
import Ministers from "../components/Ministers/Ministers";
import Bethel from "../components/Bethel/Bethel";
import School from "../components/School/School";
import Footer from "../components/Footer/Footer";

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const Home = () => {
  return (
    <StyledSection>
      <Presentation />
      <Ministers />
      <Bethel />
      <School />
      <Footer />
    </StyledSection>
  );
};

export default Home;
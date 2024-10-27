import styled from "styled-components";
import { useEffect, useRef } from "react";
import Layer1 from "../../assets/fondo 1.png";
import Layer2 from "../../assets/fondo 2.png";
import Layer3 from "../../assets/fondo 3.png";
import Layer4 from "../../assets/fondo 4.png";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-jezreel-02.png";

const Nav = styled.nav`
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: 32px;
  color: gray;
  padding-top: 40px;
  border-bottom-left-radius: 150px;
  display: flex;
  justify-content: space-around;
  border-bottom: 5px #b2783a solid;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
`;

const Layer = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 110vh;

  &.layer1 {
    z-index: 5;
    height: 120%;
  }

  &.layer2 {
    z-index: 4;
  }

  &.layer3 {
    z-index: 3;
  }

  &.layer4 {
    z-index: 2;
  }
`;

const Img = styled.img`
  width: 230px;
  height: 100px;
  z-index: 6;
  position: relative;
  filter: drop-shadow(-3px 2px 3px black);
`;

const Ul = styled.ul`
  display: flex;
  font-size: 25px;
  list-style-type: none;
  gap: 25px;
  padding-top: 1.5rem;
  z-index: 5;
`;

const StyledLink = styled(Link)`
  color: #ffb86d;
  text-decoration: none;
  filter: drop-shadow(-3px -2px 2px black);
  font-size: 100%;
  position: relative;
  top: 5%;

  &:hover {
    color: white;
  }

  &:active {
    color: #472404;
  }
`;

const StyledH1 = styled.h1`
  font-family: ui-monospace;
  font-size: 4vw;
  color: #ffffff;
  text-shadow: black -3px 2px 3px;
  margin-inline: 10vw;
  z-index: 4;
  padding-bottom: 20%;
`;

const Header = () => {
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const layer4Ref = useRef(null);

  useEffect(() => {
    let scrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      scrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const navHeight = document.querySelector("nav").offsetHeight;

          if (scrollY < navHeight) {
            if (layer1Ref.current)
              layer1Ref.current.style.transform = `translateY(${
                scrollY * 0.5
              }px)`;
            if (layer2Ref.current)
              layer2Ref.current.style.transform = `translateY(${
                scrollY * 0.3
              }px)`;
            if (layer3Ref.current)
              layer3Ref.current.style.transform = `translateY(${
                scrollY * 0.1
              }px)`;
            if (layer4Ref.current)
              layer4Ref.current.style.transform = `translateY(${
                scrollY * 0.05
              }px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav>
      <Img src={logo} alt="Logo" />
      <Layer ref={layer1Ref} src={Layer1} className="layer1" alt="Capa 1" />
      <Layer ref={layer2Ref} src={Layer2} className="layer2" alt="Capa 2" />
      <Layer ref={layer3Ref} src={Layer3} className="layer3" alt="Capa 3" />
      <Layer ref={layer4Ref} src={Layer4} className="layer4" alt="Capa 4" />
      <Ul>
        <li>
          <StyledLink to="/">Inicio</StyledLink>
        </li>
        <li>
          <StyledLink to="history">Historia</StyledLink>
        </li>
        <li>
          <StyledLink to="contact">Contacto</StyledLink>
        </li>
      </Ul>
      <StyledH1>
        Mateo 18:20: Porque donde dos o tres se reúnen en mi nombre, allí estoy
        yo en medio de ellos.
      </StyledH1>
    </Nav>
  );
};

export default Header;

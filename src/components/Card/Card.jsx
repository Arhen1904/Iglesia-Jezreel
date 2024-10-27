import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 450px;
  height: 230px;
  background-size: cover;
  border-radius: 10px;
  box-shadow: #0000008b 5px 10px 5px;
`;

const StyledH4 = styled.h4`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
  font-size: 20px;
  text-shadow: #d39a30 1px 1px 9px;
`;

const Card = ({ photo, name, ministery }) => {
  return (
    <>
      <StyledCard style={{ backgroundImage: `url(${photo})` }}>
        <StyledH4>{name}</StyledH4>
        <StyledH4>{ministery}</StyledH4>
      </StyledCard>
    </>
  );
};

export default Card;

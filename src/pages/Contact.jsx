import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: auto;
`;

const StyledH2 = styled.h2`
  color: #834913;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 700px;
  margin: auto;
`;

const StyledLabel = styled.label`
  text-align: start;
  font-size: 1.2em;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  margin-bottom: 30px;
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 1em;
  background-color: #ccc;
  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
  transition: 300ms ease-in-out;

  &:focus {
    background-color: #f4f4f4;
    transform: scale(1.01);
    box-shadow: 13px 13px 100px #969696, -13px -13px 100px #ffffff;
  }
`;

const StyledTextarea = styled(StyledInput).attrs({ as: "textarea" })`
  resize: none;
`;

const SendButton = styled.input`
  align-self: center;
  margin-top: 30px;
  width: 200px;
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  cursor: pointer;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;

  &:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }
`;

const Contact = () => {
  return (
    <StyledSection>
      <StyledH2>Contáctanos</StyledH2>
      <StyledForm>
        <StyledLabel htmlFor="name">Nombre:</StyledLabel>
        <StyledInput type="text" name="name" autoComplete="name" required />

        <StyledLabel htmlFor="email">Correo Electrónico:</StyledLabel>
        <StyledInput type="email" name="email" autoComplete="email" required />

        <StyledLabel htmlFor="message">Mensaje:</StyledLabel>
        <StyledTextarea
          name="message"
          rows={6}
          autoComplete="message"
          required
        />

        <SendButton type="submit" value="Enviar" />
      </StyledForm>
    </StyledSection>
  );
};

export default Contact;

import styled from "styled-components";
import logo from "./assets/logo.svg"; // Substitua pelo caminho correto do logo

const StyledFooter = styled.footer`
  width: 100%;
  background: #fff; /* Fundo branco */
  display: flex;
  align-items: center;
  height: 92px;

  border-top: 1px solid #eaeaea; /* Linha de separação */
`;

const ContentFooter = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;

  img {
    width: 50px; /* Tamanho da logo */
  }

  p {
    margin: 0 20px;
    font-size: 12px;
    font-weight: 600;
    color: #666;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <ContentFooter>
        <img src={logo} alt="logo vr" />
        <p>© 2024 VR Benefícios - Todos os direitos reservados</p>
      </ContentFooter>
    </StyledFooter>
  );
}

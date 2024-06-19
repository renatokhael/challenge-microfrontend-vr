import styled from "styled-components";
import logo from "./assets/logo.svg"; // Substitua pelo caminho correto do logo

const StyledFooter = styled.footer`
  width: 100%;
  background: #fff; /* Fundo branco */
  padding: 10px 20px; /* Padding para espaçamento interno */
  display: flex;
  align-items: center;
  justify-content: start;

  border-top: 1px solid #eaeaea; /* Linha de separação */

  img {
    width: 50px; /* Tamanho da logo */
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #666; /* Cor do texto */
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <img src={logo} alt="logo vr" />
      <p>© 2024 VR Benefícios - Todos os direitos reservados</p>
    </StyledFooter>
  );
}

import "./App.css";
import styled from "styled-components";
// The remote component provided by federation_provider
import ProviderHeader from "header/header";
import ProviderFooter from "footer/footer";
import ProviderCards from "cards/cards";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que o contêiner tenha pelo menos a altura da janela */
`;

const Content = styled.div`
  flex: 1; /* Faz com que o conteúdo cresça para ocupar o espaço disponível */
  margin: 0 auto;
  max-width: 1200px;
`;
const App = () => {
  return (
    <AppContainer>
      <ProviderHeader />
      <Content>
        <ProviderCards />
      </Content>
      <ProviderFooter />
    </AppContainer>
  );
};

export default App;

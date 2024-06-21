import "./App.css";
import styled from "styled-components";
import ProviderHeader from "header/header";
import ProviderFooter from "footer/footer";
import ProviderCards from "cards/cards";
import { SharedContextProvider } from "cards/shared-context";

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
    <SharedContextProvider>
      <AppContainer>
        <ProviderHeader />
        <Content>
          <ProviderCards />
        </Content>
        <ProviderFooter />
      </AppContainer>
    </SharedContextProvider>
  );
};

export default App;

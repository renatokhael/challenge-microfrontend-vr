# Micro frontend - Module Federation

![React](https://img.shields.io/badge/react-18.3.1-blue)
![Typescript](https://img.shields.io/badge/typescript-5.4.2-blue)
![StyledComponents](https://img.shields.io/badge/styled--components-6.1.11-blue)

Essa é uma aplicação ReactJS que utiliza a arquitetura Module Federation para descentralização de aplicativos e componentes, seguindo as práticas mais modernas `https://module-federation.io/`

Abaixo, você pode visualizar a aplicação Host, que consome as outras aplicações Header, Cards e Footer.

<center><img src=".github/preview.png" width="768px" /></center>

## Conteúdo

- [Micro frontend - Module Federation](#micro-frontend---module-federation)
  - [Conteúdo](#conteúdo)
  - [Deploy](#deploy)
  - [Funcionalidades](#funcionalidades)
  - [Requisitos](#requisitos)
  - [Instalação](#instalação)
  - [Uso](#uso)
  - [Contribuição](#contribuição)
  - [License](#license)

## Deploy

Você pode ver o deploy dessa aplicação aqui: [Vercel](challenge-microfrontend-vr.vercel.app)

## Funcionalidades

- [x] A aplicação deve conter um app central (host)
- [x] A aplicação deve conter um app Header (header)
- [x] A aplicação deve conter um app Footer (footer)
- [x] A aplicação deve conter um app Cards (cards)
- [x] O app Cards deve ter uma lista de produtos consumidos da API https://dummyjson.com/docs/products
- [x] A aplicação deve ter uma intereção entre a lista de produtos com o Header
- [x] O Header deve exibir um modal com a lista de produtos selecionados
- [x] Essa interação deve usar um gerenciador de estado (Context-API)
- [ ] A aplicação Cards deve ter testes unitários usando Jest e RTL
- [ ] A aplicação Header deve ter testes unitários usando Jest e RTL
- [ ] A aplicação Host deve ter um teste e2e usando cypress

## Requisitos

Node: 20.14.0

## Instalação

Clone o repositório

```bash
git clone git@github.com:renatokhael/challenge-microfrontend-vr.git
```

Entre nos diretórios host, header, footer e cards, instale as dependencias e rode `npm run dev`,

```
npm i
npm run dev
```

Você deve ter cada instancia rodando um componente isoladamente mas seguintes URLs.

```
host: http://localhost:3000/mf-manifest.json
header: http://localhost:3001/mf-manifest.json
cards: http://localhost:3002/mf-manifest.json
footer:http://localhost:3003/mf-manifest.json
```

Você pode visualizar a aplicação completa através do host: `http://localhost:3000/mf-manifest.json`

## Uso

### Usando Docker

```
docker-compose up --build
```
Você pode visualizar a aplicação completa através do host: http://localhost:3000/mf-manifest.json

### Usando Linux ou WSL (Windows) - Recomendado

```
chmod +x start-all.sh 
./start-all.sh
```
Espere até que todos os modulos sejam instalados então acesse: `http://localhost:3000/mf-manifest.json`

### Rodando localmente
Rode como desenvolvedor:

```bash
npm run dev
```

Build para produção:

```bash
npm run build
```

Pré-visualização do build de produção:

```bash
npm run preview
```

## Rodando Testes e2e

```
npm i cypress
npm run test:ci
```

## Contribuição

Contribuições são bem-vindas! Siga estas etapas para contribuir:

- Bifurque o projeto.
- Crie sua branch de recursos: `git checkout -b feature/my-new-feature`.
- Confirme suas alterações: `git commit -am 'Adicionar algum recurso`'.
- Envie para o branch: `git push origin feature/my-new-feature`.
- Envie uma solicitação pull.

## License

Esse é um projeto pessoal, e pode ser utilizado, copiado sem aviso prévio.

Made with 💚 by [Renato Khael](https://renatokhael.dev)

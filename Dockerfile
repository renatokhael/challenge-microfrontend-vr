
FROM node:20


WORKDIR /challenge-microfrontend-vr


COPY ./host/package*.json ./host/
COPY ./header/package*.json ./header/
COPY ./footer/package*.json ./footer/
COPY ./cards/package*.json ./cards/

RUN cd ./host && npm install
RUN cd ./header && npm install
RUN cd ./footer && npm install
RUN cd ./cards && npm install

COPY ./host ./host
COPY ./header ./header
COPY ./footer ./footer
COPY ./cards ./cards

CMD ["npm", "run", "dev"]
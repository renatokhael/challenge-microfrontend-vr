#!/bin/bash


apps=("header" "footer" "cards" "host")

for app in "${apps[@]}"
do
  echo "Entrando no diretório $app"
  cd $app
  echo "Instalando dependências em $app"
  npm install
  echo "Iniciando aplicação $app"
  npm run dev &
  cd ..
done

echo "Todas as aplicações foram iniciadas."
#!/bin/bash


apps=("header" "footer" "cards" "host")

for app in "${apps[@]}"
do

  cd $app
  echo "Iniciando aplicação $app"
  npm run dev &
  cd ..
done

echo "Todas as aplicações foram iniciadas."
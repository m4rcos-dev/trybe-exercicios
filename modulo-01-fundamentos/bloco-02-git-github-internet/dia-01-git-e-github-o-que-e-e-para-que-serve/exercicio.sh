#!/bin/bash

delay=2

# Exercício 

echo -e "\nCriando arquivo trybe-skills.txt"
echo -e "O que vou aprender na Trybe:
- Unix
- Bash
- Git" >> trybe-skills.txt
sleep $delay

echo -e "\nConferindo permissões do arquivo"
ls -l
sleep $delay

echo -e "\nVerificando conexão com GitHub"
git remote -v
sleep $delay
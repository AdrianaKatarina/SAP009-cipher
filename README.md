# 👩‍💻Codifique

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Sobre o projeto](#2-sobre-o-projeto)
* [3. Considerações gerais](#3-considerações-gerais)
* [4. Layout](#4-layout)
* [5. Tecnologias utilizadas](#5-tecnologias-utilizadas)
* [6. Implementações Futuras](#6-implementações-futuras)
* [7. Desenvolvedora](#7-desenvolvedora)

***

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Sobre o projeto

Codifique foi a primeira aplicação web desenvolvida durante o bootcamp da Laboratória.

Esta aplicação foi pensado num ambiente pessoal, para usuários que desejam guardar a privacidade para si. E principalmente, para pessoas que esquecem com facilidade, senhas de email, rede social ou diversas outras contas. Onde muitas vezes, acabam anotando em um caderno, agenda ou até mesmo em dispositivos digitais, as informações de senhas sem nenhuma restrição.

Então pensando nisso, foi desenvolvido uma aplicação web que permite ***encriptar*** ou ***decriptar*** e indicando logo abaixo do campo de texto, um _deslocamento_ para realizar completamente a função escolhida.

**Em exemplo prático:**
* Para quem gosta de anotar suas informações pessoais e importantes em uma agenda física.
  Poderá acessar o site codifique, encriptar sua nova senha e anotá-la na sua agenda.
* Ou poderá criar sua senha a partir da decotificação ou codificação. 

### Para acessar o projeto **[clique aqui](https://adrianakatarina.github.io/SAP009-cipher/)**

## 3. Considerações gerais

* Este projeto foi desenvolvido individualmente durante o bootcamp da Laboratória.
* Foi trabalhado com base em um boilerplate, estrutura básica de um projeto em diferentes pastas(através de módulos em JS).
* Para diminuição de problemas futuros, o projeto foi passado por testes unitários.

## 4. Layout

Logo na Página inicial terá algumas exlicações sobre o **codifique** e como utilizá-lo através das regras de funcionalidades.

![Página Inicial](https://github.com/AdrianaKatarina/SAP009-cipher/blob/main/telainicial.png)

**Uma interface que permite ao usuário:**

* **Encriptar uma senha**
  - Insira a senha (texto) que deseja encriptar. Utilize um
    alfabeto simplificado (apenas letras maiúsculas).
  - Digite um número de deslocamento indicando quantas posições
    você deseja que a cifra desloque cada caractere do alfabeto. O número
    deverá ser positivo e inteiro (inteiro positivo).
  - Clique no botão encriptar.
  - Veja o resultado da sua senha encriptada.

* **Decriptar uma senha**
  - Insira a senha (texto) que deseja decriptar. Utilize um
    alfabeto simplificado (apenas letras maiúsculas).
  - Digite um número de deslocamento (que corresponde ao que usamos
    para encriptar) indicando quantas posições você deseja que a cifra
    desloque cada caractere do alfabeto. O número deverá ser positivo e inteiro
    (inteiro positivo).
  - Clique no botão decriptar.
  - Veja o resultado da sua senha decriptada.

![Página Projeto](https://github.com/AdrianaKatarina/SAP009-cipher/blob/main/telaprojeto.png)

## 5. Tecnologias utilizadas

* HTML
* CSS
* Node.js
* JavaScript
* Git e GitHub

## 6. Implementações futuras

* Permitir o uso de letras minúsculas e outros caracteres.
* Adicionar uma página de contato para sugestões e melhorias.

## 7. Desenvolvedora

[Adriana Oliveira](https://www.linkedin.com/in/adriana-oliveira-39250a137/)
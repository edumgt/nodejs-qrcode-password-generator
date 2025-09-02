# 💻 Node.js Utilities Kit (QRCode & Password)

## 📖 Sobre o Projeto

Durante o Bootcamp da DIO em parceria com a Meutudo, desenvolvemos um kit de utilidades em Node.js para e-commerce, focado em geração de QRCodes e senhas seguras.

O projeto é escalável, permitindo a adição de novas funcionalidades e aprendizado de boas práticas de desenvolvimento backend.

### 🎯 Objetivos

 - Criar scripts Node.js para gerar QRCodes e senhas seguras

 - Trabalhar com dependências e pacotes NPM

 - Estruturar projetos por camadas e com código organizado

 - Preparar um projeto escalável para futuras adições

### 🛠 Habilidades Desenvolvidas

 - Lógica de programação aplicada a Node.js

 - Criação de QRCodes em terminal e links

 - Geração de senhas com regras personalizáveis

 - Organização de código em camadas

- Gerenciamento de dependências e variáveis de ambiente

### 📚 Pré-requisitos

 - Noções básicas de JavaScript e Node.js

 - Conhecimento em NPM e variáveis de ambiente (```.env```)


## 💻 Tecnologias Utilizadas
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white) |
| ---------------------- | --------------------- |

### 📚 Explicação das Tecnologias

 - JavaScript - linguagem usada para lógica do backend

- Node.js - ambiente de execução de JavaScript no servidor

- Chalk - estilização de textos no terminal

- Prompt - criação de prompts interativos no terminal

- QRCode-Terminal - geração de QRCodes diretamente no terminal

## 📂 Estrutura de Pastas

```
gerador-qrcode-e-password/
│
├── src/
│   ├── prompts-schema/              
│   │   ├── prompt-schema-main.js    # schema principal dos prompts
│   │   └── prompt-schema-qrcode.js  # schema de prompts para QRCode
│   │
│   ├── services/
│   │   ├── password/
│   │   │   ├── utils/
│   │   │   │   └── permitted-characters.js  # caracteres permitidos para senhas
│   │   │   ├── create.js          # lógica para gerar senhas
│   │   │   └── handle.js          # manipulação e fluxo de senhas
│   │   │
│   │   └── qr-code/
│   │       ├── create.js          # lógica para gerar QRCode
│   │       └── handle.js          # manipulação e fluxo de QRCode
│   │
│   └── index.js                    # ponto de entrada da aplicação
│
├── .env                            # variáveis de ambiente
├── package.json                    # dependências e scripts do projeto
└── README.md                       # documentação
```

## 🚀 Como Rodar o Projeto

### Pré-requisitos

 - Node.js instalado

- NPM para instalar dependências

- Configurar variáveis no arquivo ```.env```

### Passos

1️⃣ Clonar o repositório
```
git clone https://github.com/EmillyAndradeDev/nodejs-qrcode-password-generator
cd nodejs-qrcode-password-generator
```
2️⃣ Instalar dependências
```
npm install
```
3️⃣ Rodar o projeto
```
npm run start:dev
```
4️⃣ Uso:

- Ao rodar, será exibido um prompt interativo:

 1- QRCode

 2- Password

- Siga as instruções no terminal para gerar QRCode ou senha
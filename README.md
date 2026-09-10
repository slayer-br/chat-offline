# 💬 Chat Offline

> 📚 **Projeto Educacional:** Este projeto foi desenvolvido exclusivamente para **fins de estudos e aprendizado**, servindo como prática de componentização, gerenciamento de estado em memória com React 19, TypeScript e estilização moderna com Tailwind CSS v4.

Aplicação de chat em janela única onde você pode simular conversas enviando mensagens alternando entre **Usuário** e **Robô** através de um toggle interativo e intuitivo no campo de digitação.

O histórico vive 100% em memória no estado da aplicação (React State), ideal para prototipação, testes rápidos e demonstrações sem necessidade de conexão externa ou banco de dados.

---

## ✨ Funcionalidades

- **Alternância de Remetente (Toggle Usuário/Robô)**:
  - Botão interativo com ícones dedicados no card de input.
  - Mensagens do **Usuário** são alinhadas à **direita**.
  - Mensagens do **Robô** são alinhadas à **esquerda**.
  - Destaque visual com **borda roxa** no card de digitação quando o modo Robô está ativo.
- **Input Inteligente**:
  - `textarea` com redimensionamento automático de altura conforme o conteúdo (auto-resize).
  - Envio rápido com tecla <kbd>Enter</kbd> e quebra de linha com <kbd>Shift</kbd> + <kbd>Enter</kbd>.
  - Botão de envio desabilitado reativamente quando não há texto digitado.
- **Histórico & Experiência de Uso**:
  - Rolagem automática suave (*auto-scroll*) para a última mensagem ao enviar.
  - Estado vazio (*Empty State*) amigável e acolhedor quando não houver histórico.
  - Layout centralizado (`max-w-2xl`) com fundo terroso claro e responsivo para mobile e desktop.
  - Favicon SVG customizado com identidade visual própria.

---

## 🛠️ Tecnologias Utilizadas

- **[React 19](https://react.dev/)** — Biblioteca para interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática segura com tipos puros (`type`).
- **[Vite](https://vitejs.dev/)** — Bundler e ambiente de desenvolvimento ultrarrápido.
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Framework de estilização utility-first moderno.
- **[Oxlint](https://oxc.rs/)** — Linter de altíssima performance.

---

## 📁 Estrutura do Projeto

```
chat-offline/
├── blueprint/
│   ├── docs/
│   │   ├── brain-dump.md        # Ideias e requisitos iniciais
│   │   └── prd.md               # Documento de Requisitos do Produto (PRD)
│   └── plans/                   # Planos de execução por fase (0001 a 0005)
├── public/
│   └── favicon.svg              # Favicon criativo com identidade do chat
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   ├── RobotIcon.tsx    # Ícone vetorial do Robô
│   │   │   └── UserIcon.tsx     # Ícone vetorial do Usuário
│   │   ├── Chat.tsx             # Orquestrador de estado e layout principal
│   │   ├── ChatInput.tsx        # Card fixo de entrada com auto-resize e envio
│   │   ├── MessageBubble.tsx    # Bolha individual de mensagem
│   │   ├── MessageList.tsx      # Lista de histórico e empty state
│   │   └── SenderToggle.tsx     # Botão toggle para alternância de remetente
│   ├── types/
│   │   └── message.ts           # Definições de tipos (Sender, Message)
│   ├── App.tsx                  # Componente raiz
│   ├── index.css                # Configurações do Tailwind CSS
│   └── main.tsx                 # Ponto de entrada da aplicação
├── index.html                   # HTML principal
├── LICENSE                      # Licença MIT
├── package.json                 # Dependências e scripts
└── tsconfig.json                # Configurações do TypeScript
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- Gerenciador de pacotes `npm` ou `pnpm` / `yarn`

### 1. Clonar o repositório
```bash
git clone https://github.com/slayer-br/chat-offline.git
cd chat-offline
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse a aplicação no navegador em `http://localhost:5173`.

---

## 🧪 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor local de desenvolvimento com Hot Module Replacement (HMR) |
| `npm run build` | Valida tipagem com TypeScript (`tsc -b`) e compila a aplicação para produção |
| `npm run preview` | Executa localmente o bundle de produção gerado |
| `npm run lint` | Executa a verificação estática de código com Oxlint |

---

## 📄 Licença

Este projeto está sob a licença [MIT](./LICENSE).

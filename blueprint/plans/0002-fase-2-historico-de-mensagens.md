# Plano 0002 — Fase 2: Histórico de Mensagens

## Objetivo
Implementar a Fase 2 do PRD (`blueprint/docs/prd.md`): o histórico de mensagens, componente de bolha (`MessageBubble`), lista de mensagens (`MessageList`) com estado vazio (empty state) e funcionalidade de auto-scroll.

---

## Tarefas

### Tarefa 2.1 — Estado e componente de bolha
- [x] Criar `src/components/MessageBubble.tsx` recebendo a prop `message: Message`.
- [x] Configurar alinhamento à direita para `sender === 'user'` e à esquerda para `sender === 'robot'`.
- [x] Estilizar com fundo neutro, quebra de linha (`whitespace-pre-wrap break-words`) e cantos arredondados.

### Tarefa 2.2 & 2.3 — Lista de mensagens e estado vazio
- [x] Criar `src/components/MessageList.tsx` recebendo a prop `messages: Message[]`.
- [x] Implementar estado vazio (quando `messages.length === 0`) com mensagem amigável centralizada.
- [x] Implementar renderização das mensagens em ordem cronológica com rolagem vertical (`flex-1 overflow-y-auto`).

### Tarefa 2.4 — Auto-scroll
- [x] Configurar elemento de referência (`bottomRef`) e `useEffect` para rolar suavemente para o final da lista sempre que `messages` for atualizado.
- [x] Integrar `MessageList` no componente `Chat.tsx` conectado ao estado `messages`.

---

## Verificação e Qualidade
- `npm run lint` (oxlint)
- `npm run build` (tsc + vite)

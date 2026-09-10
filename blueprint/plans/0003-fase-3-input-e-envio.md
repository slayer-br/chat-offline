# Plano 0003 — Fase 3: Input e Envio

## Objetivo
Implementar a Fase 3 do PRD (`blueprint/docs/prd.md`): o componente `ChatInput` com card fixo no rodapé, `textarea` com auto-resize e suporte a atalhos de teclado (Enter para enviar, Shift+Enter para quebra de linha), botão de envio reativo ao conteúdo e a lógica de envio `handleSend` no componente `Chat`.

---

## Tarefas

### Tarefa 3.1 — Card de input fixo
- [x] Criar `src/components/ChatInput.tsx` posicionado na base do container com fundo branco e bordas arredondadas.
- [x] Configurar layout flexível horizontal com espaço reservado para o toggle (lado esquerdo), `textarea` no centro (`flex-1`) e botão de enviar (lado direito).

### Tarefa 3.2 — Textarea com auto-resize
- [x] Implementar ajuste automático de altura via ref/evento `input` com limite máximo de expansão e scroll interno quando atingir o limite.
- [x] Adicionar placeholder descritivo ("Digite uma mensagem...").

### Tarefa 3.3 — Botão de enviar
- [x] Posicionar botão à direita dentro do card.
- [x] Desabilitar quando `text.trim() === ''` com estilos visuais de estado desabilitado.
- [x] Exibir ícone / rótulo de envio acessível.

### Tarefa 3.4 — Lógica de envio
- [x] Implementar tratamento de teclado (`Enter` para envio e `Shift + Enter` para quebra de linha).
- [x] Criar função `handleSend` no `Chat.tsx` que valida o texto, gera o `id` via `crypto.randomUUID()`, adiciona ao estado `messages` com remetente padrão `'user'` e limpa o input.
- [x] Conectar `ChatInput` com `Chat.tsx`.

---

## Verificação e Qualidade
- `npm run lint` (oxlint)
- `npm run build` (tsc + vite)

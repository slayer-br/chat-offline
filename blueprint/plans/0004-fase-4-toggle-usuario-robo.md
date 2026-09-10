# Plano 0004 — Fase 4: Toggle Usuário / Robô

## Objetivo
Implementar a Fase 4 do PRD (`blueprint/docs/prd.md`): o botão de alternância de remetente `SenderToggle` (ícone + texto), o controle de estado `sender` em `Chat.tsx`, a integração visual com o card de `ChatInput.tsx` (borda roxa ao selecionar robô) e o envio da mensagem com o remetente selecionado.

---

## Tarefas

### Tarefa 4.1 — Componente SenderToggle
- [x] Criar `src/components/SenderToggle.tsx` exibindo ícone e rótulo correspondentes ao remetente ativo (`'user'` ou `'robot'`).
- [x] Implementar callback `onToggle` ao clicar para alternar o remetente.

### Tarefa 4.2 — Integração do Toggle ao Fluxo de Envio
- [x] Adicionar o estado `sender: Sender` em `Chat.tsx` com valor inicial `'user'`.
- [x] Atualizar `handleSend` para atribuir o `sender` ativo na mensagem criada.
- [x] Renderizar `SenderToggle` no lado esquerdo do card dentro de `ChatInput.tsx`.

### Tarefa 4.3 — Borda Roxa no Modo Robô
- [x] Aplicar estilo de destaque com borda roxa (`border-purple-500 ring-1 ring-purple-500`) no card de `ChatInput` quando `sender === 'robot'`.
- [x] Manter borda padrão (`border-stone-200`) quando `sender === 'user'`.

---

## Verificação e Qualidade
- `npm run lint` (oxlint)
- `npm run build` (tsc + vite)

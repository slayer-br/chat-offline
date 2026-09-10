# Plano 0001 — Fase 1: Fundação

## Objetivo
Implementar a fundação do projeto Chat Offline conforme definido na Fase 1 do PRD (`blueprint/docs/prd.md`), incluindo os tipos base em `src/types/message.ts`, a estrutura de componentes em `src/components/` e o layout base com container centralizado e fundo marrom claro.

---

## Tarefas

### Tarefa 1.1 — Tipos e estrutura de pastas
- [x] Criar `src/types/message.ts` definindo os tipos `Sender` e `Message`.
- [x] Criar diretório `src/components/`.
- [x] Validar compilação com TypeScript.

### Tarefa 1.2 — Layout base da página
- [x] Criar `src/components/Chat.tsx` com layout base flex, centralizado (`max-w-2xl mx-auto`) e ocupando a altura da tela (`min-h-screen` / `h-dvh`).
- [x] Configurar fundo marrom claro (`bg-stone-200` ou `bg-amber-100`).
- [x] Integrar `<Chat />` no componente principal `src/App.tsx`.
- [x] Validar em navegador / build.

---

## Verificação e Qualidade
- `npm run lint` (oxlint)
- `npm run build` (tsc + vite)

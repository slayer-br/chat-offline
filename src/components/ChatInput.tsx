import { useState, useRef, type ChangeEvent, type KeyboardEvent } from 'react'

type ChatInputProps = {
  onSend: (text: string) => void
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
    adjustHeight()
  }

  const adjustHeight = () => {
    const textarea = textareaRef.current
    if (!textarea) return
    textarea.style.height = 'auto'
    const newHeight = Math.min(textarea.scrollHeight, 144)
    textarea.style.height = `${newHeight}px`
  }

  const handleSubmit = () => {
    const trimmed = text.trim()
    if (!trimmed) return

    onSend(text)
    setText('')
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const isDisabled = text.trim() === ''

  return (
    <div className="p-4 pt-0">
      <div className="flex items-end gap-2 rounded-2xl bg-white p-3 shadow-md border border-stone-200 transition-colors">
        {/* Espaço reservado para o toggle do remetente (Fase 4) */}
        <div id="sender-toggle-slot" />

        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Digite uma mensagem..."
          rows={1}
          className="max-h-36 min-h-[24px] flex-1 resize-none bg-transparent px-2 py-1 text-sm sm:text-base text-stone-900 outline-none placeholder:text-stone-400 leading-normal"
        />

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isDisabled}
          aria-label="Enviar mensagem"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-stone-900 text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:bg-stone-800 active:not-disabled:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

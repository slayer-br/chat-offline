import type { Sender } from '../types/message'

type SenderToggleProps = {
  sender: Sender
  onToggle: () => void
}

export function SenderToggle({ sender, onToggle }: SenderToggleProps) {
  const isRobot = sender === 'robot'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Alternar remetente. Atual: ${isRobot ? 'Robô' : 'Usuário'}`}
      className={`flex h-9 items-center gap-1.5 rounded-xl px-2.5 text-xs sm:text-sm font-medium transition-all select-none ${
        isRobot
          ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
      }`}
    >
      {isRobot ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M12 2a1 1 0 0 1 1 1v1.07A8.002 8.002 0 0 1 20 12v3a4 4 0 0 1-4 4h-1v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1H8a4 4 0 0 1-4-4v-3a8.002 8.002 0 0 1 7-7.93V3a1 1 0 0 1 1-1ZM8.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
          </svg>
          <span>Robô</span>
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Usuário</span>
        </>
      )}
    </button>
  )
}

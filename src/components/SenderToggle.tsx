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
      title={isRobot ? 'Remetente: Robô (clique para alternar)' : 'Remetente: Usuário (clique para alternar)'}
      aria-label={`Alternar remetente. Atual: ${isRobot ? 'Robô' : 'Usuário'}`}
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-200 select-none shadow-xs active:scale-95 ${
        isRobot
          ? 'bg-purple-100/90 text-purple-700 hover:bg-purple-200/90 border border-purple-300/80 ring-1 ring-purple-400/30'
          : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80 border border-stone-300/70'
      }`}
    >
      {isRobot ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6 shrink-0"
        >
          <path d="M12 5.5V2.5" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="2" r="1.5" fill="#ec4899" />
          <rect
            x="3.5"
            y="5.5"
            width="17"
            height="14"
            rx="4.5"
            className="fill-purple-600/15 stroke-purple-600"
            strokeWidth="1.8"
          />
          <circle cx="8.5" cy="11.5" r="1.8" className="fill-purple-700" />
          <circle cx="15.5" cy="11.5" r="1.8" className="fill-purple-700" />
          <path
            d="M9.5 15.2C10.5 16.5 13.5 16.5 14.5 15.2"
            stroke="#7c3aed"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6 shrink-0"
        >
          <rect
            x="3.5"
            y="3.5"
            width="17"
            height="17"
            rx="8.5"
            className="fill-stone-600/10 stroke-stone-700"
            strokeWidth="1.8"
          />
          <circle cx="12" cy="9.5" r="3" className="fill-stone-700" />
          <path
            d="M7 17.2C7.2 14.3 9.4 13.8 12 13.8C14.6 13.8 16.8 14.3 17 17.2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  )
}



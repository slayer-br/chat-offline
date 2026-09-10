import type { Sender } from '../types/message'
import { RobotIcon } from './icons/RobotIcon'
import { UserIcon } from './icons/UserIcon'

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
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-200 select-none shadow-xs active:scale-95 ${
        isRobot
          ? 'bg-purple-100/90 text-purple-700 hover:bg-purple-200/90 border-purple-300/80'
          : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80 border-stone-300/70'
      }`}
    >
      {isRobot ? <RobotIcon /> : <UserIcon />}
    </button>
  )
}




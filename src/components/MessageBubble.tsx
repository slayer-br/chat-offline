import type { Message } from '../types/message'

type MessageBubbleProps = {
  message: Message
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === 'user'

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 shadow-xs border border-stone-200/70 bg-white text-stone-900 whitespace-pre-wrap break-words`}
      >
        <p className="text-sm sm:text-base leading-relaxed">{message.text}</p>
      </div>
    </div>
  )
}

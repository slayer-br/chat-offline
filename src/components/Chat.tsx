import { useState } from 'react'
import type { Message, Sender } from '../types/message'
import { MessageList } from './MessageList'
import { ChatInput } from './ChatInput'

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [sender, setSender] = useState<Sender>('user')

  const handleToggleSender = () => {
    setSender((prev) => (prev === 'user' ? 'robot' : 'user'))
  }

  const handleSend = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return

    const newMessage: Message = {
      id: crypto.randomUUID(),
      text,
      sender,
    }

    setMessages((prev) => [...prev, newMessage])
  }

  return (
    <main className="h-dvh bg-stone-200 text-stone-900 overflow-hidden">
      <div className="mx-auto flex h-full max-w-2xl flex-col">
        <MessageList messages={messages} />
        <ChatInput
          sender={sender}
          onToggleSender={handleToggleSender}
          onSend={handleSend}
        />
      </div>
    </main>
  )
}




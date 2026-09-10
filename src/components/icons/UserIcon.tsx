type UserIconProps = {
  className?: string
}

export function UserIcon({ className = 'h-6 w-6 shrink-0' }: UserIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
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
  )
}

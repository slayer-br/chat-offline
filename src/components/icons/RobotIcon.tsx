type RobotIconProps = {
  className?: string
}

export function RobotIcon({ className = 'h-6 w-6 shrink-0' }: RobotIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
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
  )
}

import { Clock } from 'lucide-react'

interface StatusBadgeProps {
  status: 'open' | 'closed'
  showTime?: boolean
  time?: string
}

export function StatusBadge({ status, showTime = true, time }: StatusBadgeProps) {
  const isOpen = status === 'open'

  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
      isOpen
        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
    }`}>
      <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
      <span className="font-semibold text-sm">
        {isOpen ? 'OPEN' : 'CLOSED'}
      </span>
      {showTime && time && (
        <>
          <Clock className="w-4 h-4 ml-1" />
          <span className="text-xs">{time}</span>
        </>
      )}
    </div>
  )
}

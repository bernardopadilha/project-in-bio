import { cn } from '@/app/lib/utils'

export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  return (
    <input
      {...props}
      type="text"
      className={cn(
        'w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl border border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary focus:outline-none focus:border-border-secondary',
        props.className,
      )}
    />
  )
}

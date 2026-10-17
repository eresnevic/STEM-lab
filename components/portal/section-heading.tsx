import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = 'left',
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  id?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex max-w-2xl flex-col gap-3',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      <span className="inline-flex w-fit items-center rounded-full bg-brand-deep px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
        {eyebrow}
      </span>
      <h2
        id={id}
        className="font-serif text-3xl font-semibold tracking-tight text-balance text-brand md:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

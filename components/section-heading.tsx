interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`space-y-2 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-foreground/70 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs tracking-widest uppercase text-muted-foreground font-medium">
      {children}
    </span>
  )
}

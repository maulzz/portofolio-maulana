interface SectionHeaderProps {
  index: string;
  title: string;
  subtitle?: string;
  rightMeta?: string;
}

export default function SectionHeader({
  index,
  title,
  subtitle,
  rightMeta,
}: SectionHeaderProps) {
  return (
    <div className="border-b-2 border-border pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs font-bold px-2 py-0.5 bg-primary text-on-primary border border-border">
            {index}
          </span>
          <span className="h-[2px] w-8 bg-border inline-block" />
          {subtitle && <span className="swiss-label">{subtitle}</span>}
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-ink">
          {title}
        </h2>
      </div>
      {rightMeta && (
        <span className="swiss-label border border-border-subtle bg-surface px-3 py-1.5 self-start md:self-auto">
          {rightMeta}
        </span>
      )}
    </div>
  );
}

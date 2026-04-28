interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-lg bg-surface-light border border-border px-3.5 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]">
      {name}
    </span>
  );
}

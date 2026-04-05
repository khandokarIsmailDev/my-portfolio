/**
 * SectionLabel — small numbered label above each section heading
 * e.g.  01 ─── ABOUT
 */
interface Props { number: string; label: string; }

export default function SectionLabel({ number, label }: Props) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-xs text-accent/70">{number}</span>
      <div className="h-px w-8 bg-accent/30" />
      <span className="font-mono text-xs text-[var(--tm)] uppercase tracking-widest">{label}</span>
    </div>
  );
}

import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
}

export function Section({
  id,
  children,
  className,
  fullWidth = false,
  noPadding = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('relative', !noPadding && 'section-spacing', className)}
    >
      {fullWidth ? (
        children
      ) : (
        <div className="container-custom">{children}</div>
      )}
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        centered && 'text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="mb-4 block font-body text-sm uppercase tracking-widest text-mp-neon">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-h2-mobile md:text-h2 uppercase text-mp-white">
        {title}
      </h2>
      <div className="mx-auto mt-4 w-24 neon-line" />
      {description && (
        <p className="mx-auto mt-6 max-w-2xl font-body text-base md:text-body-lg text-mp-white/70">
          {description}
        </p>
      )}
    </div>
  );
}

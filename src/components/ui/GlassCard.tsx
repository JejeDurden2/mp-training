import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function GlassCard({
  children,
  className,
  hover = true,
  padding = 'md',
}: GlassCardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-12',
  };

  return (
    <div
      className={cn(
        'glass-card rounded-2xl',
        hover && 'hover:border-mp-neon/50 hover:shadow-neon/20',
        paddingStyles[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}

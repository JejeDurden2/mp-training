import Link from 'next/link';

interface BreadcrumbsProps {
  pageName: string;
}

export function Breadcrumbs({ pageName }: BreadcrumbsProps) {
  return (
    <nav aria-label="Fil d'Ariane" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 font-body text-sm text-mp-white/50">
        <li>
          <Link href="/" className="transition-colors hover:text-mp-neon">
            Accueil
          </Link>
        </li>
        <li aria-hidden="true" className="text-mp-white/30">
          /
        </li>
        <li>
          <Link href="/coaching" className="transition-colors hover:text-mp-neon">
            Coaching
          </Link>
        </li>
        <li aria-hidden="true" className="text-mp-white/30">
          /
        </li>
        <li>
          <span className="text-mp-white/70">{pageName}</span>
        </li>
      </ol>
    </nav>
  );
}

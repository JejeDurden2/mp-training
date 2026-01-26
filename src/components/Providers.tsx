'use client';

import { type ReactNode } from 'react';
import { PhoneModalProvider } from '@/components/ui/PhoneModal';

export function Providers({ children }: { children: ReactNode }) {
  return <PhoneModalProvider>{children}</PhoneModalProvider>;
}

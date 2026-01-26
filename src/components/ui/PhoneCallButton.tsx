'use client';

import { type ReactNode } from 'react';
import { usePhoneModal } from '@/components/ui/PhoneModal';
import { Button } from '@/components/ui/Button';

interface PhoneCallButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: ReactNode;
}

export function PhoneCallButton({
  variant = 'primary',
  size = 'lg',
  className,
  children,
}: PhoneCallButtonProps) {
  const { openPhoneModal } = usePhoneModal();

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={openPhoneModal}
    >
      {children}
    </Button>
  );
}

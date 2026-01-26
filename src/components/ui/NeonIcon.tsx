import {
  User,
  UserPlus,
  Users,
  Activity,
  Phone,
  MapPin,
  Clock,
  Dumbbell,
  Instagram,
  ChevronDown,
  Menu,
  X,
  Mail,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  user: User,
  'user-plus': UserPlus,
  users: Users,
  activity: Activity,
  phone: Phone,
  'map-pin': MapPin,
  clock: Clock,
  dumbbell: Dumbbell,
  instagram: Instagram,
  'chevron-down': ChevronDown,
  menu: Menu,
  x: X,
  mail: Mail,
};

interface NeonIconProps {
  name: string;
  size?: number;
  className?: string;
  glow?: boolean;
  pulse?: boolean;
}

export function NeonIcon({
  name,
  size = 24,
  className,
  glow = true,
  pulse = false,
}: NeonIconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      className={cn(
        'text-mp-neon transition-all duration-300',
        glow && 'neon-icon',
        pulse && 'animate-pulse-neon',
        className,
      )}
    />
  );
}

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
  ClipboardList,
  Timer,
  GraduationCap,
  Heart,
  PiggyBank,
  Zap,
  Trophy,
  Shield,
  Apple,
  AlertTriangle,
  Target,
  RotateCcw,
  HelpCircle,
  BatteryLow,
  Lock,
  TrendingUp,
  TrendingDown,
  Eye,
  Medal,
  BookOpen,
  Calendar,
  Utensils,
  Brain,
  AlertCircle,
  Monitor,
  Map,
  ChevronRight,
  Star,
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
  'clipboard-list': ClipboardList,
  timer: Timer,
  'graduation-cap': GraduationCap,
  heart: Heart,
  'piggy-bank': PiggyBank,
  zap: Zap,
  trophy: Trophy,
  shield: Shield,
  apple: Apple,
  'alert-triangle': AlertTriangle,
  target: Target,
  'rotate-ccw': RotateCcw,
  'help-circle': HelpCircle,
  'battery-low': BatteryLow,
  lock: Lock,
  'trending-up': TrendingUp,
  'trending-down': TrendingDown,
  eye: Eye,
  medal: Medal,
  'book-open': BookOpen,
  calendar: Calendar,
  utensils: Utensils,
  brain: Brain,
  'alert-circle': AlertCircle,
  monitor: Monitor,
  map: Map,
  'chevron-right': ChevronRight,
  star: Star,
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
